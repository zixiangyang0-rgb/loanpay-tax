import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LoanPay Tax",
  description:
    "Privacy policy for tax.loanpaylogic.com: cookies, Google AdSense and Funding Choices consent, non-personalized ads, analytics, and contact.",
  alternates: {
    canonical: "https://tax.loanpaylogic.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-xs text-slate-400">
        Last updated: October 1, 2026. Applies to tax.loanpaylogic.com (“LoanPay Tax”, “we”).
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        LoanPay Tax respects your privacy. This policy explains what we collect when you visit
        tax.loanpaylogic.com, how Google AdSense uses cookies to show ads, how consent is
        managed, and how to contact us.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Information we collect</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        Our estimators run in your browser. We do not ask you to create an account, and we do
        not store the income figures you type into our tools on our servers. If you email us at
        support@loanpaylogic.com, we receive your address and message so we can reply. We also
        receive limited technical data (pages viewed, device type, approximate region) to keep
        the site fast, fix errors, and understand which guides are helpful. We never sell
        personal information.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Cookies and Google AdSense advertising</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        We use Google AdSense (publisher ID ca-pub-4906207495792820) to show ads. Google and its
        partners may use cookies — including the DoubleClick cookie — and mobile identifiers to
        personalize or measure ads based on your visits to this and other sites, unless you
        choose non-personalized ads.
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
        <li>
          Personalized ads use your browsing history and interests; non-personalized ads (NPA)
          use only contextual information such as the page you are viewing and your approximate
          location.
        </li>
        <li>
          You can opt out of personalized advertising at{" "}
          <a
            href="https://adssettings.google.com/"
            className="text-amber-200 underline underline-offset-2"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>{" "}
          and learn how Google uses data at{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            className="text-amber-200 underline underline-offset-2"
            rel="noopener noreferrer"
          >
            Google&apos;s advertising technology page
          </a>
          .
        </li>
        <li>
          On this site you can pick “Non-personalized only” in the cookie banner at any time;
          your choice is stored locally as <code>loanpay-tax-consent=npa</code> and applied to
          ad requests via the NPA flag.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Consent management (Google Funding Choices)</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        We use Google Funding Choices as our consent-management platform (CMP) for visitors in
        regions that require it (EEA, UK, and Switzerland). Funding Choices asks for consent
        before personalized ads and measurement run, records your IAB TCF consent string, and
        lets you revisit or withdraw consent. Our own cookie banner covers all other visitors
        and always offers a non-personalized-ads option.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Analytics</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        We may use privacy-friendly analytics that records aggregate page views (pages visited,
        referrers, device classes) without building advertising profiles. Analytics data is
        retained only as long as needed for site improvement and is never combined with ad
        identifiers by us.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Data retention and sharing</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        Support emails are kept only as long as needed to resolve your request. We share data
        with Google (advertising and consent) and our hosting provider (Vercel) as needed to
        operate the site. We do not share calculator inputs with anyone because they never
        leave your browser.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Your rights</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        Depending on your location (including California, the EEA, and the UK), you may have
        the right to access, correct, delete, or restrict personal data we hold about you, to
        object to certain processing, and to withdraw consent. To exercise these rights, email
        support@loanpaylogic.com and we will respond within a reasonable time.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Children</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        This site is for general audiences and is not directed at children under 13. We do not
        knowingly collect data from children.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Changes and contact</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        We may update this policy as our ads, analytics, or legal obligations change; the “Last
        updated” date above will reflect the latest version. For privacy questions about
        tax.loanpaylogic.com, email support@loanpaylogic.com.
      </p>
    </div>
  );
}
