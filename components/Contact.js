"use client";

import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";
import { site, socials } from "../lib/site";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const headRef = useReveal();
  const footRef = useReveal();
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 md:py-32 flex flex-col justify-between gap-16 scroll-mt-24"
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

        <h2 className="relative font-serif font-semibold leading-[1.04] tracking-tighter text-[clamp(2.6rem,7vw,6.5rem)] max-w-[1000px] mt-8 mb-0">
          {t.headingLine1}
          <br />
          <a
            href={`mailto:${site.email}`}
            className="text-lime border-b-4 md:border-b-[5px] border-lime transition-colors hover:text-white hover:border-white"
          >
            {t.headingLink}
          </a>
        </h2>

        <p className="mt-8 max-w-[620px] text-[15px] leading-[1.8] text-[#c6d0c2] m-0">{t.intro}</p>

        <ul className="flex flex-wrap gap-2.5 mt-8 mb-0 p-0 list-none">
          <li className="font-mono text-[10px] tracking-[0.14em] text-lime/70 self-center mr-1">
            {t.openToTitle} /
          </li>
          {t.openTo.map((item) => (
            <li
              key={item}
              className="border border-paper/25 rounded-full px-3.5 py-1.5 font-mono text-[10px] tracking-wide text-[#d3ddcf]"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 mt-10">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              {...(s.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              className="group inline-flex items-center gap-2.5 border border-paper/30 rounded px-5 py-3.5 font-mono text-[11px] tracking-[0.1em] text-paper transition-colors hover:bg-lime hover:text-ink hover:border-lime"
            >
              {s.label}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
              {s.external ? <span className="sr-only">(opens in a new tab)</span> : null}
            </a>
          ))}
        </div>
      </div>

      <footer
        ref={footRef}
        className="reveal shell-inline flex flex-col md:flex-row justify-between gap-6 pt-8 border-t border-paper/25 font-mono text-[10px] text-[#aeb8ac]"
      >
        <div className="grid gap-1.5">
          <span className="text-paper tracking-[0.08em]">{site.name.toUpperCase()}</span>
          <span className="text-lime/80 tracking-[0.1em]">{t.footerRole}</span>
          <span className="tracking-[0.08em]">{site.location.toUpperCase()}</span>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-5 md:self-end">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              {...(s.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              className="hover:text-lime transition-colors"
            >
              {s.label} ↗
            </a>
          ))}
        </nav>

        <span className="md:self-end">
          © {year} {site.name}. {t.rights}
        </span>
      </footer>
    </section>
  );
}
