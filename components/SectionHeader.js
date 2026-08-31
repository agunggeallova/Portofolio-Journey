"use client";

import { useReveal } from "./useReveal";

/*
  The two-column section header (label on the left, heading on the right)
  was repeated in every section. Centralising it keeps the eyebrow
  alignment and heading scale identical across the page.
*/
export default function SectionHeader({
  eyebrow,
  pre,
  highlight,
  post,
  intro,
  dark = false,
  className = "",
}) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal grid grid-cols-1 md:grid-cols-[32%_1fr] gap-6 mb-12 md:mb-16 ${className}`}
    >
      <div className={`eyebrow section-eyebrow ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</div>

      <div className="max-w-[830px]">
        <h2 className="font-serif font-semibold leading-[1.04] tracking-tighter text-[clamp(2.2rem,4.5vw,4.8rem)] m-0">
          {pre}
          <span className={dark ? "text-[#477218]" : "text-lime"}>{highlight}</span>
          {post}
        </h2>
        {intro ? (
          <p
            className={`mt-6 max-w-[560px] text-[15px] leading-[1.8] m-0 ${
              dark ? "text-[#586057]" : "text-[#a9b3ac]"
            }`}
          >
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}
