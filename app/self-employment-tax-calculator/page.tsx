import type { Metadata } from "next";
import Link from "next/link";
import SelfEmploymentCalculator from "./calculator";
import {
  CalculatorAnchorAds,
  CalculatorInArticleAds,
  CalculatorSidebarAds,
} from "../../components/CalculatorAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "Self-Employment Tax Calculator 2026 (15.3%) | LoanPay Tax",
  description:
    "Estimate 2026 self-employment tax: 12.4% Social Security to $184,500, 2.9% Medicare, 0.9% surtax, half-SE deduction, and quarterly payment setup.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/self-employment-tax-calculator",
  },
};

export default function SelfEmploymentPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Self-Employment Tax Calculator 2026 (15.3%) | LoanPay Tax" description="Estimate 2026 self-employment tax: 12.4% Social Security to $184,500, 2.9% Medicare, 0.9% surtax, half-SE deduction, and quarterly payment setup." url="https://tax.loanpaylogic.com/self-employment-tax-calculator" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Schedule SE &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Self-Employment Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Freelancers pay both halves of Social Security and Medicare &mdash; 15.3 percent before
          income tax even starts. Estimate your 2026 SE tax below, then learn the deductions and
          quarterly rhythm that keep it manageable.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <SelfEmploymentCalculator />
          <CalculatorInArticleAds />
        </div>
        <CalculatorSidebarAds />
      </div>
      <CalculatorAnchorAds />

      <article className="mx-auto mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Self-employment tax checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Confirm you owe Schedule SE: $400+ in 2026 net earnings triggers the tax.</li>
            <li>Apply the 92.35% factor first: only that share of profit faces Social Security and Medicare.</li>
            <li>Charge 12.4% Social Security to $184,500 of combined wages and SE income, plus 2.9% Medicare on everything.</li>
            <li>Deduct half your SE tax from income tax and track Schedule C expenses all year.</li>
            <li>Pay quarterly on April 15, June 15, September 15, 2026, and January 15, 2027, or cover the gap with W-2 withholding.</li>
            <li>Revisit S-election, retirement plans, and the 20% pass-through deduction once profit passes roughly $60,000.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Why freelancers pay 15.3%</h2>
          <p className="mt-3">
            Employees split payroll tax with their employer: 6.2 percent Social Security plus 1.45
            percent Medicare from the worker, matched by the boss. The self-employed are both
            parties, so Schedule SE charges the combined 12.4 percent Social Security on the
            first $184,500 of combined wages and 92.35 percent of profit, plus 2.9 percent
            Medicare on everything &mdash; 15.3 percent total &mdash; with an extra 0.9 percent
            Additional Medicare Tax on earnings above $200,000 single ($250,000 joint, $125,000
            married-separate). Two cushions soften the blow: only 92.35 percent of profit is
            taxable (the rough equivalent of the employer&apos;s half), and half the SE tax
            deducts from income tax on Form 1040. A $75,000 profit thus incurs about $10,600 of
            SE tax, of which roughly $5,300 shelters income tax at your marginal rate &mdash; a
            real saving worth several hundred to over a thousand dollars depending on your bracket.
          </p>
          <p className="mt-3">
            A concrete walkthrough helps. Take a freelance designer with $80,000 of net profit
            and no W-2 wages. Taxable SE base equals $80,000 times 92.35 percent, or about
            $73,880. Social Security takes 12.4 percent of that base (roughly $9,161), Medicare
            takes 2.9 percent (roughly $2,143), for a combined bill near $11,304 before income tax
            even begins. That same designer then deducts about $5,652 from income tax, so at a 22
            percent marginal rate the income-tax saving is roughly $1,243. High earners face a
            second layer: once combined wages plus SE income pass $200,000 single or $250,000
            joint, the extra 0.9 percent Medicare surtax applies to the excess, and unlike the
            base 15.3 percent it has no wage-base cap. Model your full stack with our{" "}
            <Link href="/federal-income-tax-calculator-2026" className="text-amber-200 underline underline-offset-2">
              2026 federal income tax calculator
            </Link>
            , because SE tax and income tax interact through that half-SE deduction.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                SE tax components at sample 2026 profits (no W-2 wages).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Profit</th>
                  <th className="px-4 py-3 font-semibold">Social Security 12.4%</th>
                  <th className="px-4 py-3 font-semibold">Medicare 2.9%</th>
                  <th className="px-4 py-3 font-semibold">Total SE tax</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$40,000</td><td className="px-4 py-2">$4,580</td><td className="px-4 py-2">$1,071</td><td className="px-4 py-2">$5,651</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$75,000</td><td className="px-4 py-2">$8,588</td><td className="px-4 py-2">$2,009</td><td className="px-4 py-2">$10,597</td></tr>
                <tr><td className="px-4 py-2">$200,000</td><td className="px-4 py-2">$22,902</td><td className="px-4 py-2">$5,357</td><td className="px-4 py-2">$28,259</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Who owes it and who escapes</h2>
          <p className="mt-3">
            Net earnings of $400+ trigger Schedule SE &mdash; below that, nothing is owed, though
            you may still file Schedule C to claim a loss or preserve records. Sole proprietors,
            single-member LLCs taxed as disregarded entities, multi-member LLC members, partners,
            and gig workers all pay; S-corporation owners pay only on their W-2 salary
            (distributions escape SE tax, the famous S-election trade), while C-corp employees
            never see it because the corporation handles payroll tax at the entity level.
          </p>
          <p className="mt-3">
            W-2 wages consume the $184,500 Social Security base first: $100,000 of wages plus
            $100,000 of profit means only $84,500 of profit faces the 12.4 percent piece
            (Medicare still hits all of it), so side hustlers with strong day jobs often owe less
            SE tax per freelance dollar than full-time freelancers. Ministers, members of certain
            recognized religious sects, and nonresident aliens have special exemptions via Forms
            4361 and 4029 &mdash; niche but valuable for those who qualify. If you are unsure
            whether a gig counts as employment or contracting, compare the two tax stacks with our{" "}
            <Link href="/w2-vs-1099-calculator" className="text-amber-200 underline underline-offset-2">
              W-2 vs. 1099 calculator
            </Link>
            {" "}before you sign the offer letter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">S-corporation math: when the election pays</h2>
          <p className="mt-3">
            The S-election does not erase tax; it re-labels it. As an LLC taxed as a sole
            proprietorship, every profit dollar faces SE tax. As an S-corporation, you must pay
            yourself reasonable W-2 salary &mdash; which faces Social Security and Medicare just
            like any wage &mdash; but remaining distributions escape SE tax entirely. The trade is
            payroll filings, a separate return on Form 1120-S, bookkeeping discipline, and often
            $1,500 to $3,000 a year in payroll and tax-prep costs. A rough rule: below about
            $60,000 to $80,000 of steady profit the extra admin rarely pays, while at $120,000 of
            profit with an $80,000 reasonable salary, roughly $40,000 escapes the 15.3 percent
            charge for a gross SE saving near $5,600 before payroll costs. The IRS watches
            unreasonably low salaries closely, so document comparables, hours, and duties, and
            keep distributions proportional and clean. Partnerships, multi-owner LLCs, and owners
            planning venture funding face different constraints, so treat this as a multi-year
            commitment rather than a December scramble.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Deductions that shrink both taxes</h2>
          <p className="mt-3">
            Every ordinary-and-necessary business expense on Schedule C lowers profit before
            either tax computes: software, supplies, mileage (70 cents per mile for 2026;
            confirm IRS notice), home office, business insurance, phone and internet portions,
            professional fees, and advertising. Health premiums for the self-employed are deducted
            on Form 1040 rather than Schedule C, half the SE tax itself deducts there too, and
            retirement contributions to a SEP-IRA or Solo 401(k) (up to $72,000 for 2026 SEP
            contributions, within compensation limits) cut income tax while building the asset
            base that eventually replaces client income. The 20 percent qualified-business-income
            deduction &mdash; now permanent &mdash; cuts income tax (not SE tax) for eligible
            pass-throughs under the phase-out thresholds, which makes entity choice and wage
            levels matter twice: high W-2 wages inside an S-corporation can support a larger QBI
            computation even as they increase payroll tax.
          </p>
          <p className="mt-3">
            Track expenses in a separate account from day one; reconstructed shoeboxes lose
            deductions at audit, and commingled cards turn every review into guesswork. Keep
            mileage logs contemporaneous, photograph receipts for equipment, and reconcile
            quarterly so estimated vouchers reflect real margins rather than stale guesses. Pair
            this page with our{" "}
            <Link href="/home-office-deduction-calculator" className="text-amber-200 underline underline-offset-2">
              home-office calculator
            </Link>
            , our{" "}
            <Link href="/sep-ira-vs-solo-401k-tax" className="text-amber-200 underline underline-offset-2">
              SEP vs. Solo 401(k) guide
            </Link>
            , and our{" "}
            <Link href="/freelancer-quarterly-tax-guide" className="text-amber-200 underline underline-offset-2">
              freelancer quarterly tax guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Paying quarterly without pain</h2>
          <p className="mt-3">
            SE tax joins income tax in quarterly vouchers (April 15, June 15, September 15, 2026;
            January 15, 2027) via Form 1040-ES, or through extra W-2 withholding if you hold a
            day job &mdash; withholding counts as paid evenly all year, which makes a late-year
            W-4 bump a legitimate catch-up tool. The 25&ndash;30 percent rule of thumb &mdash;
            transfer that share of each client payment to a separate tax account the day it
            lands &mdash; prevents the classic April shortfall, and our{" "}
            <Link href="/quarterly-estimated-tax-calculator" className="text-amber-200 underline underline-offset-2">
              quarterly calculator
            </Link>{" "}
            sizes each voucher precisely from real profit, withholding, and safe-harbor targets.
            Miss the $1,000-owed threshold or a safe harbor (90 percent of current-year tax, or
            100 percent of prior-year tax &mdash; 110 percent at higher incomes) and underpayment
            penalties accrue per quarter at the federal rate, so start vouchers with the first
            profitable quarter rather than waiting for year-end. Uneven income can use the
            annualized-installment method on Form 2210 to match payments to actual cash timing,
            which helps seasonal freelancers and creators with one big launch quarter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Related calculators for freelancers</h2>
          <p className="mt-3">
            SE tax is only one slice of the freelance stack. Size income tax with our{" "}
            <Link href="/federal-income-tax-calculator-2026" className="text-amber-200 underline underline-offset-2">
              2026 federal income tax calculator
            </Link>
            , tune vouchers with our{" "}
            <Link href="/quarterly-estimated-tax-calculator" className="text-amber-200 underline underline-offset-2">
              quarterly estimated tax planner
            </Link>
            , and sanity-check job offers with our{" "}
            <Link href="/w2-vs-1099-calculator" className="text-amber-200 underline underline-offset-2">
              W-2 vs. 1099 comparison
            </Link>
            . Retirement savers should also run the{" "}
            <Link href="/sep-ira-vs-solo-401k-tax" className="text-amber-200 underline underline-offset-2">
              SEP vs. Solo 401(k) guide
            </Link>{" "}
            before year-end, because the plan you fund changes both income tax and cash flow.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is SE tax on gross or net income?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Net profit after business expenses, multiplied by 92.35% — every legitimate deduction lowers SE tax directly.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I owe SE tax with a full-time job too?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes on freelance profit — wages use up the $184,500 Social Security base first, so side income mostly faces the 12.4% piece only below the cap.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does an S-corp eliminate SE tax?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Only on distributions — owners still owe payroll tax on reasonable W-2 salary. Below ~$60–80K profit the extra admin rarely pays.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What if I lose money?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No SE tax on a net loss — and the loss can offset other income (within limits), cutting income tax too. Keep filing Schedule C so the loss is documented and carryover rules apply cleanly.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How do quarterly penalties work for SE tax?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">SE tax rides inside estimated tax: owe $1,000+ beyond withholding without hitting a safe harbor and penalties accrue per quarter. Start vouchers in your first profitable quarter or raise W-2 withholding to stay covered.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does the half-SE deduction really save income tax?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes — half your SE tax deducts from income tax on Form 1040 even if you take the standard deduction. At a 22% marginal rate, a $10,600 SE bill shelters about $5,300 of income and saves roughly $1,166.</p>
            </details>
          </div>
        </section>

        <nav aria-label="Related guides">
          <h2 className="text-xl font-bold text-white">Related guides</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/quarterly-estimated-tax-calculator" className="font-semibold text-amber-200 underline underline-offset-2">
                Quarterly Estimated Tax Planner
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Turn your SE bill into four on-time payments.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/w2-vs-1099-calculator" className="font-semibold text-amber-200 underline underline-offset-2">
                W-2 vs. 1099 Comparison
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Compare employee vs. contractor take-home before you switch.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/sep-ira-vs-solo-401k-tax" className="font-semibold text-amber-200 underline underline-offset-2">
                SEP vs. Solo 401(k) Guide
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Shelter self-employment income in the right retirement plan.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/freelancer-quarterly-tax-guide" className="font-semibold text-amber-200 underline underline-offset-2">
                Freelancer Quarterly Tax Guide
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Deadlines, safe harbors, and record-keeping for freelancers.</p>
            </li>
          </ul>
        </nav>

        <section>
          <h2 className="text-xl font-bold text-white">Official sources</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                IRS Self-Employment Tax (Social Security and Medicare Taxes)
              </a>
            </li>
            <li>
              <a href="https://www.irs.gov/forms-pubs/about-schedule-se-form-1040" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                IRS About Schedule SE (Form 1040), Self-Employment Tax
              </a>
            </li>
            <li>
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                IRS Estimated Taxes (Form 1040-ES)
              </a>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. SE figures follow 2026 SSA and IRS
            publications. Read our full{" "}
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
