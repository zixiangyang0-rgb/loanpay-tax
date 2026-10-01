import type { Metadata } from "next";
import Link from "next/link";
import NewYorkTaxCalculator from "./calculator";
import {
  CalculatorAnchorAds,
  CalculatorInArticleAds,
  CalculatorSidebarAds,
} from "../../components/CalculatorAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "New York Income Tax Calculator 2026 | LoanPay Tax",
  description:
    "Estimate 2026 New York State tax (4%–10.9%), NYC and Yonkers add-ons, standard deductions, credits, and residency rules for movers and remote workers.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/new-york-income-tax-calculator",
  },
};

export default function NewYorkPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="New York Income Tax Calculator 2026 | LoanPay Tax" description="Estimate 2026 New York State tax (4%–10.9%), NYC and Yonkers add-ons, standard deductions, credits, and residency rules for movers and remote workers." url="https://tax.loanpaylogic.com/new-york-income-tax-calculator" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          NY Dept. of Taxation &middot; 2026 tax year
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          New York Income Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Nine state brackets plus city taxes make New York America&rsquo;s most layered return.
          Estimate state and city liability below, then master residency tests, credits, and the
          famous convenience rule for remote work.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <NewYorkTaxCalculator />
          <CalculatorInArticleAds />
        </div>
        <CalculatorSidebarAds />
      </div>
      <CalculatorAnchorAds />

      <article className="mx-auto mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">The state ladder: 4% to 10.9%</h2>
          <p className="mt-3">
            New York State taxes 2026 income through nine graduated bands: 4 percent to $8,500
            single, 4.5 to $11,700, 5.25 to $13,900, 5.5 to $80,650, 6 to $215,400, 6.85 to
            $1,077,550, 9.65 to $5 million, 10.3 to $25 million, and 10.9 percent above &mdash;
            with joint thresholds roughly double. The standard deduction is $8,000 single or
            separate and $16,050 joint, and the state conforms to many federal adjustments while
            adding its own: a $1,000 dependent exemption, pension exclusions for government
            retirees, a $20,000 pension-and-annuity exclusion for private retirees over 59&frac12;,
            and a full exclusion for Social Security. Capital gains face ordinary state rates
            &mdash; no 0/15/20 preference &mdash; which surprises stock-heavy filers every year.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2026 NY State single brackets (joint roughly 2x).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Taxable income</th>
                  <th className="px-4 py-3 font-semibold">Rate</th>
                  <th className="px-4 py-3 font-semibold">Taxable income</th>
                  <th className="px-4 py-3 font-semibold">Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">To $8,500</td><td className="px-4 py-2">4%</td><td className="px-4 py-2">$80,651 &ndash; $215,400</td><td className="px-4 py-2">6%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$8,501 &ndash; $11,700</td><td className="px-4 py-2">4.5%</td><td className="px-4 py-2">$215,401 &ndash; $1,077,550</td><td className="px-4 py-2">6.85%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$11,701 &ndash; $13,900</td><td className="px-4 py-2">5.25%</td><td className="px-4 py-2">$1,077,551 &ndash; $5M</td><td className="px-4 py-2">9.65%</td></tr>
                <tr><td className="px-4 py-2">$13,901 &ndash; $80,650</td><td className="px-4 py-2">5.5%</td><td className="px-4 py-2">Over $5M / $25M</td><td className="px-4 py-2">10.3% / 10.9%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            A single filer at $120,000 subtracts $8,000 for $112,000 taxable and owes roughly
            $6,600 state tax &mdash; about 5.5 percent effective despite a 6 percent marginal
            band. The progression stays gentle until $1 million: only then do the 9.65&ndash;10.9
            percent &ldquo;millionaire&rdquo; bands bite. That shape explains why middle-class
            debates about New York taxes often talk past each other &mdash; the system is
            moderate at $100,000 and severe at $5 million.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The city layer: NYC and Yonkers</h2>
          <p className="mt-3">
            New York City residents pay a second income tax of 3.078 to 3.876 percent across five
            city brackets (plus a small separate MTA payroll nuance for employers), so a
            Manhattan single filer at $120,000 adds roughly $3,600 city tax to $6,600 state tax
            &mdash; a combined 8.5 percent before federal. Yonkers instead charges a piggyback
            surcharge near 16.75 percent of state liability (about 0.5 percent effective), while
            commuters into Yonkers face a small earnings tax. No other locality levies an income
            tax, but suburban property taxes often exceed $10,000&ndash;$20,000 on modest homes,
            shifting the burden from paychecks to deeds. Always compare income plus property tax,
            never income tax alone.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Residency audits and the convenience rule</h2>
          <p className="mt-3">
            New York audits leavers aggressively. You are a resident if domiciled here (home,
            family, doctors, licenses, clubs) or if you keep a permanent place of abode and spend
            184+ days in-state &mdash; day counts from phones, travel records, and even pet
            vet visits become exhibits. Movers to{" "}
            <Link href="/florida-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Florida
            </Link>{" "}
            or{" "}
            <Link href="/texas-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Texas
            </Link>{" "}
            should sever ties cleanly and keep a contemporaneous calendar. Remote workers face the
            convenience-of-employer doctrine: work from home for your own convenience for a New
            York employer and the wages stay New York&ndash;sourced. Only employer necessity
            (assigned to a bona fide out-of-state office) escapes it. Part-year filers allocate
            with Form IT-203; get the day fractions right, because they are the audit&rsquo;s
            first stop.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Credits that cut real checks</h2>
          <p className="mt-3">
            New York&rsquo;s credit menu rewards families and property owners: the Empire State
            child credit (up to 33 percent of the federal child credit), the earned income credit
            (30 percent of federal), the real property tax credit for modest-income owners and
            renters, college tuition credits, and the city&rsquo;s enhanced EITC and STAR property
            relief (basic STAR exempts $30,000 of home value from school tax; Enhanced STAR for
            seniors exempts roughly $86,000, indexed yearly). Most are refundable &mdash; they pay
            out even with zero liability. With the federal SALT cap at $40,400 for 2026, itemizers
            can again deduct meaningful New York tax federally, softening combined rates for
            owners under the $505,000 phase-out.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I pay NYC tax if I only work there?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No — NYC tax follows residence, not workplace. Commuters pay state tax on NY-source wages but no city tax.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is the convenience-of-employer rule?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Remote days for a NY employer count as NY workdays unless your employer requires you at an out-of-state office — a top audit trap.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does NY tax Social Security?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. New York fully excludes Social Security, plus up to $20,000 of pension/annuity income for residents over 59½.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What are 2026 NY filing deadlines?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">April 15, 2027 for 2026 returns (extension to October 15), matching the federal calendar; estimated payments follow the same quarterly dates.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Brackets reflect published NY schedules for
            2026; confirm with NY Tax and Finance. Read our full{" "}
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
