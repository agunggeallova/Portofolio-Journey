"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const glow = ref.current;
    function move(e) {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    }
    addEventListener("pointermove", move);
    return () => removeEventListener("pointermove", move);
  }, []);

  return <div ref={ref} className="cursor-glow" />;
}
