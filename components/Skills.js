"use client";

import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;
  const topRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="pt-[50px] md:pt-[70px] section-y-bottom">
      <div ref={topRef} className="reveal grid grid-cols-1 md:grid-cols-[32%_1fr] mb-12 md:mb-16 gap-6">
        <div className="eyebrow section-eyebrow">{t.eyebrow}</div>
        <h2 className="font-serif font-semibold leading-[1.04] tracking-tighter text-[clamp(2.2rem,4.5vw,4.8rem)] max-w-[830px]">
          {t.headingPre}
          <span className="text-lime">{t.headingHighlight}</span>
          {t.headingPost}
        </h2>
      </div>

      <div ref={gridRef} className="reveal grid grid-cols-2 md:grid-cols-4 border-l border-line">
        {t.items.map((s) => (
          <div
            key={s.name}
            className="min-h-[130px] md:min-h-[190px] p-4 md:p-5 border border-line border-l-0 flex flex-col justify-between transition-colors duration-300 hover:bg-[#141b12]"
          >
            <b className="font-serif font-semibold text-lg md:text-xl tracking-tight">{s.name}</b>
            <span className="text-[#8d9790] font-mono text-[10px]">{s.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
