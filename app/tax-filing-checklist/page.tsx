import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tax Filing Checklist 2027 (for 2026 Returns) | LoanPay Tax",
  description:
    "A step-by-step 2027 filing checklist: documents to gather, W-2/1099 matching, deduction sweep, credit review, e-file error fixes, and audit-proof storage.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/tax-filing-checklist",
  },
};

const DOCUMENTS = [
  "Photo ID + Social Security numbers (and dates of birth) for everyone on the return.",
  "All W-2s — match Box 1 wages against your final pay stub before filing.",
  "1099-NEC (freelance), 1099-MISC, 1099-K ($2,000+ third-party payments in some states; federal thresholds vary — report all income regardless).",
  "1099-INT, 1099-DIV, 1099-B, 1099-R, SSA-1099, and 1095-A/B/C health forms.",
  "1098 mortgage interest, 1098-E student-loan interest, 1098-T tuition, property-tax receipts.",
  "Charity letters ($250+ each), mileage log, business expense receipts, HSA/IRA contribution records.",
  "Last year's return (AGI needed for e-file identity) + bank routing for refund or payment.",
];

const STEPS = [
  "Choose status: joint usually wins for couples; head of household beats single for qualifying parents.",
  "Enter income first — every form above — then let software flag missing 1099s against IRS transcripts.",
  "Run the standard-vs-itemized comparison ($16,100 / $32,200 / $24,150 for 2026).",
  "Claim every credit: child, EITC, education, saver's, energy — credits beat deductions dollar-for-dollar.",
  "Review the draft return line by line: names, SSNs, bank numbers, and the refund/balance math.",
  "E-file + direct deposit (or debit) before April 15, 2027; save the acceptance confirmation.",
  "Store the return + all source documents 3+ years (6 if income was substantially understated).",
];

export default function FilingChecklistPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          filing season 2027 &middot; 2026 returns
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Tax Filing Checklist
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The average return takes 13 hours &mdash; most of it hunting paperwork. These two
          checklists compress the hunt into one organized afternoon, then walk the filing itself
          without errors or missed money.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Document roundup checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {DOCUMENTS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Filing-day checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Gather like a preparer: January habits</h2>
          <p className="mt-3">
            Create one 2026 tax folder &mdash; physical or cloud &mdash; and route every form
            there the day it arrives. Employers and payers must furnish W-2s, 1099-NECs, and most
            1099s by January 31, 2027; brokerages and trusts often follow in February with
            corrected editions, so avoid filing before mid-February if you hold taxable accounts.
            Match each form against your own records: a missing 1099-NEC does not excuse the
            income (report from invoices), and a wrong W-2 Box 1 demands a corrected W-2c before
            you file, not an explanatory note after. Gig workers should pull annual summaries
            from every platform plus bank deposits, because 1099-K thresholds shift by year and
            state &mdash; the income is taxable at any threshold.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The money sweep: deductions and credits reviewers miss</h2>
          <p className="mt-3">
            Run three passes over the draft. Pass one &mdash; above-the-line: student-loan
            interest to $2,500, HSA and IRA contributions, half of SE tax, educator expenses, and
            the $1,000/$2,000 non-itemizer charity deduction. Pass two &mdash; the{" "}
            <Link href="/standard-deduction-vs-itemized-2026" className="text-amber-200 underline underline-offset-2">
              standard-vs-itemized comparison
            </Link>
            : mortgage interest, SALT to the $40,400 cap, gifts above 0.5 percent of AGI, and
            medical above 7.5 percent. Pass three &mdash; credits: child tax credit, earned
            income credit (one in five eligible filers misses it yearly), American Opportunity
            and Lifetime Learning education credits, saver&rsquo;s credit for retirement
            contributions, and residential energy credits with their 2026 phase-downs. Preview
            the outcome anytime with our{" "}
            <Link href="/tax-refund-estimator" className="text-amber-200 underline underline-offset-2">
              refund estimator
            </Link>
            .
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Top missed items by filer type.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Filer</th>
                  <th className="px-4 py-3 font-semibold">Commonly missed</th>
                  <th className="px-4 py-3 font-semibold">Worth roughly</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Parents</td><td className="px-4 py-2">EITC + child credits</td><td className="px-4 py-2">$2,000–$7,000+</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Students</td><td className="px-4 py-2">AOTC + loan interest</td><td className="px-4 py-2">$1,000–$2,500</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Freelancers</td><td className="px-4 py-2">QBI + home office + mileage</td><td className="px-4 py-2">$1,500–$5,000</td></tr>
                <tr><td className="px-4 py-2">Homeowners</td><td className="px-4 py-2">SALT to $40,400 cap</td><td className="px-4 py-2">$1,000–$6,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">E-file errors, signatures, and storage</h2>
          <p className="mt-3">
            The top rejections are mechanical: transposed Social Security digits, a dependent
            claimed twice after divorce, last year&rsquo;s AGI mistyped for identity proof, or a
            bank routing digit off. Fix the field and retransmit &mdash; never paper-file a
            duplicate &ldquo;just in case.&rdquo; Both spouses sign joint e-files with PINs;
            balance-due filers schedule the debit for April 15 rather than paying early. Then
            store everything &mdash; return, forms, receipts, mileage, confirmations &mdash; at
            least three years from filing (six with major understatements, seven for bad-debt
            claims). Shred nothing until the window closes; digital copies with legible totals
            satisfy the IRS when originals fade.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">When should I start gathering documents?</h3>
              <p className="mt-1">Early January — open one folder and file forms as they arrive; most W-2s and 1099s land by January 31, brokerages by mid-February.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">My 1099 never arrived — can I file?</h3>
              <p className="mt-1">Yes, and you must — report the income from invoices and deposits. Missing forms never excuse missing income.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">E-file rejected — what now?</h3>
              <p className="mt-1">Fix the flagged field (usually SSN, dependent, or prior-year AGI) and retransmit. Do not mail a duplicate return.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How long do I keep tax records?</h3>
              <p className="mt-1">Three years minimum from filing (six with large understatements, seven for bad debts) — digital copies are fine if legible.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Forms and thresholds reflect 2026–27 law
            as published by the IRS. Read our full{" "}
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
