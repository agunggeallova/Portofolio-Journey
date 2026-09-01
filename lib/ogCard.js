/*
  Share card artwork, rendered with next/og (Satori).

  Two shapes:
  - HeroCard      mirrors the site's above-the-fold composition, used for the
                  homepage so a shared link previews what visitors land on.
  - CaseStudyCard a focused terminal panel carrying a project's own copy.

  Satori supports a subset of CSS: every element needs an explicit display,
  fonts arrive as raw buffers, and text has to sit inside an element.
*/

import { site } from "./site";
import { asciiPortrait } from "./asciiPortrait";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#07090c";
const PANEL = "#080b09";
const CHROME = "#0c100d";
const LIME = "#c8ff5c";
const PAPER = "#f2f4f0";
const MUTED = "#8d9790";
const DIM = "#6d786f";
const LINE = "rgba(242,244,240,0.12)";

const MONO = "DM Mono";
const DISPLAY = "Space Grotesk";

/*
  Google's CSS endpoint returns TTF (not woff2) when the request carries no
  modern browser UA, which is the format Satori can parse. Any failure falls
  back to the built-in font rather than breaking the build.
*/
async function loadFont(family, weight) {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`;
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
  const fonts = await Promise.all([loadFont("Space+Grotesk", 700), loadFont("DM+Mono", 500)]);
  return fonts.filter(Boolean);
}

/* ---------- shared pieces ---------- */

function GridLines() {
  const columns = [140, 300, 460, 620, 780, 940, 1100];
  const rows = [110, 250, 390, 530];

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex" }}>
      {columns.map((x) => (
        <div
          key={`c${x}`}
          style={{
            position: "absolute",
            left: x,
            top: 0,
            width: 1,
            height: "100%",
            background: "rgba(200,255,92,0.05)",
            display: "flex",
          }}
        />
      ))}
      {rows.map((y) => (
        <div
          key={`r${y}`}
          style={{
            position: "absolute",
            top: y,
            left: 0,
            height: 1,
            width: "100%",
            background: "rgba(200,255,92,0.05)",
            display: "flex",
          }}
        />
      ))}
    </div>
  );
}

function ChromeBar({ label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "11px 16px",
        borderBottom: `1px solid ${LINE}`,
        background: CHROME,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 9, height: 9, borderRadius: 99, background: "#ff5f57" }} />
          <div style={{ width: 9, height: 9, borderRadius: 99, background: "#febc2e" }} />
          <div style={{ width: 9, height: 9, borderRadius: 99, background: "#28c840" }} />
        </div>
        <div style={{ display: "flex", fontFamily: MONO, fontSize: 12, color: MUTED }}>{label}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        <div style={{ width: 6, height: 6, borderRadius: 99, background: LIME }} />
        <div
          style={{ display: "flex", fontFamily: MONO, fontSize: 11, letterSpacing: 1.5, color: LIME }}
        >
          LIVE
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 14 }}>
      <div style={{ display: "flex", fontFamily: MONO, fontSize: 11, color: DIM }}>{label}</div>
      <div
        style={{
          display: "flex",
          fontFamily: MONO,
          fontSize: 11,
          color: PAPER,
          textAlign: "right",
          maxWidth: 132,
        }}
      >
        {value}
      </div>
    </div>
  );
}

/* ---------- homepage card ---------- */

export function HeroCard() {
  const headline = [
    { text: "BUILDING", accent: false, indent: 0 },
    { text: "FOR", accent: false, indent: 20 },
    { text: "THE OPEN", accent: true, indent: 0 },
    { text: "WEB.", accent: true, indent: 16 },
  ];

  const ticker = ["COMMUNITY GROWTH", "WEB3 STRATEGY", "CREATIVE DIRECTION", "BLOCKCHAIN EDUCATION"];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        background: INK,
      }}
    >
      <GridLines />

      {/* the hero's breathing glow, sitting behind the terminal */}
      <div
        style={{
          position: "absolute",
          top: -150,
          right: -130,
          width: 620,
          height: 620,
          borderRadius: 999,
          background:
            "radial-gradient(circle, rgba(200,255,92,0.15), rgba(28,61,39,0.07) 40%, rgba(7,9,12,0) 70%)",
          display: "flex",
        }}
      />
      {/* orbital ring */}
      <div
        style={{
          position: "absolute",
          top: 60,
          right: -160,
          width: 520,
          height: 520,
          borderRadius: 999,
          border: "1px solid rgba(200,255,92,0.16)",
          display: "flex",
        }}
      />

      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          padding: "0 52px",
          gap: 30,
        }}
      >
        {/* left: eyebrow, headline, intro */}
        <div style={{ display: "flex", flexDirection: "column", width: 600 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <div style={{ width: 7, height: 7, borderRadius: 99, background: LIME }} />
            <div
              style={{
                display: "flex",
                fontFamily: MONO,
                fontSize: 15,
                letterSpacing: 3,
                color: LIME,
              }}
            >
              WEB3 · PRODUCT · GROWTH · RESEARCH
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 26 }}>
            {headline.map((line) => (
              <div
                key={line.text}
                style={{
                  display: "flex",
                  marginLeft: line.indent,
                  fontFamily: DISPLAY,
                  fontWeight: 700,
                  fontSize: 72,
                  lineHeight: 0.92,
                  letterSpacing: -3,
                  color: line.accent ? LIME : PAPER,
                }}
              >
                {line.text}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 30,
              maxWidth: 470,
              fontFamily: MONO,
              fontSize: 15,
              lineHeight: 1.6,
              color: "#a9b3ac",
            }}
          >
            {site.name} — Web3 builder working across growth, product, community, research, and
            emerging technology.
          </div>
        </div>

        {/* right: the profile-scan terminal */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 466,
            border: `1px solid rgba(200,255,92,0.26)`,
            borderRadius: 12,
            background: PANEL,
            overflow: "hidden",
          }}
        >
          <ChromeBar label="bagas@web3 ~ $ ./profile-scan --live" />

          <div style={{ display: "flex" }}>
            {/* ascii portrait */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 250,
                padding: "12px 10px 12px 14px",
                borderRight: `1px solid ${LINE}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontFamily: MONO,
                  fontSize: 9,
                  letterSpacing: 1.4,
                  color: DIM,
                  marginBottom: 8,
                }}
              >
                VISUAL_MAP
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {asciiPortrait.map((line, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      fontFamily: MONO,
                      fontSize: 6.4,
                      lineHeight: "7.1px",
                      color: LIME,
                      whiteSpace: "pre",
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>

            {/* system info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                padding: "12px 14px",
                gap: 9,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontFamily: MONO,
                  fontSize: 9,
                  letterSpacing: 1.4,
                  color: DIM,
                  marginBottom: 2,
                }}
              >
                SYSTEM.INFO
              </div>
              <InfoRow label="Subject" value={site.name} />
              <InfoRow label="Handle" value="@bagasady" />
              <InfoRow label="Role" value="Web3 Growth & Product" />
              <InfoRow label="Focus" value="Growth · Product · Community · Research" />
              <InfoRow label="Status" value="Researching · Building · Shipping" />
              <InfoRow label="Experience" value={`${site.yearsInWeb3} Years in Web3`} />
              <InfoRow label="Based" value={site.location} />
            </div>
          </div>
        </div>
      </div>

      {/* bottom ticker, as on the site */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 22,
          padding: "13px 0",
          borderTop: `1px solid ${LINE}`,
        }}
      >
        {ticker.map((item, i) => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: 22 }}>
            {/* the site's ✦ separator isn't in either loaded face and Satori has
                no glyph fallback, so it is drawn as a rotated square instead */}
            {i > 0 ? (
              <div
                style={{
                  width: 7,
                  height: 7,
                  background: LIME,
                  transform: "rotate(45deg)",
                  display: "flex",
                }}
              />
            ) : null}
            <div
              style={{
                display: "flex",
                fontFamily: MONO,
                fontSize: 13,
                letterSpacing: 1.4,
                color: "#c4ccc7",
              }}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- case study card ---------- */

export function CaseStudyCard({ eyebrow, titleTop, titleBottom, subtitle, command, footLeft }) {
  const longest = Math.max(titleTop.length, (titleBottom || "").length);
  const titleSize = longest > 14 ? 68 : longest > 10 ? 86 : 104;

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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          border: `1px solid ${LINE}`,
          borderRadius: 18,
          background: "#0a0e0b",
          overflow: "hidden",
        }}
      >
        <ChromeBar label={command} />

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
            style={{ display: "flex", fontFamily: MONO, fontSize: 21, letterSpacing: 5, color: LIME }}
          >
            {eyebrow}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontFamily: DISPLAY,
                fontWeight: 700,
                fontSize: titleSize,
                lineHeight: 1.02,
                letterSpacing: -4,
                color: PAPER,
              }}
            >
              {titleTop}
            </div>
            {titleBottom ? (
              <div
                style={{
                  display: "flex",
                  fontFamily: DISPLAY,
                  fontWeight: 700,
                  fontSize: titleSize,
                  lineHeight: 1.02,
                  letterSpacing: -4,
                  color: LIME,
                }}
              >
                {titleBottom}
              </div>
            ) : null}
            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontFamily: MONO,
                fontSize: 25,
                color: "#a9b3ac",
              }}
            >
              {subtitle}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", height: 1, background: LINE, marginBottom: 22 }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: MONO,
                fontSize: 19,
                letterSpacing: 2,
                color: MUTED,
              }}
            >
              <div style={{ display: "flex" }}>{footLeft}</div>
              <div style={{ display: "flex", color: LIME }}>0xbagas.web.id</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
