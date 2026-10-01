import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LoanPay Tax | Federal & State Tax Estimators and Guides",
  description:
    "Free educational tax estimators for federal income tax, state tax, freelancer self-employment tax, crypto gains, refunds, and W-2 vs 1099 comparisons.",
};

const tools = [
  {
    title: "Federal Income Tax 2026",
    description:
      "Walk through federal brackets, standard deductions, and effective rates to preview what a 2026 paycheck might really keep.",
    badge: "Coming soon",
  },
  {
    title: "State Income Tax",
    description:
      "Compare how different states treat wage income, from no-income-tax states to graduated brackets, before you move or file.",
    badge: "Coming soon",
  },
  {
    title: "Freelancer Self-Employment Tax",
    description:
      "See how Social Security, Medicare, and income tax stack up on freelance profit, plus simple quarterly payment reminders.",
    badge: "Coming soon",
  },
  {
    title: "Crypto Tax Estimator",
    description:
      "Model short-term versus long-term treatment of coin sales so planned profit-taking does not turn into an April surprise.",
    badge: "Coming soon",
  },
  {
    title: "Refund Tracker Guide",
    description:
      "Follow a step-by-step checklist for checking refund status, fixing common e-file rejections, and avoiding refund scams.",
    badge: "Guide",
  },
  {
    title: "W-2 vs 1099 Compare",
    description:
      "Contrast employee withholding with contractor taxes side by side, including benefits, deductions, and true take-home pay.",
    badge: "Coming soon",
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
            href="/about"
            className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-200"
          >
            How our estimates work
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30"
          >
            Contact the editors
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Popular tax tools</h2>
        <p className="mt-2 text-sm text-slate-400">
          Six focused starting points. Each card will grow into a full interactive estimator or guide.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <article key={tool.title} className="glass-card rounded-2xl p-6">
              <span className="inline-block rounded-full border border-amber-200/30 px-3 py-1 text-xs font-medium text-amber-200">
                {tool.badge}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{tool.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{tool.description}</p>
            </article>
          ))}
        </div>
      </section>

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
