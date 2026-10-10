"use client";

/*
  Client component by necessity: Next.js requires error boundaries to be
  client components so `reset` can re-render the failed subtree.
*/
export default function Error({ error, reset }) {
  return (
    <div className="shell">
      <main
        id="main"
        className="min-h-screen flex flex-col items-start justify-center py-24"
      >
        <div className="eyebrow">!! RUNTIME FAULT</div>

        <h1 className="font-serif font-bold tracking-tighter text-[clamp(2.8rem,9vw,6rem)] leading-[0.92] mt-8 mb-0">
          SOMETHING <span className="text-lime">BROKE.</span>
        </h1>

        <p className="mt-8 max-w-[560px] text-[15px] leading-[1.8] text-[#a9b3ac] m-0">
          An unexpected error occurred while rendering this page.
          <br />
          Terjadi kesalahan tak terduga saat merender halaman ini.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-10 inline-flex items-center gap-2 border border-lime/40 rounded px-5 py-3.5 font-mono text-[11px] tracking-[0.1em] text-lime transition-colors hover:bg-lime hover:text-ink cursor-pointer bg-transparent"
        >
          RETRY <span aria-hidden="true">↻</span>
        </button>
      </main>
    </div>
  );
}
