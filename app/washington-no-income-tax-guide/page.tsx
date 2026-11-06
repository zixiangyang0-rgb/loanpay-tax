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
          <p className="mt-3">
            A concrete example helps. Say a Seattle engineer sells $500,000 of long-term stock in
            2026 with a $230,000 basis &mdash; a $270,000 gain that sits right at the threshold, so
            roughly nothing is owed to Olympia this year. Sell $600,000 instead for a $370,000
            gain, and the 7 percent applies to about $100,000, or roughly $7,000 of state tax on
            top of the federal bill. Tech workers with equity should also check our{" "}
            <Link href="/rsu-stock-options-tax-guide" className="text-amber-200 underline underline-offset-2">
              RSU and stock-options guide
            </Link>{" "}
            before timing exercises and sales around the threshold, because bunching two
            years&rsquo; vesting into one sale can push an otherwise exempt year over the line.
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
          <p className="mt-3">
            Put the sales tax in everyday terms: a $100 shopping basket in Seattle carries about
            $10.25 of tax, while the same basket across the river in Portland carries $0 &mdash; a
            gap that adds up fast for big-ticket buys like cars, appliances, and furniture, where
            a $40,000 vehicle can mean $4,100 of combined tax. One partial offset: itemizers can
            deduct state sales tax instead of state income tax under the federal SALT cap, so keep
            receipts for large purchases and see our{" "}
            <Link href="/standard-deduction-vs-itemized-2026" className="text-amber-200 underline underline-offset-2">
              standard deduction vs. itemizing guide
            </Link>{" "}
            to check whether sales-tax bunching beats the standard deduction in your year.
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
          <p className="mt-3">
            Remote workers get a special note: Washington taxes nothing on wages no matter where
            your employer sits, but the state you left may still chase part-year income &mdash;
            file a part-year return there and keep move-day records. And if you are choosing
            between no-tax states rather than leaving one, weigh what each state charges instead:
            Washington&rsquo;s ~10.25 percent Seattle sales tax versus Texas&rsquo;s ~8.25 percent
            in Austin or Florida&rsquo;s ~7&ndash;8 percent in Miami can flip the math for heavy
            spenders even when the income-tax line reads $0 everywhere.
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
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">I moved to Washington mid-year — do I still owe my old state?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Usually yes, for the part of the year you lived or earned there. File a part-year return in the old state, keep lease and move-day records, and expect Washington itself to ask for nothing on your wages.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Are short-term gains, dividends, or RSU vesting hit by the 7% tax?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. The excise covers only net long-term capital gains above the threshold. Short-term gains, dividends, interest, and wages from RSU vesting are untouched — but selling those vested shares later at a long-term gain can count.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I deduct Washington sales tax on my federal return?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Itemizers can deduct state sales tax instead of state income tax, subject to the federal SALT cap. Track big purchases and compare against the standard deduction before assuming it pays off.</p>
            </details>
          </div>
        </section>

        <GuideBottomAds />

        <nav aria-label="Related guides">
          <h2 className="text-xl font-bold text-white">Related guides</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/texas-no-income-tax-guide" className="font-semibold text-amber-200 underline underline-offset-2">
                Texas No-Income-Tax Guide
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">How another no-income-tax state funds itself.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/florida-no-income-tax-guide" className="font-semibold text-amber-200 underline underline-offset-2">
                Florida No-Income-Tax Guide
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Compare Sunshine State trade-offs before relocating.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/capital-gains-tax-calculator-2026" className="font-semibold text-amber-200 underline underline-offset-2">
                Capital-Gains Guide
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Federal gains still apply — plus WA's 7 percent extra.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/standard-deduction-vs-itemized-2026" className="font-semibold text-amber-200 underline underline-offset-2">
                Standard Deduction vs. Itemizing Guide
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Maximize federal deductions with no state return.</p>
            </li>
          </ul>
        </nav>

        <section>
          <h2 className="text-xl font-bold text-white">Official sources</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <a href="https://dor.wa.gov/" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                Washington Department of Revenue
              </a>
            </li>
            <li>
              <a href="https://dor.wa.gov/taxes-rates/capital-gains-tax" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                Washington DOR — Capital Gains Tax
              </a>
            </li>
            <li>
              <a href="https://www.irs.gov/forms-pubs/about-form-1040" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                IRS About Form 1040, U.S. Individual Income Tax Return
              </a>
            </li>
          </ul>
        </section>

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
