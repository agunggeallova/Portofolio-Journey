export default async function handler(request, response) {
  const { chainId = '1', sellToken, buyToken, sellAmount, taker } = request.query;
  if (!['1', '137', '56', '42161', '8453'].includes(String(chainId))) return response.status(400).json({ error: 'Network belum didukung oleh CikSwap.' });
  if (!sellToken || !buyToken || !sellAmount || !taker) return response.status(400).json({ error: 'Parameter quote belum lengkap.' });
  if (!process.env.ZEROX_API_KEY) return response.status(503).json({ error: 'ZEROX_API_KEY belum diatur pada Vercel.' });
  try {
    const qs = new URLSearchParams({ chainId, sellToken, buyToken, sellAmount, taker });
    const api = await fetch(`https://api.0x.org/swap/allowance-holder/quote?${qs}`, { headers: { '0x-api-key': process.env.ZEROX_API_KEY, '0x-version': 'v2' } });
    const payload = await api.json();
    if (!api.ok) return response.status(api.status).json({ error: payload.reason || payload.validationErrors?.[0]?.reason || 'Quote tidak tersedia.' });
    response.setHeader('Cache-Control', 'no-store');
    return response.status(200).json(payload);
  } catch { return response.status(502).json({ error: 'Aggregator quote tidak dapat dihubungi.' }); }
}
