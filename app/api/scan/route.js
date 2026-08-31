import { NextResponse } from "next/server";

const CHAINS = { ethereum: "1", bsc: "56", polygon: "137", arbitrum: "42161", base: "8453", avalanche: "43114" };

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");
  const chain = searchParams.get("chain") || "ethereum";
  if (!/^0x[a-fA-F0-9]{40}$/.test(address || "")) {
    return NextResponse.json({ error: "Alamat contract EVM tidak valid." }, { status: 400 });
  }
  if (!CHAINS[chain]) {
    return NextResponse.json({ error: "Network belum didukung." }, { status: 400 });
  }
  try {
    const result = await fetch(
      `https://api.gopluslabs.io/api/v1/token_security/${CHAINS[chain]}?contract_addresses=${address}`
    );
    const payload = await result.json();
    const token = payload.result?.[address.toLowerCase()] || payload.result?.[address];
    if (!result.ok || !token) {
      return NextResponse.json({ error: payload.message || "Data contract tidak tersedia." }, { status: 502 });
    }
    return NextResponse.json(
      { data: token },
      { headers: { "Cache-Control": "s-maxage=120, stale-while-revalidate=300" } }
    );
  } catch {
    return NextResponse.json({ error: "Layanan security scan tidak dapat dihubungi." }, { status: 502 });
  }
}
