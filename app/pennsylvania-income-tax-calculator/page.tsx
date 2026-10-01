import type { Metadata } from "next";
import Link from "next/link";
import PennsylvaniaTaxCalculator from "./calculator";
import {
  CalculatorAnchorAds,
  CalculatorInArticleAds,
  CalculatorSidebarAds,
} from "../../components/CalculatorAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "Pennsylvania Income Tax Calculator 2026 (3.07%) | LoanPay Tax",
  description:
    "Estimate 2026 PA tax at 3.07% across 8 income classes, with local EIT, retirement exemptions, and Tax Forgiveness credits explained.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/pennsylvania-income-tax-calculator",
  },
};

export default function PennsylvaniaPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Pennsylvania Income Tax Calculator 2026 (3.07%) | LoanPay Tax" description="Estimate 2026 PA tax at 3.07% across 8 income classes, with local EIT, retirement exemptions, and Tax Forgiveness credits explained." url="https://tax.loanpaylogic.com/pennsylvania-income-tax-calculator" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          PA Dept. of Revenue &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Pennsylvania Income Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Pennsylvania&rsquo;s 3.07 percent rate looks simple &mdash; until eight separate income
          classes, local earned-income taxes, and generous retirement exclusions enter. Estimate
          your 2026 bill and learn the quirks that trip up newcomers.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <PennsylvaniaTaxCalculator />
          <CalculatorInArticleAds />
        </div>
        <CalculatorSidebarAds />
      </div>
      <CalculatorAnchorAds />

      <article className="mx-auto mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">Eight classes, one rate, no offsets</h2>
          <p className="mt-3">
            Pennsylvania taxes eight distinct classes &mdash; compensation; interest; dividends;
            business profits; gains from property; rents and royalties; estates and trusts; and
            gambling winnings &mdash; each at 3.07 percent, computed separately on Form PA-40
            schedules. The critical twist: a loss in one class cannot offset income in another. A
            $20,000 rental loss does not shelter $20,000 of wages the way federal rules allow;
            each class stands alone, and excess losses generally die unused (business losses carry
            forward within their own class only). There is no standard deduction and no personal
            exemption &mdash; the first taxable dollar faces 3.07 percent &mdash; but unemployment
            compensation, workers&rsquo; compensation, child support, and most importantly all
            qualifying retirement income (pensions, 401(k)/IRA distributions after separation,
            Social Security) are fully exempt.
          </p>
          <p className="mt-3">
            That retirement exemption makes Pennsylvania one of America&rsquo;s kindest states for
            retirees: a $90,000 pension plus Social Security can owe $0 PA tax while a worker
            earning half that pays full rate. Workers, however, get no shelter for 401(k)
            contributions &mdash; Pennsylvania taxes the contribution upfront (unlike the federal
            code) and exempts the withdrawal later. Do not assume your federal AGI maps to PA
            income; the two systems diverge constantly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The local layer: EIT, LST, and property tax</h2>
          <p className="mt-3">
            Nearly every Pennsylvanian also pays local earned-income tax (EIT), typically 1
            percent split between municipality and school district (Philadelphia instead levies a
            wage tax near 3.75 percent for residents, slightly less for commuters; Pittsburgh
            totals 3 percent). EIT applies to wages and business profit but not to dividends,
            interest, or retirement &mdash; and employers withhold it alongside state tax. A $1
            local services tax (LST, usually $52 yearly) appears on paychecks in many
            jurisdictions. Combined, a suburban worker&rsquo;s real sub-federal rate is about
            4.07 percent (3.07 state + 1.0 local), while Philadelphians approach 6.8 percent.
            Property taxes average roughly 1.3 percent statewide with wide county spreads.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Combined state + local burden at $80,000 wages (before forgiveness).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Location</th>
                  <th className="px-4 py-3 font-semibold">State (3.07%)</th>
                  <th className="px-4 py-3 font-semibold">Local</th>
                  <th className="px-4 py-3 font-semibold">Combined</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Suburb (1% EIT)</td><td className="px-4 py-2">$2,456</td><td className="px-4 py-2">$800</td><td className="px-4 py-2">$3,256</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Pittsburgh (3%)</td><td className="px-4 py-2">$2,456</td><td className="px-4 py-2">$2,400</td><td className="px-4 py-2">$4,856</td></tr>
                <tr><td className="px-4 py-2">Philadelphia resident</td><td className="px-4 py-2">$2,456</td><td className="px-4 py-2">~$3,000</td><td className="px-4 py-2">~$5,456</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Tax Forgiveness: the credit low earners miss</h2>
          <p className="mt-3">
            Schedule SP&rsquo;s Tax Forgiveness wipes out state liability for modest households:
            full forgiveness under roughly $6,500 single / $13,000 joint-plus-dependents poverty
            guidelines (adjusted yearly with $9,500+ per dependent), phasing down across a
            sliding scale to 10 percent relief. A single parent of two earning $35,000 can see
            forgiveness cut most of the $1,000+ bill. Eligibility counts all eight classes plus
            nontaxable support, so run Schedule SP even when income looks &ldquo;too
            high&rdquo; &mdash; partial relief surprises many filers. Separately, 529
            contributions (up to the gift-tax annual exclusion per beneficiary, deductible from
            PA income), ABLE contributions, and unreimbursed employee expenses for certain
            occupations trim specific classes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Filing and reciprocity notes</h2>
          <p className="mt-3">
            PA returns are due April 15, 2027 (extension to October), with quarterly estimates on
            the familiar federal dates. Reciprocal pacts with Indiana, Maryland, New Jersey, Ohio,
            Virginia, and West Virginia mean cross-border commuters pay only their home state
            &mdash; file the exemption certificate with the work-state employer. New Jersey
            commuters get special attention: NJ taxes the wages while PA grants a resident credit,
            so file both and let the credit reconcile. Compare with{" "}
            <Link href="/ohio-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Ohio
            </Link>
            ,{" "}
            <Link href="/new-jersey-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              New Jersey
            </Link>
            , and{" "}
            <Link href="/new-york-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              New York
            </Link>{" "}
            before accepting a tri-state job offer.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can rental losses offset my wages in PA?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. Each of the 8 classes is computed separately — losses in one class never offset gains in another.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Are 401(k) contributions deductible in PA?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No — PA taxes contributions upfront, then exempts qualifying withdrawals later. The reverse of the federal pattern.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is PA Tax Forgiveness?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Schedule SP relief erasing 10–100% of liability for lower-income households, scaled by income and dependent count.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do retirees pay PA income tax?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Generally no on retirement income — pensions, Social Security, and qualifying IRA/401(k) withdrawals are fully exempt.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Class rules and local rates change by
            municipality; confirm with the PA Department of Revenue. Read our full{" "}
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
