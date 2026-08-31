import { notFound } from "next/navigation";
import CaseStudyView from "../../../components/CaseStudyView";
import { caseStudies, caseStudySlugs } from "../../../lib/caseStudies";
import { site } from "../../../lib/site";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

// `params` is a promise in this Next.js version; reading it synchronously
// yields undefined and every case study falls through to notFound().
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudies[slug]?.en;
  if (!study) return {};

  const title = `${study.name} — Case Study`;
  return {
    title,
    description: study.tagline,
    alternates: { canonical: `/work/${slug}` },
    // images omitted so the case study inherits the generated root card
    openGraph: {
      type: "article",
      title: `${title} — ${site.name}`,
      description: study.tagline,
      url: `${site.url}/work/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description: study.tagline,
    },
  };
}

export default async function CaseStudyPage({ params }) {
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
