import type { Metadata } from "next";
import Link from "next/link";
import CaliforniaTaxCalculator from "./calculator";

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
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
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
      </section>

      <div className="mt-8">
        <CaliforniaTaxCalculator />
      </div>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
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
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does California tax Social Security?</h3>
              <p className="mt-1">No. California fully excludes Social Security benefits and unemployment compensation from taxable income.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I itemize for the state but not federal?</h3>
              <p className="mt-1">Yes. The two returns decide independently, and California&rsquo;s $5,706 / $11,412 standard amounts make state-only itemizing common.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What is the 13.3% rate I keep hearing about?</h3>
              <p className="mt-1">12.3% top bracket plus a 1% Mental Health Services Tax on income above $1 million — the highest marginal state rate in the nation.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Are capital gains taxed differently in CA?</h3>
              <p className="mt-1">No. California taxes capital gains as ordinary income at your regular bracket — there is no 0/15/20% preference like the federal code.</p>
            </div>
          </div>
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
