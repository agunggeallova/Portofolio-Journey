import { site } from "../lib/site";
import { caseStudySlugs } from "../lib/caseStudies";

/*
  One entry per URL, each carrying hreflang alternates so Indonesian searchers
  land on /id rather than the English copy. `lastModified` is build time here;
  swap in a real content date if the repo starts tracking one.
*/
export default function sitemap() {
  const now = new Date();

  const languages = (enPath, idPath) => ({
    en: `${site.url}${enPath}`,
    id: `${site.url}${idPath}`,
    "x-default": `${site.url}${enPath}`,
  });

  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: languages("/", "/id") },
    },
    {
      url: `${site.url}/id`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: languages("/", "/id") },
    },
    ...caseStudySlugs.flatMap((slug) => [
      {
        url: `${site.url}/work/${slug}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.8,
        alternates: { languages: languages(`/work/${slug}`, `/id/work/${slug}`) },
      },
      {
        url: `${site.url}/id/work/${slug}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.8,
        alternates: { languages: languages(`/work/${slug}`, `/id/work/${slug}`) },
      },
    ]),
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
