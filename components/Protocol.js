"use client";

import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

export default function Protocol() {
  const { lang } = useLanguage();
  const t = translations[lang].protocol;
  const ref = useReveal();

  return (
    <section
      className="border-y border-line"
      style={{
        background: "linear-gradient(135deg,#0a0f0a 0%,#131f10 65%,#0a0c0c 100%)",
      }}
    >
      <div className="shell">
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-[32%_1fr] py-16 md:py-20 gap-8">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>
            <div className="font-mono text-[10px] tracking-wide text-[#7c8a7b] mt-7">
              {t.walletLabel}
              <br />
              <strong className="text-lime font-normal">0xBA6A...A9D5</strong>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line rounded-lg overflow-hidden">
            {t.steps.map((s) => (
              <div
                key={s.title}
                className="bg-[#0d110e] px-5 py-6 min-h-[180px] flex flex-col justify-between transition-colors hover:bg-[#121a12]"
              >
                <i className="text-lime font-mono text-lg not-italic">{s.icon}</i>
                <div>
                  <b className="font-serif font-semibold text-[17px] tracking-tight block">
                    {s.title}
                  </b>
                  <span className="font-mono text-[10px] leading-relaxed text-[#8b978c] whitespace-pre-line">
                    {s.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
