"use client";

import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { useReveal } from "./useReveal";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

function ProjectCard({ project, contributionLabel }) {
  const isExternal = Boolean(project.external);
  const Wrapper = isExternal ? "a" : Link;
  const linkProps = isExternal
    ? { href: project.href, target: "_blank", rel: "noreferrer noopener" }
    : { href: project.href };

  return (
    <article className="group flex flex-col border border-line rounded-lg bg-gradient-to-b from-white/[0.03] to-transparent p-6 md:p-7 transition-colors hover:border-lime/35 hover:from-lime/[0.05] focus-within:border-lime/50">
      <p className="font-mono text-[10px] tracking-[0.12em] text-lime m-0">{project.category}</p>

      <h3 className="font-serif font-semibold tracking-tight text-[clamp(1.5rem,2.4vw,2.1rem)] mt-3 mb-0">
        {project.name}
      </h3>

      <p className="mt-4 text-[14px] leading-[1.75] text-[#a9b3ac] m-0">{project.description}</p>

      <div className="mt-5 pt-4 border-t border-line/70">
        <p className="font-mono text-[9px] tracking-[0.14em] text-[#6d786f] m-0">
          {contributionLabel}
        </p>
        <p className="mt-2 text-[13px] leading-[1.7] text-[#87938a] m-0">{project.contribution}</p>
      </div>

      <ul className="flex flex-wrap gap-2 mt-5 mb-0 p-0 list-none">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="border border-line rounded-full px-3 py-1.5 font-mono text-[10px] tracking-wide text-[#c3c9c5]"
          >
            {tag}
          </li>
        ))}
      </ul>

      <Wrapper
        {...linkProps}
        className="mt-auto pt-6 inline-flex items-center gap-2 self-start font-mono text-[11px] tracking-[0.1em] text-lime transition-colors hover:text-paper"
      >
        <span className="border-b border-lime/40 pb-1">{project.cta}</span>
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
        {isExternal ? <span className="sr-only">(opens in a new tab)</span> : null}
      </Wrapper>
    </article>
  );
}

export default function SelectedWork() {
  const { lang } = useLanguage();
  const t = translations[lang].work;
  const gridRef = useReveal();

  return (
    <div className="shell">
      <section id="work" className="section-y scroll-mt-24">
        <SectionHeader
          eyebrow={t.eyebrow}
          pre={t.headingPre}
          highlight={t.headingHighlight}
          post={t.headingPost}
          intro={t.intro}
        />

        <div
          ref={gridRef}
          className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 md:ml-[32%]"
        >
          {t.projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              contributionLabel={t.contributionLabel}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
