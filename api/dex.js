const CHAINS = { ethereum: 'ethereum', bsc: 'bsc', polygon: 'polygon', arbitrum: 'arbitrum', base: 'base', avalanche: 'avalanche' };
export default async function handler(request, response) {
  const { address, chain = 'ethereum' } = request.query;
  if (!/^0x[a-fA-F0-9]{40}$/.test(address || '') || !CHAINS[chain]) return response.status(400).json({ error: 'Permintaan tidak valid.' });
  try {
    const api = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${address}`);
    const data = await api.json();
    const pairs = (data.pairs || []).filter(pair => pair.chainId === CHAINS[chain]).sort((a, b) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0));
    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
    return response.status(200).json({ pair: pairs[0] || null });
  } catch { return response.status(502).json({ error: 'DexScreener tidak dapat dihubungi.' }); }
}
