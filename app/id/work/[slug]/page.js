import { notFound } from "next/navigation";
import CaseStudyView from "../../../../components/CaseStudyView";
import { caseStudies, caseStudySlugs } from "../../../../lib/caseStudies";
import { site } from "../../../../lib/site";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

/*
  Indonesian twin of /work/[slug]: identical route tree, canonical and hreflang
  point at the /id prefix so each case study has one URL per language.
*/
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudies[slug]?.id;
  if (!study) return {};

  const title = `${study.name} — Studi Kasus`;
  return {
    title,
    description: study.tagline,
    alternates: {
      canonical: `/id/work/${slug}`,
      languages: { en: `/work/${slug}`, id: `/id/work/${slug}`, "x-default": `/work/${slug}` },
    },
    openGraph: {
      type: "article",
      title: `${title} — ${site.name}`,
      description: study.tagline,
      url: `${site.url}/id/work/${slug}`,
      locale: "id_ID",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description: study.tagline,
    },
  };
}

export default async function IndonesianCaseStudyPage({ params }) {
  const { slug } = await params;
  if (!caseStudies[slug]) notFound();

  return (
    <>
      <div className="grid-overlay" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />
      <main id="main">
        <CaseStudyView slug={slug} />
      </main>
    </>
  );
}
