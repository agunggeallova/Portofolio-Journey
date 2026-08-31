"use client";

import { useEffect, useRef, useState } from "react";

const RAMP = " .:-=+*%@#".split("");
const COLS = 58;

/*
  Crop fractions of the source photo. The head sits at roughly y 0.29-0.44
  of the 400x400 original, so a wider crop leaves it about a fifth of the
  frame and buries it in waterfall and foliage. This square window is
  centred on the head and cropped to head-and-shoulders, which puts the
  face in the upper half and roughly a third of the frame height.
*/
const CROP = { x: 0.275, y: 0.22, w: 0.46, h: 0.46 };

const INFO = [
  { label: "Subject", value: "Bagas Ady Santoso" },
  { label: "Handle", value: "@bagasady" },
  { label: "Role", value: "Web3 Growth & Product" },
  { label: "Status", value: "Research | Build | Grow" },
  { label: "Focus", value: "Growth, Product, Research" },
  { label: "Years Active", value: "4+" },
  { label: "Projects", value: "8" },
  { label: "Based In", value: "Indonesia" },
];

export default function ProfileScan() {
  const [ascii, setAscii] = useState("");
  const boxRef = useRef(null);
  const preRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.src = "/bagas-ady-santoso.png";
    img.onload = () => {
      if (cancelled) return;
      const cols = COLS;

      const sx = CROP.x * img.naturalWidth;
      const sy = CROP.y * img.naturalHeight;
      const sw = CROP.w * img.naturalWidth;
      const sh = CROP.h * img.naturalHeight;
      const rows = Math.max(1, Math.round(cols * (sh / sw) * 0.52));

      const canvas = document.createElement("canvas");
      canvas.width = cols;
      canvas.height = rows;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cols, rows);
      const { data } = ctx.getImageData(0, 0, cols, rows);

      let min = 255;
      let max = 0;
      const lums = new Array(cols * rows);
      for (let i = 0; i < cols * rows; i++) {
        const r = data[i * 4];
        const g = data[i * 4 + 1];
        const b = data[i * 4 + 2];
        const l = 0.299 * r + 0.587 * g + 0.114 * b;
        lums[i] = l;
        if (l < min) min = l;
        if (l > max) max = l;
      }
      const range = Math.max(max - min, 1);

      let out = "";
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const norm = (lums[y * cols + x] - min) / range;
          const idx = Math.min(RAMP.length - 1, Math.floor(norm * RAMP.length));
          out += RAMP[idx];
        }
        out += "\n";
      }
      setAscii(out);
    };
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!ascii) return;
    const box = boxRef.current;
    const pre = preRef.current;
    if (!box || !pre) return;

    function fit() {
      pre.style.transform = "none";
      const boxRect = box.getBoundingClientRect();
      const preRect = pre.getBoundingClientRect();
      if (!preRect.width || !preRect.height) return;
      const scaleX = boxRect.width / preRect.width;
      const scaleY = boxRect.height / preRect.height;
      pre.style.transformOrigin = "top left";
      pre.style.transform = `scale(${scaleX}, ${scaleY})`;
    }

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(box);
    // ResizeObserver notifications are delivered as part of the rendering
    // steps, so they can be skipped while the page is throttled. A plain
    // resize listener keeps a stale scale from leaving a gap in the panel.
    addEventListener("resize", fit);
    return () => {
      ro.disconnect();
      removeEventListener("resize", fit);
    };
  }, [ascii]);

  return (
    <div className="float-y w-full max-w-[520px]">
      <div className="border border-lime/30 bg-[#080b09] rounded-lg overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,.45)]">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-line bg-[#0c100d]">
          <div className="flex items-center gap-3">
            <span className="flex gap-1.5">
              <i className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] inline-block" />
              <i className="w-2.5 h-2.5 rounded-full bg-[#febc2e] inline-block" />
              <i className="w-2.5 h-2.5 rounded-full bg-[#28c840] inline-block" />
            </span>
            <span className="font-mono text-[10px] text-[#8d9790] hidden sm:inline">
              bagas@web3 ~ $ ./profile-scan --live
            </span>
          </div>
          <span className="flex items-center gap-1.5 font-mono text-[9px] text-lime tracking-wide">
            <i className="w-1.5 h-1.5 rounded-full bg-lime pulse-dot shadow-[0_0_9px_var(--lime)]" />
            LIVE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1.15fr_1fr]">
          <div className="border-b sm:border-b-0 sm:border-r border-line p-3">
            <div className="font-mono text-[9px] tracking-wide text-[#5c665f] mb-2">VISUAL_MAP</div>
            <div ref={boxRef} className="relative w-full aspect-square overflow-hidden">
              <pre
                ref={preRef}
                className="absolute top-0 left-0 font-mono text-lime leading-[1.05] whitespace-pre select-none m-0"
                style={{ fontSize: "8px" }}
                aria-hidden="true"
              >
                {ascii || "SCANNING..."}
              </pre>
              <div className="scanline" />
            </div>
          </div>

          <div className="p-4">
            <div className="font-mono text-[9px] tracking-wide text-[#5c665f] mb-3">SYSTEM.INFO</div>
            <dl className="space-y-2.5">
              {INFO.map((item) => (
                <div key={item.label} className="flex justify-between gap-3 font-mono text-[10px]">
                  <dt className="text-[#6d786f] whitespace-nowrap">{item.label}</dt>
                  <dd className="text-paper text-right m-0">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
