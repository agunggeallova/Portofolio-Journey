import { ImageResponse } from "next/og";
import { CaseStudyCard, ogFonts, size, contentType } from "../../../lib/ogCard";
import { caseStudies, caseStudySlugs } from "../../../lib/caseStudies";
import { site } from "../../../lib/site";

export const alt = "Case study — Bagas Ady Santoso";
export { size, contentType };

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

// Mirrors opengraph-image so X/Twitter gets its own tag for case studies too.
export default async function Image({ params }) {
  const { slug } = await params;
  const study = caseStudies[slug]?.en;

  const [titleTop, ...rest] = (study?.name || "CASE STUDY").split(" ");

  return new ImageResponse(
    (
      <CaseStudyCard
        eyebrow={study?.category || "CASE STUDY"}
        titleTop={titleTop}
        titleBottom={rest.join(" ")}
        subtitle={study?.tagline || ""}
        command={`bagas@web3 ~ $ ./case-study --${slug}`}
        footLeft={`CASE STUDY · ${site.name.toUpperCase()}`}
      />
    ),
    { ...size, fonts: await ogFonts() }
  );
}
