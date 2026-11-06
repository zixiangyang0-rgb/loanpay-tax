import type { Metadata } from "next";
import Link from "next/link";
import CryptoTaxCalculator from "./calculator";
import {
  CalculatorAnchorAds,
  CalculatorInArticleAds,
  CalculatorSidebarAds,
} from "../../components/CalculatorAds";
import { ArticleJsonLd, Byline } from "../../components/schema";

export const metadata: Metadata = {
  title: "Crypto Tax Calculator 2026: Bitcoin & Coin Gains | LoanPay Tax",
  description:
    "Estimate 2026 crypto tax on coin sales: short vs. long-term rates, cost-basis methods, staking and mining income, $3,000 loss limits, and record rules.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/crypto-tax-calculator",
  },
};

export default function CryptoPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Crypto Tax Calculator 2026: Bitcoin & Coin Gains | LoanPay Tax" description="Estimate 2026 crypto tax on coin sales: short vs. long-term rates, cost-basis methods, staking and mining income, $3,000 loss limits, and record rules." url="https://tax.loanpaylogic.com/crypto-tax-calculator" />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          digital assets &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Crypto Tax Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Every swap, sale, and spend is a taxable event &mdash; but holding one extra day can
          halve the rate. Estimate your 2026 coin-tax bill below and learn the basis, loss, and
          record rules that decide it.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <CryptoTaxCalculator />
          <CalculatorInArticleAds />
        </div>
        <CalculatorSidebarAds />
      </div>
      <CalculatorAnchorAds />

      <article className="mx-auto mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">What counts as taxable in crypto</h2>
          <p className="mt-3">
            The IRS treats crypto as property, not currency. Selling coins for dollars, swapping
            one token for another, spending crypto on goods, and receiving airdrops or hard-fork
            awards each create a gain-or-loss event measured from your basis (purchase price plus
            fees). Simply buying and holding, or moving coins between your own wallets, is not
            taxable. Mining and staking rewards, validator income, and coins earned for services
            arrive as ordinary income at fair market value on receipt &mdash; then become
            property with that value as basis for later gain math. Getting paid in crypto for
            freelance work triggers both income tax and, if self-employed, 15.3 percent SE tax on
            the same coins (see our{" "}
            <Link href="/self-employment-tax-calculator" className="text-amber-200 underline underline-offset-2">
              SE tax calculator
            </Link>
            ).
          </p>
          <p className="mt-3">
            Holding period draws the brightest line: assets held over one year qualify for
            preferential long-term rates of 0, 15, or 20 percent (2026 thresholds: 0% to $49,450
            single / $98,900 joint; 15% to $545,500 / $613,700; 20% above), while assets held one
            year or less face ordinary 10&ndash;37 percent rates. High earners add the 3.8 percent
            net investment income tax above $200,000 single / $250,000 joint MAGI. A $12,000 gain
            taxed at 15 percent costs $1,800; the same gain short-term at 24 percent costs $2,880
            &mdash; timing literally prices at $1,080 here. Compare these bands against the full{" "}
            <Link href="/federal-tax-brackets-2026" className="text-amber-200 underline underline-offset-2">
              2026 federal tax brackets
            </Link>{" "}
            and our{" "}
            <Link href="/capital-gains-tax-calculator-2026" className="text-amber-200 underline underline-offset-2">
              2026 capital-gains rate table
            </Link>
            , which walk through the same 0/15/20% breakpoints with 2025-vs-2026 threshold
            comparisons.
          </p>
          <p className="mt-3">
            NFTs, DeFi swaps, and gas fees follow the same property logic with extra paperwork.
            Minting or selling an NFT is a sale of property; swapping tokens inside a liquidity
            pool or across chains is still a taxable swap even when no dollars touch your bank.
            Gas fees paid to acquire coins add to basis, while gas paid to dispose of coins
            reduces proceeds &mdash; either way, save the fee receipt. Airdrops you can freely
            dispose of are income on receipt; locked or unclaimable drops generally wait until
            you control them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Basis methods and the loss playbook</h2>
          <p className="mt-3">
            With multiple purchases, which coins did you sell? Specific identification (picking
            highest-basis lots, with exchange records proving it) usually minimizes gains; FIFO
            is the default when records cannot prove otherwise. Track every lot&rsquo;s date,
            price, and fee &mdash; portfolio software that syncs exchange APIs pays for itself at
            tax time. Losses offset gains dollar-for-dollar, then up to $3,000 of ordinary income
            yearly ($1,500 married filing separately), with excess carried forward indefinitely.
            Tax-loss harvesting &mdash; selling red positions in December to bank losses, then
            rebuying &mdash; currently escapes crypto&rsquo;s version of wash-sale rules (stocks
            must wait 30 days; crypto proposals to close the gap keep circulating, so confirm
            current law before harvesting aggressively).
          </p>
          <p className="mt-3">
            A concrete wash-sale contrast helps. Say you hold stock at a $9,000 loss and rebuy
            the same shares 10 days later: the stock wash-sale rule disallows the loss this year
            and folds it into the new shares&rsquo; basis instead. Do the same round-trip with
            ETH today &mdash; sell at a $9,000 loss, rebuy the next morning &mdash; and the loss
            generally stays deductible against gains plus $3,000 of ordinary income, because
            crypto still sits outside the stock rule. Our{" "}
            <Link href="/rsu-stock-options-tax-guide" className="text-amber-200 underline underline-offset-2">
              RSU wash-sale example
            </Link>{" "}
            shows the stock side step by step, so you can see exactly which paperwork crypto
            skips for now &mdash; and why Congress keeps proposing to close the gap.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                2026 long-term rates applied to crypto gains (compare with short-term 10–37%).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Taxable income (single)</th>
                  <th className="px-4 py-3 font-semibold">Long-term crypto rate</th>
                  <th className="px-4 py-3 font-semibold">Short-term equivalent</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">To $49,450</td><td className="px-4 py-2">0%</td><td className="px-4 py-2">10–22%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$49,451 – $545,500</td><td className="px-4 py-2">15%</td><td className="px-4 py-2">22–35%</td></tr>
                <tr><td className="px-4 py-2">Over $545,500</td><td className="px-4 py-2">20% (+3.8% NIIT likely)</td><td className="px-4 py-2">35–37%</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Reporting, records, and scams</h2>
          <p className="mt-3">
            Answer the digital-asset question on Form 1040 honestly &mdash; checking
            &ldquo;no&rdquo; after trading is perjury exposure. Report each sale on Form 8949
            with proceeds, basis, dates, and gain, summarized on Schedule D; exchanges issue
            1099-DA/1099-MISC forms that the IRS matches, so omissions generate automatic
            notices. Keep wallet addresses, transaction hashes, and fee records seven years;
            reconstructing three years of DeFi history from block explorers is the most expensive
            accounting engagement in crypto. And remember the scam layer: fake &ldquo;IRS
            agents&rdquo; demanding coin payments, dusting attacks, and phishing sites mimicking
            exchanges &mdash; the real IRS mails letters first and never takes crypto.
          </p>
          <p className="mt-3">
            Big gains also trigger estimated payments. Withholding does not cover coin profits,
            so a five-figure sale in March usually means April, June, September, and January
            estimated vouchers &mdash; miss them and the underpayment penalty accrues even if
            you pay in full at filing. Use our{" "}
            <Link href="/quarterly-estimated-tax-calculator" className="text-amber-200 underline underline-offset-2">
              quarterly estimated-tax calculator
            </Link>{" "}
            to size each voucher, and keep the trade-year file (exchange CSVs, wallet exports,
            1099-DA forms) with your return per our{" "}
            <Link href="/tax-filing-checklist" className="text-amber-200 underline underline-offset-2">
              filing checklist
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is swapping BTC for ETH taxable?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Yes — every crypto-to-crypto trade is a sale of the first coin at market value, with gain or loss due that year.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do wash-sale rules apply to crypto?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Currently no for most crypto (unlike stocks) — but legislation keeps proposing to add them, so verify before harvesting losses.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Are staking rewards taxed twice?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">They are taxed as ordinary income on receipt, then again only on later appreciation when sold — not double-taxed on the same dollars.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What if I lost money overall?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Net losses offset gains, then up to $3,000 of wages yearly, with the rest carried forward — never wasted, just deferred.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Are gas fees deductible?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">They adjust basis or proceeds rather than itemized deductions — acquisition gas raises basis, disposal gas lowers proceeds, so keep every fee receipt.</p>
            </details>
            <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I owe estimated tax on a big coin sale?</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Usually yes — no withholding applies to crypto gains, so size April, June, September, and January vouchers with our quarterly estimated-tax calculator to avoid penalties.</p>
            </details>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Official sources</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <a href="https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                IRS Frequently Asked Questions on Virtual Currency Transactions
              </a>
            </li>
            <li>
              <a href="https://www.irs.gov/forms-pubs/about-form-8949" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                IRS About Form 8949, Sales and Other Dispositions of Capital Assets
              </a>
            </li>
            <li>
              <a href="https://www.irs.gov/forms-pubs/about-schedule-d-form-1040" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline underline-offset-2">
                IRS About Schedule D (Form 1040), Capital Gains and Losses
              </a>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not tax advice. Digital-asset rules evolve quickly;
            confirm wash-sale and reporting rules for 2026. Read our full{" "}
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
