import type { Metadata } from "next";
import Link from "next/link";
import { GuideBottomAds, GuideInArticleAds, GuideTopAds } from "../../components/GuideAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "SEP IRA vs. Solo 401(k) 2026: Tax Comparison | LoanPay Tax",
  description:
    "Compare 2026 SEP-IRA vs. Solo 401(k) contribution limits ($72,000 SEP max), deadlines, Roth options, and which freelance retirement plan saves more tax.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/sep-ira-vs-solo-401k-tax",
  },
};

const CHECKLIST = [
  "Confirm self-employment income with no full-time employees (spouse co-work is fine).",
  "Estimate profit: under ~$30K either works; Solo 401(k) wins on contribution room below ~$150K.",
  "Need Roth or a loan option? Solo 401(k) only — SEP has neither.",
  "Have employees? SEP covers them (costly); Solo 401(k) disqualifies you — consider SIMPLE or Safe Harbor 401(k).",
  "Open Solo 401(k) by Dec 31, 2026; SEP can wait until the filing deadline (Apr 15, 2027).",
  "Fund, invest, and keep Form 5500-EZ in mind once Solo 401(k) assets top $250,000.",
];

export default function SepVsSoloPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="SEP IRA vs. Solo 401(k) 2026: Tax Comparison | LoanPay Tax" description="Compare 2026 SEP-IRA vs. Solo 401(k) contribution limits ($72,000 SEP max), deadlines, Roth options, and which freelance retirement plan saves more tax." url="https://tax.loanpaylogic.com/sep-ira-vs-solo-401k-tax" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          freelance retirement &middot; 2026 limits
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          SEP IRA vs. Solo 401(k) Tax Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The two freelance retirement giants both shelter tens of thousands yearly &mdash; but
          different contribution math, deadlines, and Roth rules favor different earners. Pick
          correctly once and the tax savings compound for decades.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <GuideTopAds />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Decision checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Contribution math: where Solo pulls ahead</h2>
          <p className="mt-3">
            The SEP-IRA allows employer contributions of 25 percent of compensation (about 20
            percent of net profit after the SE-tax adjustment), capped at $72,000 for 2026 on
            compensation to $360,000. The Solo 401(k) allows the same profit-sharing piece plus a
            $24,500 employee elective deferral ($8,000 catch-up at 50+, $11,250 at 60&ndash;63),
            within the same $72,000 overall cap ($80,000 with catch-up). At $50,000 profit the SEP
            shelters roughly $9,300 while the Solo shelters about $33,800 &mdash; nearly
            quadruple &mdash; because the elective deferral does not scale with profit. The gap
            closes near $300,000+ profit where both hit the ceiling. Every deductible dollar
            saves your marginal rate (22&ndash;32 percent for most freelancers) plus, via lower
            AGI, potentially student-loan, credit, and surtax thresholds downstream.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Max 2026 deductible contributions by profit (under 50, simplified).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Net profit</th>
                  <th className="px-4 py-3 font-semibold">SEP-IRA max</th>
                  <th className="px-4 py-3 font-semibold">Solo 401(k) max</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$50,000</td><td className="px-4 py-2">~$9,300</td><td className="px-4 py-2">~$33,800</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$100,000</td><td className="px-4 py-2">~$18,600</td><td className="px-4 py-2">~$43,100</td></tr>
                <tr><td className="px-4 py-2">$200,000</td><td className="px-4 py-2">~$37,200</td><td className="px-4 py-2">~$61,700</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Roth, loans, deadlines, and employees</h2>
          <p className="mt-3">
            Four structural differences decide most cases. Roth: Solo 401(k) plans may accept Roth
            elective deferrals (pay tax now, withdraw tax-free later &mdash; ideal in low-income
            early years); SEPs are pre-tax only. Loans: Solo 401(k)s may lend up to
            $50,000/50 percent; SEPs never lend. Deadlines: Solo 401(k)s must be opened by
            December 31, 2026 (fund the deferral by year-end, profit-sharing by filing); SEPs can
            be opened and funded as late as April 15, 2027 &mdash; the procrastinator&rsquo;s
            friend. Employees: SEPs must cover eligible workers (expensive at 25 percent each);
            Solo 401(k)s allow only owners and spouses, so hiring your first non-spouse employee
            forces a plan change. Side-gig earners with a day-job 401(k) share the $24,500
            deferral across all plans but get a fresh profit-sharing cap in the Solo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Coordination with IRA, QBI, and SE tax</h2>
          <p className="mt-3">
            Retirement contributions do not reduce SE tax (only income tax) &mdash; unlike
            Schedule C expenses &mdash; but they stack with everything else: fund the Solo or SEP
            and still contribute $7,500 to a traditional or Roth IRA ($8,600 at 50+) if income
            allows, claim the QBI deduction on the reduced profit, and deduct half your SE tax on
            top. High earners phasing out of Roth IRA eligibility ($153,000&ndash;$168,000 single,
            $242,000&ndash;$252,000 joint for 2026) can pair pre-tax Solo contributions &mdash;
            which lower MAGI &mdash; with backdoor Roth mechanics. S-corp owners compute the 25
            percent on W-2 salary only, a frequent over-contribution trap; sole proprietors use
            net profit minus half SE tax. File Form 5500-EZ yearly once Solo assets exceed
            $250,000, and never contribute before confirming the plan document is signed.
          </p>
        </section>

        <GuideInArticleAds />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I have both a SEP and a Solo 401(k)?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes, but combined employer contributions share one $72,000 cap per business — most people pick one and fund it fully.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Which is better under $50K profit?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Solo 401(k), by far — the $24,500 elective deferral shelters far more than the SEP&rsquo;s ~20% of profit at modest incomes.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do contributions reduce self-employment tax?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No — only income tax. Schedule C expenses cut both taxes; retirement contributions cut income tax alone.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What if I hire an employee mid-year?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Solo 401(k) eligibility ends (except spouse) — convert to a SEP, SIMPLE, or Safe Harbor 401(k) covering the new hire.</p>
            </details>
          </div>
        </section>

        <GuideBottomAds />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Limits reflect IRS 2026 figures ($24,500
            deferral, $72,000 SEP max, $7,500 IRA). Read our full{" "}
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
