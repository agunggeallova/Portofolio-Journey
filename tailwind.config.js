/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07090c",
        paper: "#f2f4f0",
        muted: "#9da6a0",
        lime: "#c8ff5c",
        line: "rgba(242,244,240,.12)",
      },
      fontFamily: {
        serif: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
