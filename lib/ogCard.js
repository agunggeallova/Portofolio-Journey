/*
  Shared Open Graph / Twitter card artwork.

  Rendered with next/og (Satori) rather than shipping a static image, so the
  card always matches the site's copy — change lib/site.js and the preview
  updates on the next build. Satori supports a subset of CSS: every element
  needs an explicit display, and fonts must be supplied as raw buffers.
*/

import { site } from "./site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#07090c";
const PANEL = "#0a0e0b";
const LIME = "#c8ff5c";
const PAPER = "#f2f4f0";
const MUTED = "#8d9790";
const LINE = "rgba(242,244,240,0.14)";

/*
  Google's CSS endpoint returns TTF (not woff2) when the request carries no
  modern browser UA, which is the format Satori can parse. Subsetting by the
  exact text keeps the download small. Any failure falls back to the built-in
  font rather than breaking the build.
*/
async function loadFont(family, weight, text) {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(
      text
    )}`;
    const css = await (await fetch(url)).text();
    const src = css.match(/src:\s*url\((.+?)\)\s*format\('(?:opentype|truetype)'\)/);
    if (!src) return null;
    const data = await (await fetch(src[1])).arrayBuffer();
    return { name: family.replace(/\+/g, " "), data, weight, style: "normal" };
  } catch {
    return null;
  }
}

export async function ogFonts() {
  const display = "BAGASDYNTO";
  const mono =
    "WEB3·PRODUCTGOWHESARC bagas@web3~$./profile-cardLIVE5+YRSINWEB3INDONESIA0xbagas.web.idGrowth&";

  const fonts = await Promise.all([
    loadFont("Space+Grotesk", 700, display + site.name),
    loadFont("DM+Mono", 500, mono + site.url + site.location + site.role),
  ]);

  return fonts.filter(Boolean);
}

export function OgCard() {
  const mono = "DM Mono";
  const display = "Space Grotesk";

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: INK,
        padding: 44,
      }}
    >
      {/* soft field glow, mirroring the hero's breathing radial */}
      <div
        style={{
          position: "absolute",
          top: -180,
          right: -140,
          width: 700,
          height: 700,
          borderRadius: 999,
          background:
            "radial-gradient(circle, rgba(200,255,92,0.16), rgba(28,61,39,0.07) 42%, rgba(7,9,12,0) 70%)",
          display: "flex",
        }}
      />

      {/* terminal window */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          border: `1px solid ${LINE}`,
          borderRadius: 18,
          background: PANEL,
          overflow: "hidden",
        }}
      >
        {/* chrome bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 30px",
            borderBottom: `1px solid ${LINE}`,
            background: "#0c100d",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ width: 13, height: 13, borderRadius: 99, background: "#ff5f57" }} />
              <div style={{ width: 13, height: 13, borderRadius: 99, background: "#febc2e" }} />
              <div style={{ width: 13, height: 13, borderRadius: 99, background: "#28c840" }} />
            </div>
            <div style={{ display: "flex", fontFamily: mono, fontSize: 19, color: MUTED }}>
              bagas@web3 ~ $ ./profile-card
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 9, height: 9, borderRadius: 99, background: LIME }} />
            <div
              style={{
                display: "flex",
                fontFamily: mono,
                fontSize: 17,
                letterSpacing: 2,
                color: LIME,
              }}
            >
              LIVE
            </div>
          </div>
        </div>

        {/* body */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between",
            padding: "48px 54px 44px 54px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: mono,
              fontSize: 21,
              letterSpacing: 5,
              color: LIME,
            }}
          >
            WEB3 · PRODUCT · GROWTH · RESEARCH
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontFamily: display,
                fontWeight: 700,
                fontSize: 104,
                lineHeight: 1.02,
                letterSpacing: -4,
                color: PAPER,
              }}
            >
              BAGAS ADY
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: display,
                fontWeight: 700,
                fontSize: 104,
                lineHeight: 1.02,
                letterSpacing: -4,
                color: LIME,
              }}
            >
              SANTOSO
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontFamily: mono,
                fontSize: 25,
                color: "#a9b3ac",
              }}
            >
              {site.role} · Community · Research
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", height: 1, background: LINE, marginBottom: 22 }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: mono,
                fontSize: 19,
                letterSpacing: 2,
                color: MUTED,
              }}
            >
              <div style={{ display: "flex" }}>
                {site.yearsInWeb3} YRS IN WEB3 · {site.location.toUpperCase()}
              </div>
              <div style={{ display: "flex", color: LIME }}>0xbagas.web.id</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
