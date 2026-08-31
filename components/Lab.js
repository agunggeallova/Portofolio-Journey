"use client";

import SectionHeader from "./SectionHeader";
import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

export default function Lab() {
  const { lang } = useLanguage();
  const t = translations[lang].lab;
  const gridRef = useReveal();

  return (
    <div className="shell">
      <section id="lab" className="section-y scroll-mt-24">
        <SectionHeader
          eyebrow={t.eyebrow}
          pre={t.headingPre}
          highlight={t.headingHighlight}
          post={t.headingPost}
          intro={t.intro}
        />

        <div ref={gridRef} className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 md:ml-[32%]">
          {t.experiments.map((exp) => (
            <article
              key={exp.name}
              className="group flex flex-col border border-lime/25 rounded-lg bg-[#080b09] overflow-hidden transition-colors hover:border-lime/50"
            >
              {/* terminal chrome, matching the profile-scan card in the hero */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-line bg-[#0c100d]">
                <span className="flex gap-1.5" aria-hidden="true">
                  <i className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] inline-block" />
                  <i className="w-2.5 h-2.5 rounded-full bg-[#febc2e] inline-block" />
                  <i className="w-2.5 h-2.5 rounded-full bg-[#28c840] inline-block" />
                </span>
                <span className="font-mono text-[9px] tracking-[0.12em] text-lime">
                  {exp.index}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <p className="font-mono text-[10px] tracking-[0.12em] text-[#6d786f] m-0">
                  {exp.category}
                </p>

                <h3 className="font-serif font-semibold tracking-tight text-[clamp(1.35rem,2.1vw,1.85rem)] mt-3 mb-0">
                  {exp.name}
                </h3>

                <p className="mt-4 text-[14px] leading-[1.75] text-[#a9b3ac] m-0">
                  {exp.description}
                </p>

                <div className="mt-5">
                  <p className="font-mono text-[9px] tracking-[0.14em] text-[#6d786f] m-0">
                    {t.stackLabel}
                  </p>
                  <ul className="flex flex-wrap gap-2 mt-2.5 mb-0 p-0 list-none">
                    {exp.stack.map((s) => (
                      <li
                        key={s}
                        className="border border-line rounded px-2.5 py-1 font-mono text-[10px] text-[#c3c9c5]"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={exp.href}
                  className="mt-auto pt-6 inline-flex items-center gap-2 self-start font-mono text-[11px] tracking-[0.1em] text-lime transition-colors hover:text-paper"
                >
                  <span className="border-b border-lime/40 pb-1">{t.launch}</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
