import type { Metadata } from "next";
import Link from "next/link";
import { GuideBottomAds, GuideInArticleAds, GuideTopAds } from "../../components/GuideAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

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
      <ArticleJsonLd title="Tax Filing Checklist 2027 (for 2026 Returns) | LoanPay Tax" description="A step-by-step 2027 filing checklist: documents to gather, W-2/1099 matching, deduction sweep, credit review, e-file error fixes, and audit-proof storage." url="https://tax.loanpaylogic.com/tax-filing-checklist" />
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
        <Byline updated="October 2026" />
      </section>

      <GuideTopAds />

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
          <h2 className="text-xl font-bold text-white">Checklists by filer type: W-2, 1099, homeowners, parents</h2>
          <p className="mt-3">
            One master list misses real life. Use your lane below on top of the document
            and filing-day checklists above, and open the linked guide to price the outcome
            before you file.
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">W-2 employees: verify withholding first</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Match every W-2 Box 1 against your final December pay stub, confirm employer
                retirement and HSA codes in Boxes 12 and W, and check that federal withholding
                tracks your W-4 target so you neither over-lend nor owe a penalty. If you held
                two jobs, changed withholding mid-year, or earned a bonus taxed at a flat rate,
                reconcile the combined withholding before filing. Compare employee versus
                contractor treatment anytime with our{" "}
                <Link href="/w2-vs-1099-calculator" className="text-amber-200 underline underline-offset-2">
                  W-2 vs 1099 calculator
                </Link>{" "}
                and tune next year with the{" "}
                <Link href="/w4-withholding-calculator" className="text-amber-200 underline underline-offset-2">
                  W-4 withholding calculator
                </Link>
                .
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">1099 freelancers and gig workers: prove every dollar</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                List 1099-NEC, 1099-MISC, and 1099-K forms, then add platform earnings and direct
                client payments that never generated a form, because all self-employment income
                is taxable even without paperwork. Total business mileage, home-office square
                footage, phone and software costs, and health premiums, then test the 20 percent
                qualified business income deduction and quarterly estimated payments. Walk the
                full quarterly workflow in our{" "}
                <Link href="/freelancer-quarterly-tax-guide" className="text-amber-200 underline underline-offset-2">
                  freelancer quarterly tax guide
                </Link>{" "}
                and price Social Security plus Medicare with the{" "}
                <Link href="/self-employment-tax-calculator" className="text-amber-200 underline underline-offset-2">
                  self-employment tax calculator
                </Link>
                .
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Homeowners: stack SALT, interest, and energy</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Pull the 1098 mortgage-interest statement, property-tax receipts, points paid on
                purchase or refinance, and private mortgage insurance records, then measure the
                bundle against the 2026 standard deduction of $16,100 single, $32,200 joint, and
                $24,150 head of household. Add state and local taxes up to the $40,400 SALT cap,
                qualifying energy upgrades under the 2026 phase-down rules, and any home sale
                timing questions. Re-run the{" "}
                <Link href="/standard-deduction-vs-itemized-2026" className="text-amber-200 underline underline-offset-2">
                  standard-versus-itemized comparison
                </Link>{" "}
                before you commit to itemizing.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Parents: lock every dependent dollar</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Confirm each child Social Security number, custody and support nights for
                head-of-household and earned income credit tests, childcare provider EINs and
                receipts, 1098-T tuition forms, and student-loan interest records. Only one
                return can claim a dependent per year, so divorced parents should confirm the
                release form before anyone files. Screen child tax credit, earned income credit,
                education credits, and the saver credit together, then preview the refund with
                our{" "}
                <Link href="/tax-refund-estimator" className="text-amber-200 underline underline-offset-2">
                  refund estimator
                </Link>{" "}
                and confirm the calendar in{" "}
                <Link href="/when-are-taxes-due-2027" className="text-amber-200 underline underline-offset-2">
                  when taxes are due in 2027
                </Link>
                .
              </p>
            </div>
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

        <GuideInArticleAds />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">When should I start gathering documents?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Early January — open one folder and file forms as they arrive; most W-2s and 1099s land by January 31, brokerages by mid-February.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">My 1099 never arrived — can I file?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes, and you must — report the income from invoices and deposits. Missing forms never excuse missing income.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">E-file rejected — what now?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Fix the flagged field (usually SSN, dependent, or prior-year AGI) and retransmit. Do not mail a duplicate return.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How long do I keep tax records?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Three years minimum from filing (six with large understatements, seven for bad debts) — digital copies are fine if legible.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">W-2 or 1099 — which checklist lane fits a side gig?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Use both: the W-2 lane for wages and withholding, plus the 1099 lane for freelance income, mileage, home office, and quarterly estimates.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Homeowner or parent — itemize or take the standard deduction?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Add mortgage interest, SALT to the $40,400 cap, gifts, and medical over 7.5 percent of AGI; itemize only when the total beats $16,100 single, $32,200 joint, or $24,150 head of household.</p>
            </details>
          </div>
        </section>

        <GuideBottomAds />

        <nav aria-label="Related guides">
          <h2 className="text-xl font-bold text-white">Related guides</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/when-are-taxes-due-2027" className="font-semibold text-amber-200 underline underline-offset-2">
                When Taxes Are Due in 2027
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Match each checklist item to its 2027 deadline.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/tax-refund-estimator" className="font-semibold text-amber-200 underline underline-offset-2">
                Tax Refund Estimator
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">See the payoff once your documents are complete.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/standard-deduction-vs-itemized-2026" className="font-semibold text-amber-200 underline underline-offset-2">
                Standard vs. Itemized Comparison
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Decide which deduction path your paperwork supports.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <Link href="/w2-vs-1099-calculator" className="font-semibold text-amber-200 underline underline-offset-2">
                W-2 vs. 1099 Calculator
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">Sort employee and contractor forms without mix-ups.</p>
            </li>
          </ul>
        </nav>

        <section>
          <h2 className="text-xl font-bold text-white">Official sources</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <a href="https://www.irs.gov/filing/individuals/filing-for-individuals" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                IRS Filing for Individuals
              </a>
            </li>
            <li>
              <a href="https://www.irs.gov/filing/individuals/when-to-file" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                IRS When to File Your Taxes
              </a>
            </li>
            <li>
              <a href="https://www.irs.gov/forms-pubs/about-form-1040" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                IRS About Form 1040, U.S. Individual Income Tax Return
              </a>
            </li>
          </ul>
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
