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

  return (
    <div className="shell" id="top">
      <section className="min-h-[calc(100svh-82px)] py-8 lg:py-0 grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-10 relative">
        <div className="col-span-full h-11 border-b border-line hidden lg:flex items-center justify-between text-[#84908a] font-mono text-[10px] tracking-wide">
          <span className="text-lime flex items-center gap-2 before:content-['◈']">
            {t.mainnet}
          </span>
          <span>
            {t.block} <b className="text-paper font-normal">{block.toLocaleString("en-US")}</b> &nbsp;/&nbsp; {t.gas}
          </span>
          <span>
            {t.status} <b className="text-lime font-normal">{t.synced}</b>
          </span>
        </div>

        <div className="hidden lg:block absolute right-[-102px] top-11 w-[590px] h-[590px] border border-lime/20 rounded-full spin-slow -z-10">
          <span className="absolute inset-[70px] border border-dashed border-lime/25 rounded-full" />
        </div>

        <div
          aria-hidden="true"
          className="hidden lg:block absolute right-[-13%] top-[4%] w-[650px] h-[650px] rounded-full -z-10 breathe"
          style={{
            background:
              "radial-gradient(circle, rgba(200,255,92,.14), rgba(28,61,39,.08) 35%, transparent 68%)",
          }}
        />

        <div className="flex flex-col items-start justify-center md:justify-start pt-6 md:pt-8">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1 className="font-serif font-bold leading-[0.92] tracking-tighter text-[clamp(3.2rem,9vw,9rem)] lg:text-[clamp(2.6rem,6vw,4.5rem)] xl:text-[clamp(3.2rem,9vw,9rem)] my-8">
            <SplitText key={`${lang}-1`} as="span" text={t.h1Line1} className="block" />
            <SplitText key={`${lang}-2`} as="span" text={t.h1Line2} className="block text-lime" />
          </h1>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-end lg:items-start xl:items-end justify-between w-full mt-auto gap-6 xl:pr-11">
            <p className="max-w-[360px] text-[15px] leading-[1.75] text-[#b9c1bc]">
              {t.introPre}
              <strong className="text-paper">{t.introName}</strong>
              {t.introPost}
            </p>
            <a
              href="#about"
              className="shrink-0 grid place-items-center w-24 h-24 md:w-[106px] md:h-[106px] rounded-full border border-line font-mono text-[11px] text-center transition-all duration-300 hover:bg-lime hover:text-ink hover:border-lime hover:-rotate-[13deg]"
            >
              {t.roundLinkLine1}
              <br />
              {t.roundLinkLine2}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
          <ProfileScan />
        </div>
      </section>
    </div>
  );
}
