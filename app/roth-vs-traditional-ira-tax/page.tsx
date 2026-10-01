import type { Metadata } from "next";
import Link from "next/link";
import { GuideBottomAds, GuideInArticleAds, GuideTopAds } from "../../components/GuideAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "Roth vs. Traditional IRA 2026: Tax Guide | LoanPay Tax",
  description:
    "Roth vs. traditional IRA for 2026: $7,500 limit, $153K/$242K phase-outs, deduction rules, conversion ladders, and which account wins at your income.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax",
  },
};

const CHECKLIST = [
  "Confirm earned income ≥ contribution ($7,500 under 50; $8,600 at 50+ across all IRAs).",
  "Check Roth eligibility: MAGI under $153K single / $242K joint for full access in 2026.",
  "Workplace plan? Traditional deductibility phases out ($81K–$91K single; $129K–$149K joint).",
  "Low bracket now, higher later → lean Roth. Peak earnings now → lean deductible traditional.",
  "Need backdoor Roth? Fund traditional nondeductible, convert promptly, file Form 8606.",
  "Contribute by April 15, 2027 for tax year 2026 — the window never reopens.",
];

export default function RothVsTraditionalPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Roth vs. Traditional IRA 2026: Tax Guide | LoanPay Tax" description="Roth vs. traditional IRA for 2026: $7,500 limit, $153K/$242K phase-outs, deduction rules, conversion ladders, and which account wins at your income." url="https://tax.loanpaylogic.com/roth-vs-traditional-ira-tax" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          IRAs 2026 &middot; $7,500 / $8,600
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Roth vs. Traditional IRA Tax Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Pay tax now or pay later? The 2026 limits, phase-outs, and conversion rules pick the
          winner at each income &mdash; this guide matches your situation to the right account.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <GuideTopAds />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">IRA decision checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The core trade in one paragraph</h2>
          <p className="mt-3">
            Traditional IRAs offer a potential deduction today &mdash; $7,500 off 2026 income
            ($8,600 at 50+) &mdash; with withdrawals taxed as ordinary income after 59&frac12;
            (plus 10 percent early-withdrawal penalty with exceptions). Roth IRAs give no
            deduction but qualified withdrawals &mdash; account open five years and owner 59&frac12;,
            disabled, or using the $10,000 first-home exception &mdash; come out entirely
            tax-free, including decades of growth. At identical tax rates the math ties; the
            decision is a bet on rate direction. Early-career earners in the 10&ndash;12 percent
            bands buy tax-free growth cheaply with Roth; peak earners at 32&ndash;37 percent buy
            large immediate deductions with traditional &mdash; then often convert in low-income
            gap years after retiring.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Roth vs. traditional at a glance (2026 rules).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">Traditional</th>
                  <th className="px-4 py-3 font-semibold">Roth</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">2026 limit (&lt;50 / 50+)</td><td className="px-4 py-2">$7,500 / $8,600</td><td className="px-4 py-2">$7,500 / $8,600 (shared)</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Deduction</td><td className="px-4 py-2">Often yes (see phase-outs)</td><td className="px-4 py-2">Never</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Withdrawals</td><td className="px-4 py-2">Taxed as income; RMDs at 73</td><td className="px-4 py-2">Tax-free if qualified; no RMDs</td></tr>
                <tr><td className="px-4 py-2">Income limits</td><td className="px-4 py-2">Deduction phases out</td><td className="px-4 py-2">Contributions phase out</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">2026 phase-outs that decide for you</h2>
          <p className="mt-3">
            Roth eligibility phases out at MAGI $153,000&ndash;$168,000 single and
            $242,000&ndash;$252,000 joint for 2026 &mdash; above that, direct Roth contributions
            are barred (enter the backdoor: nondeductible traditional contribution, prompt
            conversion, Form 8606, mind the pro-rata rule across all traditional balances).
            Traditional deductibility, when covered by a workplace plan, phases at $81,000&ndash;
            $91,000 single and $129,000&ndash;$149,000 joint (spousal-plan rules,
            $242,000&ndash;$252,000, apply when only your spouse is covered). Earn above both
            ranges with a 401(k)? Your choice is nondeductible traditional versus backdoor Roth
            &mdash; and the Roth almost always wins. Earn modestly with no workplace plan? Fully
            deductible traditional contributions are available at any income.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Conversions, ladders, and coordination</h2>
          <p className="mt-3">
            Roth conversions &mdash; moving traditional dollars to Roth and paying income tax
            now &mdash; are most powerful in low-income windows: graduate school, sabbaticals,
            early retirement before Social Security and RMDs begin. Convert to the top of the
            12 or 22 percent band each December (&ldquo;filling the bracket&rdquo;), pay the tax
            from cash outside the IRA, and never convert more than you can pay without raiding
            the account. Recharacterizations are gone since 2018 &mdash; conversions are
            irrevocable &mdash; so model with software first. Coordinate with 401(k)s ($24,500
            for 2026 plus catch-ups; separate limits from IRAs), HSAs, and{" "}
            <Link href="/sep-ira-vs-solo-401k-tax" className="text-amber-200 underline underline-offset-2">
              freelance plans
            </Link>
            ; and remember conversions raise MAGI, affecting Medicare IRMAA tiers, student-loan
            payments, and credit eligibility that year.
          </p>
        </section>

        <GuideInArticleAds />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I contribute to both in one year?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes — but the $7,500 / $8,600 cap covers all IRAs combined, split however you like between Roth and traditional.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is the backdoor Roth?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">A nondeductible traditional contribution followed by conversion to Roth — legal at any income, but the pro-rata rule taxes pre-tax balances proportionally.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do Roth IRAs have RMDs?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No for original owners — Roth balances grow untouched for life, a key estate-planning edge over traditional accounts.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Should high earners use Roth 401(k)s instead?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Often yes — Roth 401(k)s accept $24,500 with no income cap, and 2026 rules push high earners&rsquo; catch-ups into Roth automatically.</p>
            </details>
          </div>
        </section>

        <GuideBottomAds />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Limits follow IRS 2026 figures; confirm
            phase-outs in Publication 590-A. Read our full{" "}
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
