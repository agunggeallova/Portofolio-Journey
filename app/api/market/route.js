import { NextResponse } from "next/server";

export const maxDuration = 10;

export async function GET(request) {
  if (!process.env.CMC_API_KEY) {
    return NextResponse.json({ error: "CMC_API_KEY belum diatur." }, { status: 503 });
  }
  const { searchParams } = new URL(request.url);
  const limit = Math.min(Math.max(Number(searchParams.get("limit")) || 100, 1), 200);
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
