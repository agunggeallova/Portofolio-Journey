/*
  Case study content, keyed by slug and language.

  Deliberately written around responsibilities and output. No user counts,
  volumes, revenue or growth percentages appear anywhere — those numbers
  aren't verified, and inventing them would undermine everything else here.
*/

import { mediumUrl } from "./site";

export const caseStudies = {
  plubit: {
    en: {
      name: "PLUBIT",
      category: "CRYPTO EXCHANGE · PRODUCT · GROWTH",
      tagline: "Shaping the product experience and educational ecosystem of a crypto exchange.",
      overview:
        "PLUBIT is a crypto exchange and Web3 ecosystem. I work across its product surfaces, educational content, localization, and growth initiatives — the parts that decide whether someone new to trading can actually find their way around.",
      context:
        "An exchange is a wide product. Spot, futures, copy trading, staking, launchpad, earn and a token ecosystem all live under one roof, and each one carries its own vocabulary. A lot of the work is making that surface understandable without stripping out what advanced users need.",
      worked: [
        "Product structure and exchange UI/UX",
        "PLB token ecosystem and staking",
        "Spot, futures and copy trading surfaces",
        "Broker program, Task Center, VIP and Earn",
        "Launchpad and listing campaigns",
        "Exchange education and crypto onboarding content",
        "Localization and multi-language content",
        "Marketing assets and growth initiatives",
        "AI bot concept and product improvement ideas",
      ],
      approach: [
        "Use the product the way a new user would, then note every point where it stops being obvious.",
        "Turn those friction points into either a product change or an educational piece, depending on which one actually solves it.",
        "Write the education in plain language — order types, candlesticks, order books, liquidity, slippage, KYC and 2FA all get explained without assuming prior knowledge.",
        "Localize rather than translate, so the wording matches how people actually talk about trading in each market.",
      ],
      stack: ["Product Thinking", "UI/UX", "Content Strategy", "Localization", "Growth", "Web3"],
      links: [],
    },
    id: {
      name: "PLUBIT",
      category: "CRYPTO EXCHANGE · PRODUK · GROWTH",
      tagline: "Membentuk pengalaman produk dan ekosistem edukasi sebuah crypto exchange.",
      overview:
        "PLUBIT adalah crypto exchange dan ekosistem Web3. Saya bekerja di area produk, konten edukasi, lokalisasi, dan inisiatif growth — bagian yang menentukan apakah orang baru di trading bisa benar-benar menemukan jalannya.",
      context:
        "Exchange adalah produk yang luas. Spot, futures, copy trading, staking, launchpad, earn, dan ekosistem token berada di satu atap, masing-masing dengan istilahnya sendiri. Banyak pekerjaannya adalah membuat permukaan itu bisa dipahami tanpa menghilangkan yang dibutuhkan pengguna lanjutan.",
      worked: [
        "Struktur produk dan UI/UX exchange",
        "Ekosistem token PLB dan staking",
        "Area spot, futures, dan copy trading",
        "Broker program, Task Center, VIP, dan Earn",
        "Launchpad dan campaign listing",
        "Edukasi exchange dan konten onboarding kripto",
        "Lokalisasi dan konten multi-bahasa",
        "Materi marketing dan inisiatif growth",
        "Konsep AI bot dan ide perbaikan produk",
      ],
      approach: [
        "Memakai produknya seperti pengguna baru, lalu mencatat setiap titik di mana ia berhenti terasa jelas.",
        "Mengubah titik gesekan itu jadi perubahan produk atau materi edukasi, tergantung mana yang benar-benar menyelesaikannya.",
        "Menulis edukasinya dengan bahasa sederhana — order type, candlestick, order book, likuiditas, slippage, KYC, dan 2FA dijelaskan tanpa mengasumsikan pengetahuan sebelumnya.",
        "Melokalkan, bukan sekadar menerjemahkan, agar bahasanya sesuai cara orang membicarakan trading di tiap pasar.",
      ],
      stack: ["Product Thinking", "UI/UX", "Strategi Konten", "Lokalisasi", "Growth", "Web3"],
      links: [],
    },
  },

  paio: {
    en: {
      name: "PAIO COMMUNITY",
      category: "WEB3 COMMUNITY · PARTNERSHIPS",
      tagline: "A Web3 community built around ecosystem discovery and real collaboration.",
      overview:
        "Paio Community is a Web3 community I build and run. It focuses on ecosystem discovery, partnerships, and giving projects genuine exposure to an audience that actually shows up.",
      context:
        "Plenty of Web3 communities exist to farm attention. The harder and more useful version is a community where members find protocols worth their time, and where projects reach people who will genuinely try what they've built.",
      worked: [
        "Community building and day-to-day operations",
        "Partnership outreach with Web3 projects",
        "Strategic collaborations between projects and the community",
        "Community campaigns and project exposure",
        "Web3 ecosystem exploration with members",
      ],
      approach: [
        "Treat partnerships as a two-way trade: the project gets a real audience, the community gets something worth exploring.",
        "Vet what gets shared. Volume is easy; being a filter people trust is the part that takes work.",
        "Run campaigns that give members a reason to actually use a protocol, not just react to a post.",
      ],
      stack: ["Community", "Partnerships", "Campaigns", "Growth", "Web3"],
      links: [],
    },
    id: {
      name: "PAIO COMMUNITY",
      category: "KOMUNITAS WEB3 · PARTNERSHIP",
      tagline: "Komunitas Web3 yang dibangun di sekitar eksplorasi ekosistem dan kolaborasi nyata.",
      overview:
        "Paio Community adalah komunitas Web3 yang saya bangun dan jalankan. Fokusnya pada eksplorasi ekosistem, partnership, dan memberi proyek exposure yang nyata ke audiens yang benar-benar hadir.",
      context:
        "Banyak komunitas Web3 ada untuk memanen atensi. Versi yang lebih sulit dan lebih berguna adalah komunitas di mana anggotanya menemukan protokol yang layak dicoba, dan proyek menjangkau orang yang benar-benar akan mencobanya.",
      worked: [
        "Community building dan operasional harian",
        "Partnership outreach dengan proyek Web3",
        "Kolaborasi strategis antara proyek dan komunitas",
        "Campaign komunitas dan exposure proyek",
        "Eksplorasi ekosistem Web3 bersama anggota",
      ],
      approach: [
        "Memperlakukan partnership sebagai pertukaran dua arah: proyek dapat audiens nyata, komunitas dapat sesuatu yang layak dieksplorasi.",
        "Menyaring apa yang dibagikan. Kuantitas itu mudah; menjadi filter yang dipercaya orang butuh kerja.",
        "Menjalankan campaign yang memberi anggota alasan untuk benar-benar memakai sebuah protokol, bukan sekadar bereaksi pada postingan.",
      ],
      stack: ["Komunitas", "Partnership", "Campaign", "Growth", "Web3"],
      links: [],
    },
  },
};

// Research links out to Medium rather than getting its own page.
export const researchLink = mediumUrl;

export const caseStudySlugs = Object.keys(caseStudies);
