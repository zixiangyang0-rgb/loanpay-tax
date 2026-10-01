import AdSlot from "./AdSlot";

/** Top display unit for guide pages (below hero). */
export function GuideTopAds() {
  return (
    <AdSlot format="display" slot="TODO-tax-guide-top" minHeight={280} label="Advertisement - top" />
  );
}

/** Mid-article fluid unit for guide pages. */
export function GuideInArticleAds() {
  return (
    <AdSlot
      format="in-article"
      slot="TODO-tax-guide-inarticle"
      minHeight={120}
      label="Advertisement - in article"
    />
  );
}

/** Multiplex / bottom display units for guide pages. */
export function GuideBottomAds() {
  return (
    <>
      <AdSlot
        format="multiplex"
        slot="TODO-tax-guide-multiplex"
        minHeight={250}
        label="Advertisement - related"
      />
      <AdSlot
        format="display"
        slot="TODO-tax-guide-bottom"
        minHeight={280}
        label="Advertisement - bottom"
      />
    </>
  );
}
