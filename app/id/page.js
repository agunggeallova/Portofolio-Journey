import Home from "../page";
import { site } from "../../lib/site";

/*
  The indexable Indonesian homepage. Same composition as `/`, but served at a
  stable URL so crawlers (and share previews) get the Indonesian copy instead
  of only the client-toggled English one. LanguageProvider keys off /id.
*/
export const metadata = {
  title: `${site.name} — Growth, Produk & Riset Web3`,
  description:
    "Portofolio Bagas Ady Santoso, praktisi Web3 yang bekerja di growth, produk, komunitas, riset, partnership, dan teknologi baru.",
  alternates: {
    canonical: "/id",
    languages: { en: "/", id: "/id", "x-default": "/" },
  },
  openGraph: {
    type: "profile",
    siteName: site.name,
    url: `${site.url}/id`,
    title: `${site.name} — Growth, Produk & Riset Web3`,
    description:
      "Portofolio Bagas Ady Santoso, praktisi Web3 yang bekerja di growth, produk, komunitas, riset, partnership, dan teknologi baru.",
    locale: "id_ID",
    localeAlternate: ["en_US"],
    firstName: "Bagas Ady",
    lastName: "Santoso",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Growth, Produk & Riset Web3`,
    description:
      "Portofolio Bagas Ady Santoso, praktisi Web3 yang bekerja di growth, produk, komunitas, riset, partnership, dan teknologi baru.",
  },
};

export default function IndonesianHome() {
  return <Home />;
}
