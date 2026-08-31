"use client";

import SectionHeader from "./SectionHeader";
import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";
import { Icons } from "./Icons";

function Panel({ panel }) {
  const IconCmp = Icons[panel.icon];

  return (
    <details className="group border border-line rounded-lg bg-gradient-to-b from-white/[0.03] to-transparent transition-colors open:from-lime/[0.05] hover:border-lime/30">
      <summary className="list-none cursor-pointer select-none flex items-start gap-4 p-5 marker:hidden [&::-webkit-details-marker]:hidden">
        <span className="shrink-0 w-9 h-9 grid place-items-center border border-line rounded text-lime transition-colors group-hover:border-lime/40">
          <span className="w-[18px] h-[18px] block">{IconCmp ? <IconCmp /> : null}</span>
        </span>

        <span className="flex-1 min-w-0">
          <span className="block font-serif font-semibold text-[17px] tracking-tight">
            {panel.title}
          </span>
          <span className="block mt-1 text-[13px] leading-relaxed text-[#87938a]">
            {panel.summary}
          </span>
        </span>

        <span
          aria-hidden="true"
          className="shrink-0 mt-1 text-lime font-mono text-[15px] leading-none transition-transform duration-300 group-open:rotate-45"
        >
          +
        </span>
      </summary>

      {/* the icon-width indent lines the copy up with the title, but it costs
          too much of a narrow screen, so only apply it from md up */}
      <div className="px-5 pb-5 md:pl-[72px] space-y-3.5 border-t border-line/60 pt-4 mt-1">
        {panel.body.map((para, i) => (
          <p key={i} className="text-[13.5px] leading-[1.75] text-[#a9b3ac] m-0">
            {para}
          </p>
        ))}
      </div>
    </details>
  );
}

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;
  const bodyRef = useReveal();
  const panelsRef = useReveal();

  return (
    <div className="shell">
      <section id="about" className="section-y scroll-mt-24">
        <SectionHeader
          eyebrow={t.eyebrow}
          pre={t.headingPre}
          highlight={t.headingHighlight}
          post={t.headingPost}
        />

        <div ref={bodyRef} className="reveal grid grid-cols-1 md:grid-cols-[32%_1fr] gap-6 md:gap-0">
          <div />
          <div className="max-w-[760px]">
            <p className="font-serif font-medium leading-[1.35] tracking-tight text-[clamp(1.35rem,2.2vw,2.3rem)] m-0">
              {t.lead[0]}
            </p>
            {t.lead.slice(1).map((para, i) => (
              <p key={i} className="mt-5 text-[15px] leading-[1.8] text-[#a9b3ac] m-0">
                {para}
              </p>
            ))}

            <p className="mt-8 font-mono text-[11px] tracking-[0.18em] text-lime uppercase">
              {t.tagline}
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-px border border-line bg-line mt-10 rounded-lg overflow-hidden m-0">
              {t.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-gradient-to-b from-white/[0.03] to-transparent px-6 py-7 transition-colors hover:from-lime/[0.06]"
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="m-0">
                    <strong className="block font-serif font-semibold leading-none tracking-tighter text-[clamp(2rem,3vw,3.4rem)] text-lime mb-3">
                      {s.value}
                    </strong>
                    <span className="text-[#9fa8a2] font-mono text-[10px] uppercase tracking-wide">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div
          ref={panelsRef}
          className="reveal grid grid-cols-1 md:grid-cols-[32%_1fr] gap-6 md:gap-0 mt-16 md:mt-20"
        >
          <div className="font-mono text-[10px] tracking-[0.12em] text-[#6d786f] uppercase section-eyebrow">
            {t.pillarsTitle}
          </div>

          <div className="max-w-[760px]">
            <ul className="flex flex-wrap gap-2.5 m-0 p-0 list-none">
              {t.pillars.map((p) => {
                const IconCmp = Icons[p.icon];
                return (
                  <li
                    key={p.label}
                    className="inline-flex items-center gap-2 border border-line rounded-full pl-3 pr-4 py-2 text-[11px] font-mono tracking-wide text-[#c3c9c5] transition-colors hover:border-lime/40 hover:text-paper"
                  >
                    <span className="w-[15px] h-[15px] block text-lime">
                      {IconCmp ? <IconCmp /> : null}
                    </span>
                    {p.label}
                  </li>
                );
              })}
            </ul>

            <p className="mt-8 mb-4 font-mono text-[10px] tracking-[0.12em] text-[#6d786f] uppercase">
              {t.panelsHint}
            </p>

            <div className="grid grid-cols-1 gap-3">
              {t.panels.map((panel) => (
                <Panel key={panel.title} panel={panel} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
