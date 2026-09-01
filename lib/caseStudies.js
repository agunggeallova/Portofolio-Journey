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
      category: "CRYPTO EXCHANGE · PRODUCT · OPERATIONS",
      tagline: "Crypto exchange product and operations.",
      overview:
        "PLUBIT is a crypto exchange. My work covers product development and exchange operations — white-label setup, platform and app configuration, UI/UX, feature testing before release, and the daily operational flows that keep the exchange running.",
      context:
        "An exchange has to be stood up before it can be improved, and kept running once it is. That splits the work in two: configuring and preparing the platform on one side, and monitoring what happens on it day to day on the other. Most of what I do sits across that line rather than on one side of it.",
      worked: [
        {
          title: "WHITE-LABEL EXCHANGE",
          desc: "End-to-end white-label exchange setup, including platform configuration, branding implementation, UI adjustments, application configuration, and production preparation.",
        },
        {
          title: "PRODUCT & UI/UX",
          desc: "Improving exchange interfaces and user journeys while designing required visual assets such as platform icons, feature graphics, banners, and supporting UI elements.",
        },
        {
          title: "FEATURE TESTING",
          desc: "Testing exchange features before release, checking functionality, identifying issues, validating user flows, and coordinating improvements.",
        },
        {
          title: "EXCHANGE OPERATIONS",
          desc: "Monitoring cryptocurrency deposit and withdrawal activity as part of daily exchange operations and ensuring operational flows function correctly.",
        },
        {
          title: "BROKER SYSTEM",
          desc: "Supporting the setup and development of the Broker Panel and related broker infrastructure.",
        },
        {
          title: "MARKET MAKER",
          desc: "Supporting Market Maker (MM) setup and operational configuration for exchange markets.",
        },
      ],
      approach: [
        "Configure and prepare the platform first — branding, UI and application settings — so what ships is production-ready rather than patched afterwards.",
        "Test features before release: check functionality, walk the user flows, log what breaks, then coordinate the fixes.",
        "Watch the daily flows. Deposit and withdrawal activity is where operational problems surface first.",
      ],
      stack: [
        "Product",
        "Exchange Operations",
        "UI/UX",
        "White Label",
        "Testing",
        "Broker Systems",
        "Market Maker",
      ],
      links: [],
    },
    id: {
      name: "PLUBIT",
      category: "CRYPTO EXCHANGE · PRODUK · OPERASIONAL",
      tagline: "Produk dan operasional crypto exchange.",
      overview:
        "PLUBIT adalah crypto exchange. Pekerjaan saya mencakup pengembangan produk dan operasional exchange — setup white-label, konfigurasi platform dan aplikasi, UI/UX, pengujian fitur sebelum rilis, serta alur operasional harian yang menjaga exchange tetap berjalan.",
      context:
        "Sebuah exchange harus dibangun dulu sebelum bisa diperbaiki, dan dijaga setelah berjalan. Itu membelah pekerjaannya jadi dua: menyiapkan dan mengonfigurasi platform di satu sisi, dan memantau apa yang terjadi di dalamnya setiap hari di sisi lain. Sebagian besar yang saya kerjakan berada di antara keduanya.",
      worked: [
        {
          title: "WHITE-LABEL EXCHANGE",
          desc: "Setup white-label exchange dari hulu ke hilir, mencakup konfigurasi platform, penerapan branding, penyesuaian UI, konfigurasi aplikasi, dan persiapan menuju produksi.",
        },
        {
          title: "PRODUK & UI/UX",
          desc: "Memperbaiki antarmuka dan user journey exchange sekaligus merancang aset visual yang dibutuhkan seperti ikon platform, grafis fitur, banner, dan elemen UI pendukung.",
        },
        {
          title: "PENGUJIAN FITUR",
          desc: "Menguji fitur exchange sebelum rilis, memeriksa fungsionalitas, menemukan masalah, memvalidasi alur pengguna, dan mengoordinasikan perbaikan.",
        },
        {
          title: "OPERASIONAL EXCHANGE",
          desc: "Memantau aktivitas deposit dan withdrawal kripto sebagai bagian dari operasional harian exchange serta memastikan alur operasionalnya berjalan benar.",
        },
        {
          title: "SISTEM BROKER",
          desc: "Mendukung setup dan pengembangan Broker Panel beserta infrastruktur broker terkait.",
        },
        {
          title: "MARKET MAKER",
          desc: "Mendukung setup Market Maker (MM) dan konfigurasi operasionalnya untuk market di exchange.",
        },
      ],
      approach: [
        "Menyiapkan dan mengonfigurasi platform lebih dulu — branding, UI, dan pengaturan aplikasi — agar yang dirilis memang siap produksi, bukan ditambal belakangan.",
        "Menguji fitur sebelum rilis: memeriksa fungsionalitas, menelusuri alur pengguna, mencatat yang rusak, lalu mengoordinasikan perbaikannya.",
        "Memantau alur harian. Aktivitas deposit dan withdrawal adalah tempat masalah operasional paling dulu terlihat.",
      ],
      stack: [
        "Produk",
        "Operasional Exchange",
        "UI/UX",
        "White Label",
        "Pengujian",
        "Sistem Broker",
        "Market Maker",
      ],
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
