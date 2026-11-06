import type { Metadata } from "next";
import Link from "next/link";
import { GuideBottomAds, GuideInArticleAds, GuideTopAds } from "../../components/GuideAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "Paycheck Tax Calculator by State 2026 (Take-Home Pay in 50 States) | LoanPay Tax",
  description:
    "Estimate 2026 take-home pay state by state: federal tax, FICA, state income tax, local tax, withholding, pay frequency, and overtime rules.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/paycheck-tax-calculator-by-state-2026",
  },
};

const CHECKLIST = [
  "Enter gross pay per period, pay frequency, filing status, and state of residence.",
  "Subtract pre-tax items first: 401(k), HSA, FSA, and health premiums.",
  "Apply federal income tax, 6.2% Social Security (to the wage base), and 1.45% Medicare.",
  "Layer your state income tax: flat, graduated, or zero in no-tax states.",
  "Add local or school-district tax if your city or county levies one.",
  "Compare withholding against actual liability so April brings no surprise bill.",
];

export default function PaycheckByStatePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Paycheck Tax Calculator by State 2026 (Take-Home Pay in 50 States) | LoanPay Tax" description="Estimate 2026 take-home pay state by state: federal tax, FICA, state income tax, local tax, withholding, pay frequency, and overtime rules." url="https://tax.loanpaylogic.com/paycheck-tax-calculator-by-state-2026" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          IRS &amp; State Revenue Departments &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Paycheck Tax Calculator by State
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The same $75,000 salary can mean $5,200 a month in Austin and under $4,500 a
          month in Manhattan &mdash; same federal return, wildly different take-home pay.
          This guide walks through the full 2026 paycheck stack, state by state, so every
          job offer, relocation, and raise is priced on net dollars rather than headline salary.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <GuideTopAds />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Take-home pay checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Why the same salary pays differently in every state</h2>
          <p className="mt-3">
            Every American paycheck passes through the same federal gauntlet before state
            rules diverge. Federal income tax follows the 2026 graduated brackets from 10
            percent to 37 percent, reduced by either the standard deduction or itemized
            deductions and by pre-tax contributions. On top of that, Social Security takes
            6.2 percent of wages up to the annual wage base, and Medicare takes 1.45
            percent of all wages plus an additional 0.9 percent on earnings above $200,000
            single or $250,000 joint. A single filer earning $80,000 with only the standard
            deduction therefore loses roughly $9,000 to federal income tax and another
            $6,120 to FICA before any state sees a dollar, leaving about $64,880 to be
            divided across pay periods. That federal floor is identical whether you live in
            Seattle, Miami, Sacramento, or Albany, which is why state policy creates the
            entire gap between otherwise identical offers.
          </p>
          <p className="mt-3">
            States then choose one of three philosophies. Nine states levy no broad-based
            wage income tax at all, including Texas, Florida, Washington, Tennessee, Nevada,
            Wyoming, South Dakota, Alaska, and New Hampshire, so workers keep the full
            post-federal amount subject only to local quirks. Flat-tax states such as{" "}
            <Link href="/pennsylvania-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Pennsylvania at 3.07 percent
            </Link>{" "}
            and{" "}
            <Link href="/north-carolina-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              North Carolina at 3.99 percent
            </Link>{" "}
            apply one rate to nearly every dollar, which is simple to forecast and gentle on
            high earners. Graduated states such as{" "}
            <Link href="/california-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              California with rates up to 12.3 percent
            </Link>{" "}
            and{" "}
            <Link href="/new-york-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              New York with rates up to 10.9 percent
            </Link>{" "}
            plus New York City tax shelter low earners with zero brackets and standard
            deductions while charging top marginal rates on six-figure incomes. Virginia
            sits in the middle with its 2%&ndash;5.75% schedule, and our{" "}
            <Link href="/virginia-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Virginia income tax calculator
            </Link>{" "}
            shows how fast its top band arrives. A concrete comparison tells the story: a
            single filer with $80,000 of wages and no adjustments keeps roughly $64,880
            after federal and FICA in every state, then keeps all of it in{" "}
            <Link href="/texas-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Texas
            </Link>{" "}
            or{" "}
            <Link href="/florida-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Florida
            </Link>
            , loses about $2,450 in Pennsylvania, about $3,900 in Virginia, about $4,400
            in New York State before city tax, and over $5,000 in California.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Illustrative 2026 state tax on $80,000 single wages (state only, rounded).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">State model</th>
                  <th className="px-4 py-3 font-semibold">System</th>
                  <th className="px-4 py-3 font-semibold">Approx. state tax</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Texas / Florida</td><td className="px-4 py-2">No wage tax</td><td className="px-4 py-2">$0</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Pennsylvania</td><td className="px-4 py-2">3.07% flat</td><td className="px-4 py-2">~$2,450</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Virginia</td><td className="px-4 py-2">2%–5.75% graduated</td><td className="px-4 py-2">~$3,900</td></tr>
                <tr><td className="px-4 py-2">California</td><td className="px-4 py-2">1%–12.3% graduated</td><td className="px-4 py-2">~$5,100+</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">From gross pay to net pay: the five layers</h2>
          <p className="mt-3">
            Start with gross pay per period: hourly workers multiply rate by hours plus
            overtime at time-and-a-half over 40 hours a week, while salaried workers divide
            annual salary by 26 biweekly, 24 semi-monthly, 12 monthly, or 52 weekly periods.
            Pre-tax deductions come off before any tax is computed, which is why maxing a
            401(k) or HSA visibly fattens each check&apos;s tax savings: a $200-per-period
            401(k) contribution at a 22 percent federal marginal rate plus 5 percent state
            saves about $54 of combined income tax every payday while building retirement
            wealth. Health insurance premiums, dental and vision premiums, FSA
            contributions, and commuter benefits under the qualified limits follow the same
            path, escaping federal, FICA, and usually state tax together.
          </p>
          <p className="mt-3">
            Federal withholding follows Form W-4: the IRS tables convert your filing status,
            dependents, extra income, and extra withholding into a per-period amount that
            approximates the annual bracket bill. Divide annual liability by periods paid
            rather than assuming each bonus or overtime check is taxed punitively &mdash;
            supplemental wages are often withheld at a flat 22 percent federal rate, which
            over-withholds low earners and under-withholds top-bracket earners until the
            return reconciles. FICA has no deductions or exemptions: every dollar of cash
            wages faces Medicare, and every dollar up to the wage base faces Social
            Security, including bonuses and commissions. State withholding mirrors the
            federal idea with state-specific allowances, and cities such as New York City,
            Philadelphia, Detroit, and thousands of Ohio and Pennsylvania localities add a
            final local layer. Post-tax deductions &mdash; Roth 401(k), union dues, garnishments,
            and after-tax benefits &mdash; come last. Compare each layer against our{" "}
            <Link href="/federal-tax-brackets-2026" className="text-amber-200 underline underline-offset-2">
              2026 federal brackets guide
            </Link>{" "}
            and tune Step 2 through Step 4 with our{" "}
            <Link href="/w4-withholding-calculator" className="text-amber-200 underline underline-offset-2">
              W-4 withholding calculator
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Movers, remote workers, and multi-state paychecks</h2>
          <p className="mt-3">
            If you earned wages in two states during 2026, each state taxes only the income
            sourced within its borders, and your resident state generally grants a credit
            for taxes paid to the work state so the same dollar is not taxed twice &mdash;
            though credits cap at what your home state would have charged, leaving a gap
            when you commute from a low-tax home to a high-tax office. Part-year movers
            allocate wages by days of residence and physical work location: someone leaving
            Chicago for Austin in June files a part-year Illinois return on January-to-June
            wages and nothing in Texas, while keeping pay stubs that prove the split. Full
            remote workers are usually taxed where their body sits each workday, not where
            the employer&apos;s headquarters sits, with narrow exceptions for convenience-of-
            employer states such as New York that can tax telecommuters whose office is in
            Manhattan even on home days. Reciprocity agreements &mdash; Virginia with
            Maryland and D.C., Pennsylvania with New Jersey, Illinois with Iowa, and
            others &mdash; let border commuters file only at home with an exemption
            certificate on file with the employer.
          </p>
          <p className="mt-3">
            Overtime, bonuses, and second jobs deserve their own math. Overtime premiums are
            ordinary wages taxed at your marginal rate, not a special penalty rate, so a
            $30-an-hour worker earning $45 overtime hours in the 22 percent federal plus 5
            percent state band keeps about $32.85 of each overtime hour after income tax.
            Bonuses face flat-rate withholding that almost never equals the true marginal
            bill &mdash; expect a refund if you earn under $100,000 and a balance due if
            you sit in the 32 percent-plus federal bands. Moonlighters with W-2 plus 1099
            income should run quarterly estimates alongside withholding; our{" "}
            <Link href="/quarterly-estimated-tax-calculator" className="text-amber-200 underline underline-offset-2">
              quarterly estimated tax planner
            </Link>{" "}
            prevents the April penalty shock. Relocators should price five years of housing,
            property tax, sales tax, commuting, and childcare alongside the income-tax gap:
            a $6,000 annual state-tax saving evaporates quickly against a $400-a-month rent
            increase or a new toll-road commute.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Who gains most from a state-by-state paycheck check</h2>
          <p className="mt-3">
            Clear winners from running this comparison: job seekers weighing offers in
            different metros, remote workers free to choose domicile, hourly staff deciding
            between overtime and a second job, and couples merging paychecks and
            recalibrating joint withholding. Break-even households are dual earners whose
            higher-tax state funds measurably better schools, transit, or childcare that
            offsets the liability dollar for dollar &mdash; spreadsheet the subsidy before
            declaring the low-tax state cheaper. Reconsider a move driven by income tax
            alone if your occupation depends on industry clusters, licensing, or in-person
            clients concentrated in high-tax coastal metros; the salary premium there often
            exceeds the tax premium. Whatever you decide, revisit withholding every January
            and after every raise, move, marriage, birth, or home purchase, because the
            paycheck is where tax policy meets weekly reality.
          </p>
        </section>

        <GuideInArticleAds />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How do I estimate take-home pay in my state?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Start with gross pay per period, subtract pre-tax 401(k), HSA, and health premiums, apply federal brackets plus 6.2% Social Security and 1.45% Medicare, then apply your state&apos;s flat, graduated, or zero rate and any city tax — divide the annual result by your number of pay periods.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Which states have no income tax on paychecks in 2026?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Texas, Florida, Washington, Tennessee, Nevada, Wyoming, South Dakota, Alaska, and New Hampshire levy no broad-based tax on wage income — though Washington taxes certain capital gains and some localities add payroll or business taxes.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Why is my bonus check taxed more than my salary?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">It usually is not taxed more — employers withhold a flat 22% federal rate on supplemental wages, which only looks high. The true tax follows your marginal bracket at filing time, producing a refund or balance due for the difference.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">I worked in two states this year — do I pay tax twice?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Generally no: the work state taxes its share, your resident state taxes worldwide income but credits tax paid elsewhere up to its own rate. File a nonresident or part-year return for each work state plus your resident return.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How does pay frequency change my take-home pay?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Annual take-home is the same, but per-check amounts differ: biweekly means 26 smaller checks with two three-paycheck months, semi-monthly means 24 equal checks, and weekly means 52 smallest checks — compare offers on annual net, not per-check size.</p>
            </details>
          </div>
        </section>

        <GuideBottomAds />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Federal brackets, FICA thresholds,
            and state rates follow 2026 IRS and state revenue guidance;
            confirm before filing. Read our full{" "}
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
