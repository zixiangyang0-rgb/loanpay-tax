import type { Metadata } from "next";
import Link from "next/link";
import NewJerseyTaxCalculator from "./calculator";
import {
  CalculatorAnchorAds,
  CalculatorInArticleAds,
  CalculatorSidebarAds,
} from "../../components/CalculatorAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "New Jersey Income Tax Calculator 2026 (1.4%–10.75%) | LoanPay Tax",
  description:
    "Estimate 2026 NJ tax across 7 brackets, with retirement exclusions, property-tax deduction, ANCHOR relief, and NYC-commuter guidance.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/new-jersey-income-tax-calculator",
  },
};

const CHECKLIST = [
  "Confirm your 2026 NJ bracket: 1.4% to 10.75% across seven bands, with no state standard deduction.",
  "Claim $1,000 personal exemptions per filer and dependent, plus retirement exclusions if 62+.",
  "Deduct up to $15,000 of property tax against NJ income if you do not claim it federally.",
  "File separately for ANCHOR relief each fall: up to $1,500 homeowners, $450 renters.",
  "If you commute to NYC, file both states and claim the NJ resident credit for NY tax paid.",
  "If you commute to Philadelphia, use PA reciprocity so wage tax lands in New Jersey only.",
];

export default function NewJerseyPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="New Jersey Income Tax Calculator 2026 (1.4%–10.75%) | LoanPay Tax" description="Estimate 2026 NJ tax across 7 brackets, with retirement exclusions, property-tax deduction, ANCHOR relief, and NYC-commuter guidance." url="https://tax.loanpaylogic.com/new-jersey-income-tax-calculator" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          NJ Division of Taxation &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          New Jersey Income Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Seven brackets from 1.4 to 10.75 percent, stingy deductions, and the nation&rsquo;s
          highest property taxes &mdash; softened by standout retirement exclusions. Estimate
          your 2026 NJ bill and learn the relief programs that actually move the needle.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <NewJerseyTaxCalculator />
          <CalculatorInArticleAds />
        </div>
        <CalculatorSidebarAds />
      </div>
      <CalculatorAnchorAds />

      <article className="mx-auto mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">New Jersey arrival checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How New Jersey&rsquo;s 1.4%&ndash;10.75% brackets actually work</h2>
          <p className="mt-3">
            New Jersey&rsquo;s 2026 schedule starts at just 1.4 percent on the first $20,000
            single &mdash; the gentlest entry rate in the Northeast &mdash; then climbs 1.75
            percent to $35,000, 3.5 to $40,000, 5.525 to $75,000, 6.37 to $500,000, 8.97 to $1
            million, and 10.75 percent above. Joint thresholds widen the lower bands
            substantially. Personal exemptions are token ($1,000 per filer and dependent), and
            New Jersey famously decouples from federal itemizing: there is no state standard
            deduction at all, only narrow carve-outs. A single $120,000 earner owes roughly
            $5,900 &mdash; about 4.9 percent effective &mdash; while a $1.5 million earner faces
            an 8.5+ percent effective rate before property tax enters the picture.
          </p>
          <p className="mt-3">
            A concrete example shows why the low entry rate misleads newcomers. Take a single
            Newark renter with $85,000 of New Jersey taxable income and one $1,000 exemption.
            The first $20,000 is taxed at 1.4 percent (about $280), the next $15,000 at 1.75
            percent (about $263), the next $5,000 at 3.5 percent ($175), the next $35,000 at
            5.525 percent (about $1,934), and the remaining $10,000 at 6.37 percent ($637) for
            a total near $3,289 before credits, or roughly a 3.9 percent effective rate. Push
            that income to $600,000 and the 8.97 percent band dominates the upper dollars while
            the top 10.75 percent band waits above $1 million. Capital gains get no preference:
            they flow into gross income and face the same seven bands as wages. Compare the
            federal side of every move with our{" "}
            <Link href="/federal-tax-brackets-2026" className="text-amber-200 underline underline-offset-2">
              2026 federal brackets guide
            </Link>
            .
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2026 NJ single brackets (joint bands are wider — confirm tables).
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
                <tr className="border-b border-white/5"><td className="px-4 py-2">To $20,000</td><td className="px-4 py-2">1.4%</td><td className="px-4 py-2">$75,001 &ndash; $500,000</td><td className="px-4 py-2">6.37%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$20,001 &ndash; $35,000</td><td className="px-4 py-2">1.75%</td><td className="px-4 py-2">$500,001 &ndash; $1M</td><td className="px-4 py-2">8.97%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$35,001 &ndash; $40,000</td><td className="px-4 py-2">3.5%</td><td className="px-4 py-2">Over $1M</td><td className="px-4 py-2">10.75%</td></tr>
                <tr><td className="px-4 py-2">$40,001 &ndash; $75,000</td><td className="px-4 py-2">5.525%</td><td className="px-4 py-2"></td><td className="px-4 py-2"></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Retirement: New Jersey&rsquo;s split personality</h2>
          <p className="mt-3">
            Workers face one of America&rsquo;s heavier loads; retirees get one of its lightest.
            The pension-and-retirement exclusion lets qualifying filers 62+ (or disabled at any
            age) exclude up to $75,000 single / $100,000 joint of pensions, 401(k), and IRA
            income when total income stays under $100,000 &mdash; and Social Security is fully
            exempt at every age and income. A 65-year-old couple with $90,000 of pension plus
            Social Security can owe $0. Under 62, however, 401(k) contributions get no state
            deduction and withdrawals face full rates. The $15,000 NJ property-tax
            deduction against income (for those who do not claim the federal SALT benefit on it)
            plus the $50,000+ senior freeze (income-capped assessment freeze) further tilt the
            system toward longtime older owners.
          </p>
          <p className="mt-3">
            The property-tax deduction deserves special attention because New Jersey has no
            standard deduction to fall back on. Homeowners who paid $13,000 in property tax on
            a Bergen County house can deduct up to $15,000 of it directly against New Jersey
            gross income, provided they do not claim the same tax as a federal SALT deduction.
            Renters get a parallel benefit: 18 percent of rent paid is deemed property tax for
            the deduction calculation. Beyond income tax, the Senior Freeze locks the assessed
            value used for property-tax reimbursement for qualifying owners 65+ (or disabled)
            with income under roughly $50,000+, while ANCHOR delivers cash back each fall
            regardless of age. Low-income workers should also claim the state Earned Income
            Credit worth 40 percent of the federal EIC as a refundable credit, plus the
            Child and Dependent Care Credit, because these refundable credits are what turn
            a small NJ liability into an actual refund check.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">ANCHOR, property tax, and commuter math</h2>
          <p className="mt-3">
            New Jersey&rsquo;s ~2.4 percent average effective property-tax rate is America&rsquo;s
            highest &mdash; a $600,000 Bergen County home can carry a $13,000+ bill. The ANCHOR
            program answers with direct relief: up to $1,500 for homeowners and $450 for renters
            at qualifying incomes, filed separately from the return each fall. Commuters into New
            York file both states and claim a resident credit for NY tax paid (capped at the NJ
            liability on that income), while PA commuters use the reciprocal agreement to pay
            only New Jersey. With the 2026 federal SALT cap at $40,400, itemizers finally deduct
            meaningful NJ tax federally &mdash; model it, because the combined burden drops
            noticeably. Compare neighboring{" "}
            <Link href="/new-york-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              New York
            </Link>{" "}
            and{" "}
            <Link href="/pennsylvania-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Pennsylvania
            </Link>{" "}
            before choosing which side of the Hudson or Delaware to live on.
          </p>
          <p className="mt-3">
            Timing matters as much as geography. ANCHOR applications typically open each fall
            with payment the following season, so new movers should calendar it separately from
            the April income-tax return or they leave $1,500 on the table. Remote workers follow
            the physical-presence rule: days worked from a Hoboken home for a Manhattan employer
            generally stay New Jersey income, while days physically in Manhattan remain
            New York-source and claim a credit on the New Jersey return. Part-year movers
            allocate with the part-year worksheet, and anyone whose withholding looks thin after
            a move should true up with our{" "}
            <Link href="/w4-withholding-calculator" className="text-amber-200 underline underline-offset-2">
              W-4 withholding calculator
            </Link>{" "}
            and{" "}
            <Link href="/quarterly-estimated-tax-calculator" className="text-amber-200 underline underline-offset-2">
              quarterly estimated tax planner
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Who wins, who breaks even, and regional rivals</h2>
          <p className="mt-3">
            Clear winners in New Jersey: retirees 62+ pairing exempt Social Security with the
            up-to-$75,000/$100,000 pension exclusion, longtime owners stacking the $15,000
            property-tax deduction with Senior Freeze and ANCHOR, and low-income families whose
            refundable state EIC exceeds their modest bracket bill. Break-even households are
            Bergen and Essex commuters whose $12,000-plus property-tax bills consume what the
            gentle 1.4 percent entry rate saves versus New York City, common in top school
            districts with 2.4 percent-plus effective rates. Reconsider: single high earners
            above $1 million facing 10.75 percent who would pay a 3.07 percent flat rate across
            the river in Pennsylvania or a lower top rate in neighboring states; model five
            years of housing plus commuting before signing. Returns for calendar 2026 are due
            April 15, 2027, with quarterly estimates on federal dates if withholding falls short.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is there a NJ standard deduction?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. New Jersey offers no standard deduction — only personal exemptions and narrow exclusions, so nearly everyone pays from dollar one.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is ANCHOR?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Direct state relief of up to $1,500 for homeowners ($450 renters) at qualifying incomes, applied for separately each fall.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do retirees pay NJ income tax?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Often $0: up to $75K/$100K of retirement income excluded at 62+ under $100K total income, and Social Security always exempt.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">I work in NYC but live in NJ?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">File both states; NJ grants a resident credit for NY tax paid on the same wages so the same dollar is not taxed twice.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How does the $15,000 property-tax deduction work?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Homeowners deduct up to $15,000 of NJ property tax against state income (renters use 18% of rent as deemed tax), as long as the same tax is not claimed federally.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can NJ tax turn into a refund?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes: refundable credits such as the 40%-of-federal state EIC plus ANCHOR relief can exceed a small bracket bill and pay out as a state refund.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Confirm brackets, exclusions, and ANCHOR
            amounts with NJ Division of Taxation. Read our full{" "}
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
