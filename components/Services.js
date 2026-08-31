"use client";

import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

export default function Services() {
  const { lang } = useLanguage();
  const t = translations[lang].services;
  const topRef = useReveal();
  const listRef = useReveal();

  return (
    <section className="bg-paper text-[#101410] section-y">
      <div className="shell">
        <div ref={topRef} className="reveal grid grid-cols-1 md:grid-cols-[32%_1fr] mb-12 md:mb-16 gap-6">
          <div className="eyebrow eyebrow-dark section-eyebrow">{t.eyebrow}</div>
          <h2 className="font-serif font-semibold leading-[1.04] tracking-tighter text-[clamp(2.2rem,4.5vw,4.8rem)] max-w-[830px]">
            {t.headingPre}
            <span className="text-[#477218]">{t.headingHighlight}</span>
            {t.headingPost}
          </h2>
        </div>

        <div ref={listRef} className="reveal border-t border-black/20">
          {t.items.map((s) => (
            <div
              key={s.num}
              className="group grid grid-cols-[50px_1fr_auto] md:grid-cols-[90px_1fr_auto] gap-4 md:gap-7 items-center py-7 border-b border-black/20 transition-all duration-300 hover:px-5 hover:bg-[#d8ff92] rounded"
            >
              <span className="font-mono text-[11px] text-[#72806d]">{s.num}</span>
              <h3 className="font-serif font-semibold leading-none tracking-tight text-[clamp(1.4rem,3vw,3rem)] m-0">
                {s.title}
              </h3>
              <span className="hidden md:block max-w-[260px] text-[12px] leading-relaxed text-[#586057]">
                {s.desc}
              </span>
              <span className="col-start-3 md:col-start-auto text-2xl rotate-[-45deg] transition-transform duration-300 group-hover:rotate-0 justify-self-end">
                ↗
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
