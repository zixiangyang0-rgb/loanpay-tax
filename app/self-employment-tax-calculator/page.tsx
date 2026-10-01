import type { Metadata } from "next";
import Link from "next/link";
import SelfEmploymentCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Self-Employment Tax Calculator 2026 (15.3%) | LoanPay Tax",
  description:
    "Estimate 2026 self-employment tax: 12.4% Social Security to $184,500, 2.9% Medicare, 0.9% surtax, half-SE deduction, and quarterly payment setup.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/self-employment-tax-calculator",
  },
};

export default function SelfEmploymentPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Schedule SE &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Self-Employment Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Freelancers pay both halves of Social Security and Medicare &mdash; 15.3 percent before
          income tax even starts. Estimate your 2026 SE tax below, then learn the deductions and
          quarterly rhythm that keep it manageable.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <div className="mt-8">
        <SelfEmploymentCalculator />
      </div>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">Why freelancers pay 15.3%</h2>
          <p className="mt-3">
            Employees split payroll tax with their employer: 6.2 percent Social Security plus 1.45
            percent Medicare from the worker, matched by the boss. The self-employed are both
            parties, so Schedule SE charges the combined 12.4 percent Social Security on the
            first $184,500 of combined wages and 92.35 percent of profit, plus 2.9 percent
            Medicare on everything &mdash; 15.3 percent total &mdash; with an extra 0.9 percent
            Medicare on earnings above $200,000 single ($250,000 joint). Two cushions soften the
            blow: only 92.35 percent of profit is taxable (the rough equivalent of the
            employer&rsquo;s half), and half the SE tax deducts from income tax. A $75,000 profit
            thus incurs about $10,600 of SE tax, of which $5,300 shelters income tax at your
            marginal rate.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                SE tax components at sample 2026 profits (no W-2 wages).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Profit</th>
                  <th className="px-4 py-3 font-semibold">Social Security 12.4%</th>
                  <th className="px-4 py-3 font-semibold">Medicare 2.9%</th>
                  <th className="px-4 py-3 font-semibold">Total SE tax</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$40,000</td><td className="px-4 py-2">$4,580</td><td className="px-4 py-2">$1,071</td><td className="px-4 py-2">$5,651</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$75,000</td><td className="px-4 py-2">$8,588</td><td className="px-4 py-2">$2,009</td><td className="px-4 py-2">$10,597</td></tr>
                <tr><td className="px-4 py-2">$200,000</td><td className="px-4 py-2">$22,902</td><td className="px-4 py-2">$5,357</td><td className="px-4 py-2">$28,259</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Who owes it and who escapes</h2>
          <p className="mt-3">
            Net earnings of $400+ trigger Schedule SE &mdash; below that, nothing is owed.
            Sole proprietors, LLC members, partners, and gig workers all pay; S-corporation
            owners pay only on their W-2 salary (distributions escape SE tax, the famous
            S-election trade), while C-corp employees never see it. W-2 wages consume the
            $184,500 Social Security base first: $100,000 of wages plus $100,000 of profit means
            only $84,500 of profit faces the 12.4 percent piece (Medicare still hits all of it).
            Ministers, certain religious sects, and nonresident aliens have special exemptions
            via Forms 4361 and 4029 &mdash; niche but valuable for those who qualify.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Deductions that shrink both taxes</h2>
          <p className="mt-3">
            Every ordinary-and-necessary business expense on Schedule C lowers profit before
            either tax computes: software, supplies, mileage (70 cents per mile for 2026;
            confirm IRS notice), home office, health premiums (deducted on Form 1040, not
            Schedule C), half the SE tax itself, and retirement contributions to a SEP-IRA or
            Solo 401(k) (up to $72,000 for 2026 SEP). The 20 percent qualified-business-income
            deduction &mdash; now permanent &mdash; cuts income tax (not SE tax) for eligible
            pass-throughs under the phase-out thresholds. Track expenses in a separate account
            from day one; reconstructed shoeboxes lose deductions at audit. Pair this page with
            our{" "}
            <Link href="/home-office-deduction-calculator" className="text-amber-200 underline underline-offset-2">
              home-office calculator
            </Link>{" "}
            and{" "}
            <Link href="/sep-ira-vs-solo-401k-tax" className="text-amber-200 underline underline-offset-2">
              SEP vs. Solo 401(k) guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Paying quarterly without pain</h2>
          <p className="mt-3">
            SE tax joins income tax in quarterly vouchers (April 15, June 15, September 15, 2026;
            January 15, 2027) via Form 1040-ES, or through extra W-2 withholding if you hold a
            day job. The 25&ndash;30 percent rule of thumb &mdash; transfer that share of each
            client payment to a separate tax account the day it lands &mdash; prevents the classic
            April shortfall, and our{" "}
            <Link href="/quarterly-estimated-tax-calculator" className="text-amber-200 underline underline-offset-2">
              quarterly calculator
            </Link>{" "}
            sizes each voucher precisely. Miss the $1,000-owed threshold or a safe harbor (90
            percent current-year, 100/110 percent prior-year) and penalties accrue per quarter,
            so start vouchers with the first profitable quarter rather than waiting for year-end.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Is SE tax on gross or net income?</h3>
              <p className="mt-1">Net profit after business expenses, multiplied by 92.35% — every legitimate deduction lowers SE tax directly.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do I owe SE tax with a full-time job too?</h3>
              <p className="mt-1">Yes on freelance profit — wages use up the $184,500 Social Security base first, so side income mostly faces the 12.4% piece only below the cap.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does an S-corp eliminate SE tax?</h3>
              <p className="mt-1">Only on distributions — owners still owe payroll tax on reasonable W-2 salary. Below ~$60–80K profit the extra admin rarely pays.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What if I lose money?</h3>
              <p className="mt-1">No SE tax on a net loss — and the loss can offset other income (within limits), cutting income tax too.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. SE figures follow 2026 SSA and IRS
            publications. Read our full{" "}
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
