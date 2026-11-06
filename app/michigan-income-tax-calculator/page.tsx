import type { Metadata } from "next";
import Link from "next/link";
import MichiganTaxCalculator from "./calculator";
import {
  CalculatorAnchorAds,
  CalculatorInArticleAds,
  CalculatorSidebarAds,
} from "../../components/CalculatorAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "Michigan Income Tax Calculator 2026 (4.25% Flat) | LoanPay Tax",
  description:
    "Estimate 2026 Michigan tax at 4.25%, with personal exemptions, pension subtraction, city taxes, property-tax credit, and filing rules.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/michigan-income-tax-calculator",
  },
};

export default function MichiganPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Michigan Income Tax Calculator 2026 (4.25% Flat) | LoanPay Tax" description="Estimate 2026 Michigan tax at 4.25%, with personal exemptions, pension subtraction, city taxes, property-tax credit, and filing rules." url="https://tax.loanpaylogic.com/michigan-income-tax-calculator" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Michigan Treasury &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Michigan Income Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          A flat 4.25 percent with generous exemptions and a famous pension subtraction &mdash;
          plus city taxes in Detroit, Grand Rapids, and beyond. Estimate Michigan&rsquo;s 2026
          bill and learn where the real savings hide.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <MichiganTaxCalculator />
          <CalculatorInArticleAds />
        </div>
        <CalculatorSidebarAds />
      </div>
      <CalculatorAnchorAds />

      <article className="mx-auto mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">Flat rate, fat exemptions</h2>
          <p className="mt-3">
            Michigan taxes adjusted gross income at a flat 4.25 percent &mdash; no brackets, no
            separate capital-gains rate &mdash; after subtracting a personal exemption of roughly
            $6,000 per filer and dependent (indexed yearly; confirm the exact 2026 figure with
            Treasury). A joint couple with two children therefore shields about $24,000 before
            the rate applies: on $120,000 of AGI they pay on $96,000, or about $4,080 &mdash; a
            3.4 percent effective rate. Additional exemptions for seniors, disability,
            unemployment compensation, and military pay trim the base further. The structure
            favors large families and modest earners while staying proportional at the top, a
            deliberate contrast with graduated neighbors.
          </p>
          <p className="mt-3">
            The pension subtraction is Michigan&rsquo;s signature break. Taxpayers born in 1946 or
            later may subtract qualifying pension, 401(k), and IRA income up to scheduled limits
            (about $64,000 single / $128,000 joint in recent years, indexed; older cohorts enjoy
            larger or full subtractions), and Social Security is fully exempt for everyone.
            Military pensions subtract without cap. Workers, by contrast, get no deduction for
            401(k) contributions beyond the federal one &mdash; Michigan starts from federal AGI,
            so pre-tax deferrals flow through automatically, then the subtraction rewards the
            withdrawal decades later.
          </p>
          <p className="mt-3">
            Flat means flat: every taxable dollar faces the same 4.25 percent, so Michigan
            planning centers on shrinking taxable income rather than shifting brackets. Start
            from federal adjusted gross income, subtract exemptions and the pension
            subtraction, then multiply. Because the state starts from federal AGI, federal
            choices carry over automatically: pre-tax 401(k) deferrals, HSA contributions, and
            student-loan interest adjustments lower Michigan income too. Compare a result with
            our{" "}
            <Link href="/federal-income-tax-calculator-2026" className="text-amber-200 underline underline-offset-2">
              federal calculator
            </Link>{" "}
            to see the combined marginal bite before you adjust withholding.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">City taxes and the property-tax credit</h2>
          <p className="mt-3">
            Twenty-plus Michigan cities levy their own income taxes: Detroit charges residents
            2.4 percent (1.2 percent for nonresident workers), Grand Rapids, Flint, Lansing, and
            Saginaw 1 percent resident (0.5 nonresident), with smaller cities at similar splits.
            City tax is withheld at work and filed on city forms &mdash; it is not part of the
            state return, and only partially creditable elsewhere. Property taxes average about
            1.19 percent statewide, but the homestead property-tax credit refunds up to $1,700+
            of the amount by which property tax (or 23 percent of rent) exceeds 3.5 percent of
            household income for qualifying owners and renters. The home-heating credit adds up
            to several hundred dollars for low-income households &mdash; both claimed on the
            state return&rsquo;s credit forms, both frequently missed.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Combined state + city burden at $80,000 AGI, joint + 2 kids (~$24,000 exempt).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">City</th>
                  <th className="px-4 py-3 font-semibold">State (4.25%)</th>
                  <th className="px-4 py-3 font-semibold">City</th>
                  <th className="px-4 py-3 font-semibold">Combined</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">No city tax</td><td className="px-4 py-2">$2,380</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">$2,380</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Grand Rapids resident</td><td className="px-4 py-2">$2,380</td><td className="px-4 py-2">$800</td><td className="px-4 py-2">$3,180</td></tr>
                <tr><td className="px-4 py-2">Detroit resident</td><td className="px-4 py-2">$2,380</td><td className="px-4 py-2">$1,920</td><td className="px-4 py-2">$4,300</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            A concrete example shows why the city line matters. Take a Detroit resident earning
            $80,000: after roughly $24,000 of family exemptions, state tax is about $2,380, but
            Detroit adds 2.4 percent of gross compensation &mdash; roughly $1,920 &mdash; for a
            combined $4,300. The same family in Grand Rapids pays about $800 in city tax for a
            $3,180 combined bill, while a suburb without city tax pays only the $2,380 state
            share. Commuters get the mirror image: work in Detroit but live elsewhere and you
            still owe the 1.2 percent nonresident tax, so a move across Eight Mile Road can shift
            the bill by four figures with no change in salary.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Filing, reciprocity, and Great Lakes context</h2>
          <p className="mt-3">
            Michigan returns (Form MI-1040) are due April 15, 2027, with city returns on parallel
            tracks and quarterly estimates on federal dates. Reciprocity is absent &mdash;
            Michigan credits taxes paid to other states instead, so cross-border commuters to
            Ohio or Indiana file both and claim the credit. Remote workers for Michigan employers
            owe Michigan tax on Michigan workdays; keep a log when splitting time. Self-employed
            readers with lumpy income should run{" "}
            <Link href="/quarterly-estimated-tax-calculator" className="text-amber-200 underline underline-offset-2">
              quarterly estimates
            </Link>{" "}
            alongside the state return so city and state underpayment penalties do not stack.
            Against{" "}
            <Link href="/illinois-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Illinois&rsquo; 4.95 percent
            </Link>
            ,{" "}
            <Link href="/ohio-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Ohio&rsquo;s ~2.8 percent effective
            </Link>
            , and{" "}
            <Link href="/pennsylvania-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Pennsylvania&rsquo;s 3.07 percent
            </Link>
            , Michigan sits mid-pack on income tax but wins for retirees through the pension
            subtraction &mdash; the deciding factor for many relocation spreadsheets.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does Michigan tax pensions?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Partially — qualifying pension/IRA income subtracts up to scheduled limits (~$64K single / ~$128K joint), and Social Security is fully exempt.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I owe Detroit city tax?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Detroit residents pay 2.4% and nonresident workers 1.2%, withheld at work and filed on city forms separate from the state return.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is the homestead property-tax credit?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">A state refund (up to ~$1,700+) when property tax — or 23% of rent — exceeds 3.5% of household income. Renters qualify too.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is Michigan&rsquo;s personal exemption?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Roughly $6,000 per filer and dependent for 2026 (indexed yearly) — a family of four shields about $24,000 before the 4.25% rate.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How do I avoid underpayment penalties?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Pay quarterly on federal due dates whenever withholding falls short — state and city penalties stack, so estimate both together.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is Michigan good for retirees?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes — Social Security is fully exempt and pension/IRA income subtracts up to scheduled limits, which beats most graduated neighbors for retirees.</p>
            </details>
          </div>
        </section>

        <nav aria-label="Related guides">
          <h2 className="text-xl font-bold text-white">Related guides</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/ohio-income-tax-calculator" className="font-semibold text-amber-200 underline underline-offset-2">
                Ohio Income Tax Calculator
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Great Lakes neighbor with graduated brackets and reciprocity.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/illinois-income-tax-calculator" className="font-semibold text-amber-200 underline underline-offset-2">
                Illinois Income Tax Calculator
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Flat-tax Midwest reference at 4.95%.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/pennsylvania-income-tax-calculator" className="font-semibold text-amber-200 underline underline-offset-2">
                Pennsylvania Income Tax Calculator
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Flat-rate comparison at 3.07% across eight income classes.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/federal-income-tax-calculator-2026" className="font-semibold text-amber-200 underline underline-offset-2">
                2026 Federal Income Tax Calculator
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Stack federal tax on top of Michigan&rsquo;s flat rate.</p>
            </li>
          </ul>
        </nav>

        <section>
          <h2 className="text-xl font-bold text-white">Official sources</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <a href="https://www.michigan.gov/taxes/individual-income-tax" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                Michigan Department of Treasury — Individual Income Tax
              </a>
            </li>
            <li>
              <a href="https://www.michigan.gov/taxes/e-file" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                Michigan Treasury — E-File Your State Return
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
            This is general education, not tax advice. Confirm exemption and subtraction limits
            with Michigan Treasury. Read our full{" "}
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
