import { site } from "../lib/site";
import { caseStudySlugs } from "../lib/caseStudies";

export default function sitemap() {
  const now = new Date();

  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...caseStudySlugs.map((slug) => ({
      url: `${site.url}/work/${slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    })),
    // The lab tools are static pages served from public/, so they are listed
    // explicitly rather than discovered from the route tree.
    {
      url: `${site.url}/market.html`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${site.url}/scanner.html`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
