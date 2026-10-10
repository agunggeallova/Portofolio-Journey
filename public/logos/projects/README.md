# Project logos — CONTRIBUTED TO section

Drop the official logo files here using exactly these filenames. The grid in
`components/ContributedTo.js` picks them up automatically; any file that is
missing falls back to a plain wordmark card, so nothing breaks while the set
is incomplete.

| Filename                 | Project           |
| ------------------------ | ----------------- |
| `plubit.webp`            | PLUBIT            |
| `prasaga.webp`           | PraSaga           |
| `safle.webp`             | Safle             |
| `krystal-wallet.webp`    | Krystal Wallet    |
| `talaxeum.webp`          | TALAXEUM          |
| `larix.webp`             | Project Larix     |
| `channels-finance.webp`  | Channels.finance  |
| `taiko.webp`             | Taiko             |

Cryptoiz Research and InCrypto School are intentionally wordmark-only —
no official artwork was available. To give them logos later, add the file
here and set its path in `lib/projects.js` (they are `logo: null` today).

`.svg` is preferred where the project publishes one — if you use SVG, change
the extension in `lib/projects.js` to match. Otherwise convert to `.webp`
(the current set was converted from the original 1000x500 PNGs, which
totalled 560KB; the WebP set is 47KB).

## Requirements

- Official artwork only. No recreations, screenshots or watermarked copies.
- Transparent background (WebP, PNG-24 or SVG).
- Roughly 320px wide for WebP is plenty; the grid renders them ~120px wide.
- Convert to WebP before committing — these load on the homepage.
  `scripts/optimize-images.js` shows the conversion used for the current set.

Logos render as flat white silhouettes at rest and return to their true brand
colour on hover. Greyscale was tried first but preserves luminance, and
several of these wordmarks are near-black — Taiko and Safle measured about
1.7:1 against the card and were effectively invisible. The silhouette gives
every mark the same weight (6.8:1) without permanently altering the artwork.
