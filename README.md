# Bagas Ady Santoso — Portfolio

Personal portfolio for a Web3 growth, product and research professional.
Built with **Next.js** (App Router) and Tailwind, deployed on Vercel.

## Structure

```
app/
  layout.js          metadata, Open Graph, Person JSON-LD
  page.js            homepage section order (00 hero → 08 contact)
  globals.css        design tokens, section rhythm, a11y helpers
  api/               serverless endpoints for the Lab tools
  work/[slug]/       case study pages
components/          one component per section, plus shared primitives
lib/
  site.js            identity + outbound links (single source of truth)
  translations.js    all EN/ID copy
  caseStudies.js     case study content
public/
  market.html        Lab experiment 001
  scanner.html       Lab experiment 002
```

Content lives in `lib/`, not in components — edit copy there and both
languages stay in sync.

## Local development

1. `npm install`
2. `npm run dev` → http://localhost:3000
3. `npm run build` for a production build

## Environment variables

`CMC_API_KEY` — CoinMarketCap key used by `/api/market` (Market Terminal).
Set it in **Vercel → Project Settings → Environment Variables**. The scanner
endpoints use public APIs (GoPlus, DexScreener) and need no key.
