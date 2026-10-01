import type { Metadata } from "next";
import Link from "next/link";
import CapitalGainsCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Capital Gains Tax Calculator 2026 (0/15/20%) | LoanPay Tax",
  description:
    "Estimate 2026 capital-gains tax with 0/15/20% stacking, NIIT, short-term rules, loss harvesting, and state treatment — with worked examples.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/capital-gains-tax-calculator-2026",
  },
};

export default function CapitalGainsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Schedule D &middot; 2026 thresholds
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Capital Gains Tax Calculator 2026
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Patience is taxed less: gains held over a year face 0&ndash;20 percent, while quick
          flips face up to 37 percent. Stack your sale onto your income below and learn the
          harvesting, loss, and NIIT rules around it.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <div className="mt-8">
        <CapitalGainsCalculator />
      </div>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">The stacking secret behind 0/15/20</h2>
          <p className="mt-3">
            Long-term gains (assets held more than one year, counted day-after-purchase to
            sale-date inclusive) stack on top of ordinary taxable income, filling the
            preferential bands from the bottom. For 2026 the 0 percent band runs to $49,450
            single ($98,900 joint, $66,200 head of household, $49,450 separate), 15 percent to
            $545,500 single ($613,700 joint, $579,600 HoH, $306,850 separate), and 20 percent
            beyond. A joint couple with $80,000 of ordinary taxable income and a $30,000
            long-term gain pays 0 percent on the first $18,900 of gain (filling to $98,900) and
            15 percent &mdash; $1,665 &mdash; on the rest: a 5.6 percent effective rate on the
            sale. The same gain for a $400,000-income neighbor costs the full 15 percent plus
            3.8 percent NIIT: $5,640. Identical sale, triple the tax &mdash; stacking explains
            every dollar of difference.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2026 long-term capital-gains thresholds (taxable income).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Rate</th>
                  <th className="px-4 py-3 font-semibold">Single</th>
                  <th className="px-4 py-3 font-semibold">Joint</th>
                  <th className="px-4 py-3 font-semibold">Head of household</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">0%</td><td className="px-4 py-2">To $49,450</td><td className="px-4 py-2">To $98,900</td><td className="px-4 py-2">To $66,200</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">15%</td><td className="px-4 py-2">$49,451–$545,500</td><td className="px-4 py-2">$98,901–$613,700</td><td className="px-4 py-2">$66,201–$579,600</td></tr>
                <tr><td className="px-4 py-2">20%</td><td className="px-4 py-2">Over $545,500</td><td className="px-4 py-2">Over $613,700</td><td className="px-4 py-2">Over $579,600</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Three add-ons sit outside the table. The 3.8 percent net investment income tax layers
            onto gains once MAGI tops $200,000 single / $250,000 joint (thresholds frozen since
            2013, catching more households yearly) &mdash; making the realistic top federal rate
            23.8 percent. Collectibles (coins, art) max at 28 percent, and unrecaptured Section
            1250 depreciation on real estate at 25 percent. Short-term gains get none of this:
            they join wages at 10&ndash;37 percent, which is why day-trading profits and
            flipping feel so heavily taxed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Losses: netting, limits, and harvesting</h2>
          <p className="mt-3">
            The code nets short against short and long against long first, then crosses the
            remainders &mdash; sequencing that rewards pairing long gains with short losses. Net
            losses offset ordinary income up to $3,000 yearly ($1,500 separate), with excess
            carried forward indefinitely via the Capital Loss Carryover Worksheet. December
            harvesting &mdash; realizing losers to shelter winners &mdash; is legitimate, but
            stocks repurchased within 30 days before or after trigger wash-sale disallowance
            (loss deferred into the new shares&rsquo; basis). Direct-indexing funds, municipal
            swaps into similar-but-not-identical securities, and Roth conversions in down years
            are the professional-grade versions of the same idea. Crypto currently sits outside
            wash-sale rules (confirm pending legislation), as our{" "}
            <Link href="/crypto-tax-calculator" className="text-amber-200 underline underline-offset-2">
              crypto guide
            </Link>{" "}
            details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Homes, inheritances, and state treatment</h2>
          <p className="mt-3">
            Homeowners get the biggest exclusion in the code: $250,000 single / $500,000 joint of
            gain excluded on a primary residence owned and used two of the last five years
            (partial exclusions for moves forced by work, health, or surprises). Inherited assets
            receive a stepped-up basis to date-of-death value &mdash; wiping out a lifetime of
            unrealized gain for heirs &mdash; while gifted assets carry the giver&rsquo;s basis
            forward. States mostly ignore the federal preference: California, New York, and New
            Jersey tax gains as ordinary income (see our{" "}
            <Link href="/california-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              California
            </Link>
            {" "}calculator), while{" "}
            <Link href="/washington-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Washington adds 7 percent
            </Link>{" "}
            on large gains and Texas and Florida add nothing. Big sales with estimated-tax
            exposure should also check our{" "}
            <Link href="/quarterly-estimated-tax-calculator" className="text-amber-200 underline underline-offset-2">
              quarterly calculator
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can a gain be taxed at two rates?</h3>
              <p className="mt-1">Yes — a gain straddling a threshold is split: the part filling the lower band gets the lower rate, the rest the higher one.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do gains push me into a higher bracket?</h3>
              <p className="mt-1">Gains raise taxable income and MAGI — they can lift ordinary income&rsquo;s marginal band and trigger NIIT even when taxed at 0% themselves.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What is the $3,000 loss limit?</h3>
              <p className="mt-1">Net capital losses beyond gains can offset up to $3,000 of ordinary income yearly ($1,500 separate); the rest carries forward.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How are inherited stocks taxed?</h3>
              <p className="mt-1">Heirs get a stepped-up basis to date-of-death value — prior appreciation escapes income tax entirely if sold promptly.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Thresholds follow IRS Rev. Proc. 2025-32
            for 2026. Read our full{" "}
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
