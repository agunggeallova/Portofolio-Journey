import { NextResponse } from "next/server";

const CHAINS = { ethereum: "ethereum", bsc: "bsc", polygon: "polygon", arbitrum: "arbitrum", base: "base", avalanche: "avalanche" };

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");
  const chain = searchParams.get("chain") || "ethereum";
  if (!/^0x[a-fA-F0-9]{40}$/.test(address || "") || !CHAINS[chain]) {
    return NextResponse.json({ error: "Permintaan tidak valid." }, { status: 400 });
  }
  try {
    const api = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${address}`);
    const data = await api.json();
    const pairs = (data.pairs || [])
      .filter((pair) => pair.chainId === CHAINS[chain])
      .sort((a, b) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0));
    return NextResponse.json(
      { pair: pairs[0] || null },
      { headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=120" } }
    );
  } catch {
    return NextResponse.json({ error: "DexScreener tidak dapat dihubungi." }, { status: 502 });
  }
}
