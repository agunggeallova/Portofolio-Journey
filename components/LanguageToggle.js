"use client";

import { useLanguage } from "../lib/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="flex items-center border border-line font-mono text-[10px] tracking-wide select-none shrink-0"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2.5 py-1.5 transition-colors ${
          lang === "en" ? "bg-lime text-ink" : "text-[#8d9790] hover:text-paper"
        }`}
      >
        EN
      </button>
      <span className="w-px self-stretch bg-line" />
      <button
        type="button"
        onClick={() => setLang("id")}
        aria-pressed={lang === "id"}
        className={`px-2.5 py-1.5 transition-colors ${
          lang === "id" ? "bg-lime text-ink" : "text-[#8d9790] hover:text-paper"
        }`}
      >
        ID
      </button>
    </div>
  );
}
