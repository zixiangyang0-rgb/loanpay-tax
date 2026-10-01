import type { Metadata } from "next";
import Link from "next/link";
import FederalTaxCalculator from "./calculator";
import {
  CalculatorAnchorAds,
  CalculatorInArticleAds,
  CalculatorSidebarAds,
} from "../../components/CalculatorAds";
import { ArticleJsonLd, Byline, FaqJsonLd } from "../../components/schema";

const FAQS = [
  {
    question: "Do higher brackets tax all my income more?",
    answer:
      "No. Only the dollars inside each new layer face the higher rate. A raise can never reduce after-tax pay through brackets alone.",
  },
  {
    question: "What is the 2026 standard deduction?",
    answer:
      " $16,100 single or married filing separately, $32,200 married filing jointly, and $24,150 head of household, plus extra amounts for age 65+, blindness, and the temporary senior bonus.",
  },
  {
    question: "Why does my bonus withholding look wrong?",
    answer:
      "Bonuses are withheld at a flat 22 percent (up to $1 million), which rarely matches your layered marginal rate. Your return corrects the difference.",
  },
  {
    question: "Is this calculator my official tax bill?",
    answer:
      "No. It is a simplified educational estimate that omits credits, AMT, investment surtaxes, and state tax. Use IRS forms or software for the official figure.",
  },
];

export const metadata: Metadata = {
  title: "Federal Income Tax Calculator 2026 | LoanPay Tax",
  description:
    "Estimate your 2026 federal income tax with current IRS brackets, standard deductions of $16,100 single / $32,200 joint, and marginal vs effective rate explainers.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/federal-income-tax-calculator-2026",
  },
};

export default function FederalIncomeTaxCalculatorPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-8">
      <ArticleJsonLd
        title="Federal Income Tax Calculator 2026 | LoanPay Tax"
        description="Estimate your 2026 federal income tax with current IRS brackets, standard deductions of $16,100 single / $32,200 joint, and marginal vs effective rate explainers."
        url="https://tax.loanpaylogic.com/federal-income-tax-calculator-2026"
      />
      <FaqJsonLd faqs={FAQS} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          2026 tax year &middot; filed in 2027
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Federal Income Tax Calculator 2026
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Preview what the IRS would expect from your 2026 earnings before you file. This guide
          pairs a live estimator with the official 2026 brackets, standard deductions, and worked
          examples, so a pay stub stops feeling like a mystery and starts looking like a plan.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <FederalTaxCalculator />
          <CalculatorInArticleAds />
        </div>
        <CalculatorSidebarAds />
      </div>
      <CalculatorAnchorAds />

      <article className="mx-auto mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">How federal income tax actually works</h2>
          <p className="mt-3">
            The United States taxes individual income in layers called brackets. Seven rates apply
            in 2026 &mdash; 10, 12, 22, 24, 32, 35, and 37 percent &mdash; and each rate touches
            only the slice of taxable income that falls inside its layer. When someone says they
            are &ldquo;in the 22 percent bracket,&rdquo; they mean their last dollar is taxed at 22
            percent, not every dollar. A single filer earning $60,000 of taxable income in 2026
            pays 10 percent on the first $12,400, 12 percent on the next chunk up to $50,400, and
            22 percent only on the final $9,600. That layering is why two households with the same
            bracket can owe noticeably different amounts, and why raises never make you poorer:
            only the dollars above each threshold face the higher rate.
          </p>
          <p className="mt-3">
            Taxable income is the number the brackets apply to, and it is smaller than your salary.
            Start with gross income &mdash; wages, freelance profit, interest, and most other
            inflows &mdash; then subtract adjustments such as pre-tax retirement contributions and
            student-loan interest to reach adjusted gross income (AGI). From AGI you subtract
            either the standard deduction or your itemized deductions. The remainder is taxable
            income. Credits then reduce the tax itself dollar for dollar, which makes a $1,000
            credit more powerful than a $1,000 deduction. The estimator above follows this exact
            chain with the simplifying assumption that you take the standard deduction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">2026 federal tax brackets (IRS Rev. Proc. 2025-32)</h2>
          <p className="mt-3">
            The IRS inflation-adjusts bracket thresholds every fall. For income earned in 2026 and
            reported on returns filed in 2027, the thresholds below apply. They reflect the One,
            Big, Beautiful Bill, which kept the seven-rate structure permanent instead of letting
            rates snap back to pre-2018 levels. Thresholds rose roughly 2 to 4 percent from 2025,
            which quietly shields part of each raise from bracket creep.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[560px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2026 marginal rates by taxable income (wages after deductions, before credits).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Rate</th>
                  <th className="px-4 py-3 font-semibold">Single</th>
                  <th className="px-4 py-3 font-semibold">Married filing jointly</th>
                  <th className="px-4 py-3 font-semibold">Head of household</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">10%</td><td className="px-4 py-2">$0 &ndash; $12,400</td><td className="px-4 py-2">$0 &ndash; $24,800</td><td className="px-4 py-2">$0 &ndash; $17,700</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">12%</td><td className="px-4 py-2">$12,401 &ndash; $50,400</td><td className="px-4 py-2">$24,801 &ndash; $100,800</td><td className="px-4 py-2">$17,701 &ndash; $67,450</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">22%</td><td className="px-4 py-2">$50,401 &ndash; $105,700</td><td className="px-4 py-2">$100,801 &ndash; $211,400</td><td className="px-4 py-2">$67,451 &ndash; $105,700</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">24%</td><td className="px-4 py-2">$105,701 &ndash; $201,775</td><td className="px-4 py-2">$211,401 &ndash; $403,550</td><td className="px-4 py-2">$105,701 &ndash; $201,750</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">32%</td><td className="px-4 py-2">$201,776 &ndash; $256,225</td><td className="px-4 py-2">$403,551 &ndash; $512,450</td><td className="px-4 py-2">$201,751 &ndash; $256,200</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">35%</td><td className="px-4 py-2">$256,226 &ndash; $640,600</td><td className="px-4 py-2">$512,451 &ndash; $768,700</td><td className="px-4 py-2">$256,201 &ndash; $640,600</td></tr>
                <tr><td className="px-4 py-2">37%</td><td className="px-4 py-2">Over $640,600</td><td className="px-4 py-2">Over $768,700</td><td className="px-4 py-2">Over $640,600</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">2026 standard deductions</h2>
          <p className="mt-3">
            Most filers take the standard deduction rather than itemizing. For 2026 the basic
            amounts are $16,100 for single filers and married couples filing separately, $32,200
            for joint returns and surviving spouses, and $24,150 for heads of household. Filers
            who are 65 or older or blind add $2,000 if unmarried (or a surviving spouse) or $1,600
            per qualifying spouse on a joint return. A separate temporary senior bonus of up to
            $6,000 per eligible individual ($12,000 joint) applies for 2025 through 2028 and
            phases out above $75,000 of modified AGI ($150,000 joint). Our calculator uses the
            basic amounts; add any extra deduction you expect in the third input box.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Basic 2026 standard deduction vs. 2025 (after the One, Big, Beautiful Bill).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Filing status</th>
                  <th className="px-4 py-3 font-semibold">2025</th>
                  <th className="px-4 py-3 font-semibold">2026</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Single / separate</td><td className="px-4 py-2">$15,750</td><td className="px-4 py-2">$16,100</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Married filing jointly</td><td className="px-4 py-2">$31,500</td><td className="px-4 py-2">$32,200</td></tr>
                <tr><td className="px-4 py-2">Head of household</td><td className="px-4 py-2">$23,625</td><td className="px-4 py-2">$24,150</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: single filer at $85,000</h2>
          <p className="mt-3">
            Take a single employee earning $85,000 with no other adjustments who claims the
            standard deduction. Taxable income is $85,000 minus $16,100, or $68,900. The 2026 math
            runs layer by layer: 10 percent of $12,400 is $1,240; 12 percent of the $38,000 band
            from $12,400 to $50,400 is $4,560; and 22 percent of the remaining $18,500 is $4,070.
            Total tax is about $9,870 before credits, an effective rate near 11.6 percent of gross
            pay even though the filer&rsquo;s marginal rate is 22 percent. That gap between the
            marginal and effective rate surprises almost everyone the first time they see it, and
            it explains why comparing effective rates &mdash; not brackets &mdash; is the honest
            way to compare paychecks, offers, or states.
          </p>
          <p className="mt-3">
            Now change one input: a married couple earning $150,000 jointly with the $32,200
            deduction has $117,800 of taxable income. Their bill is roughly $17,276 &mdash; $2,480
            at 10 percent plus $9,120 at 12 percent plus about $5,676 at 22 percent &mdash; an
            effective rate near 11.5 percent. Try both cases in the estimator, then add your own
            pre-tax 401(k) contributions to the extra-deduction box to watch each $1,000 of
            contributions save $120 to $240 depending on your top layer.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Marginal vs. effective rate, and why bonuses feel different</h2>
          <p className="mt-3">
            Employers withhold a flat 22 percent on supplemental wages such as bonuses up to $1
            million (37 percent above that), which often differs from your true marginal rate.
            That mismatch is the main reason bonuses can feel over- or under-taxed in April: the
            withholding was a rough prepayment, and the return settles the difference at your real
            layered rate. Similarly, overtime and tips keep their normal tax treatment for
            withholding in 2026, with separate temporary deductions &mdash; up to $25,000 for
            qualified tips and up to $12,500 single / $25,000 joint for qualified overtime &mdash;
            claimed on the return rather than in each paycheck. Keep pay stubs and the last pay
            statement of the year, because reconciling them against your W-2 is the fastest way to
            catch a withholding error while there is still time to file a corrected W-4.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Deductions, credits, and what the estimator leaves out</h2>
          <p className="mt-3">
            The estimator deliberately ignores credits, the alternative minimum tax, the 3.8
            percent net investment income tax, and state taxes, because each depends on details a
            three-input tool cannot see. In real life, the child tax credit, earned income credit,
            education credits, and the $1,000 single / $2,000 joint charitable deduction for
            non-itemizers (new and permanent) can cut the final bill substantially. Itemizers
            compare their mortgage interest, state and local taxes up to the 2026 cap of $40,400,
            charitable gifts above 0.5 percent of AGI, and medical costs above 7.5 percent of AGI
            against the standard amounts above. If your itemized total beats the standard
            deduction, use it instead &mdash; our{" "}
            <Link href="/standard-deduction-vs-itemized-2026" className="text-amber-200 underline underline-offset-2">
              standard deduction vs. itemized guide
            </Link>{" "}
            walks through that choice with numbers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Using your estimate: W-4, quarterly payments, next steps</h2>
          <p className="mt-3">
            An estimate is only useful if it changes a decision. Employees who expect a large
            refund are giving the IRS an interest-free loan and can file a new{" "}
            <Link href="/w4-withholding-calculator" className="text-amber-200 underline underline-offset-2">
              Form W-4
            </Link>{" "}
            to keep more per paycheck; workers who expect to owe should check whether they face an
            underpayment penalty and either raise withholding or make{" "}
            <Link href="/quarterly-estimated-tax-calculator" className="text-amber-200 underline underline-offset-2">
              quarterly estimated payments
            </Link>
            . Freelancers can jump to the{" "}
            <Link href="/self-employment-tax-calculator" className="text-amber-200 underline underline-offset-2">
              self-employment tax calculator
            </Link>
            , investors to the{" "}
            <Link href="/capital-gains-tax-calculator-2026" className="text-amber-200 underline underline-offset-2">
              capital-gains estimator
            </Link>
            , and movers to the state calculators linked on the homepage. Whatever you decide,
            revisit the math after any raise, move, marriage, new child, or side-income change,
            because each of those rewrites your taxable income or filing status.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-white/10 bg-white/[0.02] p-4"
              >
                <summary className="cursor-pointer font-semibold text-white">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Figures reflect IRS Revenue Procedure
            2025-32 for tax year 2026 (returns filed in 2027). Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and confirm filing decisions with the IRS or a licensed tax professional.
          </p>
        </section>
      </article>
    </div>
  );
}
