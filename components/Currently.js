"use client";

import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

export default function Currently() {
  const { lang } = useLanguage();
  const t = translations[lang].currently;
  const ref = useReveal();

  return (
    <div className="shell">
      <section id="currently" className="pb-16 md:pb-24 scroll-mt-24">
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-[32%_1fr] gap-6">
          <div className="eyebrow section-eyebrow">{t.eyebrow}</div>

          <div className="max-w-[760px] border border-lime/25 rounded-lg bg-[#080b09] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-line bg-[#0c100d]">
              <span className="font-mono text-[10px] tracking-[0.12em] text-[#8d9790]">
                {t.title}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[9px] text-lime tracking-wide">
                <i
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-lime pulse-dot shadow-[0_0_9px_var(--lime)]"
                />
                LIVE
              </span>
            </div>

            <ul className="p-5 m-0 list-none grid gap-2.5">
              {t.log.map((line) => (
                <li
                  key={line}
                  className="flex items-baseline gap-3 font-mono text-[12px] leading-relaxed text-[#c3c9c5]"
                >
                  <span aria-hidden="true" className="text-lime shrink-0">
                    &gt;
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
