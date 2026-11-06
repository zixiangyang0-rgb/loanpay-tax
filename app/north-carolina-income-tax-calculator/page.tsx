import type { Metadata } from "next";
import Link from "next/link";
import NorthCarolinaTaxCalculator from "./calculator";
import {
  CalculatorAnchorAds,
  CalculatorInArticleAds,
  CalculatorSidebarAds,
} from "../../components/CalculatorAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "North Carolina Income Tax Calculator 2026 (3.99% Flat) | LoanPay Tax",
  description:
    "Estimate 2026 NC tax at the flat 3.99% rate with $12,750/$25,500 standard deduction, child deduction, and scheduled future cuts.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/north-carolina-income-tax-calculator",
  },
};

export default function NorthCarolinaPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="North Carolina Income Tax Calculator 2026 (3.99% Flat) | LoanPay Tax" description="Estimate 2026 NC tax at the flat 3.99% rate with $12,750/$25,500 standard deduction, child deduction, and scheduled future cuts." url="https://tax.loanpaylogic.com/north-carolina-income-tax-calculator" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          NCDOR &middot; 2026 tax year
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          North Carolina Income Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          North Carolina&rsquo;s flat rate fell again &mdash; 3.99 percent for 2026, with law
          that can push it lower. Estimate your bill below and see why the Triangle and
          Charlotte keep winning transplant budgets.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <NorthCarolinaTaxCalculator />
          <CalculatorInArticleAds />
        </div>
        <CalculatorSidebarAds />
      </div>
      <CalculatorAnchorAds />

      <article className="mx-auto mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">A decade of cuts lands at 3.99%</h2>
          <p className="mt-3">
            North Carolina replaced graduated brackets with a flat tax in 2014 and has cut it
            almost every year since: 5.25 percent through 2021, 4.99 in 2022, 4.75 in 2023, 4.50
            in 2024, 4.25 in 2025, and now 3.99 percent for 2026 &mdash; the same rate for a
            $40,000 teacher and a $400,000 surgeon. Session Law 2023-134 can drive it lower still:
            starting 2027 the rate drops another half point toward a 2.49 percent floor whenever
            General Fund revenue clears statutory triggers. Filers subtract a fixed standard
            deduction &mdash; $12,750 single, $25,500 joint, not inflation-indexed &mdash; and a
            per-child deduction that phases out at higher incomes, then multiply by 3.99 percent.
            There are no personal exemptions and no local income taxes anywhere in the state.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                The scheduled march down (verify current-year rate with NCDOR).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Tax year</th>
                  <th className="px-4 py-3 font-semibold">Flat rate</th>
                  <th className="px-4 py-3 font-semibold">Tax on $100,000 single*</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">2024</td><td className="px-4 py-2">4.50%</td><td className="px-4 py-2">$3,926</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">2025</td><td className="px-4 py-2">4.25%</td><td className="px-4 py-2">$3,708</td></tr>
                <tr><td className="px-4 py-2">2026</td><td className="px-4 py-2">3.99%</td><td className="px-4 py-2">$3,481</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            *After the $12,750 single standard deduction ($87,250 taxable).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What North Carolina exempts and credits</h2>
          <p className="mt-3">
            Social Security is fully exempt, and the Bailey settlement exclusion still shields
            qualifying government retirees&rsquo; pensions. Active military pay, most
            state-retirement income, and 529 earnings used for education escape as well.
            Itemizers use the state&rsquo;s own rules (no Pease-style phase-outs at these
            levels), while the child deduction &mdash; worth up to several thousand per child
            against taxable income &mdash; phases down as AGI climbs, so high earners should
            model it rather than assume it. Corporate income sits at just 2 percent, among the
            nation&rsquo;s lowest, which matters for owners weighing S-election versus C-corp
            status under the state&rsquo;s pass-through entity election.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Cost context: property, sales, and neighbors</h2>
          <p className="mt-3">
            Income-tax savings stretch further because sister taxes stay moderate: effective
            property rates near 0.7&ndash;0.9 percent in Wake and Mecklenburg counties, a 4.75
            percent state sales tax with 2&ndash;2.75 percent county add-ons (about 7.25 percent
            combined in Raleigh and Charlotte), and no tax on groceries&rsquo; unprepared food in
            most counties&rsquo; local layers. Against{" "}
            <Link href="/georgia-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Georgia&rsquo;s 5.19 percent
            </Link>
            ,{" "}
            <Link href="/florida-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Florida&rsquo;s zero
            </Link>
            , and Virginia&rsquo;s 5.75 percent top rate, North Carolina increasingly owns the
            middle: cheaper than the mid-Atlantic, pricier than Florida, but with Research
            Triangle salaries and mountain-to-coast amenities pricing the difference. Returns are
            due April 15, 2027 on Form D-400, with estimates on federal dates and e-filing
            through NCDOR.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: $85,000 single filer in Raleigh</h2>
          <p className="mt-3">
            Take a single filer earning $85,000 in wages with no above-the-line adjustments.
            Subtract the $12,750 standard deduction to get $72,250 of North Carolina taxable
            income, then multiply by 3.99 percent: about $2,883 of state tax for 2026. The same
            paycheck under the 2024 rate of 4.50 percent would have owed roughly $3,251, so the
            scheduled cuts hand this filer nearly $370 a year without any planning. Add a second
            earner and the math scales cleanly — a $150,000 joint household subtracts $25,500,
            taxes $124,500 at 3.99 percent, and owes about $4,968. Because the rate is flat, the
            marginal decision is simple: every extra $1,000 of deduction saves exactly $39.90,
            which makes HSA contributions, 401(k) deferrals, and bunching itemized gifts unusually
            easy to value. Run your own numbers in the calculator above, then compare the result
            with{" "}
            <Link href="/georgia-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Georgia&rsquo;s higher flat rate
            </Link>{" "}
            to see why Charlotte keeps pulling cross-border movers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Withholding, estimates, and the April 15 finish line</h2>
          <p className="mt-3">
            North Carolina follows the federal estimate calendar — April 15, June 15, September 15,
            and January 15 — and under-withholding triggers the same kind of penalty math as the
            IRS, computed on Form D-422. Employees should check the state line of a late-year
            paystub, not just the federal one: because the flat rate applies from the first dollar
            over the standard deduction, a mid-year raise or bonus can quietly push a household
            from a small refund to a balance due. New residents get a part-year return (Form D-400
            with Schedule PN) that prorates the standard deduction by months of residency, so a
            July move from Georgia means roughly half the $25,500 joint deduction and a blended
            first-year bill worth modeling in the calculator above. File Form D-400 by April 15,
            2027, e-file through NCDOR for the fastest refund, and keep the confirmation — the
            department matches state wages to federal transcripts and will notice a missing return.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Will the NC rate fall below 3.99%?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Possibly — Session Law 2023-134 cuts 0.5 points toward a 2.49% floor whenever revenue triggers are met, starting 2027.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does NC have local income taxes?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. No city or county levies an income tax — the 3.99% state rate plus property and sales taxes are the full local picture.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Are there personal exemptions in NC?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No — eliminated with the 2014 flat-tax reform. Families use the standard deduction and child deduction instead.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does NC tax Social Security?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. Social Security benefits are fully excluded from North Carolina taxable income.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">I moved to NC mid-year — how am I taxed?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">As a part-year resident on Schedule PN: income earned while living in NC is taxed at 3.99%, and the standard deduction is prorated by months of residency.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">When are NC estimated payments due?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">April 15, June 15, September 15, and January 15 — the same calendar as federal estimates, with penalties for large underpayments via Form D-422.</p>
            </details>
          </div>
        </section>

        <nav aria-label="Related guides">
          <h2 className="text-xl font-bold text-white">Related guides</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/georgia-income-tax-calculator" className="font-semibold text-amber-200 underline underline-offset-2">
                Georgia Income Tax Calculator
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Southeast neighbor holding a 5.19% flat rate for 2026.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/florida-no-income-tax-guide" className="font-semibold text-amber-200 underline underline-offset-2">
                Florida No-Income-Tax Guide
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Compare the 3.99% flat rate with Florida&rsquo;s zero income tax.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/federal-income-tax-calculator-2026" className="font-semibold text-amber-200 underline underline-offset-2">
                2026 Federal Income Tax Calculator
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Stack federal tax on top of North Carolina&rsquo;s flat rate.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/federal-tax-brackets-2026" className="font-semibold text-amber-200 underline underline-offset-2">
                2026 Federal Tax Brackets Guide
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">See which federal bracket your NC income lands in.</p>
            </li>
          </ul>
        </nav>

        <section>
          <h2 className="text-xl font-bold text-white">Official sources</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <a href="https://www.ncdor.gov/taxes-forms/individual-income-tax" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                NCDOR — Individual Income Tax
              </a>
            </li>
            <li>
              <a href="https://www.irs.gov/forms-pubs/about-form-1040" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                IRS About Form 1040, U.S. Individual Income Tax Return
              </a>
            </li>
            <li>
              <a href="https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                IRS Free Tax Return Preparation for Qualifying Taxpayers
              </a>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Confirm the current-year rate and
            deduction with NCDOR before filing. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
    </div>
  );
}
