# Bagas Ady — Portfolio & Journal

Portfolio statis dengan blog Supabase. Blog publik ada di `blog.html`; panel penulis di `admin.html`.

## Menghubungkan Supabase

1. Buat project baru di [Supabase](https://supabase.com/dashboard), lalu buka **SQL Editor**.
2. Salin seluruh isi `supabase/schema.sql`, lalu klik **Run**.
3. Buka **Authentication → Providers → Email**, dan nonaktifkan *Allow new users to sign up*. Ini membuat panel hanya bisa dipakai akun Anda.
4. Di **Authentication → Users**, buat satu user dengan email serta password pilihan Anda.
5. Salin UUID user tersebut, lalu jalankan query terakhir yang dicontohkan pada `schema.sql` untuk memberinya peran admin.
6. Buka **Project Settings → API**, lalu salin **Project URL** dan **anon public key** ke `supabase.js`.
7. Buka `admin.html`, login dengan akun tadi, dan buat artikel pertama Anda.

`anon public key` aman dipakai di website. Jangan pernah memasukkan `service_role key` ke frontend atau GitHub.

## Market Terminal (CoinMarketCap)

`market.html` menggunakan endpoint aman `api/market.js`, bukan API key di browser. Deploy ke Vercel lalu buat environment variable `CMC_API_KEY` pada **Project Settings → Environment Variables** dengan key CoinMarketCap Anda. Setelah redeploy, halaman Market akan memuat harga token terbaru. File HTML yang dibuka langsung tidak dapat menjalankan endpoint `/api/market`.

## Penggunaan

- Artikel **DRAFT** hanya terlihat di panel Anda.
- Artikel **PUBLISHED** otomatis muncul di `blog.html`.
- Cover yang diunggah masuk ke bucket `post-covers`.
- Editor saat ini memakai teks biasa, sehingga aman dan mudah; baris baru akan muncul sebagai paragraf di artikel.
