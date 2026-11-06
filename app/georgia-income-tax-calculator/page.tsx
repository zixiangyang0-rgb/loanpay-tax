import type { Metadata } from "next";
import Link from "next/link";
import GeorgiaTaxCalculator from "./calculator";
import {
  CalculatorAnchorAds,
  CalculatorInArticleAds,
  CalculatorSidebarAds,
} from "../../components/CalculatorAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "Georgia Income Tax Calculator 2026 (5.19% Flat) | LoanPay Tax",
  description:
    "Estimate 2026 Georgia tax at the flat 5.19% rate, with deductions, retirement exclusions, credits, and Atlanta-area homeowner math.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/georgia-income-tax-calculator",
  },
};

export default function GeorgiaPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Georgia Income Tax Calculator 2026 (5.19% Flat) | LoanPay Tax" description="Estimate 2026 Georgia tax at the flat 5.19% rate, with deductions, retirement exclusions, credits, and Atlanta-area homeowner math." url="https://tax.loanpaylogic.com/georgia-income-tax-calculator" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Georgia Dept. of Revenue &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Georgia Income Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Georgia finished converting to a flat tax &mdash; 5.19 percent for 2026, still stepping
          down. Estimate your bill below and learn the deductions, retirement breaks, and property
          dynamics that define Peach State budgets.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <GeorgiaTaxCalculator />
          <CalculatorInArticleAds />
        </div>
        <CalculatorSidebarAds />
      </div>
      <CalculatorAnchorAds />

      <article className="mx-auto mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">From brackets to a falling flat rate</h2>
          <p className="mt-3">
            Georgia once taxed income across six graduated bands topping 5.75 percent. Lawmakers
            replaced them with a single flat rate that steps down as revenue targets are met
            &mdash; 5.39 percent in 2025, 5.19 percent for 2026, with further cuts scheduled while
            surpluses hold. Georgia AGI starts from the federal figure with state adjustments,
            then sheds a standard deduction ($12,000 single, $18,500 joint under recent law)
            plus personal exemptions ($3,000 single, $6,000 joint, $3,000 per dependent). The
            remainder faces the flat 5.19 percent. A single $90,000 earner thus shields about
            $15,000, pays on $75,000, and owes roughly $3,893 &mdash; a 4.33 percent effective
            rate that competes well across the Southeast.
          </p>
          <p className="mt-3">
            Seniors get Georgia&rsquo;s best deal: each taxpayer 62&ndash;64 may exclude up to
            $35,000 of retirement income, and those 65+ exclude up to $65,000 per person &mdash; a
            joint senior couple can shield $130,000 of pensions, IRA distributions, and
            investment income before the rate touches anything. Social Security stays fully
            exempt at every age. The exclusion covers earned income too within the cap, so a
            63-year-old with $30,000 of part-time wages plus a $20,000 IRA withdrawal can exclude
            the full $35,000 and pay the flat rate on only the remainder after deductions. Once
            you turn 65 the cap nearly doubles, which is why many Georgia households time Roth
            conversions and pension start dates around birthdays. Workers should note Georgia taxes capital gains as ordinary
            income with no preference, while conforming to most federal business deductions. If
            you itemize federally, compare carefully: Georgia allows its own itemized path, but
            most filers still win with the state standard deduction, as our{" "}
            <Link href="/standard-deduction-vs-itemized-2026" className="text-amber-200 underline underline-offset-2">
              standard deduction vs. itemized guide
            </Link>{" "}
            explains.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Credits, homeowners, and Atlanta math</h2>
          <p className="mt-3">
            Georgia&rsquo;s credit shelf includes the low-income credit, child-and-dependent-care
            credit (30 percent of federal), education donation credits, film and jobs credits for
            businesses, and a pass-through entity election letting S-corps and partnerships pay at
            the entity level to preserve the federal SALT deduction. Homeowners face effective
            property rates near 0.79 percent statewide &mdash; modest nationally but rising fast
            inside the Perimeter, where $500,000 homes carry $4,000&ndash;$6,000 levies plus
            county and school add-ons. Georgia&rsquo;s homestead exemptions freeze or discount
            assessed value in many counties (Atlanta&rsquo;s floating homestead, Fulton&rsquo;s
            basic $30,000&ndash;$50,000 variants), so file county exemptions immediately after
            closing or overpay for years.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Georgia tax at sample incomes (single, no dependents, before credits).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Georgia AGI</th>
                  <th className="px-4 py-3 font-semibold">Taxable</th>
                  <th className="px-4 py-3 font-semibold">Tax (5.19%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$50,000</td><td className="px-4 py-2">$35,000</td><td className="px-4 py-2">$1,817</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$100,000</td><td className="px-4 py-2">$85,000</td><td className="px-4 py-2">$4,412</td></tr>
                <tr><td className="px-4 py-2">$250,000</td><td className="px-4 py-2">$235,000</td><td className="px-4 py-2">$12,197</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Retiree and mover playbook</h2>
          <p className="mt-3">
            The flat 5.19 percent rate makes Georgia unusually easy to plan around: every extra
            dollar of taxable income costs the same, so bunching deductions, timing bonuses, and
            splitting Roth conversions across low-income years all pay off at a constant price.
            New arrivals should set Georgia withholding (Form G-4) on day one, because the state
            still assesses underpayment penalties on federal quarterly dates even though the rate
            looks low. If you move midyear, keep a day count and utility or lease records &mdash;
            Georgia prorates the standard deduction and exemptions for part-year residents, and
            auditors ask for proof. Retirees relocating from high-tax states often keep their old
            brokerage but change domicile paperwork fast: driver&rsquo;s license, voter
            registration, and homestead filing together establish the move date that unlocks the
            retirement exclusion. Pair that with federal bracket planning in our{" "}
            <Link href="/federal-tax-brackets-2026" className="text-amber-200 underline underline-offset-2">
              2026 federal brackets guide
            </Link>{" "}
            so a Roth conversion does not waste the exclusion by spilling into a higher federal
            bracket.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Filing and regional comparison</h2>
          <p className="mt-3">
            Georgia returns (Form 500) are due April 15, 2027, with Georgia estimates on federal
            dates and e-filing through Georgia Tax Center. Part-year residents allocate with
            Schedule 3; full-year nonresidents with Georgia-source income (rentals, business)
            file as nonresidents. Remote workers for Georgia employers generally owe Georgia tax
            on Georgia workdays. Stacked against regional rivals, Georgia&rsquo;s 5.19 percent
            beats South Carolina&rsquo;s top 6.2 percent and matches the Southeast middle &mdash;
            but{" "}
            <Link href="/florida-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Florida
            </Link>{" "}
            and{" "}
            <Link href="/texas-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Texas
            </Link>{" "}
            charge 0 percent, and{" "}
            <Link href="/north-carolina-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              North Carolina&rsquo;s 3.99 percent
            </Link>{" "}
            now undercuts Georgia for high earners. Weigh income tax against Georgia&rsquo;s
            moderate property taxes and 4 percent state sales tax (up to ~8.9 percent combined)
            before relocating.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is Georgia&rsquo;s rate still falling?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes — 5.19% for 2026 with further 0.1-point annual cuts while revenue triggers are met, heading toward a much lower floor. The cut applies automatically to all taxable income, so no action is needed beyond filing; each step saves about $100 per $100,000 of taxable income.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How are retirees treated in Georgia?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Very well: up to $65,000 per person 65+ of retirement income excluded ($35,000 at 62–64), plus fully exempt Social Security. A joint senior couple can shield $130,000 of pensions, IRA payouts, and investment income before deductions, which often zeroes out the state bill entirely.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does Georgia tax capital gains specially?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. Gains face the same 5.19% as wages — there is no state-level 0/15/20% preference. Harvest losses, hold periods, and entity elections still matter for the federal return, but Georgia simply multiplies net taxable income by the flat rate.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What sales tax will I pay in Georgia?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">4% state plus county add-ons — most metro Atlanta shoppers pay 7–8.9% combined at the register. Groceries and local option taxes vary by county, so movers comparing Florida or Texas should weigh the higher checkout tax against the flat income rate.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How do I avoid Georgia estimated-tax penalties?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Pay evenly across the four federal estimate dates through Georgia Tax Center and keep withholding (Form G-4) current after raises or moves. Part-year residents prorate deductions on Schedule 3, so short-year filers should true up the final estimate rather than annualizing blindly.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Should high earners still consider North Carolina?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Possibly: North Carolina&rsquo;s lower flat rate undercuts Georgia above roughly six-figure taxable income, while Florida and Texas charge zero. Run both states with identical deductions first, then add property tax and county sales tax before deciding a move purely on the income line.</p>
            </details>
          </div>
        </section>

        <nav aria-label="Related guides">
          <h2 className="text-xl font-bold text-white">Related guides</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/federal-income-tax-calculator-2026" className="font-semibold text-amber-200 underline underline-offset-2">
                2026 Federal Income Tax Calculator
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Stack federal tax on top of Georgia&rsquo;s 5.19% flat rate.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/federal-tax-brackets-2026" className="font-semibold text-amber-200 underline underline-offset-2">
                2026 Federal Tax Brackets Guide
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">See which federal bracket your Georgia income lands in.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/florida-no-income-tax-guide" className="font-semibold text-amber-200 underline underline-offset-2">
                Florida No-Income-Tax Guide
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Compare Georgia&rsquo;s flat tax with Florida&rsquo;s zero income tax.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/north-carolina-income-tax-calculator" className="font-semibold text-amber-200 underline underline-offset-2">
                North Carolina Income Tax Calculator
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Southeast rival now at a lower 3.99% flat rate.</p>
            </li>
          </ul>
        </nav>

        <section>
          <h2 className="text-xl font-bold text-white">Official sources</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <a href="https://dor.georgia.gov/" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                Georgia Department of Revenue — Individual Income Tax
              </a>
            </li>
            <li>
              <a href="https://gtc.dor.ga.gov/" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                Georgia Tax Center — File and Pay Online
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
            This is general education, not tax advice. Confirm deduction and rate-step figures
            with the Georgia Department of Revenue. Read our full{" "}
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
