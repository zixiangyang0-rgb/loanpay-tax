import type { Metadata } from "next";
import Link from "next/link";
import W4Calculator from "./calculator";

export const metadata: Metadata = {
  title: "W-4 Withholding Calculator 2026 | LoanPay Tax",
  description:
    "Check 2026 paycheck withholding against real liability, learn every W-4 step, and fix over- or under-withholding before April.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/w4-withholding-calculator",
  },
};

export default function W4Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          paycheck checkup &middot; Form W-4 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          W-4 Withholding Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Your W-4 tells payroll how much federal tax to skim from each check. Run the numbers
          below, decode every step of the redesigned form, and dial withholding to land near zero
          &mdash; keeping your money during the year instead of waiting for April.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <div className="mt-8">
        <W4Calculator />
      </div>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">What the W-4 actually controls</h2>
          <p className="mt-3">
            Since the 2020 redesign, the W-4 no longer uses allowances. Instead, payroll software
            converts your entries into an annualized income picture: Step 1 sets filing status
            (which selects the standard deduction and bracket widths &mdash; $16,100 single or
            $32,200 joint for 2026), Step 2 flags multiple jobs, Step 3 records dependent credits
            ($2,000 per qualifying child under 17, $500 for other dependents), Step 4 adds other
            income, deductions, or extra withholding, and Step 5 signs it. Accuracy compounds:
            each $1,000 of missing annual income on the form understates withholding by $120 to
            $240, while each unclaimed $2,000 child credit over-withholds by exactly $2,000 a year.
            The form never goes to the IRS &mdash; it stays with your employer &mdash; so updating
            it is free, private, and effective on the next payroll cycle.
          </p>
          <p className="mt-3">
            Withholding is always a prepayment, never the final tax. Payroll annualizes each check
            (a $3,000 biweekly check looks like $78,000 a year), computes layered 2026 tax on that
            pace, and divides back down. Bonuses and commissions get simpler treatment: a flat 22
            percent up to $1 million. The return later reconciles everything, which is why two
            identical earners can get different refunds &mdash; their W-4s told different stories
            during the year.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Walking each step with 2026 numbers</h2>
          <p className="mt-3">
            Step 1 is the foundation: mark single, joint, or head of household honestly, because
            it alone swings the standard deduction by up to $16,100. Step 2 matters enormously for
            two-earner homes &mdash; checking the &ldquo;multiple jobs&rdquo; box roughly halves
            each job&rsquo;s standard deduction and bracket widths so combined withholding lands
            near combined liability, and the IRS online estimator splits the fix precisely.
            Step 3 converts dependents into annual credits; claim the full $2,000 per young child
            here rather than hoping the refund makes it up later. Step 4(a) adds untaxed side
            income (freelance, interest, rental) so withholding covers it, 4(b) records deductions
            beyond the standard (useful for big itemizers), and 4(c) adds a flat extra dollars per
            paycheck &mdash; the simplest penalty shield available.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Which W-4 step fixes which symptom.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Symptom</th>
                  <th className="px-4 py-3 font-semibold">Likely cause</th>
                  <th className="px-4 py-3 font-semibold">W-4 fix</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Huge refund yearly</td><td className="px-4 py-2">Over-withholding</td><td className="px-4 py-2">Add Step-3 credits / 4(b) deductions</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Balance due + penalty</td><td className="px-4 py-2">Second job or side income</td><td className="px-4 py-2">Step 2 box + 4(a) other income</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Refund vanished after raise</td><td className="px-4 py-2">Higher marginal rate</td><td className="px-4 py-2">Small 4(c) extra per check</td></tr>
                <tr><td className="px-4 py-2">New baby, same refund</td><td className="px-4 py-2">Unclaimed child credit</td><td className="px-4 py-2">Step 3: $2,000 per child</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Five moments that demand a new W-4</h2>
          <p className="mt-3">
            File a fresh W-4 within weeks of any of these: a marriage or divorce (filing status
            and deduction change), a birth or adoption (new $2,000 credit), a second job or a
            spouse returning to work (combined income effect), a raise above roughly $10,000
            (marginal-rate drift), or new untaxed income like freelancing or rentals (needs Step
            4(a)). Also revisit after buying a home &mdash; mortgage interest and the $40,400
            SALT cap may make you an itemizer, which belongs in Step 4(b). Employers must apply a
            new W-4 by the start of the first payroll period ending on or after the 30th day you
            submit it, so mid-year fixes still rescue most of the year&rsquo;s remaining checks.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Penalties, safe harbors, and how close is close enough</h2>
          <p className="mt-3">
            Owe more than $1,000 at filing and you may face an underpayment penalty &mdash; unless
            a safe harbor protects you: prepaying at least 90 percent of the current year&rsquo;s
            bill, or 100 percent of last year&rsquo;s (110 percent if last year&rsquo;s AGI topped
            $150,000). For most employees, withholding counts as prepaid evenly through the year
            even if you fix it in December, which makes a year-end Step 4(c) bump a legitimate
            rescue move. Aim to land within a few hundred dollars either way: close enough to
            avoid penalties, without lending the IRS thousands. Pair this checkup with our{" "}
            <Link href="/tax-refund-estimator" className="text-amber-200 underline underline-offset-2">
              refund estimator
            </Link>{" "}
            to see the April result of any tweak before you sign the form.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does the W-4 go to the IRS?</h3>
              <p className="mt-1">No. It stays with your employer, who uses it only to compute withholding. File a new one anytime.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How do two-earner couples avoid owing?</h3>
              <p className="mt-1">Check the Step 2 multiple-jobs box on both forms or complete the worksheet — otherwise each job withholds as if it were the only income.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What is Step 4(c) extra withholding?</h3>
              <p className="mt-1">A flat extra dollar amount per paycheck — the simplest way to cover side income or reach a safe harbor without touching other steps.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">When does a new W-4 take effect?</h3>
              <p className="mt-1">By the first payroll period ending on or after 30 days from submission — usually the next one or two paychecks.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Withholding examples use simplified 2026
            figures; multi-job households should confirm with the IRS Tax Withholding Estimator.
            Read our full{" "}
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
