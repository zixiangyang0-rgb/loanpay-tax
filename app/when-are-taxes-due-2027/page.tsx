import type { Metadata } from "next";
import Link from "next/link";
import { GuideBottomAds, GuideInArticleAds, GuideTopAds } from "../../components/GuideAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "When Are Taxes Due in 2027? All Deadlines | LoanPay Tax",
  description:
    "Every 2027 tax deadline: April 15 filing day for 2026 returns, extension to October 15, quarterly estimates, IRA contributions, and state dates.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/when-are-taxes-due-2027",
  },
};

const FEDERAL = [
  "January 15, 2027 — Q4 2026 estimated payment due (final voucher for 2026 income).",
  "Late January 2027 — IRS opens e-filing; W-2s and 1099-NECs must reach you by Jan 31.",
  "January 31, 2027 — File + pay in full now and skip the Q4 voucher entirely.",
  "March 16, 2027 — S-corp (1120-S) and partnership (1065) returns due (2026 year).",
  "April 15, 2027 — 2026 individual returns (1040) due; Q1 2027 estimate due; last day for 2026 IRA contributions and extension requests.",
  "June 15, 2027 — Q2 2027 estimate due; abroad filers get automatic 2-month filing extension.",
  "September 15, 2027 — Q3 2027 estimate due; extended S-corp/partnership deadline.",
  "October 15, 2027 — Extended individual returns due; last day for 2026 SEP-IRA funding.",
];

