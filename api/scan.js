const CHAINS = { ethereum: '1', bsc: '56', polygon: '137', arbitrum: '42161', base: '8453', avalanche: '43114' };
export default async function handler(request, response) {
  const { address, chain = 'ethereum' } = request.query;
  if (!/^0x[a-fA-F0-9]{40}$/.test(address || '')) return response.status(400).json({ error: 'Alamat contract EVM tidak valid.' });
  if (!CHAINS[chain]) return response.status(400).json({ error: 'Network belum didukung.' });
  try {
    const result = await fetch(`https://api.gopluslabs.io/api/v1/token_security/${CHAINS[chain]}?contract_addresses=${address}`);
    const payload = await result.json();
    const token = payload.result?.[address.toLowerCase()] || payload.result?.[address];
    if (!result.ok || !token) return response.status(502).json({ error: payload.message || 'Data contract tidak tersedia.' });
    response.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=300');
    return response.status(200).json({ data: token });
  } catch { return response.status(502).json({ error: 'Layanan security scan tidak dapat dihubungi.' }); }
}
