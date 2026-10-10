"use client";

import SectionHeader from "./SectionHeader";
import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

export default function Ticker() {
  const { lang } = useLanguage();
  const items = translations[lang].ticker;

  return (
    <div className="border-y border-line flex justify-center">
      <div className="font-mono font-semibold text-[13px] text-[#c4ccc7] tracking-wide py-4 px-6 flex flex-wrap justify-center gap-x-7 gap-y-3 text-center">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-x-7">
            {i > 0 && <b className="text-lime">✦</b>}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
