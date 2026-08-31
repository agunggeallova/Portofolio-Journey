import { ImageResponse } from "next/og";
import { OgCard, ogFonts, size, contentType } from "../lib/ogCard";

export const alt = "Bagas Ady Santoso — Web3 Growth, Product & Research";
export { size, contentType };

export default async function Image() {
  return new ImageResponse(<OgCard />, { ...size, fonts: await ogFonts() });
}
