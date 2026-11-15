# loanpay-tax DESIGN.md — Filing Workspace local integration (V2 approved)

Source: `.omo/upgrade-20261115/DESIGN.md §0` + `DISTINCT-IDENTITIES-V2.md (tax row)` + `CONTRACT.md` + `LOCAL-ROLLOUT.md` + `concepts-v2/tax/index.html` + `concepts-v2/tax/interior.html` + `media/finance/RECORD.md`.
Status: local product integration. Scoped paper chrome on shared shell + home. Tool islands byte-preserved dark.

## Tokens: surface / ink / accent / line + scoped contrast

- Paper chrome (shared shell + home only): paper `#F4F5F3`, card `#FFFFFF`, ink `#17211B`, muted `#55625B`, line `#D8DDD6`, accent `#245A4A` (links/focus/active only). Classes: `.tax-shell`, `.tax-shell-foot`, `.tax-home-shell`, `.tax-rules-rail`, `.tax-home-card`, `.tax-mono-label`.
- Dark islands preserved: existing `body #07111F`, `.glass-panel`/`.glass-card` gradients + `rgba(255,248,235,.12)` hairlines stay byte-identical for all `calculator.tsx` islands and guide heroes. No blind `* {color:white}` inversion; light selectors are explicitly scoped to `.tax-*`.
- Contrast intent (browser-measured approval still required): `#17211B` on `#F4F5F3` ≈ 13:1; `#245A4A` on `#FFFFFF` ≈ 7:1; `#55625B` on `#FFFFFF` ≈ 6:1; ivory on dark islands unchanged ≈ 15:1. No Lighthouse numbers claimed.

## Type: system sans body + mono labels, no serif display

- Body: system-ui stack, 1.6–1.75 body, 1.4 tool labels. H1/H2 keep existing weight, tracking tight only on home hero.
- Mono: `ui-monospace,SFMono-Regular,Menlo,Consolas,monospace` 12px/1.6 for eyebrows, rules rail codes (`filing_status`, `gross_income`, `extra_deductions`), badges. Mono appears only in labels/codes, never body copy.
- Numbers: existing `tabular-nums` in islands untouched; home cards inherit tabular for badge counts where rendered.

## Primitives map: local classes → network families

| # | Primitive | Local mapping (actual) |
|---|---|---|
| 1 | `SiteHeader` | `app/layout.tsx Header` → `.tax-shell` paper bar, wordmark + `.tax-mono` tag `FILING WORKSPACE · 2026 REFS`, 6 inline links (`nav aria-label="Primary"`), accent links, 2px accent focus ring. No overlay panel in this wave. |
| 2 | `SiteFooter` | `app/layout.tsx Footer` → `.tax-shell-foot` paper, same 6 links + Privacy Policy + 5 network portals + AdSense/consent lines byte-preserved. No sticky behavior. |
| 3 | `HomeHero` | `app/page.tsx` → `.tax-home-shell` paper panel, `.tax-mono-label` eyebrow `Tax · Filing Workspace`, H1 preserved `Simple US Tax Estimators in Plain English`, lede preserved, 2 CTAs preserved (`/federal-income-tax-calculator-2026`, `/tax-filing-checklist`). No inputs in hero. |
| 4 | `ToolIsland` | Untouched: 18 `calculator.tsx` islands stay dark client islands (`"use client"` + `useState`), formulas/SHA pinned. Paper chrome never invades island interiors. |
| 5 | `LedgerTable` | Untouched guide tables keep dark `border-white/10` system. No new tables in this wave. |
| 6 | `Figure` | Home small `figure.tax-figure` only: `/photos/tax.webp` 1600x1066, `height:220px cover`, `loading=lazy`, caption with CC BY 2.0 credit. Below clusters, never first-screen obstruction. Record: `public/photos/RECORD.md`. |
| 7 | `GuideCard` | Home clusters → `.tax-home-card` white cards, mono badge, ink title/desc, hover `translateY(-2px)` only, `prefers-reduced-motion` disables. All 5 clusters / 32 cards / hrefs byte-preserved. No stepper; rules rail is static `<aside aria-label="Filing rules">`, never `aria-current="step"`, never blocks discoverability, never pretends filing submission. |
| 8 | `Disclosure/Consent` | `components/consent.tsx` + Funding Choices tag + AdSense slots preserved untouched. Disclaimer section kept with same copy/links, restyled to paper. |

Motion: `transform 200ms` + color 150ms only; `prefers-reduced-motion: reduce` disables card lift. Focus visible always `2px solid #245A4A + 2px offset` inside `.tax-*`.

## Hero: verified photo row + finite height

- `public/photos/tax.webp` (78230 bytes) ← `media/finance/tax.webp`. Source: https://commons.wikimedia.org/wiki/File:Calculator_(5639214967).jpg, creator jakeandlindsay, CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/), verified 2026-11-15, alt `Close-up of calculator keys on a desk`, 5184x3456 → 1600x1066 q82. No people, no personal data.
- Placement: home only, after workspace grid, `height:220px`, full-width cover, caption carries creator + license + source. Not in hero, not on tool/guide routes in this wave.

## Responsive: 375/768/1280 + shared reach vs guide edits

- Container `max-w-5xl`, gutters 24/16. Grid `.tax-workspace-grid`: 280px rail + 1fr clusters at ≥860px, rail sticky; single column below 860px, rail static. Cards 3/2/1 col. No new fixed layers, no document overflow introduced (guides keep existing overflow clip).
- Shared reach: `app/layout.tsx` + `app/globals.css` reach all 38 fs routes (single root layout, 0 distinct templates per inventory). Individual guide edits in this wave: 0 — 30+ guide/tool pages keep existing dark utilities (1318 `text-white/text-slate/border-white` matches untouched) and dark islands. Per-route light migration is future work with contrast re-test, not claimed here.

## Harness: concept reference + remaining browser gap

- Reference: `concepts-v2/tax/index.html` (rules rail + 3 static passes) + `concepts-v2/tax/interior.html` (static worksheet + captioned tax.webp). Home reuses rules rail copy and figure caption pattern; no demo calculator copied as federal tool (federal estimator untouched).
- Screenshots: parent Ego15 captures 375/768/1280 + interaction states before rollout sign-off. Not claimed in this task.

## Boundaries: preserved + forbidden

- Preserved byte-identical: 18 `calculator.tsx` + virginia/paycheck `page.tsx` (20 financial sources SHA-pinned), sitemap/robots SHAs, canonical self-references (S1/S2/S3), 6 header links + 5 portals + AdSense/Funding Choices/consent, `next-env.d.ts`, prior dirty pages (`about/contact/disclaimer/terms/w4`) content except scoped class changes in layout/home only.
- Forbidden in this wave: other repos, financial math, metadataBase/canonical/robots/sitemap/ads.txt/URL changes, consent gating changes, new deps, `next-env` edits, commit/push/deploy/reset, servers. No `tax worksheet demo` used as federal calculator.
