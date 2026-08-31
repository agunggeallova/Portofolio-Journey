/*
  Single source of truth for identity and outbound links.
  Kept here so the nav, contact block, footer, metadata and JSON-LD can't
  drift apart — previously the same URLs were retyped in several places.
*/

export const site = {
  name: "Bagas Ady Santoso",
  shortName: "0xBAGAS",
  role: "Web3 Growth & Product",
  location: "Indonesia",
  url: "https://www.0xbagas.web.id",
  email: "agunggeallova@gmail.com",
  yearsInWeb3: "5+",
  startedYear: "2021",
};

/*
  Only profiles with a confirmed URL belong here. A generic homepage link
  (x.com, linkedin.com) is worse than no link, so unknown profiles are
  simply omitted rather than guessed at.
*/
export const socials = [
  {
    id: "email",
    label: "EMAIL",
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    // fastest route to a reply, so it sits directly after email
    id: "telegram",
    label: "TELEGRAM",
    href: "https://t.me/bagasadys",
    external: true,
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    href: "https://id.linkedin.com/in/bagas-ady-santoso-b32a69182",
    external: true,
  },
  {
    id: "medium",
    label: "MEDIUM",
    href: "https://medium.com/@bagasady",
    external: true,
  },
];

export const mediumUrl = "https://medium.com/@bagasady";
export const linkedinUrl = "https://id.linkedin.com/in/bagas-ady-santoso-b32a69182";
export const telegramUrl = "https://t.me/bagasadys";
