export const config = { maxDuration: 10 };

export default async function handler(request, response) {
  if (!process.env.CMC_API_KEY) return response.status(503).json({ error: 'CMC_API_KEY belum diatur.' });
  const limit = Math.min(Math.max(Number(request.query.limit) || 100, 1), 200);
  try {
    const api = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${limit}&convert=USD`, { headers: { 'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY } });
    const result = await api.json();
    if (!api.ok) return response.status(api.status).json({ error: result.status?.error_message || 'CoinMarketCap menolak permintaan.' });
    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
    return response.status(200).json({ data: result.data });
  } catch { return response.status(502).json({ error: 'Tidak dapat terhubung ke CoinMarketCap.' }); }
}
