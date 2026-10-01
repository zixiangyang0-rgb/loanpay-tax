import type { Metadata } from "next";
import Link from "next/link";
import { GuideBottomAds, GuideInArticleAds, GuideTopAds } from "../../components/GuideAds";
import { ArticleJsonLd, Byline, FaqJsonLd } from "../../components/schema";

const FAQS = [
  {
    question: "What are the 2026 federal tax rates?",
    answer:
      "Seven rates: 10, 12, 22, 24, 32, 35, and 37 percent, each applying only to income inside its band.",
  },
  {
    question: "Where does the 37% rate start in 2026?",
    answer:
      "At $640,600 of taxable income single ($384,350 separate), $768,700 joint, and $640,600 head of household.",
  },
  {
    question: "Do brackets apply to gross or taxable income?",
    answer:
      "Taxable income — gross income minus adjustments and then the standard or itemized deduction. Subtract first, then read the table.",
  },
  {
    question: "Should I compare brackets or effective rates?",
    answer:
      "Effective rates (total tax ÷ gross income) for comparing burdens; marginal rates for judging the next dollar of earnings or deductions.",
  },
];

export const metadata: Metadata = {
  title: "Federal Tax Brackets 2026: Full Tables & Examples | LoanPay Tax",
  description:
    "Every 2026 federal tax bracket for single, joint, and head-of-household filers, with marginal-rate math, bracket-creep explainers, and worked examples.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/federal-tax-brackets-2026",
  },
};

const CHECKLIST = [
  "Find your filing status (single, joint, head of household) — it picks your table.",
  "Subtract the 2026 standard deduction ($16,100 / $32,200 / $24,150) or itemized total from AGI.",
  "Read down the bracket table to your taxable income; your top band is your marginal rate.",
  "Multiply each band separately and add — that sum is your pre-credit tax.",
  "Subtract credits (child, education, withholding already paid) to get refund or balance due.",
  "Compare your effective rate (tax ÷ gross income) year over year, not just your bracket.",
];

