"use client";

import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;
  const topRef = useReveal();
  const bodyRef = useReveal();

  return (
    <div className="shell" id="about">
      <section className="section-y">
        <div ref={topRef} className="reveal grid grid-cols-1 md:grid-cols-[32%_1fr] mb-12 md:mb-16 gap-6">
          <div className="eyebrow section-eyebrow">{t.eyebrow}</div>
          <h2 className="font-serif font-semibold leading-[1.04] tracking-tighter text-[clamp(2.2rem,4.5vw,4.8rem)] max-w-[830px]">
            {t.headingPre}
            <span className="text-lime">{t.headingHighlight}</span>
            {t.headingPost}
          </h2>
        </div>

        <div ref={bodyRef} className="reveal grid grid-cols-1 md:grid-cols-[32%_1fr]">
          <div />
          <div className="max-w-[720px]">
            <p className="font-serif font-medium leading-[1.3] tracking-tight text-[clamp(1.4rem,2.4vw,2.6rem)]">
              {t.p1}
            </p>
            <p className="mt-6 text-[#8f9791] font-serif font-medium leading-[1.3] tracking-tight text-[clamp(1.4rem,2.4vw,2.6rem)]">
              {t.p2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border border-line bg-line mt-14 rounded-lg overflow-hidden">
              {t.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-gradient-to-b from-white/[0.03] to-transparent px-6 py-7 transition-colors hover:from-lime/[0.06]"
                >
                  <strong className="block font-serif font-semibold leading-none tracking-tighter text-[clamp(2rem,3vw,3.4rem)] text-lime mb-3">
                    {s.value}
                  </strong>
                  <span className="text-[#9fa8a2] font-mono text-[10px] uppercase tracking-wide">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
