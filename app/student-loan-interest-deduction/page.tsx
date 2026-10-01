import type { Metadata } from "next";
import Link from "next/link";
import { GuideBottomAds, GuideInArticleAds, GuideTopAds } from "../../components/GuideAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "Student Loan Interest Deduction 2026 (Up to $2,500) | LoanPay Tax",
  description:
    "How the 2026 student-loan interest deduction works: up to $2,500 above-the-line, income phase-outs, eligible loans, and coordination with credits.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/student-loan-interest-deduction",
  },
};

const CHECKLIST = [
  "Confirm the loan is qualified: borrowed solely for your, spouse's, or dependent's higher education.",
  "Check you are legally obligated on the loan — cosigner payments follow special rules.",
  "Total 2026 interest paid (Box 1 of 1098-E, plus any unreported amounts under $600).",
  "Estimate MAGI against the phase-out band — plan Roth vs. pre-tax moves early.",
  "File as anything but married-filing-separately (MFS is fully ineligible).",
  "Claim on Schedule 1 — no itemizing needed — and keep 1098-E forms 3+ years.",
];

export default function StudentLoanPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Student Loan Interest Deduction 2026 (Up to $2,500) | LoanPay Tax" description="How the 2026 student-loan interest deduction works: up to $2,500 above-the-line, income phase-outs, eligible loans, and coordination with credits." url="https://tax.loanpaylogic.com/student-loan-interest-deduction" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Schedule 1 &middot; up to $2,500
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Student Loan Interest Deduction
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Up to $2,500 of student-loan interest comes straight off your income &mdash; no
          itemizing required. Learn who qualifies, where the phase-outs bite, and how to pair
          the break with credits and repayment strategy.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <GuideTopAds />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Eligibility checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How the $2,500 deduction works</h2>
          <p className="mt-3">
            The student-loan interest deduction is an above-the-line adjustment: it lowers AGI
            itself, which can cascade into bigger student-loan, credit, and IRA benefits
            downstream. Deduct the smaller of $2,500 or actual 2026 interest paid on qualified
            loans &mdash; federal Direct, PLUS, and Perkins loans, plus private refinances of
            qualified education debt. &ldquo;Paid&rdquo; includes capitalized interest, origination
            fees treated as interest, and voluntary payments; Box 1 of Form 1098-E reports
            amounts of $600+, but smaller interest still counts if you total it yourself.
            Employer student-loan assistance to $5,250 yearly (extended provisions; confirm
            current law) arrives tax-free and does not reduce this deduction&rsquo;s interest
            base &mdash; the two stack when structured correctly.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Deduction value at sample marginal rates (full $2,500 claimed).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Marginal rate</th>
                  <th className="px-4 py-3 font-semibold">Tax saved</th>
                  <th className="px-4 py-3 font-semibold">Who typically</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">12%</td><td className="px-4 py-2">$300</td><td className="px-4 py-2">Early-career, part-time</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">22%</td><td className="px-4 py-2">$550</td><td className="px-4 py-2">Most professionals</td></tr>
                <tr><td className="px-4 py-2">24–32%</td><td className="px-4 py-2">$600–$800</td><td className="px-4 py-2">Higher earners (if eligible)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Phase-outs and the MFS trap</h2>
          <p className="mt-3">
            The deduction phases out across a MAGI band (historically around $80,000&ndash;
            $95,000 single and $165,000&ndash;$195,000 joint; confirm the inflation-adjusted 2026
            figures in IRS Publication 970 before filing) and vanishes above it &mdash; high
            earners should verify eligibility before counting on it. Two hard disqualifiers
            apply regardless of income: married-filing-separately status forfeits the deduction
            entirely (a real cost for couples splitting returns for income-driven repayment
            optimization &mdash; model both scenarios), and loans from related parties or
            employer plans do not qualify. Being claimed as a dependent by someone else also
            blocks your claim even if you paid the interest yourself. Refinancing qualified debt
            into a new qualified loan preserves eligibility; rolling it into a home-equity line
            or credit-card balance destroys it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Pairing with credits and repayment plans</h2>
          <p className="mt-3">
            STACK the deduction with education credits rather than choosing: the American
            Opportunity Credit (to $2,500, 40 percent refundable) and Lifetime Learning Credit
            (to $2,000 nonrefundable) target tuition and fees while this deduction targets
            interest &mdash; different dollars, same return. Because the deduction lowers AGI, it
            can also shrink income-driven repayment amounts (SAVE/IBR/PAYE use AGI), creating a
            virtuous loop where deducting interest modestly lowers next year&rsquo;s payments.
            Freelancers deducting business-loan interest on Schedule C keep that separate &mdash;
            education interest belongs on Schedule 1, never doubled. And if forgiveness arrives
            (Public Service Loan Forgiveness remains tax-free federally; other discharges follow
            current-law rules &mdash; confirm for 2026), forgiven principal is handled under
            discharge provisions, not this deduction.
          </p>
        </section>

        <GuideInArticleAds />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I need to itemize to claim it?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No — it is an above-the-line adjustment on Schedule 1, available with the standard deduction.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">My parents pay my loans — who deducts?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Whoever is legally obligated and meets the tests; payments by others on your behalf are generally treated as paid by you if you qualify — see Pub. 970.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does refinancing kill eligibility?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Refinancing qualified education debt into another qualified loan preserves it; consolidating into non-education debt (credit cards, HELOCs) ends it.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I claim both a credit and this deduction?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes — credits cover tuition and fees while the deduction covers interest: different expenses, same return, fully stackable.</p>
            </details>
          </div>
        </section>

        <GuideBottomAds />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Confirm 2026 phase-out bands in IRS
            Publication 970. Read our full{" "}
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
