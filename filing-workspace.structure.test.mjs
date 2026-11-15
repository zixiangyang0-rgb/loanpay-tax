import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const REPO = "/Users/yang/Downloads/谷歌广告/loanpay-tax";
const APP = path.join(REPO, "app");
function read(p) {
  return fs.readFileSync(p, "utf8");
}

describe("filing workspace — shared shell identity (scoped, no blind inversion)", () => {
  it("Given globals When read Then paper tokens + scoped shells exist, dark islands preserved", () => {
    const css = read(path.join(APP, "globals.css"));
    assert.ok(css.includes("#F4F5F3"), "paper token missing");
    assert.ok(css.includes("#17211B"), "ink token missing");
    assert.ok(css.includes("#D8DDD6"), "line token missing");
    assert.ok(css.includes("#245A4A"), "accent token missing");
    assert.ok(css.includes(".tax-home-shell"), "home shell scope missing");
    assert.ok(css.includes(".tax-rules-rail"), "rules rail scope missing");
    assert.ok(css.includes(".tax-mono-label"), "mono label scope missing");
    assert.ok(css.includes(".glass-card"), "dark island class must stay for tool contrast");
    assert.ok(!css.includes("*{color:#fff"), "blind all-text inversion forbidden");
    assert.ok(!css.includes("* { color: #fff"), "blind all-text inversion forbidden");
  });

  it("Given layout When read Then paper chrome + mono tag, metadata/consent/portals preserved", () => {
    const layout = read(path.join(APP, "layout.tsx"));
    assert.ok(layout.includes("tax-shell"), "header/footer paper shell missing");
    assert.ok(layout.includes("tax-mono"), "mono brand tag missing");
    assert.ok(layout.includes('metadataBase: new URL("https://tax.loanpaylogic.com")'), "metadataBase changed");
    assert.ok(layout.includes('canonical: "/"'), "root canonical changed");
    assert.ok(layout.includes("ConsentBanner"), "consent banner missing");
    assert.ok(layout.includes("fundingchoicesmessages.google.com"), "funding-choices tag missing");
    assert.ok(layout.includes("ca-pub-4906207495792820"), "adsense marker missing");
    for (const h of ['href: "/"', 'href: "/about"', 'href: "/disclaimer"']) {
      assert.ok(layout.includes(h), `layout missing ${h}`);
    }
    for (const h of ["https://loanpaylogic.com", "https://guides.loanpaylogic.com"]) {
      assert.ok(layout.includes(h), `footer portal missing ${h}`);
    }
  });
});

describe("filing workspace — home uses actual clusters + static rules rail (no blocking stepper)", () => {
  it("Given home When read Then paper shell + mono eyebrow + rules rail present", () => {
    const home = read(path.join(APP, "page.tsx"));
    assert.ok(home.includes("tax-home-shell"), "home paper shell missing");
    assert.ok(home.includes("tax-mono-label"), "home mono eyebrow missing");
    assert.ok(home.includes("Filing Workspace"), "workspace eyebrow copy missing");
    assert.ok(home.includes('aria-label="Filing rules"'), "rules rail aside missing");
    assert.ok(home.includes("filing_status"), "rules rail must name estimator inputs");
    assert.ok(home.includes("Static worksheet"), "rules rail must mark static pages");
  });

  it("Given home When read Then actual clusters/links preserved, no demo stepper", () => {
    const home = read(path.join(APP, "page.tsx"));
    for (const id of ['id: "federal"', 'id: "states"', 'id: "freelance"', 'id: "investing"', 'id: "seasonal"']) {
      assert.ok(home.includes(id), `cluster missing ${id}`);
    }
    for (const h of ['href: "/federal-income-tax-calculator-2026"', 'href: "/paycheck-tax-calculator-by-state-2026"', 'href: "/virginia-income-tax-calculator"', 'href: "/tax-filing-checklist"']) {
      assert.ok(home.includes(h), `discovery href missing ${h}`);
    }
    assert.ok(!home.includes('aria-current="step"'), "blocking stepper forbidden on home");
    assert.ok(!home.includes('"use client"'), "home must stay server component");
    assert.ok(home.includes("AdSlot"), "AdSlot position preserved");
    assert.ok(home.includes("/disclaimer"), "disclaimer link preserved");
  });

  it("Given repo When walked Then 38 routes + 18 islands preserved (shared reach)", () => {
    const walk = (d) => {
      const out = [];
      for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) {
          if (e.name === "node_modules" || e.name === ".next" || e.name === ".git") continue;
          out.push(...walk(p));
        } else if (e.name === "page.tsx") out.push(p);
      }
      return out;
    };
    assert.equal(walk(APP).length, 38, "38 routes must be preserved");
    let islands = 0;
    for (const e of fs.readdirSync(APP, { withFileTypes: true })) {
      if (e.isDirectory() && fs.existsSync(path.join(APP, e.name, "calculator.tsx"))) islands += 1;
    }
    assert.equal(islands, 18, "18 calculator islands must be preserved");
    const fed = read(path.join(APP, "federal-income-tax-calculator-2026/calculator.tsx"));
    assert.ok(fed.startsWith('"use client";'), "federal island must stay client island");
    assert.ok(fed.includes("useState"), "federal island must keep state");
  });
});
