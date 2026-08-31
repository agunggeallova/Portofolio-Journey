"use client";

import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const headRef = useReveal();
  const footRef = useReveal();

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 md:py-32 min-h-[70vh] md:min-h-[90vh] flex flex-col justify-between"
      style={{ background: "#182a15" }}
    >
      <span
        aria-hidden="true"
        className="absolute text-lime leading-none opacity-[0.08] pointer-events-none select-none"
        style={{ fontSize: "clamp(16rem,45vw,42rem)", right: "-12vw", top: "-18vw" }}
      >
        ✦
      </span>

      <div ref={headRef} className="reveal shell-inline">
        <div className="eyebrow">{t.eyebrow}</div>

        <h2 className="relative font-serif font-semibold leading-[1.04] tracking-tighter text-[clamp(2.8rem,8vw,7.5rem)] max-w-[1000px] my-10">
          {t.headingLine1}
          <br />
          <a
            href="mailto:hello@bagasady.com"
            className="text-lime border-b-4 md:border-b-[5px] border-lime transition-colors hover:text-white hover:border-white"
          >
            {t.headingLink}
          </a>
        </h2>
      </div>

      <div
        ref={footRef}
        className="reveal shell-inline flex flex-col md:flex-row justify-between gap-5 pt-8 border-t border-paper/25 font-mono text-[10px] text-[#aeb8ac]"
      >
        <span>{t.copyright}</span>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-lime">
            {t.linkedin}
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-lime">
            {t.twitter}
          </a>
          <a href="mailto:hello@bagasady.com" className="hover:text-lime">
            {t.email}
          </a>
        </div>
        <span>{t.madeFor}</span>
      </div>
    </section>
  );
}
