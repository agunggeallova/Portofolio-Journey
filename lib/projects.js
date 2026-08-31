/*
  Projects shown in the CONTRIBUTED TO grid.

  `logo` points at a file in /public/logos/projects/. When the file is not
  present the card falls back to the wordmark treatment the section already
  used, so a missing asset degrades quietly instead of showing a broken image.

  Only official artwork belongs here — see the README in that folder.
*/

export const contributedProjects = [
  { name: "PLUBIT", logo: "/logos/projects/plubit.png" },
  { name: "PraSaga", logo: "/logos/projects/prasaga.png" },
  { name: "Safle", logo: "/logos/projects/safle.png" },
  { name: "Krystal Wallet", logo: "/logos/projects/krystal-wallet.png" },
  { name: "TALAXEUM", logo: "/logos/projects/talaxeum.png" },
  { name: "Project Larix", logo: "/logos/projects/larix.png" },
  { name: "Channels.finance", logo: "/logos/projects/channels-finance.png" },
  // No official artwork available for these two, so they stay as wordmarks.
  // `logo: null` skips the <img> entirely rather than firing a 404.
  { name: "Cryptoiz Research", logo: null },
  { name: "InCrypto School", logo: null },
  { name: "Taiko", logo: "/logos/projects/taiko.png" },
];
