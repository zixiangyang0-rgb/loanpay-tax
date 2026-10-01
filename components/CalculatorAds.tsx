"use client";

import AdSlot from "./AdSlot";

/** Sticky sidebar ad for calculator pages (desktop only). */
export function CalculatorSidebarAds() {
  return (
    <aside
      className="hidden lg:block lg:w-80 lg:shrink-0"
      aria-label="Sponsored content"
    >
      <div className="sticky top-6">
        <AdSlot format="display" slot="TODO-tax-calc-sidebar" minHeight={300} label="Advertisement - sidebar" />
      </div>
    </aside>
  );
}

/** In-article ad placed after the interactive calculator. */
export function CalculatorInArticleAds() {
  return (
    <AdSlot
      format="in-article"
      slot="TODO-tax-calc-inarticle"
      minHeight={120}
      label="Advertisement - in article"
    />
  );
}

/** Closable anchor ad for calculator pages (mobile only). */
export function CalculatorAnchorAds() {
  return <AdSlot format="anchor" slot="TODO-tax-calc-anchor" minHeight={90} />;
}