export default function TaxesDuePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="When Are Taxes Due in 2027? All Deadlines | LoanPay Tax" description="Every 2027 tax deadline: April 15 filing day for 2026 returns, extension to October 15, quarterly estimates, IRA contributions, and state dates." url="https://tax.loanpaylogic.com/when-are-taxes-due-2027" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          2026 tax year &middot; filed in 2027
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          When Are Taxes Due in 2027?
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          One missed date can cost penalties, interest, or a lost deduction. Here is the complete
          2027 calendar &mdash; filing day, estimates, extensions, and retirement deadlines
          &mdash; so every obligation lands on time.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <GuideTopAds />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">2027 federal deadline checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {FEDERAL.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The headline date: April 15, 2027</h2>
          <p className="mt-3">
            Thursday, April 15, 2027 is Tax Day for 2026 individual returns &mdash; Form 1040
            filed or Form 4868 extension requested, any balance paid, Q1 2027 estimated payment
            submitted, and 2026 IRA contributions ($7,500 under 50, $8,600 at 50+) completed, all
            by midnight. April 15 falls on a weekday with no D.C. holiday collision in 2027, so
            no shift is expected &mdash; but disaster-area relief can extend specific counties,
            always confirm at IRS.gov if storms hit your ZIP. Filing for extension grants until
            October 15 to submit paperwork, never to pay: estimate the balance with last
            year&rsquo;s figures plus a cushion, pay it with the extension, and true up later.
            Calendar-year C-corps share the April 15 date; S-corps and partnerships file March
            16, 2027 so K-1s reach owners in time.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2027 estimated-payment calendar for 2027 income.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Voucher</th>
                  <th className="px-4 py-3 font-semibold">Covers</th>
                  <th className="px-4 py-3 font-semibold">Due</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Q1 2027</td><td className="px-4 py-2">Jan–Mar 2027</td><td className="px-4 py-2">Apr 15, 2027</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Q2 2027</td><td className="px-4 py-2">Apr–May 2027</td><td className="px-4 py-2">Jun 15, 2027</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Q3 2027</td><td className="px-4 py-2">Jun–Aug 2027</td><td className="px-4 py-2">Sep 15, 2027</td></tr>
                <tr><td className="px-4 py-2">Q4 2027</td><td className="px-4 py-2">Sep–Dec 2027</td><td className="px-4 py-2">Jan 15, 2028</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Retirement and HSA deadlines that hide inside Tax Day</h2>
          <p className="mt-3">
            April 15, 2027 is also the last call for 2026 IRA contributions, prior-year HSA
            contributions (up to $4,300 single / $8,550 family for 2026, plus $1,000 catch-up at
            55+; confirm IRS figures), Archer MSA funding, and Coverdell ESA deposits. SEP-IRA
            contributions for the self-employed stretch to the extended filing date (October 15,
            2027 with extension), while Solo 401(k) elective deferrals had to land by December
            31, 2026 even though profit-sharing can wait. Miss the IRA window and the room is
            gone forever &mdash; unlike 401(k)s, IRAs have no make-up provision. Required minimum
            distributions for 2026 (owners 73+) must exit by December 31, 2027, except the first
            RMD which allows April 1, 2028 at the cost of doubling up that year.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">States, penalties, and refund windows</h2>
          <p className="mt-3">
            Most states mirror April 15 (California, New York, Illinois, and the rest of our
            covered states all use it for 2026 returns), but verify locally &mdash; Louisiana and
            Virginia run May dates and fiscal-year filers differ everywhere. Penalties stack
            fast: failure-to-file runs 5 percent monthly (capped 25 percent), failure-to-pay 0.5
            percent monthly plus interest, and estimated underpayments accrue per quarter &mdash;
            which is why filing on time even when broke always wins. Good news for the patient:
            refunds never penalize &mdash; file within three years of the deadline (April 2028
            for 2024 returns, and so on) to claim them. Size any balance early with our{" "}
            <Link href="/tax-refund-estimator" className="text-amber-200 underline underline-offset-2">
              refund estimator
            </Link>{" "}
            and{" "}
            <Link href="/quarterly-estimated-tax-calculator" className="text-amber-200 underline underline-offset-2">
              quarterly calculator
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">2027 quarterly estimates: pay as you earn</h2>
          <p className="mt-3">
            Employees settle tax through withholding every paycheck, but freelancers, landlords, and
            anyone with large investment income must prepay in four vouchers: April 15, June 15, and
            September 15, 2027, then January 15, 2028 for the final 2027 quarter. Each voucher should
            carry roughly one quarter of the lesser of 90 percent of this year&apos;s tax or 100 percent
            of last year&apos;s tax (110 percent at higher incomes) to dodge the underpayment penalty.
            Miss a voucher and the penalty runs per quarter from its due date, so a June shortfall costs
            more than a September one of the same size. A practical rhythm works best: reconcile income
            at the end of March, May, August, and December, then size each payment with our{" "}
            <Link href="/quarterly-estimated-tax-calculator" className="text-amber-200 underline underline-offset-2">
              quarterly estimated tax calculator
            </Link>{" "}
            before the deadline week rush.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How to get an extension to October 15, 2027</h2>
          <p className="mt-3">
            Need more time for paperwork? File Form 4868 by April 15, 2027 and your individual
            return moves to October 15, 2027 automatically &mdash; no reason required, no approval
            letter to wait for. E-file the form through your software, have a preparer submit it,
            or mail a paper 4868 postmarked by Tax Day. The catch that surprises people every year:
            the extension covers filing only, never payment. You must still estimate the full 2026
            balance and pay at least 90 percent by April 15 to avoid the late-payment penalty, then
            settle the remainder when the return goes in. State extensions are separate &mdash; some
            states grant them automatically with the federal form, others want their own request &mdash;
            so check your state before assuming you are covered. Work through our{" "}
            <Link href="/tax-filing-checklist" className="text-amber-200 underline underline-offset-2">
              tax filing checklist
            </Link>{" "}
            before April so W-2s, 1099s, and receipts are already gathered when you estimate the payment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Penalty example: what one month late really costs</h2>
          <p className="mt-3">
            Say you owe $4,000 for 2026 and miss April 15 by exactly one month without an extension.
            The failure-to-file penalty hits 5 percent of the unpaid balance &mdash; $200 &mdash; and the
            failure-to-pay penalty adds another 0.5 percent &mdash; $20 &mdash; plus daily interest on the
            $4,000 until it clears. File the return on time but pay one month late instead, and the
            $200 filing penalty disappears entirely; only the roughly $20 payment penalty plus interest
            remains. That single comparison is why preparers repeat one rule: file on time even when you
            cannot pay, then set up an installment plan. Estimated-tax shortfalls work the same way per
            quarter, which is why freelancers track each voucher in our{" "}
            <Link href="/freelancer-quarterly-tax-guide" className="text-amber-200 underline underline-offset-2">
              freelancer quarterly tax guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Missed a 2027 deadline? Act in this order</h2>
          <p className="mt-3">
            First, file the return or extension today &mdash; every extra day adds failure-to-file
            penalty if a balance is due, while a refund-due return faces no penalty at all. Second,
            pay whatever you can immediately, even a partial payment, because interest and the
            failure-to-pay charge accrue only on the unpaid remainder. Third, open an IRS online
            payment plan if the rest will take months; setup takes minutes and freezes collection
            pressure while you catch up. Fourth, fix withholding or next quarter&apos;s estimate right
            away so the same shortfall does not repeat in June or September. Keep every confirmation
            number and certified-mail receipt &mdash; if penalty relief or first-time abatement applies
            later, that paper trail decides the outcome.
          </p>
        </section>

        <GuideInArticleAds />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">When are 2026 taxes due?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">April 15, 2027 for most individuals — file, pay, request extension, fund IRAs, and submit Q1 2027 estimates by that date.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does an extension delay payment?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. Extensions grant paperwork time to October 15, 2027 — tax owed still accrues penalties and interest from April 15.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What if Tax Day falls on a weekend?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">The deadline shifts to the next business day. April 15, 2027 is a Thursday, so no shift is expected absent new holidays.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How long do I have to claim a refund?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Three years from the filing deadline — late but refund-due returns face no penalties, only a wait for the check.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What happens if I miss a quarterly estimated payment?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">The IRS adds an underpayment penalty per quarter on the shortfall plus interest. Pay online as soon as you can — each day you wait increases the charge, and raising withholding can help cover the gap.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do state deadlines match the federal April 15 date?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Most do, including California, New York, and Illinois for 2026 returns, but Louisiana and Virginia run May dates and disaster relief can shift any state. Confirm with your state revenue agency before filing.</p>
            </details>
          </div>
        </section>

        <GuideBottomAds />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Dates follow published IRS calendars;
            disaster relief can alter them. Read our full{" "}
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
