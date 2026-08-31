"use client";

import { useEffect, useState } from "react";
import SplitText from "./SplitText";
import ProfileScan from "./ProfileScan";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const [block, setBlock] = useState(23118824);

  useEffect(() => {
    const id = setInterval(() => {
      setBlock(23118824 + (Math.floor(Date.now() / 12000) % 999));
    }, 12000);
    return () => clearInterval(id);
  }, []);

  /*
    Four explicit lines rather than letting the headline wrap: the staggered
    indent only reads as deliberate when each line break is fixed. Lines 3
    and 4 carry the lime accent.
  */
  const headline = [
    { key: "1", text: t.h1Line1, accent: false, indent: "" },
    { key: "2", text: t.h1Line2, accent: false, indent: "hero-line-a" },
    { key: "3", text: t.h1Line3, accent: true, indent: "" },
    { key: "4", text: t.h1Line4, accent: true, indent: "hero-line-b" },
  ];

  return (
    <div className="shell" id="top">
      <section className="hero-section relative flex flex-col">
        {/* ---------- top system bar ---------- */}
        <div className="shrink-0 h-11 border-b border-line flex items-center justify-between text-[#84908a] font-mono text-[10px] tracking-wide">
          <span className="text-lime flex items-center gap-2 before:content-['◈']">
            {t.mainnet}
          </span>
          {/* block and gas are the secondary layer — dropped below 640px so the
              bar stays on one line instead of wrapping */}
          <span className="hidden sm:block">
            {t.block} <b className="text-paper font-normal">{block.toLocaleString("en-US")}</b>
            &nbsp;/&nbsp; {t.gas}
          </span>
          <span>
            {t.status} <b className="text-lime font-normal">{t.synced}</b>
          </span>
        </div>

        {/* ---------- decorative layers, behind everything ---------- */}
        <div
          aria-hidden="true"
          className="hero-orbital hidden lg:block absolute right-[-6%] top-[14%] border border-lime/20 rounded-full spin-slow -z-10"
        >
          <span className="absolute inset-[12%] border border-dashed border-lime/25 rounded-full" />
        </div>

        <div
          aria-hidden="true"
          className="hero-orbital hidden lg:block absolute right-[-10%] top-[10%] rounded-full -z-10 breathe"
          style={{
            background:
              "radial-gradient(circle, rgba(200,255,92,.13), rgba(28,61,39,.07) 35%, transparent 68%)",
          }}
        />

        {/* ---------- main two-column composition ----------
            54/46 split. The headline owns the left and stays the focal point;
            the terminal centres in its own column so it never crowds either
            the headline or the right edge. */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[minmax(0,54fr)_minmax(0,46fr)] gap-10 lg:gap-8 items-center py-10 lg:py-8">
          <div className="flex flex-col items-start">
            <div className="eyebrow">{t.eyebrow}</div>

            <h1 className="hero-headline font-serif font-bold tracking-tighter mt-[clamp(2.2rem,3vw,3.4rem)] mb-0">
              {headline.map((line) => (
                <SplitText
                  key={`${lang}-${line.key}`}
                  as="span"
                  text={line.text}
                  className={`block ${line.accent ? "text-lime" : ""} ${line.indent}`}
                />
              ))}
            </h1>
          </div>

          {/* left-aligned on mobile so the card shares the page's left edge
              with the eyebrow, headline and intro; centred in its own column
              from lg so it reads as right-of-centre without hugging the edge */}
          <div className="flex justify-start lg:justify-center">
            <div className="hero-terminal-slot">
              <ProfileScan />
            </div>
          </div>
        </div>

        {/* ---------- bottom information row ----------
            Intro and CTA are capped to a shared width so they always read as
            one pair instead of drifting apart on wide screens. The bottom
            padding is what separates this row from the ticker below. */}
        {/* stacks below 640px so the intro keeps a full-width measure, then
            becomes one bottom row from sm up */}
        <div className="shrink-0 flex flex-col items-stretch sm:flex-row sm:items-end sm:justify-between gap-6 w-full max-w-[40rem] pb-[clamp(2rem,4vh,3.75rem)]">
          <p className="max-w-[26.875rem] text-[15px] leading-[1.75] text-[#b9c1bc] m-0">
            {t.introPre}
            <strong className="text-paper">{t.introName}</strong>
            {t.introPost}
          </p>

          <a
            href="#about"
            className="shrink-0 self-end grid place-items-center w-24 h-24 md:w-[106px] md:h-[106px] rounded-full border border-line font-mono text-[11px] text-center leading-relaxed transition-all duration-300 hover:bg-lime hover:text-ink hover:border-lime hover:-rotate-[13deg]"
          >
            {t.roundLinkLine1}
            <br />
            {t.roundLinkLine2}
          </a>
        </div>
      </section>
    </div>
  );
}
