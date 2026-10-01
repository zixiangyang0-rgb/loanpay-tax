import type { Metadata } from "next";
import Link from "next/link";
import NorthCarolinaTaxCalculator from "./calculator";

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
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
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
      </section>

      <div className="mt-8">
        <NorthCarolinaTaxCalculator />
      </div>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
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
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Will the NC rate fall below 3.99%?</h3>
              <p className="mt-1">Possibly — Session Law 2023-134 cuts 0.5 points toward a 2.49% floor whenever revenue triggers are met, starting 2027.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does NC have local income taxes?</h3>
              <p className="mt-1">No. No city or county levies an income tax — the 3.99% state rate plus property and sales taxes are the full local picture.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Are there personal exemptions in NC?</h3>
              <p className="mt-1">No — eliminated with the 2014 flat-tax reform. Families use the standard deduction and child deduction instead.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does NC tax Social Security?</h3>
              <p className="mt-1">No. Social Security benefits are fully excluded from North Carolina taxable income.</p>
            </div>
          </div>
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
