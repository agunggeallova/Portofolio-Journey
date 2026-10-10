import { NextResponse } from "next/server";

export const maxDuration = 10;

/*
  Per-IP fixed-window limiter, in-memory. Serverless instances don't share
  state, so this is a soft cap — but it's enough to blunt the abuse case that
  matters here: a scraper walking `limit` values to burn the CoinMarketCap
  quota behind this route. A real distributed limiter (Upstash) belongs here
  if the site ever gets meaningful traffic.
*/
const WINDOW_MS = 60_000;
const MAX_HITS = 30;
const hits = new Map();

function overLimit(ip) {
  const now = Date.now();
  if (hits.size > 5000) {
    for (const [key, entry] of hits) {
      if (now - entry.start > WINDOW_MS) hits.delete(key);
    }
  }
  let entry = hits.get(ip);
  if (!entry || now - entry.start > WINDOW_MS) {
    entry = { start: now, count: 0 };
    hits.set(ip, entry);
  }
  entry.count += 1;
  return entry.count > MAX_HITS;
}

export async function GET(request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (overLimit(ip)) {
    return NextResponse.json(
      { error: "Terlalu banyak permintaan. Coba lagi sebentar." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  if (!process.env.CMC_API_KEY) {
    return NextResponse.json({ error: "CMC_API_KEY belum diatur." }, { status: 503 });
  }

  const { searchParams } = new URL(request.url);
  // Snap to a small set of values rather than accepting 1..200: each distinct
  // `limit` was a separate cache key, so free-form input let one caller fork
  // the cache and bypass the CDN's 60s shield entirely.
  const requested = Number(searchParams.get("limit")) || 100;
  const limit = [25, 50, 100].reduce((best, n) =>
    Math.abs(n - requested) < Math.abs(best - requested) ? n : best
  );
  try {
    const api = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${limit}&convert=USD`,
      { headers: { "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY } }
    );
    const result = await api.json();
    if (!api.ok) {
      return NextResponse.json(
        { error: result.status?.error_message || "CoinMarketCap menolak permintaan." },
        { status: api.status }
      );
    }
    return NextResponse.json(
      { data: result.data },
      { headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=120" } }
    );
  } catch {
    return NextResponse.json({ error: "Tidak dapat terhubung ke CoinMarketCap." }, { status: 502 });
  }
}
