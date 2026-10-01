import type { Metadata } from "next";
import Link from "next/link";
import HomeOfficeCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Home Office Deduction Calculator 2026 | LoanPay Tax",
  description:
    "Compare the 2026 simplified ($5/sq ft) vs. actual-expense home-office methods, pass the exclusive-use test, and document without audit fear.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/home-office-deduction-calculator",
  },
};

export default function HomeOfficePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Form 8829 &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Home Office Deduction Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The most underclaimed freelancer break &mdash; and the most feared. Compare both
          methods below, learn the two tests that qualify any spare room, and document once so
          April is boring.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <div className="mt-8">
        <HomeOfficeCalculator />
      </div>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">The two tests every office must pass</h2>
          <p className="mt-3">
            The IRS grants the deduction only for space used exclusively and regularly as your
            principal place of business (or for meeting clients, or a separate structure).
            Exclusive means exclusive: the guest bed in the corner kills the whole room&rsquo;s
            claim, while a clearly divided 100-square-foot zone inside a larger room can qualify
            if the boundary is real and documented with photos and a floor plan. Regular means
            ongoing &mdash; a few year-end work weekends do not count. Employees face an extra
            hurdle: the office must be for the employer&rsquo;s convenience, not merely helpful
            to you, and unreimbursed-employee-expense rules currently block most W-2 claims
            through 2026 &mdash; this deduction belongs overwhelmingly to the self-employed.
            Daycare and storage uses follow special formulas on Form 8829&rsquo;s instructions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Simplified vs. actual: the crossover math</h2>
          <p className="mt-3">
            The simplified method pays $5 per square foot to 300 square feet &mdash; a $1,500
            maximum for five minutes of paperwork and zero depreciation recapture later. The
            actual method multiplies your business-use percentage (office ÷ whole home) by rent,
            utilities, insurance, repairs, and &mdash; for owners &mdash; mortgage interest,
            property tax, and depreciation, often reaching $2,000&ndash;$5,000 for renters and
            more for owners. The crossover sits near 10 percent business use in a mid-cost rental:
            above it, actual usually wins; below it, simplified wins on hassle-adjusted value.
            Owners beware the depreciation trade &mdash; claimed depreciation reduces basis and
            faces up to 25 percent unrecaptured-gain tax at sale &mdash; while simplified skips
            depreciation entirely. You may switch methods yearly, so re-run the estimator each
            return.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Method comparison at a glance (2026 rules).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">Simplified</th>
                  <th className="px-4 py-3 font-semibold">Actual</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Max / typical value</td><td className="px-4 py-2">$1,500 cap</td><td className="px-4 py-2">No cap; often $2K–$5K+</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Paperwork</td><td className="px-4 py-2">One line</td><td className="px-4 py-2">Form 8829 + records</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Depreciation recapture</td><td className="px-4 py-2">None</td><td className="px-4 py-2">Up to 25% at sale</td></tr>
                <tr><td className="px-4 py-2">Best for</td><td className="px-4 py-2">Small rooms, renters, simplicity</td><td className="px-4 py-2">Large %, owners, high costs</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Documentation that ends audit fear</h2>
          <p className="mt-3">
            The home office is not an audit magnet when documented &mdash; it becomes one when
            round numbers appear from memory. Measure once with a tape (or floor-plan app),
            photograph the exclusive setup, save twelve months of utility bills and rent
            receipts, and log the percentage calculation on the worksheet itself. Direct office
            expenses (a dedicated repair, office-only supplies) deduct at 100 percent; indirect
            costs split by percentage. Keep the file seven years with your return. Renters should
            confirm lease permission for business use; owners should track improvements
            separately from repairs, since improvements depreciate over 39 years while repairs
            deduct immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Interactions with other freelancer breaks</h2>
          <p className="mt-3">
            The home-office deduction lowers Schedule C profit, which simultaneously cuts income
            tax and 15.3 percent SE tax &mdash; a double saving most deductions cannot match. It
            pairs with mileage (drive from the qualified home office and every trip starts as
            business mileage), the{" "}
            <Link href="/self-employment-tax-calculator" className="text-amber-200 underline underline-offset-2">
              SE tax calculation
            </Link>
            , and{" "}
            <Link href="/sep-ira-vs-solo-401k-tax" className="text-amber-200 underline underline-offset-2">
              retirement contributions
            </Link>{" "}
            that stack on top. Remote employees reimbursed under an accountable plan get the
            economics tax-free without claiming anything &mdash; ask HR before assuming the
            deduction is your only path.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can employees claim a home office?</h3>
              <p className="mt-1">Rarely through 2026 — unreimbursed employee expenses are suspended federally, and employer-convenience rules are strict. Some states allow it; check yours.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does claiming trigger an audit?</h3>
              <p className="mt-1">Not by itself. Reasonable, documented percentages within norms draw no special attention — round-number guesses do.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Kitchen-table workers — any deduction?</h3>
              <p className="mt-1">No, without exclusive space. Carve a genuinely exclusive zone (even part of a room) with photos and measurements to qualify.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What happens when I sell the home?</h3>
              <p className="mt-1">Simplified method: nothing. Actual method with depreciation: gain up to depreciation claimed faces up to 25% unrecaptured tax.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. See IRS Publication 587 and Form 8829 for
            official rules. Read our full{" "}
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
