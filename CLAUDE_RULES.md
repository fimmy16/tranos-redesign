# Tranos Redesign & Engineering Rules Engine (v2 — Reconciled)

This document outlines the engineering, design, and programmatic security requirements for the `tranos.ng` web platform reconstruction.

**Revision note (v2):** v1 of this document was a paraphrase that drifted from the actual source material and produced a dark-navy-everywhere, sharp-clip-path-everywhere build that matched neither source. v2 was written after actually opening both source documents in `brand_assets/` and `Tranos Website Mock Ups.pdf` (a 16-page mockup deck) and reconciling them. Treat `brand_assets/Brand Guidelines Poster.jpg` and `Tranos Website Mock Ups.pdf` as the primary sources of truth; this file is a derived summary. If this file and a source asset ever disagree, the source asset wins and this file should be corrected.

---

## 1. Core Brand System & Visual Identity

### 1.1 Color Palette (full 7-color matrix — source: Brand Guidelines Poster)
*   **Tranos Navy (PANTONE 289 C):** `#001C49` — headers/footer bands, dark accent sections, primary text on light backgrounds.
*   **Tranos Blue (PANTONE 287 C):** `#003087` — primary interactive/CTA color, links, active tab state, logo color.
*   **Muted Steel:** `#7A9AC0` — secondary accents, muted UI chrome, disabled/inactive states.
*   **Light Slate:** `#D0DAEA` — light section backgrounds, subtle dividers, card fills on white.
*   **Graphite:** `#727376` — secondary/supporting body text, borders. On white this passes WCAG AA at 16px+; on Navy it does not (~3.5:1) — use Graphite only on white/Light Slate backgrounds, use `white/70` on dark backgrounds instead.
*   **Safety Gold:** `#F4A520` — highlight/warning accent only (e.g. a "Highlight" badge or hazard-adjacent callout). Sparing use.
*   **Pure White:** `#FFFFFF` — the default page background (see 1.4).
*   **Tranos Gradient Blue:** 50% Navy → 50% Blue, linear/centered/corner-radial. Reserved for hero bands and dark accent panels — not the whole page.

### 1.2 Typography Hierarchy (source: Brand Guidelines Poster type scale)
*   **Primary font family:** Kuro. Fallback: `Arial` / `Arial Bold` (declared explicitly since no licensed Kuro font file is bundled in this repo — until one is provided, every visitor sees the Arial fallback; this is expected, not a bug).
*   **H1 — Display:** Kuro Bold, 64pt desktop / scale down responsively.
*   **H2 — Section Title:** Kuro Bold, 42pt.
*   **H3 — Subsection:** Kuro Semi Bold, 32pt.
*   **Body:** Kuro Regular, 18pt, line-height 1.75–1.85.
*   Logo wordmark itself is a flat geometric execution — no drop shadows, reflections, or gloss effects, on the logo or its container.

### 1.3 Geometric UI Motifs — reconciled
*   **Angular clip-path is an accent motif, not the default button shape.** The Brand Guidelines poster specifies it for "primary buttons and navigation tabs," but the actual 16-page website mockup deck uses fully rounded pill buttons with zero clip-path angles anywhere. Since the mockup is the specific, more-recent deliverable for this exact website, it wins for buttons:
    *   **Default buttons/CTAs/filter pills:** fully rounded (`rounded-full` for pill CTAs like "Request Quote"/"Download Datasheet"; `rounded-md` for filter/category tabs), per the mockups.
    *   **Clip-path angle** (`clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)`) is reserved for accent moments only: section eyebrow tags/badges, hero corner treatments — a signature detail, not a site-wide button shape.
*   **Web Navigation Logo Exception Rule:** the wordmark is fixed top-left for web (confirmed by both sources).
*   **Dynamic Safety Margin Boundaries:** clear-space and minimum margins are computed from the width of the logo's uppercase 'O'.
*   **Structural Alignment Rule (new in v2):** page gutters are **percentage-based** (`padding: 0 5%` to `0 6%` of viewport), not fixed pixel gutters, so lateral alignment stays identical across breakpoints. Replace fixed `px-[28px]` gutters with `px-[5%]`/`px-[6%]`.

