# Production regression pass — 9 September 2026

Baseline: `751d8c3459be43a25c24d9628f461a8ec3dfe32a` on main. Reviewed the nine commits specified in the QA brief. No redesign or photography regeneration.

## Changes

- `assets/css/styles.css`: removed obsolete video-control styles, user-playing exception, blanket contain/letterbox layer, withdrawn staircase background and conflicting historical gallery aspect ratios, filters, zoom transforms and focal points. Preserved mobile Portale normal document flow and unrelated layout rules.
- `assets/css/gallery-editorial.css`: authoritative inline crop/focal-point presentation, no `!important` declarations; feature-image zoom cursor/focus outline; hidden single-photo navigation; full-frame viewer preserved.
- `assets/js/site.js`: single-photo arrows hidden and disabled, no-op single-photo navigation, refresh an open viewer after language changes, remove obsolete video-control class handling.
- `assets/js/i18n.js`: removed only the two obsolete Play/Pause translation rows.
- `index.html`: new resource cache versions and same-artwork lossless WebP logo.
- `assets/img/logo-il-palazzetto-primary.webp`: new optimized asset. Original PNG retained.
- `QA_REPORT.md`: this handoff.

## Verification performed

- JavaScript syntax checks on site.js and i18n.js; git diff whitespace check and final diff inspection.
- parse5 HTML parsing and unique-ID checks for index, privacy and cookie pages; PostCSS parsing of both stylesheets; local HTML/CSS asset-reference existence checks.
- Five-slide Dimora order/count verified. Staircase files 10/11/12 remain stored and absent from live markup. No ai-* property images in live markup or observed browser requests. Official-data section stays hidden.
- Chrome and local Playwright WebKit: widths 1440, 1024, 390, 393 and 430, both motion preferences; homepage, all six hash destinations, horizontal overflow, inline cover, hidden official identifiers, JavaScript and local HTTP errors.
- Menus, language-menu UI and runtime IT/EN/FR/ES/DE changes; translated lane caption/alt, image action labels and carousel-dot labels.
- Carousel arrows and synthetic touch swipes; suppression of accidental opening immediately after swipe; subsequent click opening.
- Dimora, both rooms, Services and single feature-photo viewer: Enter/Space, Escape, backdrop, left/right arrows, synthetic viewer swipe, focus return, single-photo arrow visibility and full-frame contain.
- Map has no iframe before consent; consent creates the iframe (Google response mocked locally, not a live Google rendering test).
- Chromium captured the prepared mailto navigation, recipient and encoded message using dummy QA input. No email sent.
- Autoplay refusal simulated by rejecting play(); poster and layout remained available. Reduced-motion path checked with playback paused. No promise of autoplay where device/browser policy disallows it.
- Privacy/cookie rendering checked at 390 and 1440 in both engines. Loaded-photo screenshots inspected; lazy photographs decoded after scrolling.
- Baseline-vs-cleaned CSS comparison: identical gallery computed width, height, cover mode, focal position and transform at all five widths.

## Performance and intentionally retained behaviour

Primary logo: 2,726,733-byte PNG → 1,342,082-byte lossless WebP (50.8% smaller, 1,384,651 bytes saved). Same 3200×3200 artwork. Decoded composites are pixel-identical on champagne and black; differences in raw data occur in fully transparent RGB values. Original PNG and alternate logos retained.

Video stays decorative, muted, looped, playsinline, preload=metadata; permitted playback attempted, reduced motion respected, hero-video-poster.jpg retained. No manual video button. Portale does not depend on playback.

Inline photographs retain editorial cover crops. One shared dialog exposes complete photographs with contain. No legacy photo files deleted. Staircase originals remain withdrawn. No content, official numbers or visual identity changed.

Header photos remain eager: avoiding route flashes is more important than speculative lazy-loading changes. Video bytes and existing legal content/hosting architecture left unchanged. Unused historical binary assets retained because removal provides no first-screen network benefit and risks hidden dependencies.

## Hosting and test limitations

Live HEAD response from GitHub Pages was inspected. It returned GitHub's HSTS and `Cache-Control: max-age=600`, but not the CSP, X-Frame-Options, Permissions-Policy or other response policies declared in `_headers`. That file does not configure the current host. HTML referrer metadata is separate; no hosting changes made.

No physical Safari/iPhone was available. Local WebKit testing and code review are not a substitute for real-device Safari testing, iOS low-power/autoplay policies, browser chrome or physical touch. Swipe tests used synthetic touch events. Final client-device confirmation remains advisable.
