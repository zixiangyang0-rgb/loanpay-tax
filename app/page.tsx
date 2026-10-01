import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LoanPay Tax | Federal & State Tax Estimators and Guides",
  description:
    "Free educational tax estimators for federal income tax, state tax, freelancer self-employment tax, crypto gains, refunds, and W-2 vs 1099 comparisons.",
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
    blurb: "Twelve states: graduated, flat, and no-income-tax guides with 2026 figures.",
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

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-14 text-center sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          tax.loanpaylogic.com
        </p>
        <h1 className="hero-title mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
          Simple US Tax Estimators in Plain English
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
          LoanPay Tax turns confusing IRS rules into short, friendly estimators and checklists.
          Preview federal and state liability, freelance taxes, crypto gains, and refund timelines
          before you file — no signup required.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/federal-income-tax-calculator-2026"
            className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-200"
          >
            Estimate your 2026 tax
          </Link>
          <Link
            href="/tax-filing-checklist"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30"
          >
            Start the filing checklist
          </Link>
        </div>
      </section>

      {clusters.map((cluster) => (
        <section key={cluster.id} className="mt-12">
          <h2 className="text-2xl font-bold">{cluster.heading}</h2>
          <p className="mt-2 text-sm text-slate-400">{cluster.blurb}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cluster.cards.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="glass-card block rounded-2xl p-6 transition hover:border-amber-200/30"
              >
                <span className="inline-block rounded-full border border-amber-200/30 px-3 py-1 text-xs font-medium text-amber-200">
                  {tool.badge}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="glass-card mt-12 rounded-2xl p-8">
        <h2 className="text-2xl font-bold">Why estimate taxes before filing season?</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Withholding tables, quarterly vouchers, state reciprocity rules, and capital-gain holding
          periods all interact in ways a single pay stub cannot show. An early estimate helps
          employees adjust their W-4, helps freelancers set aside enough each month, and helps
          crypto holders understand the difference between short-term and long-term rates. The
          articles and calculators on tax.loanpaylogic.com explain each input — filing status,
          taxable income, deductions, and credits — so you can bring better questions to a
          qualified tax professional and avoid underpayment penalties.
        </p>
        <p className="mt-4 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4 text-xs leading-relaxed text-amber-100/90">
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