### 1.4 Page Theme (corrected in v2)
*   **Default theme is light**, not dark-navy-everywhere: white/off-white (`#FFFFFF`/`#F7F8FA`) page backgrounds, Light Slate for section fills, dark Navy/Gradient Blue reserved for hero bands, footer, and CTA panels. This matches both the Brand Guidelines poster background and every one of the 16 mockup pages.
*   Hero bands use a dimmed/grayscale industrial photograph with a dark gradient overlay (per mockup pages 1–2), not a flat gradient alone.
*   Navbar is a white, rounded, floating card-style bar (per mockup), not an opaque/blurred navy bar.

---

## 2. Site Architecture & Complete Business Scope

### 2.1 Navigation IA (source: mockup deck, all 16 pages)
Primary nav: **About / Services / Products / Industries / Careers**, with Products as a mega-menu covering every division below. A persistent "Request Quote" pill CTA in the nav is a reasonable addition (doesn't conflict with the mockup, supports conversion).

### 2.2 Complete Product & Content Scope
1.  **Gaskets:** Flange Insulation Gasket Sets, high-pressure sealing products.
2.  **Power Distribution & Protection:** LV Panels, Tranos Elite Series, Siemens SIVACON S8, ATEX Explosion-Proof Switchgear.
3.  **Medium Voltage Controls:** Siemens SIMOPRIME, Siemens SIMOSEC.
4.  **Enclosures ("Encase"):** 8 real categories per mockup — Electrical, Mechanical, Heavy Duty, Customized, Servers & Datacenter Racks, Battery Cabinets & Racks, ATEX Junction Boxes, Meter Boxes. Electrical sub-types: Wall-Mounted, Free-Standing, Flush-Mounted (materials: Aluminium, Stainless Steel, Powder Coated, Mild Steel; IP55; segregation form 1–4 on free-standing; IP55/IK10 on flush-mounted).
5.  **Cable Management & Support:** Cable Trays & Ladders (Tranos TRAC; mild/stainless steel; 70–600mm width, 50–100mm depth; 5 surface treatments: pre-galvanized, pre-galvanized+painted, hot-dip galvanized, zinc-pox, AISI 316L stainless); Equipment Racks & Instrumentation Supports (Tranos ERIS); Cable Clamps & Cleats (Ellis, IEC 61914); **Cable Glands** (Nickel-plated brass IP54/IP68, Stainless Steel AISI 303/AISI 316L, Polyamide with locknut, ATEX explosion-proof) — each with a Product/Code specification table.
6.  **Power Generation & Energy:** Tranos THUNDERBOLT generators, TG-Series LPG gas generators, industrial backup UPS, hybrid configurations. Full spec fields: Engine Model, Model, Power Rating, Engine (make), Rated Speed, Cooling System, Alternator Model, Engine Type, Controller Module, Fuel Type, Insulation Class, Sound Pressure Level.
7.  **Warehouse Storage Systems:** pallet racking, cantilever layouts, vertical logistics shelving.
8.  **Light & Wiring Devices:** Simon E6/Duro switches & sockets, ATEX explosion-proof lights.
9.  **Case Studies / Projects (new in v2, from mockup page 16):** dedicated page, sector filter pills (All / Power & Energy / Oil & Gas / Aviation / Industrial & Manufacturing), project cards with photo, title, "Project:" description, "Category:" tag.

### 2.3 Hub Page Directives
*   **Category switcher:** single-tier row of rounded filter pills/bars (per mockup — not a two-row IP-rating sub-filter invention from v1).
*   **Alternating detail rows:** left-media/right-spec, then right-media/left-spec, per product — retained from v1, confirmed reasonable and not contradicted by mockup's own alternating image/text blocks.
*   **Tabbed detail panel:** product detail pages use a Description/Specifications tab switcher (per mockup pages 3–4), specs rendered as a label/value list, not just a table.

---

## 3. Native Source Protections & Anti-Copy Code Enforcement

Client-side execution layer (`src/hooks/useSecurityEngine.ts`) — **unchanged from v1, still required**:
1.  Cancel the default browser context menu globally.
2.  Inject `user-select: none; -webkit-user-drag: none;` over data sheets, text frames, and imagery (form fields stay selectable).
3.  Intercept and terminate `F12`, `Ctrl+Shift+I`, `Ctrl+Shift+C`, `Ctrl+Shift+J`, `Ctrl+U`.

Known tradeoff (documented, not silently ignored): this measure cannot actually prevent inspection (view-source, disabling JS, and browser dev-menus all bypass it) and it degrades legitimate copy/translate/accessibility workflows. Kept because it's an explicit, repeated requirement, not because it's effective security.

---

## 4. Advanced Frontend Engineering Skills & Code Optimization

### 4.1 Type Safety & Static Data Typing
*   All data schemas, product matrices, layout lists, and filter variants: strongly typed `interface`/`type`. No `any`.

### 4.2 Semantic HTML & Accessibility Architecture
*   Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
*   Accessibility attributes (`aria-label`, `aria-expanded`, `role="tab"`) must reflect real interaction support — **an `aria-expanded`/`aria-haspopup` menu must also open on keyboard focus, not mouse-hover only.** (v1 shipped hover-only dropdowns with expand/collapse ARIA attributes that keyboard users could never trigger — worse than no ARIA at all. Fixed in v2.)
*   Contrast: verify actual computed contrast against the real background a text color sits on before shipping (see 1.1 — Graphite on Navy fails AA; Graphite on White/Light Slate passes).

### 4.3 High-Performance Component Optimization
*   Memoize filtering/derived state with `useMemo`/`useCallback`.
*   All media via Next.js `<Image />`; **`fill` images must include a `sizes` prop** (v1 omitted this everywhere `fill` was used — Next.js flags it at runtime and it silently hurts real performance).
*   Reveal-on-scroll (`IntersectionObserver`) is fine for progressive enhancement, but content must not depend on it to become visible for non-interactive renders — verify this doesn't regress before reusing the v1 pattern.

---

## 5. Execution Guardrails & Output Code Quality

*   **Zero Structural Gaps:** no ellipses, no placeholder comments. Every file written out completely.
*   **`'use client'` at line 1** for any file with event listeners, state, or browser APIs.
*   **In-page anchor links must resolve.** If a nav/footer link points at `/#some-id`, an element with `id="some-id"` must actually exist on that route. (v1 shipped six dead anchor links this way — verify before shipping.)
*   **Sticky offsets must account for real navbar height**, including wrapped/multi-line states at common breakpoints, not a hardcoded guess.
*   **Motion Architecture:** `IntersectionObserver`-driven opacity/translate reveal across standard visual modules remains required, subject to the 4.3 caveat above.

---

## Brand Assets
- `brand_assets/Tranos Logo.PNG` — primary lockup with tagline ("think.further."), transparent background, flat navy/blue wordmark, no gloss/shadow.
- `brand_assets/Brand Guidelines Poster.jpg` — color palette, type scale, logo clear-space, button/gradient system. Source of truth for brand tokens.
- `Tranos Website Mock Ups.pdf` (repo root, 16 pages) — source of truth for actual page layouts, navigation IA, footer content, and full product catalog depth. Render with PyMuPDF/poppler if the Read tool's 20MB limit is hit (`pip install pymupdf`, or `pdftoppm`).
- Always re-check both before assuming a rule in this file is still accurate — this file is a derived summary, not the origin.

## Screenshot / Local Verification Workflow
- Headless browser verification: Playwright (`npx playwright install chromium`), driven via a small Node script — see prior session scratchpad for a working pattern (`chromium.launch()` → `page.goto('http://localhost:3000/...')` → `page.screenshot()`).
- Prefer real interaction (mouse-wheel scroll, click, hover+focus) over a single `fullPage` screenshot — `fullPage` capture can render `IntersectionObserver`-gated content in its pre-reveal state even though real users scrolling normally see it fine; don't misdiagnose that as a bug without checking real scroll behavior first.
- When comparing to mockups, be specific: exact hex colors, spacing in px or %, font size/weight, border-radius, alignment — not just "looks similar."
