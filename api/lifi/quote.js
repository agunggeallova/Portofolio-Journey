export default async function handler(request, response) {
  const { fromChain, toChain, fromToken, toToken, fromAmount, fromAddress } = request.query;
  if (![fromChain, toChain, fromToken, toToken, fromAmount, fromAddress].every(Boolean)) return response.status(400).json({ error: 'Parameter quote belum lengkap.' });
  if (!process.env.LIFI_API_KEY) return response.status(503).json({ error: 'LIFI_API_KEY belum diatur pada Vercel.' });
  try {
    const query = new URLSearchParams({ fromChain, toChain, fromToken, toToken, fromAmount, fromAddress });
    const api = await fetch(`https://li.quest/v1/quote?${query}`, { headers: { 'x-lifi-api-key': process.env.LIFI_API_KEY } });
    const body = await api.json();
    if (!api.ok) return response.status(api.status).json({ error: body.message || body.detail || 'LI.FI tidak menemukan route.' });
    response.setHeader('Cache-Control', 'no-store'); return response.status(200).json(body);
  } catch { return response.status(502).json({ error: 'LI.FI quote tidak dapat dihubungi.' }); }
}
