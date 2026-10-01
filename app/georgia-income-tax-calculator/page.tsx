import type { Metadata } from "next";
import Link from "next/link";
import GeorgiaTaxCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Georgia Income Tax Calculator 2026 (5.19% Flat) | LoanPay Tax",
  description:
    "Estimate 2026 Georgia tax at the flat 5.19% rate, with deductions, retirement exclusions, credits, and Atlanta-area homeowner math.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/georgia-income-tax-calculator",
  },
};

export default function GeorgiaPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Georgia Dept. of Revenue &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Georgia Income Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Georgia finished converting to a flat tax &mdash; 5.19 percent for 2026, still stepping
          down. Estimate your bill below and learn the deductions, retirement breaks, and property
          dynamics that define Peach State budgets.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <div className="mt-8">
        <GeorgiaTaxCalculator />
      </div>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">From brackets to a falling flat rate</h2>
          <p className="mt-3">
            Georgia once taxed income across six graduated bands topping 5.75 percent. Lawmakers
            replaced them with a single flat rate that steps down as revenue targets are met
            &mdash; 5.39 percent in 2025, 5.19 percent for 2026, with further cuts scheduled while
            surpluses hold. Georgia AGI starts from the federal figure with state adjustments,
            then sheds a standard deduction ($12,000 single, $18,500 joint under recent law)
            plus personal exemptions ($3,000 single, $6,000 joint, $3,000 per dependent). The
            remainder faces the flat 5.19 percent. A single $90,000 earner thus shields about
            $15,000, pays on $75,000, and owes roughly $3,893 &mdash; a 4.33 percent effective
            rate that competes well across the Southeast.
          </p>
          <p className="mt-3">
            Seniors get Georgia&rsquo;s best deal: each taxpayer 62&ndash;64 may exclude up to
            $35,000 of retirement income, and those 65+ exclude up to $65,000 per person &mdash; a
            joint senior couple can shield $130,000 of pensions, IRA distributions, and
            investment income before the rate touches anything. Social Security stays fully
            exempt at every age. Workers should note Georgia taxes capital gains as ordinary
            income with no preference, while conforming to most federal business deductions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Credits, homeowners, and Atlanta math</h2>
          <p className="mt-3">
            Georgia&rsquo;s credit shelf includes the low-income credit, child-and-dependent-care
            credit (30 percent of federal), education donation credits, film and jobs credits for
            businesses, and a pass-through entity election letting S-corps and partnerships pay at
            the entity level to preserve the federal SALT deduction. Homeowners face effective
            property rates near 0.79 percent statewide &mdash; modest nationally but rising fast
            inside the Perimeter, where $500,000 homes carry $4,000&ndash;$6,000 levies plus
            county and school add-ons. Georgia&rsquo;s homestead exemptions freeze or discount
            assessed value in many counties (Atlanta&rsquo;s floating homestead, Fulton&rsquo;s
            basic $30,000&ndash;$50,000 variants), so file county exemptions immediately after
            closing or overpay for years.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Georgia tax at sample incomes (single, no dependents, before credits).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Georgia AGI</th>
                  <th className="px-4 py-3 font-semibold">Taxable</th>
                  <th className="px-4 py-3 font-semibold">Tax (5.19%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$50,000</td><td className="px-4 py-2">$35,000</td><td className="px-4 py-2">$1,817</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$100,000</td><td className="px-4 py-2">$85,000</td><td className="px-4 py-2">$4,412</td></tr>
                <tr><td className="px-4 py-2">$250,000</td><td className="px-4 py-2">$235,000</td><td className="px-4 py-2">$12,197</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Filing and regional comparison</h2>
          <p className="mt-3">
            Georgia returns (Form 500) are due April 15, 2027, with Georgia estimates on federal
            dates and e-filing through Georgia Tax Center. Part-year residents allocate with
            Schedule 3; full-year nonresidents with Georgia-source income (rentals, business)
            file as nonresidents. Remote workers for Georgia employers generally owe Georgia tax
            on Georgia workdays. Stacked against regional rivals, Georgia&rsquo;s 5.19 percent
            beats South Carolina&rsquo;s top 6.2 percent and matches the Southeast middle &mdash;
            but{" "}
            <Link href="/florida-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Florida
            </Link>{" "}
            and{" "}
            <Link href="/texas-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Texas
            </Link>{" "}
            charge 0 percent, and{" "}
            <Link href="/north-carolina-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              North Carolina&rsquo;s 3.99 percent
            </Link>{" "}
            now undercuts Georgia for high earners. Weigh income tax against Georgia&rsquo;s
            moderate property taxes and 4 percent state sales tax (up to ~8.9 percent combined)
            before relocating.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Is Georgia&rsquo;s rate still falling?</h3>
              <p className="mt-1">Yes — 5.19% for 2026 with further 0.1-point annual cuts while revenue triggers are met, heading toward a much lower floor.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How are retirees treated in Georgia?</h3>
              <p className="mt-1">Very well: up to $65,000 per person 65+ of retirement income excluded ($35,000 at 62–64), plus fully exempt Social Security.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does Georgia tax capital gains specially?</h3>
              <p className="mt-1">No. Gains face the same 5.19% as wages — there is no state-level 0/15/20% preference.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What sales tax will I pay in Georgia?</h3>
              <p className="mt-1">4% state plus county add-ons — most metro Atlanta shoppers pay 7–8.9% combined at the register.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Confirm deduction and rate-step figures
            with the Georgia Department of Revenue. Read our full{" "}
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
