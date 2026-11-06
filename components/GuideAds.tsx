import AdSlot from "./AdSlot";

// Review-period placeholder: empty slot hits the AdSlot guard (no push,
// layout space reserved). Fill in real AdSense unit IDs after approval.
/** Top display unit for guide pages (below hero). */
export function GuideTopAds() {
  return (
    <AdSlot format="display" slot="" minHeight={280} label="Advertisement - top" />
  );
}

/** Mid-article fluid unit for guide pages. */
export function GuideInArticleAds() {
  return (
    <AdSlot
      format="in-article"
      slot=""
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
        slot=""
        minHeight={250}
        label="Advertisement - related"
      />
      <AdSlot
        format="display"
        slot=""
        minHeight={280}
        label="Advertisement - bottom"
      />
    </>
  );
}
