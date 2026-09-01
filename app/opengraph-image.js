import { ImageResponse } from "next/og";
import { HeroCard, ogFonts, size, contentType } from "../lib/ogCard";

export const alt = "Bagas Ady Santoso — Web3 Growth, Product & Research";
export { size, contentType };

export default async function Image() {
  return new ImageResponse(<HeroCard />, { ...size, fonts: await ogFonts() });
}
