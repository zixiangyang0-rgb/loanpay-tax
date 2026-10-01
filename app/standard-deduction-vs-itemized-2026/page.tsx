import type { Metadata } from "next";
import Link from "next/link";
import { GuideBottomAds, GuideInArticleAds, GuideTopAds } from "../../components/GuideAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "Standard Deduction vs. Itemized 2026: Which Wins? | LoanPay Tax",
  description:
    "Compare the 2026 standard deduction ($16,100 single, $32,200 joint) against itemizing SALT, mortgage interest, charity, and medical costs — with a decision checklist.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/standard-deduction-vs-itemized-2026",
  },
};

const CHECKLIST = [
  "Add mortgage interest (loans up to $750,000) from Form 1098.",
  "Add state and local taxes paid, capped at $40,400 for 2026.",
  "Add cash gifts above 0.5% of AGI plus non-cash gifts with receipts.",
  "Add medical costs above 7.5% of AGI and investment interest.",
  "Compare the total with your 2026 standard amount ($16,100 / $32,200 / $24,150).",
  "Take whichever is larger — and re-check yearly, since the answer changes.",
];

export default function StandardVsItemizedPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Standard Deduction vs. Itemized 2026: Which Wins? | LoanPay Tax" description="Compare the 2026 standard deduction ($16,100 single, $32,200 joint) against itemizing SALT, mortgage interest, charity, and medical costs — with a decision checklist." url="https://tax.loanpaylogic.com/standard-deduction-vs-itemized-2026" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          deduction guide &middot; 2026 tax year
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Standard Deduction vs. Itemized 2026
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Nine in ten filers take the standard deduction &mdash; but homeowners, generous givers,
          and high-tax-state residents often win by itemizing. Here is how to run the comparison
          in fifteen minutes with 2026 figures.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <GuideTopAds />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Itemizing decision checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The 2026 standard amounts</h2>
          <p className="mt-3">
            The standard deduction is a no-receipts subtraction from AGI: $16,100 for single and
            separate filers, $32,200 for joint returns and surviving spouses, and $24,150 for
            heads of household. Age 65 or blindness adds $2,000 for unmarried filers or $1,600 per
            qualifying spouse, and a temporary senior bonus of up to $6,000 per person ($12,000
            joint, phasing out above $75,000 / $150,000 MAGI) runs through 2028. Because these
            amounts are generous, itemizing only pays when your qualifying expenses clear the bar
            &mdash; roughly $1,342 a month of deductible spending for a single filer, or $2,684
            for a couple. Everyone else should take the standard amount and skip Schedule A
            entirely.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2026 standard deduction by filing status.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Filing status</th>
                  <th className="px-4 py-3 font-semibold">Basic amount</th>
                  <th className="px-4 py-3 font-semibold">65+/blind adder</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Single / separate</td><td className="px-4 py-2">$16,100</td><td className="px-4 py-2">+$2,000 unmarried</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Married filing jointly</td><td className="px-4 py-2">$32,200</td><td className="px-4 py-2">+$1,600 per spouse</td></tr>
                <tr><td className="px-4 py-2">Head of household</td><td className="px-4 py-2">$24,150</td><td className="px-4 py-2">+$2,000 unmarried</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What counts when you itemize</h2>
          <p className="mt-3">
            Schedule A accepts four big categories. First, home mortgage interest on up to
            $750,000 of acquisition debt ($375,000 if married filing separately), reported by
            your lender. Second, state and local taxes &mdash; income or sales tax plus property
            tax &mdash; now capped at $40,400 for 2026 (up from $10,000, rising 1 percent yearly
            through 2029, and phasing out above $505,000 of income). Third, charitable gifts:
            itemizers deduct contributions above 0.5 percent of AGI, while non-itemizers get a
            separate permanent break of up to $1,000 single / $2,000 joint. Fourth, unreimbursed
            medical and dental costs above 7.5 percent of AGI, plus investment interest. Gambling
            losses, casualty losses in federal disaster areas, and a few niche items round out
            the list &mdash; but everyday living costs like rent, commuting, and clothing never
            qualify.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Two households, two answers</h2>
          <p className="mt-3">
            Consider Maya, a single renter earning $90,000. Her state taxes are $4,000, charity is
            $1,500, and she has no mortgage or big medical bills &mdash; an itemized total near
            $5,500, far below $16,100. She takes the standard deduction and saves hours of
            paperwork. Contrast the Patels, a joint couple earning $210,000 with a $600,000
            mortgage: $22,000 of interest, $28,000 of SALT (capped at $40,400, so fully allowed),
            and $6,000 of gifts total $56,000 &mdash; nearly $24,000 above their $32,200 standard
            amount. At a 24 percent marginal rate that extra deduction saves about $5,760. The
            pattern is consistent: renters and modest givers standardize; mortgaged homeowners in
            higher-tax states itemize.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Side-by-side comparison of the two example households.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Line</th>
                  <th className="px-4 py-3 font-semibold">Maya (single)</th>
                  <th className="px-4 py-3 font-semibold">Patels (joint)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Mortgage interest</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">$22,000</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">SALT (cap $40,400)</td><td className="px-4 py-2">$4,000</td><td className="px-4 py-2">$28,000</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Charity</td><td className="px-4 py-2">$1,500</td><td className="px-4 py-2">$6,000</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Itemized total</td><td className="px-4 py-2">$5,500</td><td className="px-4 py-2">$56,000</td></tr>
                <tr><td className="px-4 py-2">Winner</td><td className="px-4 py-2">Standard ($16,100)</td><td className="px-4 py-2">Itemized ($56,000)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Bunching: the timing trick for borderline filers</h2>
          <p className="mt-3">
            If your itemized total lands just under the standard amount, bunching can push you
            over every other year. Pay two years of charitable gifts in one December, schedule an
            elective medical procedure alongside other deductible care, or make January&rsquo;s
            mortgage payment on December 31 &mdash; then itemize in the bunched year and take the
            standard deduction the next. Donor-advised funds make bunching painless: contribute a
            lump sum once, deduct it that year, and distribute grants to charities over time. The
            2026 SALT cap increase to $40,400 makes bunching property-tax payments newly powerful
            for upper-middle earners who were previously capped out at $10,000.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Records, limits, and state-return twists</h2>
          <p className="mt-3">
            Itemizers should keep mortgage statements, property-tax receipts, charity letters for
            any gift of $250 or more, appraisals for non-cash gifts above $5,000, and medical
            invoices showing the 7.5-percent threshold is cleared. Note that several states
            decouple from federal rules &mdash; California&rsquo;s standard deduction is only
            $5,706 single / $11,412 joint, so Californians itemize on the state return far more
            often. If you split the difference (one spouse itemizes, the other takes the
            standard), federal rules force both spouses onto the same method when filing
            separately. Married couples where one partner has large medical bills sometimes save
            by filing separately, but the trade-off usually fails &mdash; model it in software
            before committing.
          </p>
        </section>

        <GuideInArticleAds />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I switch methods every year?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes. Choose fresh each return — standardize one year, itemize the next, or bunch deductions to alternate.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is the 2026 SALT cap?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">$40,400 for all filers, phasing out above $505,000 of income, rising 1% yearly through 2029 before reverting to $10,000 in 2030.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I lose my charity deduction if I take the standard?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. A permanent $1,000 single / $2,000 joint above-the-line charity deduction is available to non-itemizers.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is mortgage interest always deductible?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Only on up to $750,000 of acquisition debt on a first or second home, and only if you itemize. Home-equity interest counts only when used to buy, build, or improve the home.</p>
            </details>
          </div>
        </section>

        <GuideBottomAds />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Deduction figures reflect 2026 federal law
            including the One, Big, Beautiful Bill. Read our full{" "}
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
