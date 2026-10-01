import type { Metadata } from "next";
import Link from "next/link";
import EstimatedTaxCalculator from "./calculator";
import {
  CalculatorAnchorAds,
  CalculatorInArticleAds,
  CalculatorSidebarAds,
} from "../../components/CalculatorAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "Quarterly Estimated Tax Calculator 2026 | LoanPay Tax",
  description:
    "Compute 2026 quarterly estimated payments from self-employment profit, with deadlines, safe harbors, penalties, and Form 1040-ES walkthrough.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/quarterly-estimated-tax-calculator",
  },
};

export default function QuarterlyPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Quarterly Estimated Tax Calculator 2026 | LoanPay Tax" description="Compute 2026 quarterly estimated payments from self-employment profit, with deadlines, safe harbors, penalties, and Form 1040-ES walkthrough." url="https://tax.loanpaylogic.com/quarterly-estimated-tax-calculator" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Form 1040-ES &middot; 2026 deadlines
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Quarterly Estimated Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          No employer withholds from freelance, rental, or investment income &mdash; so the IRS
          collects it quarterly instead. Estimate each 2026 voucher below and learn the safe
          harbors that erase penalties.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <EstimatedTaxCalculator />
          <CalculatorInArticleAds />
        </div>
        <CalculatorSidebarAds />
      </div>
      <CalculatorAnchorAds />

      <article className="mx-auto mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">Who must pay quarterly</h2>
          <p className="mt-3">
            You generally owe estimated tax for 2026 if you expect to owe at least $1,000 after
            withholding and credits &mdash; the classic profile being freelancers, landlords,
            gig workers, retirees with investment income, and employees whose side business
            outgrew their W-4. The system is pay-as-you-go by law: the IRS treats April income as
            April&rsquo;s tax debt, not next April&rsquo;s. Four equal vouchers keep you current,
            and each is credited to the quarter it arrives, so catching up late helps less than
            paying on time. W-2 workers with only wage income are usually exempt because employer
            withholding already satisfies the schedule.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2026 estimated-payment calendar (2026 income, filed in 2027).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Voucher</th>
                  <th className="px-4 py-3 font-semibold">Income period</th>
                  <th className="px-4 py-3 font-semibold">Due date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Q1 2026</td><td className="px-4 py-2">Jan 1 &ndash; Mar 31, 2026</td><td className="px-4 py-2">April 15, 2026</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Q2 2026</td><td className="px-4 py-2">Apr 1 &ndash; May 31, 2026</td><td className="px-4 py-2">June 15, 2026</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Q3 2026</td><td className="px-4 py-2">Jun 1 &ndash; Aug 31, 2026</td><td className="px-4 py-2">Sept 15, 2026</td></tr>
                <tr><td className="px-4 py-2">Q4 2026</td><td className="px-4 py-2">Sep 1 &ndash; Dec 31, 2026</td><td className="px-4 py-2">Jan 15, 2027</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Note the uneven periods &mdash; the IRS calls them quarterly, but Q2 covers two
            months and Q4 covers four. Miss a date and the meter starts: penalties accrue per
            quarter from each deadline, so a September catch-up does not forgive a skipped April.
            Two escapes exist: pay everything by April 15, 2026 and skip vouchers entirely, or
            file your full 2026 return and pay the balance by January 31, 2027 to erase the Q4
            voucher. Farmers and fishers with two-thirds of income from those trades need only
            one payment by January 15, 2027.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Safe harbors: the penalty off-switch</h2>
          <p className="mt-3">
            You owe no penalty &mdash; even with a big April balance &mdash; if prepayments reach
            any of three harbors: 90 percent of the current year&rsquo;s total tax, 100 percent
            of last year&rsquo;s total tax (110 percent when last year&rsquo;s AGI exceeded
            $150,000), or an April balance under $1,000. New freelancers with unpredictable income
            usually anchor on last year&rsquo;s tax divided by four: it is knowable in January and
            fully protective. As income clarifies mid-year, switch to the annualized-income method
            on Schedule AI of Form 2210 if earnings arrive lopsidedly &mdash; a huge Q4 contract
            should not force oversized Q1&ndash;Q3 payments. State estimated schedules generally
            mirror these dates but carry their own forms and thresholds, so confirm with your
            state agency.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How the estimator&rsquo;s math works</h2>
          <p className="mt-3">
            The tool layers two taxes. First, self-employment tax: 15.3 percent (12.4 percent
            Social Security on the first $184,500 of combined wages and 92.35 percent of profit,
            plus 2.9 percent Medicare on everything, plus 0.9 percent above $200,000 single).
            Second, ordinary income tax on profit after the half-SE deduction and the $16,100
            standard deduction, using 2026 single brackets. A $60,000-profit freelancer with no
            wages thus faces roughly $8,478 of SE tax and about $3,900 of income tax &mdash; a
            combined federal load near $12,400, or $3,100 per quarter. Retirement contributions
            (SEP-IRA, Solo 401(k)), health premiums, and half the SE tax all shrink the income-tax
            half, which is why contributing in December still cuts the January voucher&rsquo;s
            base.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Paying: methods, proof, and state siblings</h2>
          <p className="mt-3">
            Pay each voucher through IRS Direct Pay or EFTPS (which stores confirmations and
            history), by card for a processing fee, or by mailing Form 1040-ES with a check marked
            for the right quarter &mdash; mislabeled quarters are a classic penalty trigger. Keep
            every confirmation number with your tax folder; they reconcile on next year&rsquo;s
            return like extra withholding. If income collapses mid-year, reduce remaining vouchers
            immediately rather than overpaying &ldquo;to be safe&rdquo; &mdash; overpayments lock
            cash up until the refund. Freelancers wanting the deeper playbook should read our{" "}
            <Link href="/freelancer-quarterly-tax-guide" className="text-amber-200 underline underline-offset-2">
              freelancer quarterly guide
            </Link>{" "}
            and{" "}
            <Link href="/self-employment-tax-calculator" className="text-amber-200 underline underline-offset-2">
              self-employment tax calculator
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What if I miss a quarterly deadline?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Pay as soon as possible — penalties stop accruing on money once paid, and later vouchers cannot retroactively cover earlier quarters.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can W-2 withholding cover freelance income?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes. Extra withholding via W-4 Step 4(c) counts as evenly prepaid all year and can replace vouchers entirely.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I still file quarterly if income is uneven?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes, but use the annualized-income method (Form 2210 Schedule AI) so a late-year windfall does not inflate early vouchers — or pay each quarter from actual year-to-date profit.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Where do I actually send payment?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">IRS Direct Pay or EFTPS online (fastest, with receipts), or mail Form 1040-ES vouchers with a check labeled for the correct quarter.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Deadlines shift when they fall on weekends
            or holidays, and disaster-area relief can extend them. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and confirm payment decisions with the IRS or a licensed tax professional.
          </p>
        </section>
      </article>
    </div>
  );
}
