/*
  All localized copy lives here so components stay presentational and the
  EN/ID toggle can't fall out of sync. Identity and outbound URLs are in
  lib/site.js — nothing user-facing should hardcode a link.
*/

export const translations = {
  en: {
    nav: {
      about: "About",
      work: "Work",
      experience: "Experience",
      writing: "Writing",
      lab: "Lab",
      contact: "Contact",
      availability: "OPEN FOR COLLABORATION",
      menuLabel: "Toggle menu",
    },

    hero: {
      eyebrow: "WEB3 · PRODUCT · GROWTH · RESEARCH",
      h1Line1: "BUILDING FOR",
      h1Line2: "THE OPEN WEB.",
      introPre: "I'm ",
      introName: "Bagas Ady Santoso",
      introPost:
        " — a Web3 builder working across growth, product, community, research, and emerging technology.",
      roundLinkLine1: "MORE",
      roundLinkLine2: "ABOUT ME ↓",
      mainnet: "ETHEREUM MAINNET",
      block: "BLOCK",
      gas: "GAS 0.8 GWEI",
      status: "STATUS:",
      synced: "SYNCED",
    },

    ticker: ["GROWTH STRATEGY", "WEB3 PRODUCT", "PROTOCOL RESEARCH", "COMMUNITY & PARTNERSHIPS"],

    about: {
      index: "01",
      eyebrow: "01 / ABOUT",
      headingPre: "Web3 is my foundation. ",
      headingHighlight: "Building",
      headingPost: " is where I'm going.",
      lead: [
        "I got into Web3 in 2021 through community — moderating, running campaigns, and being the person between a project and the people actually using it.",
        "That turned out to be a useful place to start. You learn quickly which ideas hold up and which ones only work in a deck. Over time the work widened: content, then research, then growth, partnerships, localization and market development for the Indonesian audience.",
        "These days I spend most of my time closer to the product itself — exchange UX, token ecosystems, digital platforms, and the automation around them. I still research the same way I always have, by using the thing before writing about it.",
      ],
      pillarsTitle: "WHAT I WORK ON",
      pillars: [
        { icon: "growth", label: "Growth" },
        { icon: "product", label: "Product" },
        { icon: "community", label: "Community" },
        { icon: "research", label: "Research" },
        { icon: "tech", label: "Technology" },
        { icon: "business", label: "Business" },
      ],
      panelsHint: "Tap a card to read more",
      panels: [
        {
          icon: "journey",
          title: "My Journey",
          summary: "Community → content → research → growth → partnerships → product.",
          body: [
            "I started in community management and community building, contributing to Web3 and blockchain projects including PraSaga, Safle, Krystal Wallet, TALAXEUM, Project Larix and Channels.finance.",
            "The scope widened as I went: growth strategy, partnerships, localized marketing, market expansion, AMAs and community events, advocacy, and strategic collaboration — mostly focused on developing the Indonesian market.",
            "Writing came next. I've published as an author at Cryptoiz Research and InCrypto School, then independently on Medium.",
          ],
        },
        {
          icon: "product",
          title: "What I Do Today",
          summary: "Web3 product, exchange ecosystems, community, and digital business.",
          body: [
            "Most of my focus sits on Web3 product and digital business. I work across the PLUBIT Exchange ecosystem — product structure and UI/UX, the PLB token ecosystem, trading and earn surfaces, plus the educational content that helps people understand what they're using.",
            "Alongside that I build Paio Community, a Web3 community focused on partnerships, collaboration, and giving projects real exposure.",
            "Outside Web3 I build websites for other businesses — June Grafika in printing and custom packaging, and Gayain Nusantara, a travel platform — handling the site itself and the UI/UX around it.",
          ],
        },
        {
          icon: "tech",
          title: "Technology & Automation",
          summary: "Bots, scripts, and AI tooling — usually built to remove manual work.",
          body: [
            "I don't position myself as a pure software engineer, but I do build. Telegram bots, Google Apps Script automation, AI message parsing, webhooks, Google Sheets automation, and OpenRouter AI integration.",
            "On the web side: WordPress, Elementor and WooCommerce, custom plugin development, and API integrations.",
            "I've also been developing Shiro, a personal AI assistant concept that handles everyday tasks through voice and automation.",
          ],
        },
        {
          icon: "research",
          title: "How I Work",
          summary: "Research → understand → build → test → improve → grow.",
          body: [
            "I don't like writing about things I haven't used. Documentation tells you what a product claims to do; using it tells you what it's actually like.",
            "I lean practical. I'd rather ship something rough and improve it than plan something perfect that never gets built.",
            "Research gives me the map. Building gives me the truth. Growth is what happens when the two line up.",
          ],
        },
      ],
      tagline: "Research. Build. Connect. Grow.",
      stats: [
        { value: "5+", label: "Years in Web3" },
        { value: "2021", label: "Journey Started" },
        { value: "10", label: "Projects Contributed To" },
      ],
    },

    work: {
      eyebrow: "02 / SELECTED WORK",
      headingPre: "Things I've ",
      headingHighlight: "helped build.",
      headingPost: "",
      intro: "A few projects that show the range — product, community, and research.",
      contributionLabel: "MY CONTRIBUTION",
      projects: [
        {
          slug: "plubit",
          name: "PLUBIT",
          category: "CRYPTO EXCHANGE · PRODUCT · GROWTH",
          description:
            "Helping shape the product experience, educational ecosystem, localization, and growth of a crypto exchange.",
          contribution:
            "Product structure and exchange UI/UX, the PLB token ecosystem, trading and earn surfaces, multi-language content, and listing and growth campaigns.",
          tags: ["Product", "Growth", "UI/UX", "Content", "Localization"],
          cta: "VIEW CASE STUDY",
          href: "/work/plubit",
        },
        {
          slug: "paio",
          name: "PAIO COMMUNITY",
          category: "WEB3 COMMUNITY · PARTNERSHIPS",
          description:
            "Building a Web3 community focused on ecosystem discovery, strategic collaborations, partnerships, and community-led growth.",
          contribution:
            "Community building, partnership outreach, campaigns, and connecting Web3 projects with an engaged audience.",
          tags: ["Community", "Partnerships", "Growth", "Web3"],
          cta: "VIEW CASE STUDY",
          href: "/work/paio",
        },
        {
          slug: "research",
          name: "WEB3 RESEARCH",
          category: "RESEARCH · WRITING · EDUCATION",
          description:
            "Researching, testing, and writing about emerging blockchain ecosystems, protocols, infrastructure, and Web3 products.",
          contribution:
            "Author at Cryptoiz Research and InCrypto School, plus independent writing covering DeFi, zero knowledge, Layer 1 to Layer 3, and ecosystem deep dives.",
          tags: ["Research", "Writing", "DeFi", "Education"],
          cta: "READ RESEARCH",
          href: "https://medium.com/@bagasady",
          external: true,
        },
        {
          slug: "web-projects",
          name: "WEB PROJECTS",
          category: "WEB DEVELOPMENT · UI/UX · BEYOND WEB3",
          description:
            "Websites built for businesses outside Web3: June Grafika in printing and custom packaging, and Gayain Nusantara, a travel platform.",
          contribution:
            "Website development and UI/UX — site structure, page layout, content presentation, and the booking flow for Gayain Nusantara.",
          tags: ["Web Dev", "UI/UX", "Website"],
          cta: "VISIT GAYAIN NUSANTARA",
          href: "https://gayainnusantara.id",
          external: true,
        },
      ],
    },

    experience: {
      eyebrow: "03 / EXPERIENCE",
      headingPre: "Where I've ",
      headingHighlight: "worked.",
      headingPost: "",
      roles: [
        {
          date: "FEB 2025\nJUL 2026",
          title: "PraSaga Foundation",
          role: "Community Growth",
          desc: "Led community growth for the Indonesian market through localized campaigns, partnerships, AMAs, events, and strategic collaborations.",
          tags: ["Community Growth", "Indonesia", "Partnerships", "Localization"],
        },
        {
          date: "AUG 2024\nFEB 2025",
          title: "Safle",
          role: "Moderator",
          desc: "Kept community conversations healthy and informative, supporting users and bringing their feedback back to the team.",
          tags: ["Community", "Support", "Web3"],
        },
        {
          date: "APR 2023\nFEB 2025",
          title: "Krystal Wallet",
          role: "Advocate",
          desc: "Connected a DeFi wallet with new users through advocacy, education, and community engagement.",
          tags: ["DeFi", "Advocacy", "Education"],
        },
        {
          date: "JAN 2023\nFEB 2025",
          title: "Cryptoiz Research",
          role: "Author",
          desc: "Wrote research and educational pieces covering protocols, ecosystems, and the wider crypto landscape.",
          tags: ["Research", "Writing", "Education"],
        },
        {
          date: "2021\n2023",
          title: "TALAXEUM, Larix & Channels",
          role: "Community Manager",
          desc: "Early Web3 work managing and growing communities across several projects.",
          tags: ["Community", "Web3", "Growth"],
        },
      ],
    },

    capabilities: {
      eyebrow: "04 / CAPABILITIES",
      headingPre: "What I bring to ",
      headingHighlight: "the table.",
      headingPost: "",
      groups: [
        {
          icon: "growth",
          title: "Growth",
          desc: "Taking a product to a market and building the momentum around it.",
          items: [
            "Community Strategy",
            "Market Expansion",
            "Partnerships",
            "Campaign Strategy",
            "Localization",
            "Community Operations",
          ],
        },
        {
          icon: "product",
          title: "Product",
          desc: "Looking at usability, hierarchy, and user behaviour — not only aesthetics.",
          items: [
            "Product Thinking",
            "UI/UX Perspective",
            "User Journey",
            "Product Research",
            "Feature Ideation",
            "Digital Experience",
          ],
        },
        {
          icon: "research",
          title: "Research",
          desc: "Turning complex Web3 ideas into clear narratives and educational content.",
          items: [
            "Web3 Research",
            "Protocol Research",
            "Market Research",
            "Blockchain Ecosystems",
            "Educational Content",
            "Technical Research",
          ],
        },
        {
          icon: "tech",
          title: "Build",
          desc: "Shipping small tools and automations that remove repetitive work.",
          items: [
            "AI Automation",
            "Website Development",
            "WordPress",
            "API Integration",
            "Prototyping",
            "Telegram Bots",
            "Google Apps Script",
          ],
        },
      ],
      toolsTitle: "TOOLS",
      tools: ["Figma", "Notion", "Discord", "Telegram", "Canva", "AI Tools", "WordPress"],
    },

    writing: {
      eyebrow: "05 / RESEARCH & WRITING",
      headingPre: "Exploring Web3 ",
      headingHighlight: "by using it.",
      headingPost: "",
      intro:
        "I research protocols, test products and ecosystems, then turn what I learn into accessible writing.",
      topicsTitle: "TOPICS I COVER",
      topics: [
        "DeFi",
        "Layer 1",
        "Layer 2",
        "Layer 3",
        "Zero Knowledge",
        "Ethereum",
        "zkSync",
        "Arbitrum",
        "Taiko",
        "Cosmos",
        "NFT",
        "Testnet",
        "Airdrop",
        "Staking",
        "Launchpad",
        "Infrastructure",
      ],
      publishedTitle: "PUBLISHED AT",
      published: ["Cryptoiz Research", "InCrypto School", "Medium — @bagasady"],
      cta: "VIEW ALL RESEARCH",
    },

    lab: {
      eyebrow: "06 / 0xLAB",
      headingPre: "Experiments and tools ",
      headingHighlight: "I'm building.",
      headingPost: "",
      intro: "Small things I build around Web3 to test ideas and scratch my own itches.",
      stackLabel: "STACK",
      launch: "LAUNCH",
      experiments: [
        {
          index: "EXPERIMENT // 001",
          name: "MARKET TERMINAL",
          category: "MARKET DATA · WEB3 TOOL",
          description:
            "A crypto market interface for exploring live prices, market movements, and trading data.",
          stack: ["CoinMarketCap API", "Serverless"],
          href: "/market.html",
        },
        {
          index: "EXPERIMENT // 002",
          name: "CONTRACT SCANNER",
          category: "ONCHAIN · RISK INTELLIGENCE",
          description:
            "An EVM token scanner that pairs contract risk signals with live decentralized market data.",
          stack: ["GoPlus", "DexScreener", "Serverless"],
          href: "/scanner.html",
        },
      ],
    },

    currently: {
      eyebrow: "07 / CURRENTLY",
      title: "STATUS.LOG",
      log: [
        "researching emerging protocols",
        "building Web3 experiments",
        "exploring AI × automation",
        "improving product experiences",
        "growing communities & ecosystems",
      ],
    },

    contributed: {
      eyebrow: "CONTRIBUTED TO",
      note: "Web3 and blockchain projects I've worked with since 2021.",
      items: [
        "PraSaga",
        "Safle",
        "Krystal Wallet",
        "TALAXEUM",
        "Project Larix",
        "Channels.finance",
        "Cryptoiz Research",
        "InCrypto School",
      ],
    },

    contact: {
      eyebrow: "08 / CONTACT",
      headingLine1: "Got something interesting?",
      headingLink: "Let's talk.",
      intro:
        "Open to conversations around Web3 products, growth, communities, partnerships, research, and interesting things being built onchain.",
      openToTitle: "OPEN TO",
      openTo: ["Collaborations", "Web3 Projects", "Partnerships", "Product", "Research"],
      footerRole: "WEB3 · PRODUCT · GROWTH · RESEARCH",
      rights: "All rights reserved.",
    },

    caseStudy: {
      back: "BACK TO WORK",
      sections: {
        overview: "OVERVIEW",
        context: "CONTEXT",
        worked: "WHAT I WORKED ON",
        approach: "APPROACH",
        stack: "SKILLS & TOOLS",
        links: "RELATED LINKS",
      },
      note: "Written from my own contribution. No performance figures are published here.",
    },
  },

  id: {
    nav: {
      about: "Tentang",
      work: "Karya",
      experience: "Pengalaman",
      writing: "Tulisan",
      lab: "Lab",
      contact: "Kontak",
      availability: "TERBUKA UNTUK KOLABORASI",
      menuLabel: "Buka menu",
    },

    hero: {
      eyebrow: "WEB3 · PRODUCT · GROWTH · RESEARCH",
      h1Line1: "BUILDING FOR",
      h1Line2: "THE OPEN WEB.",
      introPre: "Saya ",
      introName: "Bagas Ady Santoso",
      introPost:
        " — Web3 builder yang bergerak di growth, produk, komunitas, riset, dan teknologi baru.",
      roundLinkLine1: "LEBIH",
      roundLinkLine2: "TENTANG SAYA ↓",
      mainnet: "ETHEREUM MAINNET",
      block: "BLOCK",
      gas: "GAS 0.8 GWEI",
      status: "STATUS:",
      synced: "SYNCED",
    },

    ticker: ["GROWTH STRATEGY", "WEB3 PRODUCT", "PROTOCOL RESEARCH", "COMMUNITY & PARTNERSHIPS"],

    about: {
      index: "01",
      eyebrow: "01 / TENTANG",
      headingPre: "Web3 adalah fondasi saya. ",
      headingHighlight: "Membangun",
      headingPost: " adalah arah saya.",
      lead: [
        "Saya masuk Web3 pada 2021 lewat komunitas — jadi moderator, menjalankan campaign, dan berada di antara sebuah proyek dan orang-orang yang benar-benar memakainya.",
        "Ternyata itu titik awal yang berguna. Kita cepat tahu ide mana yang bertahan dan mana yang hanya jalan di deck. Seiring waktu cakupannya melebar: konten, lalu riset, lalu growth, partnership, lokalisasi, dan pengembangan pasar Indonesia.",
        "Sekarang waktu saya lebih banyak dekat ke produknya sendiri — UX exchange, ekosistem token, platform digital, dan automation di sekitarnya. Cara riset saya tetap sama: memakai dulu, baru menulis.",
      ],
      pillarsTitle: "YANG SAYA KERJAKAN",
      pillars: [
        { icon: "growth", label: "Growth" },
        { icon: "product", label: "Produk" },
        { icon: "community", label: "Komunitas" },
        { icon: "research", label: "Riset" },
        { icon: "tech", label: "Teknologi" },
        { icon: "business", label: "Bisnis" },
      ],
      panelsHint: "Ketuk kartu untuk membaca selengkapnya",
      panels: [
        {
          icon: "journey",
          title: "Perjalanan Saya",
          summary: "Komunitas → konten → riset → growth → partnership → produk.",
          body: [
            "Saya memulai dari community management dan community building, berkontribusi pada proyek Web3 dan blockchain seperti PraSaga, Safle, Krystal Wallet, TALAXEUM, Project Larix, dan Channels.finance.",
            "Cakupannya melebar seiring waktu: growth strategy, partnership, localized marketing, market expansion, AMA dan community event, advocacy, serta strategic collaboration — sebagian besar berfokus mengembangkan pasar Indonesia.",
            "Menulis datang berikutnya. Saya pernah terbit sebagai author di Cryptoiz Research dan InCrypto School, lalu secara independen di Medium.",
          ],
        },
        {
          icon: "product",
          title: "Yang Saya Kerjakan Sekarang",
          summary: "Produk Web3, ekosistem exchange, komunitas, dan digital business.",
          body: [
            "Fokus saya sekarang banyak di produk Web3 dan digital business. Saya bekerja di ekosistem PLUBIT Exchange — struktur produk dan UI/UX, ekosistem token PLB, area trading dan earn, plus konten edukasi yang membantu orang paham apa yang mereka pakai.",
            "Bersamaan dengan itu saya membangun Paio Community, komunitas Web3 yang berfokus pada partnership, kolaborasi, dan memberi exposure nyata bagi proyek.",
            "Di luar Web3 saya membangun website untuk bisnis lain — June Grafika di printing dan custom packaging, serta Gayain Nusantara, platform travel — menangani sisi website dan UI/UX-nya.",
          ],
        },
        {
          icon: "tech",
          title: "Teknologi & Automation",
          summary: "Bot, script, dan tooling AI — biasanya untuk menghapus kerja manual.",
          body: [
            "Saya tidak memposisikan diri sebagai software engineer murni, tapi saya membangun. Telegram bot, automation Google Apps Script, AI message parsing, webhook, automation Google Sheets, dan integrasi OpenRouter AI.",
            "Di sisi web: WordPress, Elementor dan WooCommerce, pengembangan plugin custom, serta integrasi API.",
            "Saya juga sedang mengembangkan Shiro, konsep personal AI assistant yang membantu aktivitas sehari-hari lewat voice dan automation.",
          ],
        },
        {
          icon: "research",
          title: "Cara Saya Bekerja",
          summary: "Riset → pahami → bangun → uji → perbaiki → kembangkan.",
          body: [
            "Saya tidak suka menulis tentang sesuatu yang belum saya pakai. Dokumentasi memberi tahu apa yang diklaim sebuah produk; memakainya memberi tahu bagaimana rasanya.",
            "Saya cenderung praktis. Lebih baik merilis sesuatu yang masih kasar lalu memperbaikinya, daripada merencanakan yang sempurna tapi tidak pernah jadi.",
            "Riset memberi saya peta. Membangun memberi saya kenyataan. Growth muncul ketika keduanya sejalan.",
          ],
        },
      ],
      tagline: "Research. Build. Connect. Grow.",
      stats: [
        { value: "5+", label: "Tahun di Web3" },
        { value: "2021", label: "Perjalanan Dimulai" },
        { value: "10", label: "Proyek Dikerjakan" },
      ],
    },

    work: {
      eyebrow: "02 / KARYA PILIHAN",
      headingPre: "Yang pernah ",
      headingHighlight: "saya bangun.",
      headingPost: "",
      intro: "Beberapa proyek yang menunjukkan rentangnya — produk, komunitas, dan riset.",
      contributionLabel: "KONTRIBUSI SAYA",
      projects: [
        {
          slug: "plubit",
          name: "PLUBIT",
          category: "CRYPTO EXCHANGE · PRODUK · GROWTH",
          description:
            "Membantu membentuk pengalaman produk, ekosistem edukasi, lokalisasi, dan growth sebuah crypto exchange.",
          contribution:
            "Struktur produk dan UI/UX exchange, ekosistem token PLB, area trading dan earn, konten multi-bahasa, serta campaign listing dan growth.",
          tags: ["Produk", "Growth", "UI/UX", "Konten", "Lokalisasi"],
          cta: "LIHAT CASE STUDY",
          href: "/work/plubit",
        },
        {
          slug: "paio",
          name: "PAIO COMMUNITY",
          category: "KOMUNITAS WEB3 · PARTNERSHIP",
          description:
            "Membangun komunitas Web3 yang berfokus pada eksplorasi ekosistem, kolaborasi strategis, partnership, dan growth berbasis komunitas.",
          contribution:
            "Community building, partnership outreach, campaign, dan menghubungkan proyek Web3 dengan audiens yang aktif.",
          tags: ["Komunitas", "Partnership", "Growth", "Web3"],
          cta: "LIHAT CASE STUDY",
          href: "/work/paio",
        },
        {
          slug: "research",
          name: "WEB3 RESEARCH",
          category: "RISET · TULISAN · EDUKASI",
          description:
            "Meriset, mencoba, dan menulis tentang ekosistem blockchain, protokol, infrastruktur, dan produk Web3.",
          contribution:
            "Author di Cryptoiz Research dan InCrypto School, plus tulisan independen seputar DeFi, zero knowledge, Layer 1 hingga Layer 3, dan pendalaman ekosistem.",
          tags: ["Riset", "Tulisan", "DeFi", "Edukasi"],
          cta: "BACA RISET",
          href: "https://medium.com/@bagasady",
          external: true,
        },
        {
          slug: "web-projects",
          name: "WEB PROJECTS",
          category: "WEB DEVELOPMENT · UI/UX · DI LUAR WEB3",
          description:
            "Website yang saya bangun untuk bisnis di luar Web3: June Grafika di printing dan custom packaging, serta Gayain Nusantara, platform travel.",
          contribution:
            "Pengembangan website dan UI/UX — struktur situs, tata letak halaman, penyajian konten, dan alur booking untuk Gayain Nusantara.",
          tags: ["Web Dev", "UI/UX", "Website"],
          cta: "KUNJUNGI GAYAIN NUSANTARA",
          href: "https://gayainnusantara.id",
          external: true,
        },
      ],
    },

    experience: {
      eyebrow: "03 / PENGALAMAN",
      headingPre: "Tempat saya ",
      headingHighlight: "pernah berkarya.",
      headingPost: "",
      roles: [
        {
          date: "FEB 2025\nJUL 2026",
          title: "PraSaga Foundation",
          role: "Community Growth",
          desc: "Memimpin community growth untuk pasar Indonesia lewat campaign terlokalisasi, partnership, AMA, event, dan kolaborasi strategis.",
          tags: ["Community Growth", "Indonesia", "Partnership", "Lokalisasi"],
        },
        {
          date: "AUG 2024\nFEB 2025",
          title: "Safle",
          role: "Moderator",
          desc: "Menjaga percakapan komunitas tetap sehat dan informatif, mendampingi pengguna, dan meneruskan masukan mereka ke tim.",
          tags: ["Komunitas", "Support", "Web3"],
        },
        {
          date: "APR 2023\nFEB 2025",
          title: "Krystal Wallet",
          role: "Advocate",
          desc: "Menghubungkan wallet DeFi dengan pengguna baru lewat advocacy, edukasi, dan keterlibatan komunitas.",
          tags: ["DeFi", "Advocacy", "Edukasi"],
        },
        {
          date: "JAN 2023\nFEB 2025",
          title: "Cryptoiz Research",
          role: "Author",
          desc: "Menulis riset dan materi edukasi seputar protokol, ekosistem, dan lanskap kripto secara luas.",
          tags: ["Riset", "Tulisan", "Edukasi"],
        },
        {
          date: "2021\n2023",
          title: "TALAXEUM, Larix & Channels",
          role: "Community Manager",
          desc: "Pengalaman awal di Web3 mengelola dan menumbuhkan komunitas di beberapa proyek.",
          tags: ["Komunitas", "Web3", "Growth"],
        },
      ],
    },

    capabilities: {
      eyebrow: "04 / KAPABILITAS",
      headingPre: "Yang saya ",
      headingHighlight: "bawa ke meja.",
      headingPost: "",
      groups: [
        {
          icon: "growth",
          title: "Growth",
          desc: "Membawa produk ke sebuah pasar dan membangun momentum di sekitarnya.",
          items: [
            "Community Strategy",
            "Market Expansion",
            "Partnership",
            "Campaign Strategy",
            "Lokalisasi",
            "Community Operations",
          ],
        },
        {
          icon: "product",
          title: "Produk",
          desc: "Melihat usability, hierarki, dan perilaku pengguna — bukan sekadar estetika.",
          items: [
            "Product Thinking",
            "Perspektif UI/UX",
            "User Journey",
            "Product Research",
            "Feature Ideation",
            "Digital Experience",
          ],
        },
        {
          icon: "research",
          title: "Riset",
          desc: "Mengubah ide Web3 yang kompleks menjadi narasi dan konten edukasi yang jelas.",
          items: [
            "Riset Web3",
            "Riset Protokol",
            "Riset Pasar",
            "Ekosistem Blockchain",
            "Konten Edukasi",
            "Riset Teknis",
          ],
        },
        {
          icon: "tech",
          title: "Build",
          desc: "Merilis tool kecil dan automation yang menghapus pekerjaan berulang.",
          items: [
            "AI Automation",
            "Website Development",
            "WordPress",
            "Integrasi API",
            "Prototyping",
            "Telegram Bot",
            "Google Apps Script",
          ],
        },
      ],
      toolsTitle: "TOOLS",
      tools: ["Figma", "Notion", "Discord", "Telegram", "Canva", "AI Tools", "WordPress"],
    },

    writing: {
      eyebrow: "05 / RISET & TULISAN",
      headingPre: "Menjelajahi Web3 ",
      headingHighlight: "dengan memakainya.",
      headingPost: "",
      intro:
        "Saya meriset protokol, mencoba produk dan ekosistemnya, lalu mengubah temuannya jadi tulisan yang mudah dicerna.",
      topicsTitle: "TOPIK YANG SAYA TULIS",
      topics: [
        "DeFi",
        "Layer 1",
        "Layer 2",
        "Layer 3",
        "Zero Knowledge",
        "Ethereum",
        "zkSync",
        "Arbitrum",
        "Taiko",
        "Cosmos",
        "NFT",
        "Testnet",
        "Airdrop",
        "Staking",
        "Launchpad",
        "Infrastruktur",
      ],
      publishedTitle: "TERBIT DI",
      published: ["Cryptoiz Research", "InCrypto School", "Medium — @bagasady"],
      cta: "LIHAT SEMUA RISET",
    },

    lab: {
      eyebrow: "06 / 0xLAB",
      headingPre: "Eksperimen dan tool ",
      headingHighlight: "yang saya bangun.",
      headingPost: "",
      intro: "Hal-hal kecil yang saya bangun di sekitar Web3 untuk menguji ide.",
      stackLabel: "STACK",
      launch: "BUKA",
      experiments: [
        {
          index: "EXPERIMENT // 001",
          name: "MARKET TERMINAL",
          category: "DATA PASAR · TOOL WEB3",
          description:
            "Antarmuka pasar kripto untuk menjelajahi harga, pergerakan pasar, dan data trading secara langsung.",
          stack: ["CoinMarketCap API", "Serverless"],
          href: "/market.html",
        },
        {
          index: "EXPERIMENT // 002",
          name: "CONTRACT SCANNER",
          category: "ONCHAIN · RISK INTELLIGENCE",
          description:
            "Scanner token EVM yang memadukan sinyal risiko kontrak dengan data pasar terdesentralisasi.",
          stack: ["GoPlus", "DexScreener", "Serverless"],
          href: "/scanner.html",
        },
      ],
    },

    currently: {
      eyebrow: "07 / SAAT INI",
      title: "STATUS.LOG",
      log: [
        "meriset protokol baru",
        "membangun eksperimen Web3",
        "menjelajahi AI × automation",
        "memperbaiki pengalaman produk",
        "menumbuhkan komunitas & ekosistem",
      ],
    },

    contributed: {
      eyebrow: "PERNAH BERKONTRIBUSI",
      note: "Proyek Web3 dan blockchain yang saya kerjakan sejak 2021.",
      items: [
        "PraSaga",
        "Safle",
        "Krystal Wallet",
        "TALAXEUM",
        "Project Larix",
        "Channels.finance",
        "Cryptoiz Research",
        "InCrypto School",
      ],
    },

    contact: {
      eyebrow: "08 / KONTAK",
      headingLine1: "Punya sesuatu yang menarik?",
      headingLink: "Mari bicara.",
      intro:
        "Terbuka untuk obrolan seputar produk Web3, growth, komunitas, partnership, riset, dan hal-hal menarik yang sedang dibangun onchain.",
      openToTitle: "TERBUKA UNTUK",
      openTo: ["Kolaborasi", "Proyek Web3", "Partnership", "Produk", "Riset"],
      footerRole: "WEB3 · PRODUCT · GROWTH · RESEARCH",
      rights: "Seluruh hak cipta dilindungi.",
    },

    caseStudy: {
      back: "KEMBALI KE KARYA",
      sections: {
        overview: "RINGKASAN",
        context: "KONTEKS",
        worked: "YANG SAYA KERJAKAN",
        approach: "PENDEKATAN",
        stack: "SKILL & TOOLS",
        links: "TAUTAN TERKAIT",
      },
      note: "Ditulis dari kontribusi saya sendiri. Tidak ada angka performa yang dipublikasikan di sini.",
    },
  },
};
