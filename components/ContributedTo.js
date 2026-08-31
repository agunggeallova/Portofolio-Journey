"use client";

import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

/*
  Reuses the gradient band that previously held the Discover/Connect/Amplify
  panel. Names are set as text rather than logos: sourcing eight brand marks
  at usable quality and clear licensing isn't something to guess at.
*/
export default function ContributedTo() {
  const { lang } = useLanguage();
  const t = translations[lang].contributed;
  const ref = useReveal();

  return (
    <section
      className="border-y border-line"
      style={{ background: "linear-gradient(135deg,#0a0f0a 0%,#131f10 65%,#0a0c0c 100%)" }}
    >
      <div className="shell">
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-[32%_1fr] py-14 md:py-16 gap-8">
          <div>
            <div className="eyebrow section-eyebrow">{t.eyebrow}</div>
            <p className="mt-5 max-w-[280px] text-[13px] leading-[1.7] text-[#87938a] m-0">
              {t.note}
            </p>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-line border border-line rounded-lg overflow-hidden m-0 p-0 list-none">
            {t.items.map((name) => (
              <li
                key={name}
                className="bg-[#0d110e] px-4 py-6 grid place-items-center text-center font-serif font-semibold text-[14px] tracking-tight text-[#c3c9c5] transition-colors hover:bg-[#141d13] hover:text-paper"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
