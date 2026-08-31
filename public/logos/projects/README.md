# Project logos — CONTRIBUTED TO section

Drop the official logo files here using exactly these filenames. The grid in
`components/ContributedTo.js` picks them up automatically; any file that is
missing falls back to a plain wordmark card, so nothing breaks while the set
is incomplete.

| Filename                 | Project           |
| ------------------------ | ----------------- |
| `plubit.png`             | PLUBIT            |
| `prasaga.png`            | PraSaga           |
| `safle.png`              | Safle             |
| `krystal-wallet.png`     | Krystal Wallet    |
| `talaxeum.png`           | TALAXEUM          |
| `larix.png`              | Project Larix     |
| `channels-finance.png`   | Channels.finance  |
| `taiko.png`              | Taiko             |

Cryptoiz Research and InCrypto School are intentionally wordmark-only —
no official artwork was available. To give them logos later, add the file
here and set its path in `lib/projects.js` (they are `logo: null` today).

`.svg` is preferred where the project publishes one — if you use SVG, change
the extension in `lib/projects.js` to match.

## Requirements

- Official artwork only. No recreations, screenshots or watermarked copies.
- Transparent background (PNG-24 or SVG).
- Roughly 1000px wide for PNG is plenty; the grid renders them ~120px wide.
- Compress PNGs before committing (TinyPNG or `oxipng`) — these load on the
  homepage.

Logos render as flat white silhouettes at rest and return to their true brand
colour on hover. Greyscale was tried first but preserves luminance, and
several of these wordmarks are near-black — Taiko and Safle measured about
1.7:1 against the card and were effectively invisible. The silhouette gives
every mark the same weight (6.8:1) without permanently altering the artwork.
