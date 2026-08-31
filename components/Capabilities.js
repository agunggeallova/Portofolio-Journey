"use client";

import SectionHeader from "./SectionHeader";
import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";
import { Icons } from "./Icons";

export default function Capabilities() {
  const { lang } = useLanguage();
  const t = translations[lang].capabilities;
  const gridRef = useReveal();
  const toolsRef = useReveal();

  return (
    <div className="shell">
      <section id="capabilities" className="section-y scroll-mt-24">
        <SectionHeader
          eyebrow={t.eyebrow}
          pre={t.headingPre}
          highlight={t.headingHighlight}
          post={t.headingPost}
        />

        <div ref={gridRef} className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 md:ml-[32%]">
          {t.groups.map((group) => {
            const IconCmp = Icons[group.icon];
            return (
              <div
                key={group.title}
                className="border border-line rounded-lg bg-gradient-to-b from-white/[0.03] to-transparent p-6 transition-colors hover:border-lime/30"
              >
                <div className="flex items-center gap-3">
                  <span className="shrink-0 w-9 h-9 grid place-items-center border border-line rounded text-lime">
                    <span className="w-[18px] h-[18px] block">{IconCmp ? <IconCmp /> : null}</span>
                  </span>
                  <h3 className="font-serif font-semibold text-[18px] tracking-tight m-0">
                    {group.title}
                  </h3>
                </div>

                <p className="mt-4 text-[13px] leading-[1.7] text-[#87938a] m-0">{group.desc}</p>

                <ul className="mt-5 mb-0 p-0 list-none grid gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-2.5 font-mono text-[11px] tracking-wide text-[#c3c9c5]"
                    >
                      <span aria-hidden="true" className="text-lime text-[9px]">
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div ref={toolsRef} className="reveal md:ml-[32%] mt-8">
          <p className="font-mono text-[10px] tracking-[0.14em] text-[#6d786f] m-0">
            {t.toolsTitle}
          </p>
          <ul className="flex flex-wrap gap-2.5 mt-4 mb-0 p-0 list-none">
            {t.tools.map((tool) => (
              <li
                key={tool}
                className="border border-line rounded-full px-4 py-2 font-mono text-[11px] tracking-wide text-[#c3c9c5] transition-colors hover:border-lime/40 hover:text-paper"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