export default function FederalBracketsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd
        title="Federal Tax Brackets 2026: Full Tables & Examples | LoanPay Tax"
        description="Every 2026 federal tax bracket for single, joint, and head-of-household filers, with marginal-rate math, bracket-creep explainers, and worked examples."
        url="https://tax.loanpaylogic.com/federal-tax-brackets-2026"
      />
      <FaqJsonLd faqs={FAQS} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          2026 tax year &middot; IRS Rev. Proc. 2025-32
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Federal Tax Brackets 2026
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The complete 2026 rate tables for every filing status, translated into plain English
          with layered-math examples. Learn which bracket you are really in, why raises are always
          worth it, and how inflation adjustments protect part of each paycheck.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <GuideTopAds />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Read-your-bracket checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Want the math done for you? Try the{" "}
            <Link href="/federal-income-tax-calculator-2026" className="text-amber-200 underline underline-offset-2">
              2026 federal income tax calculator
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The 2026 rate structure at a glance</h2>
          <p className="mt-3">
            Congress kept seven marginal rates for 2026 &mdash; 10, 12, 22, 24, 32, 35, and 37
            percent &mdash; and the One, Big, Beautiful Bill made them permanent, removing the
            sunset that would have restored higher pre-2018 rates. The IRS then lifted the income
            thresholds by roughly 2 to 4 percent to match inflation. The top 37 percent rate now
            starts at $640,600 of taxable income for single filers ($768,700 joint), while the
            bottom 10 percent band covers the first $12,400 single ($24,800 joint). Because only
            income inside each band faces that band&rsquo;s rate, the system is progressive by
            design: higher earners pay higher average rates, but everyone&rsquo;s first dollars
            are taxed at the lowest rates.
          </p>
          <p className="mt-3">
            Bracket thresholds apply to taxable income, not gross pay. A single worker earning
            $66,100 who claims the $16,100 standard deduction has $50,000 of taxable income and
            sits at the top of the 12 percent band &mdash; even though $66,100 sounds like
            22-percent territory. Always subtract deductions first, then read the table. Filing
            status matters just as much: joint thresholds are exactly double the single thresholds
            through the 24 percent band, and heads of household get wider low bands than single
            filers, reflecting the policy goal of lighter taxation on single parents.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Single filers: full 2026 table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Single and married filing separately, tax year 2026.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Taxable income</th>
                  <th className="px-4 py-3 font-semibold">Rate</th>
                  <th className="px-4 py-3 font-semibold">Tax on the band</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$0 &ndash; $12,400</td><td className="px-4 py-2">10%</td><td className="px-4 py-2">Up to $1,240</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$12,401 &ndash; $50,400</td><td className="px-4 py-2">12%</td><td className="px-4 py-2">Up to $4,560</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$50,401 &ndash; $105,700</td><td className="px-4 py-2">22%</td><td className="px-4 py-2">Up to $12,166</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$105,701 &ndash; $201,775</td><td className="px-4 py-2">24%</td><td className="px-4 py-2">Up to $23,058</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$201,776 &ndash; $256,225</td><td className="px-4 py-2">32%</td><td className="px-4 py-2">Up to $17,424</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$256,226 &ndash; $640,600</td><td className="px-4 py-2">35%</td><td className="px-4 py-2">Up to $134,531</td></tr>
                <tr><td className="px-4 py-2">Over $640,600</td><td className="px-4 py-2">37%</td><td className="px-4 py-2">&mdash;</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Joint filers and heads of household</h2>
          <p className="mt-3">
            Married couples filing jointly use thresholds that double the single bands at the
            bottom: 10 percent to $24,800, 12 percent to $100,800, 22 percent to $211,400, and 24
            percent to $403,550, then $512,450 at 32 percent, $768,700 at 35 percent, and 37
            percent above. Heads of household &mdash; generally unmarried filers supporting a
            qualifying child or relative &mdash; sit between: 10 percent to $17,700, 12 percent to
            $67,450, 22 percent to $105,700, 24 percent to $201,750, 32 percent to $256,200, 35
            percent to $640,600, and 37 percent above. Married filing separately follows the single
            schedule, with the 37 percent rate starting at $384,350. Choosing the right status is
            free money when you qualify: head of household beats single at every income level, and
            joint filing usually beats two single returns because of the wider bands.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Where each top rate begins, 2026 taxable income.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Rate</th>
                  <th className="px-4 py-3 font-semibold">Single</th>
                  <th className="px-4 py-3 font-semibold">Joint</th>
                  <th className="px-4 py-3 font-semibold">Head of household</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">22%</td><td className="px-4 py-2">$50,401</td><td className="px-4 py-2">$100,801</td><td className="px-4 py-2">$67,451</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">24%</td><td className="px-4 py-2">$105,701</td><td className="px-4 py-2">$211,401</td><td className="px-4 py-2">$105,701</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">32%</td><td className="px-4 py-2">$201,776</td><td className="px-4 py-2">$403,551</td><td className="px-4 py-2">$201,751</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">35%</td><td className="px-4 py-2">$256,226</td><td className="px-4 py-2">$512,451</td><td className="px-4 py-2">$256,201</td></tr>
                <tr><td className="px-4 py-2">37%</td><td className="px-4 py-2">$640,601</td><td className="px-4 py-2">$768,701</td><td className="px-4 py-2">$640,601</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Bracket creep: the quiet raise protector</h2>
          <p className="mt-3">
            Without annual inflation adjustments, a cost-of-living raise could push you into a
            higher band even though your purchasing power never grew &mdash; economists call this
            bracket creep. The 2026 adjustments (about 4 percent at the bottom, 2 percent at the
            top) cancel most of that effect. A single filer whose taxable income rose from $49,000
            in 2025 to $51,000 in 2026 still crosses into the 22 percent band, but only $600 of the
            raise faces 22 percent; the rest was already taxed at 12 percent either way. The
            standard deduction rose too ($15,750 to $16,100 single), so gross pay can grow about
            $3,000 to $4,000 before taxable income even moves. When you hear that thresholds went
            up, translate it as: the tax code gave everyone a small automatic tax cut.
          </p>
        </section>

        <GuideInArticleAds />

        <section>
          <h2 className="text-xl font-bold text-white">Three worked examples across the schedule</h2>
          <p className="mt-3">
            Example one: a single filer with $40,000 of taxable income owes $1,240 on the first
            band plus 12 percent of $27,600, totaling $4,552 &mdash; an 11.4 percent effective
            rate. Example two: a head of household with $100,000 of taxable income owes roughly
            $16,489: $1,770 at 10 percent, $5,970 at 12 percent, and $8,749 at 22 percent on the
            final stretch. Example three: a joint couple with $300,000 of taxable income owes
            about $62,087 across four bands, yet their effective rate is only 20.7 percent even
            though their marginal rate is 24 percent. Each case shows the same lesson from a
            different angle: the marginal rate describes the next dollar, while the effective
            rate &mdash; always lower &mdash; describes the whole return.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Common bracket myths that cost people money</h2>
          <p className="mt-3">
            The most expensive myth is turning down overtime or a bonus to &ldquo;avoid the next
            bracket.&rdquo; Because only new dollars face the new rate, extra earnings always
            raise after-tax income. A related myth confuses withholding with tax: seeing 22
            percent withheld on a bonus does not mean the bonus is taxed at 22 percent; it is
            layered like everything else at filing time. A third myth treats the standard
            deduction as fixed &mdash; it grows yearly and jumps at 65 &mdash; so re-check
            itemizing every year instead of assuming last year&rsquo;s answer. Finally, remember
            that capital gains and qualified dividends use their own 0 / 15 / 20 percent schedule
            (see our{" "}
            <Link href="/capital-gains-tax-calculator-2026" className="text-amber-200 underline underline-offset-2">
              capital-gains guide
            </Link>
            ), stacked on top of ordinary income rather than replacing these tables.
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

        <GuideBottomAds />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Bracket figures follow IRS Revenue Procedure
            2025-32 for tax year 2026. Read our full{" "}
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
