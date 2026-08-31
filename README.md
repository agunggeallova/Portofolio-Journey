# Bagas Ady — Portfolio

Landing page dibangun dengan **Next.js** (di `app/`, termasuk endpoint API di `app/api/`). Halaman `market.html`, `scanner.html`, dan file statis lain disajikan apa adanya dari folder `public/`.

## Menjalankan secara lokal

1. `npm install`
2. `npm run dev` lalu buka `http://localhost:3000`.
3. `npm run build` untuk build production.

## Market Terminal (CoinMarketCap)

`market.html` menggunakan endpoint aman `app/api/market/route.js`, bukan API key di browser. Deploy ke Vercel lalu buat environment variable `CMC_API_KEY` pada **Project Settings → Environment Variables** dengan key CoinMarketCap Anda. Setelah redeploy, halaman Market akan memuat harga token terbaru. File HTML yang dibuka langsung tidak dapat menjalankan endpoint `/api/market`.
