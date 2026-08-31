"use client";

import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";
import { caseStudies } from "../lib/caseStudies";
import LanguageToggle from "./LanguageToggle";
import { site } from "../lib/site";

function Block({ label, children }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[22%_1fr] gap-4 md:gap-8 py-8 border-t border-line">
      <h2 className="font-mono text-[10px] tracking-[0.14em] text-lime uppercase m-0 md:pt-1">
        {label}
      </h2>
      <div className="max-w-[720px]">{children}</div>
    </section>
  );
}

export default function CaseStudyView({ slug }) {
  const { lang } = useLanguage();
  const t = translations[lang].caseStudy;
  const study = caseStudies[slug]?.[lang];

  if (!study) return null;

  return (
    <div className="shell">
      <div className="flex items-center justify-between py-6 border-b border-line">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] text-lime hover:text-paper transition-colors"
        >
          <span aria-hidden="true">←</span> {t.back}
        </Link>
        <LanguageToggle />
      </div>

      <article className="py-16 md:py-24">
        <p className="font-mono text-[10px] tracking-[0.14em] text-lime m-0">{study.category}</p>

        <h1 className="font-serif font-bold leading-[1.02] tracking-tighter text-[clamp(2.6rem,7vw,5.5rem)] mt-5 mb-0">
          {study.name}
        </h1>

        <p className="mt-6 max-w-[720px] font-serif font-medium leading-[1.35] tracking-tight text-[clamp(1.25rem,2vw,1.9rem)] text-[#c3c9c5] m-0">
          {study.tagline}
        </p>

        <div className="mt-14">
          <Block label={t.sections.overview}>
            <p className="text-[15px] leading-[1.8] text-[#a9b3ac] m-0">{study.overview}</p>
          </Block>

          <Block label={t.sections.context}>
            <p className="text-[15px] leading-[1.8] text-[#a9b3ac] m-0">{study.context}</p>
          </Block>

          <Block label={t.sections.worked}>
            <ul className="grid sm:grid-cols-2 gap-2.5 m-0 p-0 list-none">
              {study.worked.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-2.5 font-mono text-[12px] leading-relaxed text-[#c3c9c5]"
                >
                  <span aria-hidden="true" className="text-lime text-[9px] shrink-0">
                    ▸
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Block>

          <Block label={t.sections.approach}>
            <ol className="grid gap-4 m-0 p-0 list-none counter-reset">
              {study.approach.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 font-mono text-[11px] text-lime pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[14px] leading-[1.75] text-[#a9b3ac] m-0">{item}</p>
                </li>
              ))}
            </ol>
          </Block>

          <Block label={t.sections.stack}>
            <ul className="flex flex-wrap gap-2 m-0 p-0 list-none">
              {study.stack.map((s) => (
                <li
                  key={s}
                  className="border border-line rounded-full px-3.5 py-1.5 font-mono text-[10px] tracking-wide text-[#c3c9c5]"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <p className="mt-10 pt-6 border-t border-line font-mono text-[10px] leading-relaxed text-[#6d786f] max-w-[600px]">
          {t.note}
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 border border-lime/40 rounded px-5 py-3.5 font-mono text-[11px] tracking-[0.1em] text-lime transition-colors hover:bg-lime hover:text-ink"
          >
            <span aria-hidden="true">←</span> {t.back}
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 border border-line rounded px-5 py-3.5 font-mono text-[11px] tracking-[0.1em] text-paper transition-colors hover:border-lime/50"
          >
            EMAIL <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>
    </div>
  );
}
