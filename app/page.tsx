import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import ToolIsland from "../components/ToolIsland";

export const metadata: Metadata = {
  title: "LoanPay Tax | Federal & State Tax Estimators and Guides",
  description:
    "Free educational tax estimators for federal income tax, state tax, freelancer self-employment tax, crypto gains, refunds, and W-2 vs 1099 comparisons.",
  openGraph: {
    title: "LoanPay Tax | Federal & State Tax Estimators and Guides",
    description:
      "Free educational tax estimators for federal income tax, state tax, freelancer self-employment tax, crypto gains, refunds, and W-2 vs 1099 comparisons.",
    url: "https://tax.loanpaylogic.com",
    siteName: "LoanPay Tax",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/photos/tax.webp",
        width: 1600,
        height: 1066,
        alt: "Close-up of calculator keys on a desk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Tax | Federal & State Tax Estimators and Guides",
    description:
      "Free educational tax estimators for federal income tax, state tax, freelancer self-employment tax, crypto gains, refunds, and W-2 vs 1099 comparisons.",
    images: ["/photos/tax.webp"],
  },
};

type Card = { title: string; description: string; href: string; badge: string };
type Cluster = { id: string; heading: string; blurb: string; cards: Card[] };

const clusters: Cluster[] = [
  {
    id: "federal",
    heading: "A · Federal income tax",
    blurb: "Brackets, deductions, refunds, withholding, and quarterly payments for 2026.",
    cards: [
      {
        title: "Federal Income Tax Calculator 2026",
        description: "Estimate 2026 federal tax with live brackets and standard deductions.",
        href: "/federal-income-tax-calculator-2026",
        badge: "Calculator",
      },
      {
        title: "Federal Tax Brackets 2026",
        description: "Every 2026 rate table with marginal-math examples for all statuses.",
        href: "/federal-tax-brackets-2026",
        badge: "Guide",
      },
      {
        title: "Standard Deduction vs. Itemized 2026",
        description: "$16,100 / $32,200 / $24,150 vs. SALT, mortgage, charity, medical.",
        href: "/standard-deduction-vs-itemized-2026",
        badge: "Guide",
      },
      {
        title: "Tax Refund Estimator",
        description: "Preview your refund or balance due from withholding and credits.",
        href: "/tax-refund-estimator",
        badge: "Calculator",
      },
      {
        title: "W-4 Withholding Calculator",
        description: "Check each paycheck against real liability and fix your W-4.",
        href: "/w4-withholding-calculator",
        badge: "Calculator",
      },
      {
        title: "Quarterly Estimated Tax Calculator",
        description: "Size 2026 vouchers with deadlines, safe harbors, and penalties.",
        href: "/quarterly-estimated-tax-calculator",
        badge: "Calculator",
      },
    ],
  },
  {
    id: "states",
    heading: "B · State income tax",
    blurb: "Thirteen states: graduated, flat, and no-income-tax guides with 2026 figures.",
    cards: [
      {
        title: "California Income Tax Calculator",
        description: "Nine brackets 1%–13.3% with the $5,706 standard deduction.",
        href: "/california-income-tax-calculator",
        badge: "Calculator",
      },
      {
        title: "Texas No-Income-Tax Guide",
        description: "Zero income tax — plus property, sales, and franchise-tax reality.",
        href: "/texas-no-income-tax-guide",
        badge: "Guide",
      },
      {
        title: "New York Income Tax Calculator",
        description: "State 4%–10.9% plus NYC and Yonkers add-ons, credits, residency.",
        href: "/new-york-income-tax-calculator",
        badge: "Calculator",
      },
      {
        title: "Florida No-Income-Tax Guide",
        description: "Zero income tax with homestead shields and insurance asterisks.",
        href: "/florida-no-income-tax-guide",
        badge: "Guide",
      },
      {
        title: "Illinois Income Tax Calculator",
        description: "Flat 4.95% with exemptions, credits, and property-tax context.",
        href: "/illinois-income-tax-calculator",
        badge: "Calculator",
      },
      {
        title: "Pennsylvania Income Tax Calculator",
        description: "Flat 3.07% across 8 classes, local EIT, and Tax Forgiveness.",
        href: "/pennsylvania-income-tax-calculator",
        badge: "Calculator",
      },
      {
        title: "Ohio Income Tax Calculator",
        description: "First $26,050 exempt, then 2.75%–3.125% — plus the city-tax maze.",
        href: "/ohio-income-tax-calculator",
        badge: "Calculator",
      },
      {
        title: "Georgia Income Tax Calculator",
        description: "Flat 5.19% and falling, with retirement exclusions explained.",
        href: "/georgia-income-tax-calculator",
        badge: "Calculator",
      },
      {
        title: "North Carolina Income Tax Calculator",
        description: "Flat 3.99% with a generous standard deduction and future cuts.",
        href: "/north-carolina-income-tax-calculator",
        badge: "Calculator",
      },
      {
        title: "Michigan Income Tax Calculator",
        description: "Flat 4.25% with pension subtraction and city-tax add-ons.",
        href: "/michigan-income-tax-calculator",
        badge: "Calculator",
      },
      {
        title: "New Jersey Income Tax Calculator",
        description: "Seven bands 1.4%–10.75% with ANCHOR relief and retiree breaks.",
        href: "/new-jersey-income-tax-calculator",
        badge: "Calculator",
      },
      {
        title: "Washington No-Income-Tax Guide",
        description: "Zero wage tax — but 7% on large gains, plus B&O and estate tax.",
        href: "/washington-no-income-tax-guide",
        badge: "Guide",
      },
      {
        title: "Paycheck Tax Calculator by State 2026",
        description: "Take-home pay in 50 states: federal, FICA, state, and local layers.",
        href: "/paycheck-tax-calculator-by-state-2026",
        badge: "Calculator",
      },
      {
        title: "Virginia Income Tax Calculator",
        description: "Graduated 2%–5.75% with the $8,000 standard deduction and Spouse Adjustment.",
        href: "/virginia-income-tax-calculator",
        badge: "Calculator",
      },
    ],
  },
  {
    id: "freelance",
    heading: "C · Freelance & self-employed",
    blurb: "SE tax, quarterly rhythm, deductions, and retirement plans for independents.",
    cards: [
      {
        title: "Self-Employment Tax Calculator",
        description: "15.3% on 92.35% of profit to the $184,500 Social Security base.",
        href: "/self-employment-tax-calculator",
        badge: "Calculator",
      },
      {
        title: "W-2 vs. 1099 Calculator",
        description: "Same pay compared: taxes, benefits, and the contractor premium.",
        href: "/w2-vs-1099-calculator",
        badge: "Calculator",
      },
      {
        title: "Freelancer Quarterly Tax Guide",
        description: "Setup, quarterly ritual, deduction sweep, and audit-proof records.",
        href: "/freelancer-quarterly-tax-guide",
        badge: "Guide",
      },
      {
        title: "Home Office Deduction Calculator",
        description: "Simplified $5/sq ft vs. actual expenses with crossover math.",
        href: "/home-office-deduction-calculator",
        badge: "Calculator",
      },
      {
        title: "SEP IRA vs. Solo 401(k) Tax Guide",
        description: "$72,000 limits compared: Roth, loans, deadlines, employees.",
        href: "/sep-ira-vs-solo-401k-tax",
        badge: "Guide",
      },
    ],
  },
  {
    id: "investing",
    heading: "D · Investing & equity pay",
    blurb: "Crypto, capital gains stacking, RSUs, and stock options in plain English.",
    cards: [
      {
        title: "Crypto Tax Calculator",
        description: "Coin-sale tax with basis methods, loss limits, and NIIT check.",
        href: "/crypto-tax-calculator",
        badge: "Calculator",
      },
      {
        title: "Capital Gains Tax Calculator 2026",
        description: "0/15/20% stacking, NIIT, harvesting, and home-sale exclusions.",
        href: "/capital-gains-tax-calculator-2026",
        badge: "Calculator",
      },
      {
        title: "RSU & Stock Options Tax Guide",
        description: "RSUs, NSOs, ISOs: vest withholding, AMT, 83(b), selling plans.",
        href: "/rsu-stock-options-tax-guide",
        badge: "Guide",
      },
    ],
  },
  {
    id: "seasonal",
    heading: "E · Deadlines & life events",
    blurb: "Filing dates, checklists, IRAs, and student-loan breaks for 2026–27.",
    cards: [
      {
        title: "When Are Taxes Due in 2027?",
        description: "April 15 filing day, estimates, extensions, and IRA deadlines.",
        href: "/when-are-taxes-due-2027",
        badge: "Guide",
      },
      {
        title: "Tax Filing Checklist",
        description: "Documents, money sweep, e-file fixes, and storage for 2026 returns.",
        href: "/tax-filing-checklist",
        badge: "Guide",
      },
      {
        title: "Roth vs. Traditional IRA Tax Guide",
        description: "$7,500 limits, phase-outs, backdoor Roth, and conversions.",
        href: "/roth-vs-traditional-ira-tax",
        badge: "Guide",
      },
      {
        title: "Student Loan Interest Deduction",
        description: "Up to $2,500 above-the-line with phase-outs and credit stacking.",
        href: "/student-loan-interest-deduction",
        badge: "Guide",
      },
    ],
  },
];

const heroImageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  contentUrl: "https://tax.loanpaylogic.com/photos/tax.webp",
  url: "https://tax.loanpaylogic.com/photos/tax.webp",
  width: 1600,
  height: 1066,
  caption: "Close-up of calculator keys on a desk",
  creditText: "jakeandlindsay, CC BY 2.0, via Wikimedia Commons",
  creator: {
    "@type": "Person",
    name: "jakeandlindsay",
    url: "https://www.flickr.com/people/56477159@N06",
  },
  license: "https://creativecommons.org/licenses/by/2.0/",
  acquireLicensePage:
    "https://commons.wikimedia.org/wiki/File:Calculator_(5639214967).jpg",
};

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroImageJsonLd) }}
      />
      <section className="tax-home-shell px-8 py-14 text-center sm:px-12">
        <p className="tax-mono-label">Tax · Filing Workspace</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Simple US Tax Estimators in Plain English
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed">
          LoanPay Tax turns confusing IRS rules into short, friendly estimators and checklists.
          Preview federal and state liability, freelance taxes, crypto gains, and refund timelines
          before you file — no signup required.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/federal-income-tax-calculator-2026"
            className="rounded-full bg-[#245A4A] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Estimate your 2026 tax
          </Link>
          <Link
            href="/tax-filing-checklist"
            className="rounded-full border border-[#D8DDD6] bg-white px-6 py-3 text-sm font-semibold transition hover:border-[#245A4A]"
          >
            Start the filing checklist
          </Link>
        </div>
      </section>

      <AdSlot format="display" slot="" minHeight={280} label="Advertisement - homepage" />

      <ToolIsland islandId="home-filing-workspace" title="Filing workspace — all 2026 estimators and guides" method="Browse federal, state, freelance, investing, and deadline clusters below.">
      <div className="tax-workspace-grid mt-12">
        <aside className="tax-rules-rail" aria-label="Filing rules">
          <h2 className="tax-mono-label">Rules rail</h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5">
            <li>
              Federal estimator takes <code>filing_status</code>, <code>gross_income</code>,{" "}
              <code>extra_deductions</code> only.
            </li>
            <li>
              Paycheck &amp; Virginia pages are <strong>Static worksheet</strong> — no
              auto-calculation. Follow the checklist; run numbers in the federal estimator.
            </li>
            <li>Any new rate needs a primary source (IRS / Virginia Tax) with date checked.</li>
          </ol>
          <p className="mt-3 text-xs">
            <Link href="/federal-income-tax-calculator-2026" className="underline">
              Open the federal estimator
            </Link>
          </p>
        </aside>

        <div>
          {clusters.map((cluster) => (
            <section key={cluster.id} className="mt-8 first:mt-0">
              <p className="tax-mono-label">{cluster.id}</p>
              <h2 className="mt-1 text-2xl font-bold">{cluster.heading}</h2>
              <p className="mt-2 text-sm">{cluster.blurb}</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cluster.cards.map((tool) => (
                  <Link key={tool.href} href={tool.href} className="tax-home-card block p-6">
                    <span className="tax-mono-label inline-block rounded-full border border-[#D8DDD6] px-3 py-1">
                      {tool.badge}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{tool.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{tool.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      </ToolIsland>

      <figure className="tax-home-shell tax-figure mt-12 overflow-hidden">
        <img
          src="/photos/tax.webp"
          width={1600}
          height={1066}
          alt="Close-up of calculator keys on a desk"
          loading="lazy"
        />
        <figcaption className="tax-mono-label px-4 py-3">
          Desk detail, cropped lower third. Photo: jakeandlindsay, CC BY 2.0, via Wikimedia
          Commons.
        </figcaption>
      </figure>

      <section className="tax-home-shell mt-12 p-8">
        <h2 className="text-2xl font-bold">Why estimate taxes before filing season?</h2>
        <p className="mt-4 text-sm leading-relaxed">
          Withholding tables, quarterly vouchers, state reciprocity rules, and capital-gain holding
          periods all interact in ways a single pay stub cannot show. An early estimate helps
          employees adjust their W-4, helps freelancers set aside enough each month, and helps
          crypto holders understand the difference between short-term and long-term rates. The
          articles and calculators on tax.loanpaylogic.com explain each input — filing status,
          taxable income, deductions, and credits — so you can bring better questions to a
          qualified tax professional and avoid underpayment penalties.
        </p>
        <p className="mt-4 rounded-xl border border-[#D8DDD6] bg-white p-4 text-xs leading-relaxed">
          Disclaimer: everything on this site is for general education only and is not tax, legal,
          or financial advice. Tax law changes often and varies by state. Confirm important
          decisions with a licensed professional or the IRS. Read our full{" "}
          <Link href="/disclaimer" className="underline underline-offset-2">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
