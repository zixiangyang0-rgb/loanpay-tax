"use client";

import AdSlot from "./AdSlot";

/**
 * AdSense unit IDs for calculator pages.
 * Fill in after creating the units in the AdSense dashboard (never click live ads).
 * Empty string keeps the AdSlot guard active: prod reserves layout space
 * without pushing to adsbygoogle, dev renders a dashed placeholder.
 */
const CALC_AD_SLOTS = {
  sidebar: "",
  inArticle: "",
  anchor: "",
} as const;

/** Sticky sidebar ad for calculator pages (desktop only). */
export function CalculatorSidebarAds() {
  return (
    <aside
      className="hidden lg:block lg:w-80 lg:shrink-0"
      aria-label="Sponsored content"
    >
      <div className="sticky top-6">
        <AdSlot format="display" slot={CALC_AD_SLOTS.sidebar} minHeight={300} label="Advertisement - sidebar" />
      </div>
    </aside>
  );
}

/** In-article ad placed after the interactive calculator. */
export function CalculatorInArticleAds() {
  return (
    <AdSlot
      format="in-article"
      slot={CALC_AD_SLOTS.inArticle}
      minHeight={120}
      label="Advertisement - in article"
    />
  );
}

/** Closable anchor ad for calculator pages (mobile only). */
export function CalculatorAnchorAds() {
  return <AdSlot format="anchor" slot={CALC_AD_SLOTS.anchor} minHeight={90} />;
}
