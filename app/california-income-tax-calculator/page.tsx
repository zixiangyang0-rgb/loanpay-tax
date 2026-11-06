import type { Metadata } from "next";
import Link from "next/link";
import CaliforniaTaxCalculator from "./calculator";
import {
  CalculatorAnchorAds,
  CalculatorInArticleAds,
  CalculatorSidebarAds,
} from "../../components/CalculatorAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "California Income Tax Calculator 2026 | LoanPay Tax",
  description:
    "Estimate 2026 California income tax across 1%–13.3% brackets, $5,706 standard deduction, renter's credit, and why Californians itemize more often.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/california-income-tax-calculator",
  },
};

export default function CaliforniaPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="California Income Tax Calculator 2026 | LoanPay Tax" description="Estimate 2026 California income tax across 1%–13.3% brackets, $5,706 standard deduction, renter's credit, and why Californians itemize more often." url="https://tax.loanpaylogic.com/california-income-tax-calculator" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Franchise Tax Board &middot; 2026 tax year
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          California Income Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          California runs the nation&rsquo;s highest top rate &mdash; yet most residents pay far
          less than the headline suggests. Estimate your 2026 FTB bill below and learn how the
          nine brackets, tiny standard deduction, and generous credits interact.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <CaliforniaTaxCalculator />
          <CalculatorInArticleAds />
        </div>
        <CalculatorSidebarAds />
      </div>
      <CalculatorAnchorAds />

      <article className="mx-auto mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">How California taxes income</h2>
          <p className="mt-3">
            California taxes the same kinds of income as the IRS &mdash; wages, business profit,
            interest, dividends, capital gains (as ordinary income, with no preferential rate),
            and pensions &mdash; but pointedly excludes Social Security benefits and unemployment
            compensation. Nine graduated brackets run from 1 to 12.3 percent, and earnings above $1
            million pay an extra 1 percent Mental Health Services Tax, making the true top rate
            13.3 percent. Residency follows the &ldquo;closest connections&rdquo; test: live in
            California more than nine months, keep your home, doctor, and driver&rsquo;s license
            here, and the FTB considers you a resident taxed on worldwide income. Part-year
            residents and nonresidents with California-source income file with Schedule CA
            adjustments instead.
          </p>
          <p className="mt-3">
            The state standard deduction is strikingly small &mdash; $5,706 single or separate and
            $11,412 joint or head of household for 2026 &mdash; roughly a third of the federal
            amounts. That gap is why Californians itemize on the state return far more often:
            mortgage interest, property tax, charity, and medical costs that lose to the $16,100 /
            $32,200 federal bar can still beat California&rsquo;s low hurdle. You may itemize for
            Sacramento while standardizing for Washington; the two returns decide independently.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">2026 brackets and a $100,000 walkthrough</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2026 California single brackets (joint thresholds are double).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Taxable income</th>
                  <th className="px-4 py-3 font-semibold">Rate</th>
                  <th className="px-4 py-3 font-semibold">Taxable income</th>
                  <th className="px-4 py-3 font-semibold">Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$0 &ndash; $11,079</td><td className="px-4 py-2">1%</td><td className="px-4 py-2">$72,724 &ndash; $371,479</td><td className="px-4 py-2">9.3%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$11,079 &ndash; $26,264</td><td className="px-4 py-2">2%</td><td className="px-4 py-2">$371,479 &ndash; $445,771</td><td className="px-4 py-2">10.3%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$26,264 &ndash; $41,452</td><td className="px-4 py-2">4%</td><td className="px-4 py-2">$445,771 &ndash; $742,953</td><td className="px-4 py-2">11.3%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$41,452 &ndash; $57,542</td><td className="px-4 py-2">6%</td><td className="px-4 py-2">$742,953 &ndash; $1,000,000</td><td className="px-4 py-2">12.3%</td></tr>
                <tr><td className="px-4 py-2">$57,542 &ndash; $72,724</td><td className="px-4 py-2">8%</td><td className="px-4 py-2">Over $1,000,000</td><td className="px-4 py-2">13.3%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            A single filer earning $100,000 subtracts $5,706 for $94,294 of state taxable income,
            then layers roughly $5,400 of tax &mdash; about a 5.4 percent effective rate, well
            below the 9.3 percent marginal band that income reaches. Middle-class Californians
            typically land between 4 and 8 percent effective, because the wide 9.3 percent band
            starts near $73,000 but the lower bands dilute it. High earners feel the steep end:
            at $500,000 the marginal dollar faces 10.3 percent state tax on top of 35 percent
            federal, before the 3.8 percent investment surtax on unearned income.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Credits, renters, and payroll extras</h2>
          <p className="mt-3">
            California&rsquo;s credits punch above their weight for modest earners. The CalEITC
            pays up to about $3,756 for low-income workers with children, the Young Child Tax
            Credit adds up to roughly $1,154 for a child under six, and nonrefundable personal
            exemption credits ($149 single, $298 joint per dependent, inflation-adjusted yearly)
            shave liability for everyone. Renters get a small nonrefundable credit ($60 single /
            $120 joint, with income caps) that renters in high-cost cities should never leave on
            the table. Beyond income tax, expect 2026 State Disability Insurance withholding
            (around 1 percent up to a wage cap near $153,000) and the 1 percent employer-side
            mental-health payroll structure &mdash; neither appears in the estimator, so your
            true Sacramento burden runs slightly higher.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Filing, deadlines, and the SALT interplay</h2>
          <p className="mt-3">
            California conforms to the April 15, 2027 deadline for 2026 returns (extension to
            October 15 with payment still due in April), filed via FTB CalFile, e-file, or Form
            540. Estimated payments follow January, April, June, and September dates similar to
            the IRS. The federal SALT cap&rsquo;s jump to $40,400 for 2026 restores real value to
            deducting California tax federally &mdash; a $20,000 state bill that was mostly
            stranded under the old $10,000 cap is now fully usable for itemizers under the
            $505,000 phase-out. Movers should compare total burdens, not top rates: a
            middle-income family can pay less combined tax in California than in a
            &ldquo;low-tax&rdquo; state with heavy property taxes, as our{" "}
            <Link href="/texas-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Texas guide
            </Link>{" "}
            demonstrates.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Movers, remote workers, and residency audits</h2>
          <p className="mt-3">
            Leaving California takes more than a U-Haul to{" "}
            <Link href="/texas-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Texas
            </Link>{" "}
            or{" "}
            <Link href="/florida-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Florida
            </Link>
            . The Franchise Tax Board applies the closest-connections test: where your home,
            spouse and children, doctors, clubs, driver&rsquo;s license, voter registration, and
            business ties sit. Keep a California house while renting in Austin and the auditor
            will count nights, flight records, cell-phone pings, and even pet-vet visits. To
            break residency cleanly, sell or lease out the California home, move licenses and
            doctors, register to vote, join new community groups, and keep a contemporaneous
            calendar of where you sleep each night. Part-year filers allocate wage, business,
            and capital-gain income by California-source days and property situs, so a July move
            still leaves January-through-June earnings fully taxable here.
          </p>
          <p className="mt-3">
            Remote workers face the mirror trap. Days you perform services physically inside
            California for an out-of-state employer are California-source wages, while days you
            work from Denver for a San Jose company generally stay taxable in California as
            source income with a credit on your home-state return. Stock compensation follows
            the same day-count fractions between grant and vest, and equity-heavy tech workers
            should track office, travel, and work-from-home days in writing. Nonresident landlords
            and business owners with California rentals, partnerships, or real-estate sales file
            here on that source income even after leaving, and underpayment draws interest from
            each quarterly date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How to lower your California bill</h2>
          <p className="mt-3">
            Start with the filing choice that saves the most: run both the $5,706 single or
            $11,412 joint standard deduction and a full itemized draft with mortgage interest,
            capped state and local taxes, charitable gifts, and medical costs above 7.5 percent
            of federal AGI. Because California&rsquo;s hurdle is so low, owners in Los Angeles,
            the Bay Area, and San Diego often clear it with property tax plus donations alone.
            Bunch two years of giving into one donor-advised fund, time elective medical work
            into a single year, and harvest investment losses against ordinary-rate gains, which
            hurt more here than federally since no preferential capital-gains rate exists.
          </p>
          <p className="mt-3">
            Then stack credits and payroll planning. Low-income workers should claim CalEITC and
            the Young Child Tax Credit through CalFile rather than assuming the federal return
            covers them, renters should claim the renter&rsquo;s credit every eligible year, and
            parents should coordinate 529, dependent-care, and education elections with the
            federal side using our{" "}
            <Link href="/standard-deduction-vs-itemized-2026" className="text-amber-200 underline underline-offset-2">
              standard vs. itemized walkthrough
            </Link>{" "}
            and{" "}
            <Link href="/federal-tax-brackets-2026" className="text-amber-200 underline underline-offset-2">
              2026 federal brackets guide
            </Link>
            . Employees with lumpy bonuses or RSU vests should true up withholding with our{" "}
            <Link href="/w4-withholding-calculator" className="text-amber-200 underline underline-offset-2">
              W-4 withholding calculator
            </Link>{" "}
            and send quarterly estimates if bonuses push you $500 or more short, because both
            the IRS and the FTB charge interest from the missed quarter even when April shows a
            refund.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does California tax Social Security?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. California fully excludes Social Security benefits and unemployment compensation from taxable income.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I itemize for the state but not federal?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes. The two returns decide independently, and California&rsquo;s $5,706 / $11,412 standard amounts make state-only itemizing common.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is the 13.3% rate I keep hearing about?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">12.3% top bracket plus a 1% Mental Health Services Tax on income above $1 million — the highest marginal state rate in the nation.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Are capital gains taxed differently in CA?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. California taxes capital gains as ordinary income at your regular bracket — there is no 0/15/20% preference like the federal code.</p>
            </details>
          </div>
        </section>

        <nav aria-label="Related guides">
          <h2 className="text-xl font-bold text-white">Related guides</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <Link href="/federal-income-tax-calculator-2026" className="text-amber-200 underline underline-offset-2">
                2026 Federal Income Tax Calculator
              </Link>
            </li>
            <li>
              <Link href="/federal-tax-brackets-2026" className="text-amber-200 underline underline-offset-2">
                2026 Federal Tax Brackets Explained
              </Link>
            </li>
            <li>
              <Link href="/texas-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
                Texas No-Income-Tax Guide: Movers Compare Total Burdens
              </Link>
            </li>
            <li>
              <Link href="/standard-deduction-vs-itemized-2026" className="text-amber-200 underline underline-offset-2">
                Standard Deduction vs. Itemized in 2026
              </Link>
            </li>
          </ul>
        </nav>

        <section>
          <h2 className="text-xl font-bold text-white">Official sources</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <a href="https://www.ftb.ca.gov/file/personal/tax-calculator/index.asp" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                Franchise Tax Board — California Tax Calculator and Filing Help
              </a>
            </li>
            <li>
              <a href="https://www.ftb.ca.gov/forms/2026/2026-540-booklet.shtml" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                FTB 2026 Form 540 Booklet and Tax Tables
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
            This is general education, not tax advice. Brackets reflect published 2026 FTB tables;
            confirm exact figures with the Franchise Tax Board. Read our full{" "}
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
