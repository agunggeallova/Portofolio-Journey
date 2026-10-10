import Link from "next/link";

/*
  Server component on purpose: the 404 must render even when JS fails or
  hasn't loaded yet, so it stays out of the client LanguageContext.
*/
export default function NotFound() {
  return (
    <div className="shell">
      <main
        id="main"
        className="min-h-screen flex flex-col items-start justify-center py-24"
      >
        <div className="eyebrow">04 / SIGNAL LOST</div>

        <h1 className="font-serif font-bold tracking-tighter text-[clamp(3.5rem,14vw,9rem)] leading-[0.9] mt-8 mb-0">
          404
          <span className="block text-lime">NOT FOUND.</span>
        </h1>

        <p className="mt-8 max-w-[560px] text-[15px] leading-[1.8] text-[#a9b3ac] m-0">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          <br />
          Halaman yang Anda cari tidak ada atau sudah dipindahkan.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 border border-lime/40 rounded px-5 py-3.5 font-mono text-[11px] tracking-[0.1em] text-lime transition-colors hover:bg-lime hover:text-ink"
        >
          <span aria-hidden="true">←</span> BACK HOME
        </Link>
      </main>
    </div>
  );
}
