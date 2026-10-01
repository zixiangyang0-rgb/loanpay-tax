import type { Metadata } from "next";
import Link from "next/link";
import { GuideBottomAds, GuideInArticleAds, GuideTopAds } from "../../components/GuideAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "Florida Has No Income Tax: 2026 Guide to the Real Costs | LoanPay Tax",
  description:
    "Florida has no individual income tax in 2026 — see how sales, property, insurance, and homestead rules shape the true cost for movers and retirees.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/florida-no-income-tax-guide",
  },
};

const CHECKLIST = [
  "Confirm zero Florida individual tax on wages, pensions, and Social Security.",
  "File Declaration of Domicile and update license, plates, and voter registration.",
  "Apply for homestead exemption by March 1 — up to $50,000 off taxable value.",
  "Budget homeowner's insurance ($3,000–$6,000+/yr) and flood coverage separately.",
  "Price 6% state + up to 2.5% local sales tax; groceries and medicine are exempt.",
  "Keep filing federal 1040 and quarterly estimates — Florida changes nothing federally.",
];

export default function FloridaPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Florida Has No Income Tax: 2026 Guide to the Real Costs | LoanPay Tax" description="Florida has no individual income tax in 2026 — see how sales, property, insurance, and homestead rules shape the true cost for movers and retirees." url="https://tax.loanpaylogic.com/florida-no-income-tax-guide" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          no individual income tax &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Florida No-Income-Tax Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Florida&rsquo;s constitution bans individual income tax &mdash; a magnet for retirees
          and remote workers. But insurance bills, property taxes, and tourist-driven sales taxes
          reshape the bargain. Here is the honest 2026 accounting.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <GuideTopAds />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Florida arrival checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What Florida does and does not tax</h2>
          <p className="mt-3">
            Florida taxes no individual&rsquo;s wages, freelance earnings, pensions, IRA and
            401(k) distributions, or Social Security &mdash; the exemption is constitutional, not a
            temporary policy, and 2026 brings no change. There is no state return for individuals,
            no withholding, and no estimated-payment system. Estates and inheritances face no
            Florida tax either; only the federal estate exemption ($15 million per person in 2026)
            matters. Corporations do pay a 5.5 percent income tax, and commercial landlords
            navigate a sales-tax regime on rents that lawmakers have trimmed but not eliminated
            &mdash; check current Department of Revenue rules before signing a business lease.
          </p>
          <p className="mt-3">
            The state&rsquo;s coffers instead fill from visitors and shoppers. The 6 percent state
            sales tax plus county surtaxes (typically 0.5&ndash;1.5 percent, capped so combined
            rates rarely exceed 7.5&ndash;8 percent) falls partly on 140 million annual tourists.
            Documentary stamp taxes on real-estate deeds (70 cents per $100 of price) and
            intangibles taxes on certain loans add closing-cost weight that buyers from
            low-transfer-tax states often miss. Motor-fuel, cigarette, alcohol, and hotel
            &ldquo;bed&rdquo; taxes (up to 6 percent locally) complete a structure designed to
            export part of the burden to nonresidents.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Homestead: Florida&rsquo;s standout homeowner shield</h2>
          <p className="mt-3">
            Florida&rsquo;s homestead exemption is among America&rsquo;s strongest: up to $50,000
            off a primary home&rsquo;s taxable value ($25,000 on all levies plus $25,000 on
            non-school levies for value above $50,000), plus Save Our Homes &mdash; a 3 percent
            or CPI annual cap on assessed-value growth, whichever is lower. A longtime owner of a
            $600,000 Miami home might be taxed as if it were worth $380,000, saving thousands
            yearly versus a new buyer next door. Additional exemptions aid seniors, veterans,
            disabled residents, and surviving spouses. The catch: you must apply through your
            county property appraiser by March 1 of the first year, and renting the home or
            claiming another state&rsquo;s residency forfeits it. Portability lets movers carry up
            to $500,000 of accrued Save Our Homes benefit to a new Florida home &mdash; file the
            transfer form or leave money behind.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Illustrative 2026 carrying costs: $500,000 Florida home vs. renting.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Cost line</th>
                  <th className="px-4 py-3 font-semibold">Owner (homesteaded)</th>
                  <th className="px-4 py-3 font-semibold">Renter</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">State income tax</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">$0</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Property tax (~1.0%)</td><td className="px-4 py-2">~$4,500</td><td className="px-4 py-2">Embedded in rent</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Homeowner&rsquo;s insurance</td><td className="px-4 py-2">$3,000&ndash;$6,000</td><td className="px-4 py-2">Renter&rsquo;s policy ~$200</td></tr>
                <tr><td className="px-4 py-2">Sales tax on spending</td><td className="px-4 py-2">6&ndash;7.5%</td><td className="px-4 py-2">6&ndash;7.5%</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The insurance asterisk nobody should skip</h2>
          <p className="mt-3">
            Florida homeowner&rsquo;s insurance is the budget line that ruins spreadsheets. Average
            premiums run $3,000&ndash;$6,000 and coastal wind-plus-flood bundles can exceed
            $10,000, with separate hurricane deductibles (2&ndash;5 percent of dwelling value) and
            Citizens Property Insurance as insurer of last resort. Flood insurance is excluded
            from standard policies everywhere &mdash; check FEMA maps even blocks from water,
            because afternoon cloudbursts flood inland streets too. Get quotes before closing, not
            after: lenders require coverage, and an uninsurable roof age or mitigation report can
            kill financing. Renters dodge most of this with a $150&ndash;$250 annual policy, one
            reason renting first year in Florida is financially prudent while you learn micro
            markets.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Who wins, who breaks even, who should reconsider</h2>
          <p className="mt-3">
            Clear winners: retirees with large IRA distributions or pensions (zero state tax on
            every withdrawal), high earners renting modestly, and remote workers fleeing
            9&ndash;13 percent states. Break-even: middle-income buyers whose property tax plus
            insurance roughly equals the income tax left behind &mdash; common in South Florida
            and Tampa&rsquo;s premium districts. Reconsider: modest earners buying maximum house
            with minimum down in hurricane zones, where insurance plus taxes can exceed 3 percent
            of value yearly. Whatever your bracket, model five years &mdash; Save Our Homes
            rewards stayers while insurance reprices annually. Cross-check with our{" "}
            <Link href="/texas-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Texas
            </Link>
            ,{" "}
            <Link href="/washington-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Washington
            </Link>
            , and{" "}
            <Link href="/new-york-income-tax-calculator" className="text-amber-200 underline underline-offset-2">
              New York
            </Link>{" "}
            guides before deciding.
          </p>
        </section>

        <GuideInArticleAds />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is there really zero Florida income tax?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes for individuals — wages, pensions, Social Security, and investment income all face 0%. Corporations separately pay 5.5%.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How do I prove Florida domicile?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">File a Declaration of Domicile, get a Florida license and plates within 30 days, register to vote, and spend 183+ days in-state.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is Save Our Homes?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">A cap limiting homestead assessed-value growth to 3% or CPI yearly — the longer you stay, the bigger the discount vs. market value.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does Florida tax my 401(k) withdrawals?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. Withdrawals face only federal tax, which is why Florida hosts so many retirees drawing down large accounts.</p>
            </details>
          </div>
        </section>

        <GuideBottomAds />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Insurance and property figures are 2026
            statewide approximations; counties vary widely. Read our full{" "}
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
