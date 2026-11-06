import type { Metadata } from "next";
import Link from "next/link";
import { GuideBottomAds, GuideInArticleAds, GuideTopAds } from "../../components/GuideAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "RSU & Stock Options Tax Guide 2026 | LoanPay Tax",
  description:
    "How RSUs, NSOs, and ISOs are taxed in 2026: vest withholding, estimated payments, AMT, 83(b), and a selling checklist for tech employees.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/rsu-stock-options-tax-guide",
  },
};

const CHECKLIST = [
  "At vest/exercise: confirm shares withheld for tax (usually 22%) and whether you owe more.",
  "Set calendar reminders for quarterly estimates if withholding won't cover the gain.",
  "For ISOs: model AMT before exercising — the bargain element counts as an adjustment.",
  "Decide 83(b) within 30 days of an early-exercise grant — the deadline never extends.",
  "Plan sales around the 1-year long-term clock and your capital-gains stacking room.",
  "Keep grant, vest, 3921/3922, and 1099-B records together for basis reconciliation.",
];

export default function RsuPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="RSU & Stock Options Tax Guide 2026 | LoanPay Tax" description="How RSUs, NSOs, and ISOs are taxed in 2026: vest withholding, estimated payments, AMT, 83(b), and a selling checklist for tech employees." url="https://tax.loanpaylogic.com/rsu-stock-options-tax-guide" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          equity compensation &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          RSU &amp; Stock Options Tax Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Equity pay is taxed twice &mdash; as wages at vest or exercise, then as capital gains
          at sale. Master RSUs, NSOs, and ISOs with 2026 rates, withholding traps, and a
          sell-or-hold framework that survives volatile markets.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <GuideTopAds />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Equity event checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">RSUs: taxed as salary at vest</h2>
          <p className="mt-3">
            Restricted stock units convert to ordinary wages the day they vest, at that
            day&rsquo;s market value &mdash; $40,000 vesting is $40,000 of W-2 income, period.
            Employers typically withhold 22 percent federal (37 percent on cumulative
            supplemental wages above $1 million) plus Social Security to $184,500, Medicare, and
            state tax, usually by liquidating shares. The trap: 22 percent withholding against a
            32&ndash;37 percent marginal rate leaves a five-figure April balance for senior
            staff. Your cost basis becomes the vest-date value, so later appreciation is capital
            gain (long-term after one more year). Sell immediately at vest and the second tax
            event is ~$0 &mdash; the &ldquo;sell-to-cover plus same-day sale&rdquo; default that
            treats RSUs as the cash bonus they economically are.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                How the three equity types are taxed (2026 federal).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Event</th>
                  <th className="px-4 py-3 font-semibold">RSU</th>
                  <th className="px-4 py-3 font-semibold">NSO</th>
                  <th className="px-4 py-3 font-semibold">ISO</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Grant</td><td className="px-4 py-2">No tax</td><td className="px-4 py-2">No tax</td><td className="px-4 py-2">No tax</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Vest / exercise</td><td className="px-4 py-2">Ordinary income</td><td className="px-4 py-2">Ordinary on spread</td><td className="px-4 py-2">No regular tax; AMT adjustment</td></tr>
                <tr><td className="px-4 py-2">Sale</td><td className="px-4 py-2">Capital gain/loss</td><td className="px-4 py-2">Capital gain/loss</td><td className="px-4 py-2">Qualifying: all long-term; else ordinary + gain</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">NSOs vs. ISOs: spread, AMT, and qualifying sales</h2>
          <p className="mt-3">
            Non-qualified options tax the exercise spread (market minus strike) as ordinary wages
            with withholding, then later appreciation as capital gain &mdash; straightforward but
            expensive in high brackets. Incentive stock options skip regular tax at exercise but
            add the spread to alternative-minimum-tax income; exercising $200,000 of spread can
            create a surprise five-figure AMT bill payable next April even though no cash arrived
            (the 2026 AMT exemption is $90,100 single / $140,200 joint, phasing out at $500,000).
            Hold ISO shares two years from grant and one year from exercise for a qualifying
            disposition &mdash; the entire profit becomes long-term gain &mdash; or sell earlier
            for a disqualifying disposition taxed like an NSO. File 83(b) within 30 days when
            early-exercising unvested shares to freeze ordinary income at the (low) grant value;
            miss the window and it never reopens.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked examples: a $50,000 RSU vest and a $60,000 option spread</h2>
          <p className="mt-3">
            Take a $50,000 RSU vest for an employee in the 32 percent federal bracket living
            in California (9.3 percent state). Federal withholding at the flat 22 percent rate
            takes $11,000, plus Social Security, Medicare, and state withholding &mdash; but the
            combined marginal bite on that vest is over 40 percent, so roughly $9,000&ndash;$10,000
            of the liability arrives the following April unless estimated payments or extra
            withholding close the gap. Check your real marginal rate with our{" "}
            <Link href="/federal-tax-brackets-2026" className="text-amber-200 underline underline-offset-2">
              2026 federal brackets guide
            </Link>{" "}
            and fix persistent shortfalls by adding a flat extra amount on{" "}
            <Link href="/w4-withholding-calculator" className="text-amber-200 underline underline-offset-2">
              Step 4(c) of Form W-4
            </Link>
            . Your basis in the net shares is the $50,000 vest value; selling a year later at
            $58,000 produces an $8,000 capital gain only, not a second round of wage tax.
          </p>
          <p className="mt-3">
            Now compare option exercises with identical economics: 1,000 shares, $20 strike,
            $80 market value at exercise, $60,000 of spread. With NSOs the $60,000 is ordinary
            wages in the exercise year &mdash; at 32 percent federal plus state, over $20,000 of
            tax with no sale proceeds if you hold &mdash; and your basis steps up to $80 per
            share, so a later sale at $95 yields a $15,000 capital gain. Model the full-year
            impact with our{" "}
            <Link href="/federal-income-tax-calculator-2026" className="text-amber-200 underline underline-offset-2">
              federal income tax calculator
            </Link>
            . With ISOs the same $60,000 exercise triggers zero regular tax but adds $60,000 of
            AMT income; a single filer already near the $90,100 exemption can owe thousands of
            AMT on a paper gain, recoverable only as a future credit. Hold those ISO shares
            two years from grant and one year from exercise and the whole run from $20 to the
            sale price converts to long-term gain &mdash; sell a month early and the $60,000
            spread reverts to ordinary income like an NSO.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Withholding gaps, concentration, and state twists</h2>
          <p className="mt-3">
            Model every vest against your real marginal rate: at 32 percent federal plus 9.3
            percent California (which taxes equity as ordinary income with no preference), 22
            percent withholding undercovers by nearly 20 points &mdash; close it with W-4 Step
            4(c) extras or{" "}
            <Link href="/quarterly-estimated-tax-calculator" className="text-amber-200 underline underline-offset-2">
              quarterly estimates
            </Link>
            . Concentration compounds the risk: employees holding 50%+ of net worth in one ticker
            face layoff and portfolio crash simultaneously &mdash; staged 10b5-1 sale plans
            diversify without timing-guilt. Movers note{" "}
            <Link href="/washington-no-income-tax-guide" className="text-amber-200 underline underline-offset-2">
              Washington&rsquo;s 7 percent gains tax
            </Link>{" "}
            above ~$270,000 and New York&rsquo;s source-day allocation for pre-move vesting;
            remote workers should track workday locations from grant to vest. Size any sale with
            our{" "}
            <Link href="/capital-gains-tax-calculator-2026" className="text-amber-200 underline underline-offset-2">
              capital-gains calculator
            </Link>{" "}
            before clicking sell.
          </p>
        </section>

        <GuideInArticleAds />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Should I sell RSUs immediately?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Usually yes — at vest they are cash-equivalent wages; holding concentrates risk in your employer. Keep shares only as a deliberate investment decision.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What triggers ISO AMT?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">The exercise spread counts as AMT income — large exercises can owe thousands next April with no cash received. Model before exercising.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is an 83(b) election?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">A 30-day, no-extension election to tax early-exercised unvested shares at today&rsquo;s low value instead of at each future vest price.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Why did my 1099-B basis look wrong?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Brokers often report sale proceeds without the vest-date basis already taxed as wages — adjust basis upward using your W-2/3921 records to avoid double tax.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How are double-trigger RSUs taxed at IPO?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Nothing is taxed until both triggers hit — time vesting plus the liquidity event. When the IPO or acquisition closes, the entire vested value becomes ordinary wages at once, often pushing you into a higher bracket for that year, so plan estimates early.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Sell-to-cover or pay cash for withholding?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Sell-to-cover is simplest: the employer liquidates enough shares for tax and you keep the rest. Paying cash preserves share count but concentrates more wealth in one stock — only do it as a deliberate investment call, not by default.</p>
            </details>
          </div>
        </section>

        <GuideBottomAds />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. AMT and withholding figures reflect 2026
            law; plan documents vary. Read our full{" "}
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
