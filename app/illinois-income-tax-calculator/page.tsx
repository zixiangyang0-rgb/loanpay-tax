import type { Metadata } from "next";
import Link from "next/link";
import IllinoisTaxCalculator from "./calculator";
import {
  CalculatorAnchorAds,
  CalculatorInArticleAds,
  CalculatorSidebarAds,
} from "../../components/CalculatorAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "Illinois Income Tax Calculator 2026 (4.95% Flat) | LoanPay Tax",
  description:
    "Estimate 2026 Illinois income tax at the flat 4.95% rate, with exemptions, credits, property-tax reality, and Chicago-area comparisons.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/illinois-income-tax-calculator",
  },
};

export default function IllinoisPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Illinois Income Tax Calculator 2026 (4.95% Flat) | LoanPay Tax" description="Estimate 2026 Illinois income tax at the flat 4.95% rate, with exemptions, credits, property-tax reality, and Chicago-area comparisons." url="https://tax.loanpaylogic.com/illinois-income-tax-calculator" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Illinois Dept. of Revenue &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Illinois Income Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          One flat rate &mdash; 4.95 percent on nearly everything. Estimate your 2026 Illinois
          bill below, then learn which income escapes it, which credits shrink it, and why
          property tax dominates every Chicago budget conversation.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <IllinoisTaxCalculator />
          <CalculatorInArticleAds />
        </div>
        <CalculatorSidebarAds />
      </div>
      <CalculatorAnchorAds />

      <article className="mx-auto mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">How the 4.95% flat tax works</h2>
          <p className="mt-3">
            Illinois starts from federal adjusted gross income, applies a handful of additions
            (such as federally exempt municipal interest from other states) and subtractions,
            then taxes the result at a single 4.95 percent rate &mdash; no brackets, no phase-ins.
            Each filer and dependent contributes a personal exemption (about $2,775 for 2026,
            inflation-adjusted yearly) that comes straight off base income: a joint couple with
            two children shields roughly $11,100 before the rate applies. Because the rate is
            flat, Illinois math is the simplest in this guide &mdash; multiply and subtract
            credits &mdash; which also means high earners face the same marginal rate as
            middle-income neighbors, unlike graduated states where top bands climb past 10
            percent.
          </p>
          <p className="mt-3">
            Generous subtractions soften the base. Federally taxed retirement income &mdash;
            pensions, 401(k) and IRA distributions, Social Security &mdash; is fully subtracted on
            the Illinois return, making the state a quiet haven for retirees despite its fiscal
            reputation. Unemployment compensation, investment income from U.S. government
            obligations, and qualifying business-expense reimbursements also subtract out.
            Gambling winnings, rental income, and capital gains stay in the base and face the
            full 4.95 percent, with no preferential capital-gains rate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Credits and the property-tax elephant</h2>
          <p className="mt-3">
            Two credits matter most. The property-tax credit returns 5 percent of qualifying
            Illinois property tax paid (a $8,000 Cook County bill yields a $400 credit), and the
            education-expense credit covers 25 percent of qualifying K-12 costs above $250, up to
            $750 per family. The earned income credit (20 percent of federal) and the
            Invest-in-Kids scholarship credit help lower-income and donating households. None of
            this changes the headline reality: Illinois property taxes average about 1.88 percent
            of value &mdash; second-highest nationally &mdash; so a $350,000 Chicago-area home
            can carry a $6,500+ levy that dwarfs the income-tax line. Any move-to-Illinois math
            must weight both together, and the 2026 federal SALT cap of $40,400 now lets
            itemizers deduct far more of that combined load than the old $10,000 limit allowed.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Illinois examples at the flat 4.95% rate (before credits).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Household</th>
                  <th className="px-4 py-3 font-semibold">Base income</th>
                  <th className="px-4 py-3 font-semibold">IL tax</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Single, $60,000</td><td className="px-4 py-2">$57,225</td><td className="px-4 py-2">$2,833</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Joint + 2 kids, $150,000</td><td className="px-4 py-2">$138,900</td><td className="px-4 py-2">$6,876</td></tr>
                <tr><td className="px-4 py-2">Single, $300,000</td><td className="px-4 py-2">$297,225</td><td className="px-4 py-2">$14,713</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Filing, deadlines, and reciprocity</h2>
          <p className="mt-3">
            Illinois returns (Form IL-1040) follow the April 15, 2027 deadline for 2026 income,
            with extensions to October 15 and quarterly estimates mirroring federal dates.
            Illinois holds a reciprocal agreement with Iowa, Kentucky, Michigan, and Wisconsin:
            residents of those states working in Illinois pay tax only to their home state
            &mdash; file Form IL-W-5-E with your employer to stop Illinois withholding. Chicago
            adds no city income tax, but suburban earners should check for small municipal
            employer charges. Remote workers for Illinois employers generally owe Illinois tax on
            Illinois-source days; keep a day log if you split time across state lines. Compare
            total burdens with neighboring{" "}
            <Link href="/michigan-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Michigan (4.25%)
            </Link>
            ,{" "}
            <Link href="/ohio-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Ohio
            </Link>
            , and{" "}
            <Link href="/pennsylvania-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Pennsylvania (3.07%)
            </Link>{" "}
            before assuming flat means identical.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does Illinois tax retirement income?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. Pensions, 401(k)/IRA distributions, and Social Security are fully subtracted — retirees often owe $0 Illinois tax.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is there a Chicago city income tax?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. Chicago levies no income tax, but Cook County property taxes are among America&rsquo;s highest — budget for both.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is the Illinois personal exemption?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">About $2,775 per filer and dependent for 2026 (inflation-adjusted yearly) — a joint family of four shields roughly $11,100.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I owe Illinois tax working remotely?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Illinois-source workdays are taxable here; reciprocal-state residents (IA, KY, MI, WI) are exempt via Form IL-W-5-E.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Confirm exemption amounts and credits with
            the Illinois Department of Revenue. Read our full{" "}
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
