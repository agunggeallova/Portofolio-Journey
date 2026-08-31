import { Space_Grotesk, Manrope, DM_Mono } from "next/font/google";
import { LanguageProvider } from "../lib/LanguageContext";
import { site, linkedinUrl, mediumUrl } from "../lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const title = `${site.name} — Web3 Growth, Product & Research`;
const description =
  "Portfolio of Bagas Ady Santoso, a Web3 builder working across growth, product, community, research, partnerships, and emerging technology.";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "Bagas Ady Santoso",
    "Web3",
    "Web3 Growth",
    "Web3 Product",
    "Community Growth",
    "Blockchain Research",
    "Indonesia",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/bagas-ady-santoso.png",
        width: 400,
        height: 400,
        alt: `${site.name} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/bagas-ady-santoso.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#07090c",
  colorScheme: "dark",
};

// Person schema so search engines can connect the name, role and profiles.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressCountry: site.location,
  },
  sameAs: [linkedinUrl, mediumUrl],
  knowsAbout: [
    "Web3",
    "Blockchain",
    "Community Growth",
    "Product Management",
    "Protocol Research",
    "Partnerships",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable} ${dmMono.variable}`}>
      <body className="bg-ink text-paper font-sans antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
