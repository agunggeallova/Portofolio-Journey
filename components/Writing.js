"use client";

import SectionHeader from "./SectionHeader";
import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";
import { mediumUrl } from "../lib/site";
import { Icons } from "./Icons";

export default function Writing() {
  const { lang } = useLanguage();
  const t = translations[lang].writing;
  const bodyRef = useReveal();

  return (
    <div className="shell">
      <section id="writing" className="section-y scroll-mt-24">
        <SectionHeader
          eyebrow={t.eyebrow}
          pre={t.headingPre}
          highlight={t.headingHighlight}
          post={t.headingPost}
          intro={t.intro}
        />

        <div ref={bodyRef} className="reveal md:ml-[32%] grid gap-4 md:gap-5">
          <div className="border border-line rounded-lg bg-gradient-to-b from-white/[0.03] to-transparent p-6 md:p-7">
            <p className="font-mono text-[10px] tracking-[0.14em] text-[#6d786f] m-0">
              {t.topicsTitle}
            </p>
            <ul className="flex flex-wrap gap-2 mt-4 mb-0 p-0 list-none">
              {t.topics.map((topic) => (
                <li
                  key={topic}
                  className="border border-line rounded-full px-3 py-1.5 font-mono text-[10px] tracking-wide text-[#c3c9c5]"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-line rounded-lg bg-gradient-to-b from-white/[0.03] to-transparent p-6 md:p-7 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] tracking-[0.14em] text-[#6d786f] m-0">
                {t.publishedTitle}
              </p>
              <ul className="mt-4 mb-0 p-0 list-none grid gap-2">
                {t.published.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-2.5 font-mono text-[12px] tracking-wide text-[#c3c9c5]"
                  >
                    <span aria-hidden="true" className="text-lime text-[9px]">
                      ▸
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={mediumUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group shrink-0 inline-flex items-center gap-2.5 border border-lime/40 rounded px-4 py-3 font-mono text-[11px] tracking-[0.1em] text-lime transition-colors hover:bg-lime hover:text-ink"
            >
              <span className="w-[15px] h-[15px] block">
                <Icons.writing />
              </span>
              {t.cta}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
