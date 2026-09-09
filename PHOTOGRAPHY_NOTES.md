# Stefano C photography integration

All nine supplied photographs appear in the secondary Palazzo Farnese cultural gallery on La dimora, after the guest-house carousel and before the room CTA. They are explicitly described as Palazzo/territorial context, not accommodation interiors. The existing lightbox is reused; inline cover crops and full-frame contain remain unchanged.

## Added image files

All files below are in `assets/img/palazzo/`. Each numbered stem has both `.webp` (full viewer) and `-900.webp` (responsive preview) versions. Sizes are bytes.

| Supplied original | Added stem | Full dimensions | Full bytes | Preview bytes |
|---|---|---|---:|---:|
| facciata palazzo farnese.jpeg | 01-facade | 2000×1333 | 477892 | 98654 |
| giardini 3.jpeg | 02-garden-palace | 2000×1333 | 871720 | 187228 |
| giardini 4.jpeg | 03-garden-fountain | 2000×1330 | 718934 | 150262 |
| giardini2.jpeg | 04-garden-architecture | 2000×1372 | 770116 | 154020 |
| camera mappamondo 2.jpeg | 05-mappamondo-hall | 2000×1335 | 656438 | 140364 |
| camera mappamondo.jpeg | 06-mappamondo-ceiling | 2000×1500 | 799842 | 186620 |
| scala regia chiocciola.jpeg | 07-historic-staircase | 2000×1334 | 577376 | 109258 |
| palazzo dall'alto vista paese.jpeg | 08-palace-and-village | 2000×1124 | 659024 | 133602 |
| palazzo vista colonie.jpeg | 09-caprarola-panorama | 2000×1124 | 703432 | 143090 |

The last panorama also serves as the Contact banner, with a visible cultural/location caption. Full set: 6,234,774 bytes; responsive previews: 1,303,098 bytes. WebP quality 86 full / 84 previews; no lighting, object or artwork generation. Original large JPEGs are not deployed. Below-fold gallery images use lazy loading, async decoding, dimensions and responsive srcsets; the viewer requests the full version explicitly.

Additional assets from `loghi camere entrata.PNG`:

- `room-mark-mappamondo.png`: 620×620, 150848 bytes. Source crop origin (12,271).
- `room-mark-belvedere.png`: 620×620, 178623 bytes. Source crop origin (616,272).

The left/right artwork was isolated without scaling or distortion, centred into square crops with padding. White was converted to transparency while retaining the original black/grey line-art coverage. No redraw. Each corresponding room-copy panel has a decorative pseudo-element behind its text, opacity 0.10, pointer-events none, contain sizing and no layout impact. No blending modes.

## Repetition changes

- Retained `14-view-to-lane.webp` only in the Dimora feature, the sole visible street/window photograph.
- Removed `13-historic-lane.webp` from the Dimora banner and carousel; removed its obsolete home background declaration and changed the structured-data image to actual room photography.
- Dimora banner now uses existing `07-room-mappamondo-alt.webp` (actual accommodation).
- Contact banner no longer repeats `14-view-to-lane.webp`; it uses the labelled panorama above.
- Property carousel now has four shared-area photographs, initial count 01 / 04. Source originals remain stored. Withdrawn property staircase images 10/11/12 and ai-* photographs are not live.

## Modified runtime files

`index.html`, `assets/css/styles.css`, `assets/css/gallery-editorial.css`, `assets/js/site.js`, `assets/js/i18n.js`. This notes file is also added. No review/testimonial, hero-video, Portale, legal or hosting changes.

## Checks performed before the request to wrap up

JS syntax; HTML and CSS parsing; unique IDs; local paths and srcsets; curation/reference counts; transparent emblem dimensions; diff whitespace checks.

Chrome and local WebKit at 390, 393, 430, 1024 and 1440: five page routes, image decode, no horizontal overflow or JS/local HTTP errors, correct room watermarks at 10%, reduced-motion homepage preserved. Tested all nine full-resolution images in the shared viewer, keyboard Enter/Space/Escape/arrows, focus return, five languages including open-dialog language refresh, existing property carousel and both room/common/feature groups. Screenshots inspected; final panorama confirmed in the actual scrolled viewport. No physical iPhone/Safari test was available.
