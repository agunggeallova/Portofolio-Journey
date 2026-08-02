export default async function handler(request, response) {
  const { chainId = '1', sellToken, buyToken, sellAmount, taker } = request.query;
  if (!['1', '137', '56', '42161', '8453'].includes(String(chainId))) return response.status(400).json({ error: 'Network belum didukung oleh CikSwap.' });
  if (!sellToken || !buyToken || !sellAmount) return response.status(400).json({ error: 'Parameter quote belum lengkap.' });
  if (!process.env.ZEROX_API_KEY) return response.status(503).json({ error: 'ZEROX_API_KEY belum diatur pada Vercel.' });
  try {
    // 0x validates the native-token sentinel strictly; normalize it and all token addresses.
    const baseParams = { chainId, sellToken: sellToken.toLowerCase(), buyToken: buyToken.toLowerCase(), sellAmount };
    // Permit2 is used on Ethereum; 0x Allowance Holder supports the other EVM routes.
    const route = String(chainId) === '1' ? 'permit2' : 'allowance-holder';
    const headers = { '0x-api-key': process.env.ZEROX_API_KEY, '0x-version': 'v2' };
    let api = await fetch(`https://api.0x.org/swap/${route}/quote?${new URLSearchParams({ ...baseParams, ...(taker ? { taker } : {}) })}`, { headers });
    let payload = await api.json();
    // Some wallet providers expose smart-account addresses rejected by a route. Retry for an indicative quote.
    if (!api.ok && taker && /input is invalid/i.test(payload.reason || payload.message || '')) {
      api = await fetch(`https://api.0x.org/swap/${route}/quote?${new URLSearchParams(baseParams)}`, { headers });
      payload = await api.json();
      if (api.ok) payload.cikSwapQuoteOnly = true;
    }
    if (!api.ok) return response.status(api.status).json({ error: payload.reason || payload.validationErrors?.[0]?.reason || payload.message || `0x API error (${api.status})` });
    response.setHeader('Cache-Control', 'no-store');
    return response.status(200).json(payload);
  } catch { return response.status(502).json({ error: 'Aggregator quote tidak dapat dihubungi.' }); }
}
