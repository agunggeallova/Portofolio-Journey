/*
  One-off image optimizer. Converts the hero photo and project logos to WebP.
  For the photo it also re-derives the hero's ASCII grid from both the source
  PNG and each WebP candidate, so we can see whether the lossy encode would
  visibly change the portrait before committing to it.
*/
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const RAMP = " .:-=+*%@#".split("");
const COLS = 58;
const CROP = { x: 0.275, y: 0.22, w: 0.46, h: 0.46 };

// Mirror of the algorithm in components/ProfileScan.js
async function asciiFrom(buf) {
  const meta = await sharp(buf).metadata();
  const { data, info } = await sharp(buf)
    .extract({
      left: Math.round(CROP.x * meta.width),
      top: Math.round(CROP.y * meta.height),
      width: Math.round(CROP.w * meta.width),
      height: Math.round(CROP.h * meta.height),
    })
    .resize(COLS, Math.max(1, Math.round(COLS * (CROP.h / CROP.w) * 0.52)))
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let min = 255, max = 0;
  const lums = [];
  for (let i = 0; i < info.width * info.height; i++) {
    // greyscale().raw() gives 1 byte per pixel
    const l = data[i];
    lums.push(l);
    if (l < min) min = l;
    if (l > max) max = l;
  }
  const range = Math.max(max - min, 1);
  let out = "";
  for (let i = 0; i < lums.length; i++) {
    const norm = (lums[i] - min) / range;
    out += RAMP[Math.min(RAMP.length - 1, Math.floor(norm * RAMP.length))];
  }
  return out;
}

function diffLines(a, b) {
  const A = a.split("\n"), B = b.split("\n");
  let changed = 0, chars = 0;
  for (let i = 0; i < Math.max(A.length, B.length); i++) {
    const la = A[i] || "", lb = B[i] || "";
    if (la !== lb) changed++;
    for (let j = 0; j < Math.max(la.length, lb.length); j++) {
      if (la[j] !== lb[j]) chars++;
    }
  }
  return { changedLines: changed, changedChars: chars };
}

(async () => {
  const pub = path.join(__dirname, "..", "public");

  // ---- photo: test lossy vs lossless against the original ASCII ----
  const photoPath = path.join(pub, "bagas-ady-santoso.png");
  const photoBuf = fs.readFileSync(photoPath);
  const baseAscii = await asciiFrom(photoBuf);
  console.log("photo original:", (photoBuf.length / 1024).toFixed(0) + "KB");

  for (const [label, opts] of [
    ["lossy-q85", { quality: 85, lossless: false }],
    ["lossless", { lossless: true }],
  ]) {
    const webp = await sharp(photoBuf).webp(opts).toBuffer();
    const a = await asciiFrom(webp);
    const d = diffLines(baseAscii, a);
    const outName = `bagas-ady-santoso-${label}.webp`;
    fs.writeFileSync(path.join(pub, outName), webp);
    console.log(
      `  ${label}: ${(webp.length / 1024).toFixed(0)}KB | ASCII diff -> lines:${d.changedLines} chars:${d.changedChars}`
    );
  }

  // ---- logos: 1000x500 -> 320px wide webp ----
  const logos = fs.readdirSync(path.join(pub, "logos", "projects")).filter((f) => f.endsWith(".png"));
  let before = 0, after = 0;
  for (const f of logos) {
    const p = path.join(pub, "logos", "projects", f);
    const src = fs.readFileSync(p);
    const webp = await sharp(src).resize({ width: 320 }).webp({ quality: 82 }).toBuffer();
    const out = p.replace(/\.png$/, ".webp");
    fs.writeFileSync(out, webp);
    before += src.length;
    after += webp.length;
    console.log(`  logo ${f}: ${(src.length / 1024).toFixed(0)}KB -> ${(webp.length / 1024).toFixed(1)}KB`);
  }
  console.log(`logos total: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
})();
