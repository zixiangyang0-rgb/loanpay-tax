import type { Metadata } from "next";
import Link from "next/link";
import NewJerseyTaxCalculator from "./calculator";

export const metadata: Metadata = {
  title: "New Jersey Income Tax Calculator 2026 (1.4%–10.75%) | LoanPay Tax",
  description:
    "Estimate 2026 NJ tax across 7 brackets, with retirement exclusions, property-tax deduction, ANCHOR relief, and NYC-commuter guidance.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/new-jersey-income-tax-calculator",
  },
};

export default function NewJerseyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          NJ Division of Taxation &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          New Jersey Income Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Seven brackets from 1.4 to 10.75 percent, stingy deductions, and the nation&rsquo;s
          highest property taxes &mdash; softened by standout retirement exclusions. Estimate
          your 2026 NJ bill and learn the relief programs that actually move the needle.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <div className="mt-8">
        <NewJerseyTaxCalculator />
      </div>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">Seven bands, low floor, high ceiling</h2>
          <p className="mt-3">
            New Jersey&rsquo;s 2026 schedule starts at just 1.4 percent on the first $20,000
            single &mdash; the gentlest entry rate in the Northeast &mdash; then climbs 1.75
            percent to $35,000, 3.5 to $40,000, 5.525 to $75,000, 6.37 to $500,000, 8.97 to $1
            million, and 10.75 percent above. Joint thresholds widen the lower bands
            substantially. Personal exemptions are token ($1,000 per filer and dependent), and
            New Jersey famously decouples from federal itemizing: there is no state standard
            deduction at all, only narrow carve-outs. A single $120,000 earner owes roughly
            $5,900 &mdash; about 4.9 percent effective &mdash; while a $1.5 million earner faces
            an 8.5+ percent effective rate before property tax enters the picture.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2026 NJ single brackets (joint bands are wider — confirm tables).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Taxable income</th>
                  <th className="px-4 py-3 font-semibold">Rate</th>
                  <th className="px-4 py-3 font-semibold">Taxable income</th>
                  <th className="px-4 py-3 font-semibold">Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">To $20,000</td><td className="px-4 py-2">1.4%</td><td className="px-4 py-2">$75,001 &ndash; $500,000</td><td className="px-4 py-2">6.37%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$20,001 &ndash; $35,000</td><td className="px-4 py-2">1.75%</td><td className="px-4 py-2">$500,001 &ndash; $1M</td><td className="px-4 py-2">8.97%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$35,001 &ndash; $40,000</td><td className="px-4 py-2">3.5%</td><td className="px-4 py-2">Over $1M</td><td className="px-4 py-2">10.75%</td></tr>
                <tr><td className="px-4 py-2">$40,001 &ndash; $75,000</td><td className="px-4 py-2">5.525%</td><td className="px-4 py-2"></td><td className="px-4 py-2"></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Retirement: New Jersey&rsquo;s split personality</h2>
          <p className="mt-3">
            Workers face one of America&rsquo;s heavier loads; retirees get one of its lightest.
            The pension-and-retirement exclusion lets qualifying filers 62+ (or disabled at any
            age) exclude up to $75,000 single / $100,000 joint of pensions, 401(k), and IRA
            income when total income stays under $100,000 &mdash; and Social Security is fully
            exempt at every age and income. A 65-year-old couple with $90,000 of pension plus
            Social Security can owe $0. Under 62, however, 401(k) contributions get no state
            deduction and withdrawals face full rates. The $15,000 NJ property-tax
            deduction against income (for those who do not claim the federal SALT benefit on it)
            plus the $50,000+ senior freeze (income-capped assessment freeze) further tilt the
            system toward longtime older owners.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">ANCHOR, property tax, and commuter math</h2>
          <p className="mt-3">
            New Jersey&rsquo;s ~2.4 percent average effective property-tax rate is America&rsquo;s
            highest &mdash; a $600,000 Bergen County home can carry a $13,000+ bill. The ANCHOR
            program answers with direct relief: up to $1,500 for homeowners and $450 for renters
            at qualifying incomes, filed separately from the return each fall. Commuters into New
            York file both states and claim a resident credit for NY tax paid (capped at the NJ
            liability on that income), while PA commuters use the reciprocal agreement to pay
            only New Jersey. With the 2026 federal SALT cap at $40,400, itemizers finally deduct
            meaningful NJ tax federally &mdash; model it, because the combined burden drops
            noticeably. Compare neighboring{" "}
            <Link href="/new-york-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              New York
            </Link>{" "}
            and{" "}
            <Link href="/pennsylvania-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Pennsylvania
            </Link>{" "}
            before choosing which side of the Hudson or Delaware to live on.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Is there a NJ standard deduction?</h3>
              <p className="mt-1">No. New Jersey offers no standard deduction — only personal exemptions and narrow exclusions, so nearly everyone pays from dollar one.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What is ANCHOR?</h3>
              <p className="mt-1">Direct state relief of up to $1,500 for homeowners ($450 renters) at qualifying incomes, applied for separately each fall.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do retirees pay NJ income tax?</h3>
              <p className="mt-1">Often $0: up to $75K/$100K of retirement income excluded at 62+ under $100K total income, and Social Security always exempt.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">I work in NYC but live in NJ?</h3>
              <p className="mt-1">File both states; NJ grants a resident credit for NY tax paid on the same wages so the same dollar is not taxed twice.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Confirm brackets, exclusions, and ANCHOR
            amounts with NJ Division of Taxation. Read our full{" "}
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
