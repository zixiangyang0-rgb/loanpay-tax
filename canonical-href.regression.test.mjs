import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "app");
const read = (rel) => readFileSync(join(root, rel), "utf8");

const canonicalOf = (src) => {
  const m = src.match(/canonical:\s*["']([^"']+)["']/);
  return m ? m[1] : null;
};

// S1 happy: four utility pages self-canonicalize to absolute tax.loanpaylogic.com URLs
describe("S1 canonical self-reference", () => {
  const cases = [
    ["about/page.tsx", "https://tax.loanpaylogic.com/about"],
    ["contact/page.tsx", "https://tax.loanpaylogic.com/contact"],
    ["terms/page.tsx", "https://tax.loanpaylogic.com/terms"],
    ["disclaimer/page.tsx", "https://tax.loanpaylogic.com/disclaimer"],
  ];
  for (const [rel, expected] of cases) {
    it(`Given ${rel} When metadata read Then canonical is ${expected}`, () => {
      const actual = canonicalOf(read(rel));
      assert.equal(actual, expected);
    });
  }
});

// S2 preserved: valid pages keep their canonical, home exposes discovery hrefs
describe("S2 preserved + discovery", () => {
  it("Given privacy-policy When metadata read Then canonical preserved", () => {
    assert.equal(
      canonicalOf(read("privacy-policy/page.tsx")),
      "https://tax.loanpaylogic.com/privacy-policy"
    );
  });
  it("Given paycheck-by-state When metadata read Then canonical preserved", () => {
    assert.equal(
      canonicalOf(read("paycheck-tax-calculator-by-state-2026/page.tsx")),
      "https://tax.loanpaylogic.com/paycheck-tax-calculator-by-state-2026"
    );
  });
  it("Given virginia When metadata read Then canonical preserved", () => {
    assert.equal(
      canonicalOf(read("virginia-income-tax-calculator/page.tsx")),
      "https://tax.loanpaylogic.com/virginia-income-tax-calculator"
    );
  });
  it("Given home When rendered Then links paycheck-by-state card href", () => {
    const home = read("page.tsx");
    assert.ok(home.includes('href: "/paycheck-tax-calculator-by-state-2026"'));
  });
  it("Given home When rendered Then links virginia card href", () => {
    const home = read("page.tsx");
    assert.ok(home.includes('href: "/virginia-income-tax-calculator"'));
  });
  it("Given w4 guide When read Then contextual paycheck state link exists", () => {
    const w4 = read("w4-withholding-calculator/page.tsx");
    assert.ok(w4.includes('href="/paycheck-tax-calculator-by-state-2026"'));
  });
});

// S3 edge: intentional metadata untouched (root layout + home have no per-page absolute canonical)
describe("S3 intentional metadata untouched", () => {
  it("Given root layout When metadata read Then canonical stays '/'", () => {
    const layout = readFileSync(join(root, "layout.tsx"), "utf8");
    assert.ok(layout.includes('canonical: "/"'));
  });
  it("Given home When metadata read Then no absolute self-canonical override", () => {
    const home = read("page.tsx");
    assert.equal(canonicalOf(home), null);
  });
});
