"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";
import { contributedProjects } from "../lib/projects";

/*
  One cell of the logo grid.

  Logos sit in a fixed-height box with object-contain so a wide wordmark and a
  square mark keep their own aspect ratio while occupying the same visual
  weight. If the file is missing (or fails to load) the cell falls back to the
  wordmark treatment this section used before logos existed.
*/
function LogoCell({ project }) {
  const [failed, setFailed] = useState(false);
  const showLogo = Boolean(project.logo) && !failed;

  return (
    <li className="group bg-[#0d110e] px-4 py-6 flex flex-col items-center justify-center gap-3 text-center transition-colors hover:bg-[#141d13]">
      {showLogo ? (
        <span className="h-9 w-full grid place-items-center">
          <img
            src={project.logo}
            alt={`${project.name} logo`}
            loading="lazy"
            decoding="async"
            width={120}
            height={36}
            onError={() => setFailed(true)}
            className="max-h-9 w-auto max-w-[120px] object-contain grayscale opacity-60 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
          />
        </span>
      ) : null}

      {/* without a logo this stays identical to the pre-logo card, so the
          section is visually unchanged until the artwork is dropped in */}
      <span
        className={`font-serif font-semibold tracking-tight transition-colors group-hover:text-paper ${
          showLogo ? "text-[13px] text-[#87938a]" : "text-[14px] text-[#c3c9c5]"
        }`}
      >
        {project.name}
      </span>
    </li>
  );
}

export default function ContributedTo() {
  const { lang } = useLanguage();
  const t = translations[lang].contributed;
  const ref = useReveal();

  return (
    <section
      className="border-y border-line"
      style={{ background: "linear-gradient(135deg,#0a0f0a 0%,#131f10 65%,#0a0c0c 100%)" }}
    >
      <div className="shell">
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-[32%_1fr] py-14 md:py-16 gap-8">
          <div>
            <div className="eyebrow section-eyebrow">{t.eyebrow}</div>
            <p className="mt-5 max-w-[280px] text-[13px] leading-[1.7] text-[#87938a] m-0">
              {t.note}
            </p>
          </div>

          {/* Column counts must divide the project count exactly: the 1px gaps
              are the container's background showing through, so an incomplete
              final row would render as a pale block. 10 items → 2 or 5. */}
          <ul className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-line border border-line rounded-lg overflow-hidden m-0 p-0 list-none">
            {contributedProjects.map((project) => (
              <LogoCell key={project.name} project={project} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
