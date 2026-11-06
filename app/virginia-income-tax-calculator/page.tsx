import type { Metadata } from "next";
import Link from "next/link";
import { GuideBottomAds, GuideInArticleAds, GuideTopAds } from "../../components/GuideAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "Virginia Income Tax Calculator 2026 (2%–5.75% Brackets) | LoanPay Tax",
  description:
    "Estimate 2026 Virginia income tax across the 2%–5.75% brackets, with standard deduction, exemptions, Spouse Tax Adjustment, credits, and NOVA commuter rules.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/virginia-income-tax-calculator",
  },
};

const CHECKLIST = [
  "Confirm your 2026 Virginia bracket: 2% to 5.75% on Virginia taxable income over $17,000.",
  "Claim the $8,000 single / $16,000 joint standard deduction or itemize if higher.",
  "Add $930 personal exemptions per filer, dependent, and age-65 or blindness add-ons.",
  "Run the joint-filer Spouse Tax Adjustment so two incomes are not stacked unfairly.",
  "File Form 760 by May 1, 2027; pay quarterly estimates if you owe $150+ beyond withholding.",
  "If you commute to D.C. or Maryland, file only where you live under reciprocity rules.",
];

export default function VirginiaPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Virginia Income Tax Calculator 2026 (2%–5.75% Brackets) | LoanPay Tax" description="Estimate 2026 Virginia income tax across the 2%–5.75% brackets, with standard deduction, exemptions, Spouse Tax Adjustment, credits, and NOVA commuter rules." url="https://tax.loanpaylogic.com/virginia-income-tax-calculator" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Virginia Dept. of Taxation &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Virginia Income Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Virginia still runs four graduated brackets topping 5.75 percent &mdash; modest by
          Mid-Atlantic standards but full of quirks, from the Spouse Tax Adjustment to car-tax
          relief and D.C.-area reciprocity. Here is the honest 2026 math for newcomers,
          commuters, military families, and retirees.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <GuideTopAds />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Virginia arrival checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How Virginia&apos;s 2%&ndash;5.75% brackets actually work</h2>
          <p className="mt-3">
            Virginia taxes Virginia adjusted gross income through four brackets that have not
            moved in decades: 2 percent on the first $3,000 of taxable income, 3 percent on the
            next $2,000, 5 percent on the next $12,000, and 5.75 percent on everything above
            $17,000. The top rate therefore arrives fast &mdash; a single filer with $90,000 of
            Virginia taxable income pays the 5.75 percent marginal rate on most of every dollar,
            yet the blended effective rate stays well below the top because the lower bands
            shelter the first $17,000. Virginia AGI starts from federal AGI with state
            adjustments: subtract qualifying military pay exclusions and federal obligations
            interest, add back certain federally exempt items, then subtract either the
            standard deduction ($8,000 single or married-separate, $16,000 joint) or federal-style
            itemized deductions, plus $930 personal exemptions for each filer and dependent.
            Taxpayers 65 and older and legally blind filers stack extra exemption amounts on top.
          </p>
          <p className="mt-3">
            A concrete example makes the mechanics visible. Take a single Richmond renter with
            $85,000 of Virginia AGI, no dependents, claiming the $8,000 standard deduction and
            one $930 exemption. Virginia taxable income lands near $76,070. The bracket math
            charges roughly $60 on the first $3,000, $60 on the next $2,000, $600 on the next
            $12,000, and 5.75 percent on the remaining $59,070 &mdash; about $3,397 &mdash; for a
            total near $4,117 before credits, or a 4.8 percent effective rate on AGI. A married
            couple filing jointly with $150,000 of AGI, a $16,000 standard deduction, and two
            $930 exemptions faces taxable income near $132,140 and a pre-credit bill near
            $7,300, but the Spouse Tax Adjustment described below trims that joint-stack penalty
            by several hundred dollars. Capital gains get no preference: they flow into AGI and
            face the same brackets as wages, while qualified retirement income for older filers
            benefits from the age deduction rather than a separate gains rate.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2026 Virginia brackets (single, joint, and separate use the same thresholds).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Virginia taxable income</th>
                  <th className="px-4 py-3 font-semibold">Rate</th>
                  <th className="px-4 py-3 font-semibold">Tax on band</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$0 – $3,000</td><td className="px-4 py-2">2%</td><td className="px-4 py-2">up to $60</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$3,001 – $5,000</td><td className="px-4 py-2">3%</td><td className="px-4 py-2">up to $60</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$5,001 – $17,000</td><td className="px-4 py-2">5%</td><td className="px-4 py-2">up to $600</td></tr>
                <tr><td className="px-4 py-2">Over $17,000</td><td className="px-4 py-2">5.75%</td><td className="px-4 py-2">$720 + 5.75% of excess</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Deductions, exemptions, and credits that lower the bill</h2>
          <p className="mt-3">
            Most Virginians do better with the standard deduction than by itemizing for the
            state, because Virginia conforms closely to federal itemized categories &mdash;
            medical expenses above 7.5 percent of AGI, state and local tax payments capped at
            $10,000 federally, mortgage interest, and charitable gifts &mdash; but high housing
            costs in Arlington, Alexandria, and Fairfax can flip the answer for owners with
            large mortgages and donations. Either way, the $930-per-person exemption comes off
            after deductions, so a joint couple with two children shields $3,720 plus the
            standard amount before brackets apply. Filers 65 and older may claim an additional
            age deduction of up to $12,000 per person against income such as pensions, IRA
            distributions, and investment earnings, subject to income phase-outs; Social
            Security itself stays fully exempt in Virginia at every age, and Tier 1 railroad
            benefits follow the same treatment.
          </p>
          <p className="mt-3">
            Joint filers should never skip Schedule ADJ and the Spouse Tax Adjustment. Without
            it, two $70,000 incomes stacked into one $140,000 joint return push more dollars
            into the 5.75 percent band than if each spouse were taxed separately. The adjustment
            recomputes the bill roughly as if each income faced the brackets on its own, then
            blends the result &mdash; typically saving joint couples with two earners several
            hundred dollars a year. Beyond that, Virginia&apos;s credit shelf rewards low-income
            workers through the nonrefundable Earned Income Credit worth 20 percent of the
            federal EIC, helps caregivers and teachers through targeted credits, and supports
            conservation, historic rehabilitation, and pass-through entity elections for
            S-corporation owners navigating the federal SALT cap. Car owners meet the famous
            Personal Property Tax Relief: the state reimburses localities for part of the car
            tax on the first $20,000 of assessed value, so a $25,000 sedan in Fairfax still
            carries a visible local bill even after relief &mdash; budget roughly 4 percent of
            assessed value annually before the subsidy. Compare the federal side of every move
            with our{" "}
            <Link href="/federal-tax-brackets-2026" className="text-amber-200 underline underline-offset-2">
              2026 federal brackets guide
            </Link>{" "}
            and{" "}
            <Link href="/standard-deduction-vs-itemized-2026" className="text-amber-200 underline underline-offset-2">
              standard vs. itemized walkthrough
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Northern Virginia, military, and multi-state commuters</h2>
          <p className="mt-3">
            The D.C. metro creates America&apos;s trickiest commuter triangle. Virginia holds
            reciprocal agreements with Maryland, the District of Columbia, and West Virginia:
            wages earned across the border are taxed only by your state of residence, so an
            Arlington resident working in downtown D.C. files Virginia Form 760 and owes nothing
            to D.C. on those wages, while a Maryland resident commuting to Tysons files in
            Maryland. File exemption certificates (VA-4 for Virginia employers, D-4A or MW507
            equivalents across the river) so withholding lands in the right state from the first
            paycheck; otherwise you will float interest-free loans to two revenue departments
            until returns reconcile. Remote workers follow the physical-presence rule &mdash;
            days worked from a Richmond home for a New York employer generally stay Virginia
            income, while days physically in Manhattan remain New York-source and claim a credit
            on the Virginia return. Part-year movers allocate with Schedule OSC and the
            income-allocation worksheet, and full-year nonresidents with Virginia rentals or
            business income file Form 763.
          </p>
          <p className="mt-3">
            Military families get Virginia&apos;s most generous treatment. Active-duty pay earned
            by a servicemember domiciled elsewhere but stationed in Virginia under orders is
            exempt from Virginia tax, and the Military Spouses Residency Relief Act lets a
            qualifying spouse keep the same domicile for tax purposes through moves to Norfolk,
            Quantico, or Fort Belvoir. Virginia National Guard income, combat-zone exclusions,
            and Thrift Savings Plan treatment follow federal rules. Property taxes bite harder
            than income tax for many NOVA households: Fairfax and Loudoun levy effective rates
            near 1.0&ndash;1.1 percent on fast-appreciating homes, so a $750,000 townhouse can
            carry $7,500&ndash;$8,500 in real-estate tax plus the annual car tax, before HOA
            dues. Factor sales tax at 5.3&ndash;6 percent generally (7 percent on prepared food
            in parts of NOVA with regional add-ons) and toll-road budgets before accepting a
            transfer. If withholding looks thin after a move, true up with our{" "}
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
            Clear winners in Virginia: mid-career joint filers whose Spouse Tax Adjustment and
            $16,000 standard deduction hold effective rates near 4&ndash;5 percent, military
            households shielding active-duty pay, and retirees pairing exempt Social Security
            with the age deduction. Break-even households are NOVA renters-turned-owners whose
            property and car taxes consume what the moderate income tax saves versus the District
            or Maryland &mdash; common in Fairfax, Arlington, and Alexandria&apos;s top school
            pyramids. Reconsider: single high earners renting modestly who would pay 3.07
            percent flat across the river in{" "}
            <Link href="/pennsylvania-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              Pennsylvania-style flat systems
            </Link>{" "}
            or 4.99 percent in lower-cost southern markets; model five years of housing plus
            commuting before signing. Stacked against neighbors, Virginia&apos;s 5.75 percent
            top beats Maryland&apos;s combined state-plus-county bite above 8 percent and the
            District&apos;s 10.75 percent peak, roughly ties West Virginia&apos;s post-reform
            middle bands, and loses to{" "}
            <Link href="/north-carolina-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              North Carolina&apos;s 3.99 percent flat rate
            </Link>{" "}
            and zero-tax{" "}
            <Link href="/florida-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Florida
            </Link>{" "}
            for high earners who can genuinely relocate. Returns are due May 1, 2027 for
            calendar 2026 &mdash; Virginia&apos;s extra two weeks past April 15 help procrastinators
            but interest still runs from the original date on any balance due.
          </p>
        </section>

        <GuideInArticleAds />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is Virginia&apos;s top income tax rate in 2026?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">5.75% on Virginia taxable income above $17,000 — the same four-bracket schedule Virginia has used for years, with lower 2%, 3%, and 5% bands underneath.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I owe Virginia tax if I live in Arlington but work in D.C.?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">You file in Virginia only on those wages thanks to reciprocity — claim exempt D.C. withholding with the correct certificate and keep withholding in Virginia.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is the Spouse Tax Adjustment?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">A joint-filer recomputation that prevents two incomes stacked on one return from being overtaxed — it typically saves two-earner couples hundreds of dollars.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does Virginia tax Social Security and retirement income?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Social Security is fully exempt, and filers 65+ may deduct up to $12,000 per person of other income subject to limits — pensions and IRA withdrawals otherwise face normal brackets.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">When are Virginia 2026 taxes due?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">May 1, 2027 for calendar-year filers on Form 760, with quarterly estimates due on federal dates if withholding falls $150+ short.</p>
            </details>
          </div>
        </section>

        <GuideBottomAds />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Bracket thresholds, standard deduction,
            and exemption figures follow Virginia Department of Taxation 2026 guidance;
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
