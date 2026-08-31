# Project logos — CONTRIBUTED TO section

Drop the official logo files here using exactly these filenames. The grid in
`components/ContributedTo.js` picks them up automatically; any file that is
missing falls back to a plain wordmark card, so nothing breaks while the set
is incomplete.

| Filename                 | Project           |
| ------------------------ | ----------------- |
| `prasaga.png`            | PraSaga           |
| `safle.png`              | Safle             |
| `krystal-wallet.png`     | Krystal Wallet    |
| `talaxeum.png`           | TALAXEUM          |
| `larix.png`              | Project Larix     |
| `channels-finance.png`   | Channels.finance  |
| `cryptoiz.png`           | Cryptoiz Research |
| `incrypto-school.png`    | InCrypto School   |

`.svg` is preferred where the project publishes one — if you use SVG, change
the extension in `lib/projects.js` to match.

## Requirements

- Official artwork only. No recreations, screenshots or watermarked copies.
- Transparent background (PNG-24 or SVG).
- Roughly 1000px wide for PNG is plenty; the grid renders them ~120px wide.
- Compress PNGs before committing (TinyPNG or `oxipng`) — these load on the
  homepage.

Logos render greyscale at rest and return to full colour on hover, so light
and dark marks both sit comfortably on the dark background without the
artwork itself being altered.
