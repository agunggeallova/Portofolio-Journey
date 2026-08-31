"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { lang } = useLanguage();
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const LINKS = [
    { href: "#about", label: t.about },
    { href: "#experience", label: t.experience },
    { href: "/market.html", label: t.market },
    { href: "/scanner.html", label: t.scanner },
    { href: "#contact", label: t.contact },
  ];

  useEffect(() => {
    function onScroll() {
      setScrolled(scrollY > 24);
    }
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="shell">
      <nav
        className={`h-[82px] flex items-center justify-between border-b border-line sticky top-0 z-30 transition-all duration-300 ${
          scrolled
            ? "h-[66px] bg-ink/80 backdrop-blur-xl border-lime/25 shadow-[0_12px_34px_rgba(0,0,0,.22)]"
            : ""
        }`}
      >
        <a className="font-serif font-bold text-lg tracking-tight" href="#top">
          BAGAS<span className="text-lime">/</span>ADY
        </a>

        <div className="flex items-center gap-2 lg:gap-5">
          <LanguageToggle />

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative w-10 h-10 border border-line bg-ink/50 text-lime shrink-0"
          >
            <span
              className={`absolute left-3 top-[19px] w-4 h-px bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-3 w-4 h-px bg-current transition-transform ${
                open ? "top-[19px] rotate-45" : "top-[13px]"
              }`}
            />
            <span
              className={`absolute left-3 w-4 h-px bg-current transition-transform ${
                open ? "top-[19px] -rotate-45" : "top-[25px]"
              }`}
            />
          </button>

          <div
            className={`${
              open ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row items-stretch lg:items-center gap-0 lg:gap-7 absolute lg:static top-[67px] left-0 right-0 bg-ink/95 lg:bg-transparent border lg:border-0 border-lime/30 p-2 lg:p-0 text-[#c3c9c5] text-xs font-bold shadow-2xl lg:shadow-none`}
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block lg:inline px-3 py-4 lg:p-0 border-b lg:border-0 border-line font-mono tracking-wide hover:text-lime transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@bagasady.com"
              className="mt-1 lg:mt-0 flex items-center justify-center lg:inline-flex border border-lime/45 px-3 py-3 text-lime font-mono text-[10px] tracking-wide"
            >
              <i className="w-1.5 h-1.5 rounded-full bg-lime mr-2 pulse-dot shadow-[0_0_9px_var(--lime)]" />
              {t.availability}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
