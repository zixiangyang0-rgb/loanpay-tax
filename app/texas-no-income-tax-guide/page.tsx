import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Texas Has No Income Tax: The Full 2026 Guide | LoanPay Tax",
  description:
    "Texas levies no individual income tax in 2026 — learn what replaces it (sales, property, franchise taxes), who still files, and the true cost-vs-California math.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/texas-no-income-tax-guide",
  },
};

const CHECKLIST = [
  "Confirm you owe no Texas individual return — wage and retirement income is untouched.",
  "Budget property tax: ~1.6% effective statewide, 1.8–2.2% in Austin, Dallas, Houston metros.",
  "Price the 8.25% combined sales-tax ceiling into big purchases (6.25% state + up to 2% local).",
  "File your federal 1040 normally — Texas changes nothing about IRS obligations.",
  "If self-employed, check Texas franchise tax: 0.375%–0.75% margins only above ~$2.47M revenue.",
  "New movers: update driver's license, voter and vehicle registration within weeks of arrival.",
];

export default function TexasPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          no individual income tax &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Texas No-Income-Tax Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Texas taxes neither wages nor retirement income &mdash; but the state still funds
          schools, roads, and hospitals somehow. This guide shows exactly what replaces the
          income tax, who still owes Texas business taxes, and whether moving pencils out.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">New Texan checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What &ldquo;no income tax&rdquo; really covers</h2>
          <p className="mt-3">
            The Texas Constitution bans individual income taxation, and no 2026 legislation
            changes that: wages, salaries, tips, freelance profit, pensions, 401(k) withdrawals,
            and Social Security all reach your pocket untouched by Austin. There is no Texas
            1040, no withholding from paychecks, and no estimated-payment regime for individuals.
            Federal obligations continue unchanged &mdash; you still file Form 1040, still face
            2026 federal brackets and the $184,500 Social Security wage base, and still make
            quarterly payments on untaxed income. Texas simply declines to add a second layer.
            Retirees feel this most: a $70,000 pension plus Social Security costs $0 in Texas
            income tax versus roughly $3,000&ndash;$4,000 in a mid-rate state.
          </p>
          <p className="mt-3">
            Businesses live under different rules. Texas imposes a franchise (margin) tax on most
            entities doing business here: 0.75 percent of apportioned margin for most firms, 0.375
            percent for retailers and wholesalers, with a no-tax threshold near $2.47 million in
            annualized revenue for 2026 (indexed biennially) and an EZ computation for smaller
            firms. Sole proprietors and general partnerships of individuals are generally exempt.
            Separately, Texas taxes oil, gas, motor fuels (20 cents per gallon), cigarettes, hotel
            stays (6 percent state), and mixed beverages &mdash; visitors and specific industries
            carry a visible share of the load.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What replaces it: sales and property tax</h2>
          <p className="mt-3">
            Texas leans on consumption and property. The state sales-tax rate is 6.25 percent,
            cities, counties, and transit districts may add up to 2 percent more, and the combined
            ceiling is 8.25 percent &mdash; the rate most Dallas, Houston, Austin, and San Antonio
            shoppers actually pay. Groceries, medicine, and many services are exempt, which softens
            regressivity but does not erase it: lower-income households spend more of each dollar
            on taxable goods. Property tax is the heavier lift. With no income-tax revenue to
            share, school districts and counties set rates that average about 1.6 percent of
            market value statewide and reach 1.8&ndash;2.2 percent in major metros. A $400,000
            Austin home can carry a $7,500&ndash;$8,500 annual bill &mdash; and Texas reassesses to
            market, so fast appreciation flows straight into the levy.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Where Texas money comes from vs. a typical income-tax state (illustrative shares).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Revenue source</th>
                  <th className="px-4 py-3 font-semibold">Texas</th>
                  <th className="px-4 py-3 font-semibold">Typical income-tax state</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Individual income tax</td><td className="px-4 py-2">0%</td><td className="px-4 py-2">~35&ndash;40%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Sales tax</td><td className="px-4 py-2">~6.25% + 2% local</td><td className="px-4 py-2">~6% + local</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Property tax (effective)</td><td className="px-4 py-2">~1.6%</td><td className="px-4 py-2">~1.0&ndash;1.2%</td></tr>
                <tr><td className="px-4 py-2">Business margin tax</td><td className="px-4 py-2">0.375&ndash;0.75%</td><td className="px-4 py-2">Corporate income tax varies</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Does moving to Texas actually save money?</h2>
          <p className="mt-3">
            Run household math, not slogans. A $150,000-earning renter moving from California to
            Texas saves roughly $9,000&ndash;$11,000 of state income tax but may pay $1,500 more in
            sales tax and higher rent driven partly by property-tax pass-through. A $150,000
            homeowner buying a $500,000 house trades ~$10,000 of California income tax for
            ~$9,000 of Texas property tax &mdash; nearly a wash before considering home prices,
            insurance (Texas windstorm and hail coverage is pricey), and utility bills. Winners
            are high earners with modest homes, remote workers renting lightly, and retirees
            drawing large pensions. Losers can be middle-income buyers of expensive homes in
            high-levy districts. Homestead exemptions &mdash; a flat $100,000 off school-district
            value plus a 10 percent annual appraisal cap on homesteads &mdash; meaningfully help
            owners, so file the exemption the January after you move in.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Residency, domicile, and audit traps</h2>
          <p className="mt-3">
            Texas cannot tax you simply for arriving, but your old state can keep taxing you until
            you truly leave. High-tax states audit exits: keep the Texas driver&rsquo;s license,
            voter registration, vehicle plates, doctors, and club memberships, spend fewer than 183
            days in the old state, and document the move with a dated lease or closing statement.
            Remote workers owe attention to convenience-of-employer rules in states like New York,
            which may still claim tax on work performed for an in-state employer. When in doubt,
            file a part-year return in the departure state for the moving year and keep a day
            count &mdash; it is the single most persuasive exhibit in any residency audit. Compare
            with our{" "}
            <Link href="/florida-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Florida
            </Link>{" "}
            and{" "}
            <Link href="/washington-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Washington
            </Link>{" "}
            guides before choosing a no-tax home.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do I file a Texas tax return?</h3>
              <p className="mt-1">Individuals file nothing with Texas. Businesses above the franchise-tax threshold file margin-tax reports instead.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Are Texas property taxes the highest in the US?</h3>
              <p className="mt-1">Among the highest effective rates (~1.6% statewide, up to ~2.2% in big metros) — the direct trade for having no income tax.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do retirees benefit most from Texas?</h3>
              <p className="mt-1">Usually yes: pensions, 401(k) withdrawals, and Social Security face zero Texas tax, and homestead caps protect longtime owners.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What is the Texas franchise tax?</h3>
              <p className="mt-1">A 0.375%–0.75% tax on business margin above roughly $2.47M revenue. Employees, sole proprietors, and small firms generally owe nothing.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Texas tax figures reflect 2026 law as
            published by the Comptroller. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and confirm moving decisions with a licensed tax professional.
          </p>
        </section>
      </article>
    </div>
  );
}
