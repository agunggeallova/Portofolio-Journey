"use client";

import SectionHeader from "./SectionHeader";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

export default function Experience() {
  const { lang } = useLanguage();
  const t = translations[lang].experience;

  return (
    <div className="shell">
      <section id="experience" className="section-y-top pb-[60px] md:pb-[90px] scroll-mt-24">
        <SectionHeader
          eyebrow={t.eyebrow}
          pre={t.headingPre}
          highlight={t.headingHighlight}
          post={t.headingPost}
        />

        <ol className="md:ml-[32%] border-t border-line m-0 p-0 list-none">
          {t.roles.map((r) => (
            <li
              key={r.title}
              className="grid grid-cols-[80px_1fr] md:grid-cols-[135px_1fr] gap-4 md:gap-6 py-7 border-b border-line items-start transition-all duration-300 hover:pl-4 hover:bg-gradient-to-r hover:from-lime/[0.07] hover:to-transparent"
            >
              <div className="font-mono text-[10px] leading-relaxed text-muted whitespace-pre-line pt-1">
                {r.date}
              </div>

              <div>
                <h3 className="font-serif font-semibold text-[19px] tracking-tight m-0">
                  {r.title} <span className="text-lime">—</span> {r.role}
                </h3>

                <p className="mt-2 mb-0 text-[#87938a] text-[13px] leading-relaxed">{r.desc}</p>

                <ul className="flex flex-wrap gap-2 mt-4 mb-0 p-0 list-none">
                  {r.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-line rounded-full px-2.5 py-1 font-mono text-[9px] tracking-wide uppercase text-[#9fa8a2]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
