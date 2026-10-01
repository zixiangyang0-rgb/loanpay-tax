import type { Metadata } from "next";
import Link from "next/link";
import { GuideBottomAds, GuideInArticleAds, GuideTopAds } from "../../components/GuideAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "Washington Has No Income Tax: 2026 Guide (But 7% on Gains) | LoanPay Tax",
  description:
    "Washington levies no wage income tax in 2026 but taxes large capital gains at 7% — plus sales, property, B&O, and estate taxes explained for movers.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/washington-no-income-tax-guide",
  },
};

const CHECKLIST = [
  "Confirm zero Washington tax on wages, pensions, and Social Security.",
  "Check the 7% capital-gains tax: applies above ~$270,000 of gains (indexed) with carve-outs.",
  "Budget 6.5% state + up to ~4% local sales tax (Seattle ~10.25% combined).",
  "Business owners: model B&O gross-receipts tax (0.13%–3.3% by activity).",
  "Estates above ~$2.19M face 10%–20% WA estate tax — plan separately from federal.",
  "File federal 1040 normally; WA has no individual return to file.",
];

export default function WashingtonPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Washington Has No Income Tax: 2026 Guide (But 7% on Gains) | LoanPay Tax" description="Washington levies no wage income tax in 2026 but taxes large capital gains at 7% — plus sales, property, B&O, and estate taxes explained for movers." url="https://tax.loanpaylogic.com/washington-no-income-tax-guide" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          no wage income tax &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Washington No-Income-Tax Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          No tax on paychecks &mdash; but a 7 percent tax on big capital gains, steep sales taxes,
          and a low-threshold estate tax complicate the story. Here is Washington&rsquo;s full
          2026 ledger for movers, investors, and business owners.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <GuideTopAds />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Washington arrival checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Zero on wages, 7% on large gains</h2>
          <p className="mt-3">
            Washington taxes no individual&rsquo;s wages, freelance earnings, pensions, or Social
            Security &mdash; there is no state return for workers and no withholding. Since 2022,
            however, the state taxes net long-term capital gains above an indexed threshold
            (about $270,000 for 2026; confirm with the Department of Revenue) at 7 percent, with
            deductions for charitable gifts of gains, certain small-business sales, and real
            estate. The tax survived state supreme court review as an excise tax, and lawmakers
            have expanded its reach since &mdash; investors realizing $500,000 of stock gains owe
            roughly $16,100 to Olympia on top of federal 15&ndash;20 percent plus any 3.8 percent
            NIIT. Short-term gains, dividends, and interest remain untouched by the state, and
            retirees drawing pensions rather than selling assets feel nothing.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Washington taxes at a glance, 2026.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Tax</th>
                  <th className="px-4 py-3 font-semibold">Rate / rule</th>
                  <th className="px-4 py-3 font-semibold">Who feels it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Wage income tax</td><td className="px-4 py-2">0%</td><td className="px-4 py-2">Nobody — constitutionally barred</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Capital-gains excise</td><td className="px-4 py-2">7% above ~$270K gains</td><td className="px-4 py-2">Large investors, founders</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Sales tax</td><td className="px-4 py-2">6.5% + local (Seattle ~10.25%)</td><td className="px-4 py-2">All shoppers</td></tr>
                <tr><td className="px-4 py-2">Estate tax</td><td className="px-4 py-2">10&ndash;20% above ~$2.19M</td><td className="px-4 py-2">Larger estates</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Sales, property, B&O, and estate taxes</h2>
          <p className="mt-3">
            The 6.5 percent state sales tax plus local add-ons produces Seattle&rsquo;s ~10.25
            percent combined rate &mdash; among America&rsquo;s highest &mdash; though groceries
            and prescription drugs are exempt. Property taxes average about 0.9 percent statewide
            but King County&rsquo;s levies on $800,000+ median homes still run $7,000&ndash;$9,000.
            Businesses pay the B&O tax on gross receipts (no deduction for costs): retailing 0.471
            percent, most services 1.5&ndash;1.75 percent, with small-business credits softening
            the smallest firms &mdash; low-margin businesses feel it disproportionately since
            unprofitable revenue is still taxed. The estate tax starts near $2.19 million
            (indexed) at 10 percent rising to 20 percent &mdash; far below the $15 million federal
            line &mdash; so estate planning matters in Washington a decade before it matters
            federally.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Who wins in Washington</h2>
          <p className="mt-3">
            High-salary tech workers with modest stock sales are the clearest winners: a $250,000
            salary costs $0 state tax versus ~$15,000 in California or ~$14,000 in New York City.
            Founders and early employees with concentrated gains should model the 7 percent excise
            against installment sales, charitable bunching, and residency timing &mdash; realizing
            gains across calendar years keeps each year under the threshold. Retirees drawing
            pensions win quietly; landlords face no state tax on rents but full property levies.
            Compare with{" "}
            <Link href="/texas-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Texas
            </Link>
            ,{" "}
            <Link href="/florida-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Florida
            </Link>
            , and our{" "}
            <Link href="/capital-gains-tax-calculator-2026" className="text-amber-200 underline underline-offset-2">
              capital-gains guide
            </Link>{" "}
            before structuring a liquidity event around a move.
          </p>
        </section>

        <GuideInArticleAds />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does Washington tax my salary?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. Wages, pensions, and Social Security face 0% — there is no individual return, withholding, or estimated system.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What gains does the 7% tax hit?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Net long-term capital gains above ~$270,000 yearly (indexed), after deductions for charity, qualifying business sales, and real estate.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is the B&O tax?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">A gross-receipts tax (0.13%–3.3% by activity) on Washington businesses — revenue is taxed even when the business loses money.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does WA have an estate tax?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes — 10–20% above roughly $2.19M, far below the $15M federal threshold. Mid-size estates need WA-specific planning.</p>
            </details>
          </div>
        </section>

        <GuideBottomAds />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Thresholds index yearly; confirm with the
            Washington Department of Revenue. Read our full{" "}
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
