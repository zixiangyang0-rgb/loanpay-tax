import type { Metadata } from "next";
import Link from "next/link";
import OhioTaxCalculator from "./calculator";
import {
  CalculatorAnchorAds,
  CalculatorInArticleAds,
  CalculatorSidebarAds,
} from "../../components/CalculatorAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "Ohio Income Tax Calculator 2026 | LoanPay Tax",
  description:
    "Estimate 2026 Ohio tax (first $26,050 exempt, 2.75%–3.125% above), municipal taxes, credits, and filing rules for residents and commuters.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/ohio-income-tax-calculator",
  },
};

export default function OhioPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Ohio Income Tax Calculator 2026 | LoanPay Tax" description="Estimate 2026 Ohio tax (first $26,050 exempt, 2.75%–3.125% above), municipal taxes, credits, and filing rules for residents and commuters." url="https://tax.loanpaylogic.com/ohio-income-tax-calculator" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Ohio Dept. of Taxation &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Ohio Income Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Ohio exempts the first $26,050 outright, then applies two gentle graduated rates
          &mdash; but hundreds of cities layer their own taxes on top. Estimate the state piece
          below and learn to navigate the municipal maze.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <OhioTaxCalculator />
          <CalculatorInArticleAds />
        </div>
        <CalculatorSidebarAds />
      </div>
      <CalculatorAnchorAds />

      <article className="mx-auto mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">Ohio&rsquo;s two-rate system</h2>
          <p className="mt-3">
            After years of cuts, Ohio&rsquo;s 2026 schedule is the simplest graduated system in
            the Midwest: income at or below $26,050 is taxed at $0 regardless of filing status;
            income from $26,051 to $100,000 owes $342 plus 2.75 percent of the excess; income
            above $100,000 owes $2,394.32 plus 3.125 percent of the excess. An $80,000 earner thus
            pays about $1,826 &mdash; a 2.28 percent effective rate that undercuts nearly every
            neighboring state. Social Security is fully exempt, and retirees get a senior credit
            ($50 per return) plus a retirement-income credit scaling with pension size. Business
            owners should note Ohio has no traditional corporate income tax (a gross-receipts
            Commercial Activity Tax applies instead), keeping pass-through math clean.
          </p>
          <p className="mt-3">
            Your starting point is federal adjusted gross income, minus Ohio adjustments such as
            the personal-plus-dependent exemption credit and deductions for Social Security,
            disability, and 529 contributions. That is why two workers with the same salary can owe
            different state tax: a filer with three dependents and 529 contributions lands well below
            the bracket thresholds, while a single filer with no adjustments feels the full 2.75
            percent band sooner. If your pay stub shows Ohio withholding, reconcile it with the{" "}
            <Link href="/w4-withholding-calculator" className="text-amber-200 underline underline-offset-2">
              W-4 withholding estimator
            </Link>{" "}
            before year-end so you neither overpay all year nor face an April surprise.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2026 Ohio tax at sample incomes (all filing statuses).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Ohio taxable income</th>
                  <th className="px-4 py-3 font-semibold">Tax</th>
                  <th className="px-4 py-3 font-semibold">Effective rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$26,050</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">0%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$60,000</td><td className="px-4 py-2">$1,276</td><td className="px-4 py-2">2.13%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$100,000</td><td className="px-4 py-2">$2,394</td><td className="px-4 py-2">2.39%</td></tr>
                <tr><td className="px-4 py-2">$200,000</td><td className="px-4 py-2">$5,519</td><td className="px-4 py-2">2.76%</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The municipal maze: where the real tax hides</h2>
          <p className="mt-3">
            Ohio&rsquo;s 600+ cities and villages impose their own income taxes &mdash; Columbus
            2.5 percent, Cleveland and Cincinnati 2 percent (Cincinnati 2.1 percent in some
            tallies &mdash; confirm locally), Toledo 2.25 percent &mdash; usually withheld at
            work and credited against the residence city&rsquo;s levy. Live in a township without
            a tax but work in a taxed city and the workplace keeps it; live and work in different
            taxed cities and credits (often capped at 1&ndash;2 percent) decide the remainder.
            School-district income taxes add another 0.25&ndash;2 percent in many districts,
            collected on the state return. Combined, municipal plus school tax frequently exceeds
            the state bill &mdash; a Columbus worker at $80,000 can owe $1,826 to Ohio but $2,000
            to the city. Always ask HR which jurisdictions appear on your pay stub, and file each
            city&rsquo;s return (many use the Regional Income Tax Agency, RITA, or the Central
            Collection Agency).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">School-district income tax: Ohio&rsquo;s signature extra layer</h2>
          <p className="mt-3">
            Few states do this, but roughly one in four Ohio school districts levies its own income
            tax &mdash; typically 0.25 to 2 percent &mdash; reported directly on your state return
            using a four-digit district number. Each district picks one of two bases: the
            traditional base taxes all Ohio-taxable income including pensions and interest, while
            the earned-income-only base taxes just wages and self-employment earnings, sparing
            retirees entirely. Moving even a few blocks can flip your bill, because district
            boundaries ignore city lines: check the Ohio Department of Taxation&rsquo;s district
            finder before you sign a lease, and confirm whether your employer withholds the school
            tax &mdash; many do not, leaving a balance due every April.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Credits, deductions, and filing basics</h2>
          <p className="mt-3">
            Ohio sweetens the low state bill with a $2,400 personal-plus-dependent exemption
            credit, a joint-filing credit, a retirement-income credit up to $200, Social Security
            and disability deductions, 529 contribution deductions ($4,000 per beneficiary yearly),
            and small-business investor credits. Returns are due April 15, 2027 with federal-style
            quarterly estimates, filed on Form IT 1040. Cross-border commuters get relief: Ohio holds
            reciprocity agreements with Indiana, Kentucky, Michigan, Pennsylvania, and West Virginia,
            so if you live in Ohio but work across one of those borders, file an exemption certificate
            with your out-of-state employer and pay tax only to Ohio. Ohio taxes remote
            work under post-pandemic rules that generally source wages to the employer&rsquo;s
            location unless a refund claim proves otherwise &mdash; a live issue for
            Cleveland-remote workers living elsewhere. Compare the full picture with{" "}
            <Link href="/michigan-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Michigan
            </Link>
            ,{" "}
            <Link href="/pennsylvania-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Pennsylvania
            </Link>
            , and{" "}
            <Link href="/illinois-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Illinois
            </Link>{" "}
            before a Great Lakes move.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I pay Ohio tax on the first $26,050?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No — the first $26,050 of taxable income is fully exempt for every filer in 2026.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Why is my city tax bigger than my state tax?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Normal in Ohio — municipal rates of 1–2.5% with no exemption often exceed the gentle 2.75–3.125% state schedule.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does Ohio tax Social Security?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. Social Security is fully exempt, and retirees get additional senior and retirement-income credits.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">I live and work in different Ohio cities?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Your residence city usually credits workplace withholding up to its own rate — file both city returns via RITA/CCA to reconcile.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is Ohio school-district income tax?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">An extra 0.25–2% levy in many districts, filed on your state return with a district number. Earned-income-only districts spare pensions; traditional-base districts tax them — check your district type before you move.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">I live in Ohio but work in another state?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Reciprocity with Indiana, Kentucky, Michigan, Pennsylvania, and West Virginia means you generally pay only Ohio tax — file an exemption certificate with your out-of-state employer to stop that state&apos;s withholding.</p>
            </details>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Official sources</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <a href="https://tax.ohio.gov/individual" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                Ohio Department of Taxation — Individual Income Tax
              </a>
            </li>
            <li>
              <a href="https://tax.ohio.gov/individual/school-district-income-tax" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                Ohio Department of Taxation — School District Income Tax
              </a>
            </li>
            <li>
              <a href="https://www.irs.gov/forms-pubs/about-form-1040" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                IRS About Form 1040, U.S. Individual Income Tax Return
              </a>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Municipal rates change by ordinance;
            confirm with your city and the Ohio Department of Taxation. Read our full{" "}
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
