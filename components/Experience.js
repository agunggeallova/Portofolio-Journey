"use client";

import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

export default function Experience() {
  const { lang } = useLanguage();
  const t = translations[lang].experience;
  const ref = useReveal();

  return (
    <section id="experience" className="pb-16 md:pb-24">
      <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-[32%_1fr] mb-12 md:mb-16 gap-6">
        <div className="eyebrow">{t.eyebrow}</div>
        <h2 className="font-serif font-semibold leading-[0.95] tracking-tighter text-[clamp(2.2rem,4.5vw,4.8rem)] max-w-[830px]">
          {t.headingPre}
          <span className="text-lime">{t.headingHighlight}</span>
          {t.headingPost}
        </h2>
      </div>

      <div className="md:ml-[32%] border-t border-line">
        {t.roles.map((r) => (
          <article
            key={r.title}
            className="grid grid-cols-[80px_1fr] md:grid-cols-[135px_1fr_auto] gap-4 md:gap-6 py-7 border-b border-line items-start transition-all duration-300 hover:pl-4 hover:bg-gradient-to-r hover:from-lime/[0.07] hover:to-transparent"
          >
            <div className="font-mono text-[10px] leading-relaxed text-muted whitespace-pre-line">
              {r.date}
            </div>
            <div>
              <h3 className="font-serif font-semibold text-[19px] tracking-tight m-0">
                {r.title} <span className="text-lime">—</span> {r.role}
              </h3>
              <small className="mt-2 block text-[#78817c] text-xs leading-relaxed">{r.desc}</small>
            </div>
            <div className="hidden md:block border border-line text-[#bcc4bf] px-2.5 py-1.5 font-mono text-[9px] uppercase self-start">
              {r.tag}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
