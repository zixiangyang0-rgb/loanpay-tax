import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LoanPay Tax",
  description:
    "Privacy policy for tax.loanpaylogic.com describing cookies, analytics, advertising, and how to contact us.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-xs text-slate-400">Last updated: October 1, 2026. Applies to tax.loanpaylogic.com.</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        LoanPay Tax respects your privacy. This policy explains what we collect when you visit
        tax.loanpaylogic.com and how we use it.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Information we collect</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        Our estimators run in your browser. We do not ask you to create an account, and we do not
        store the income figures you type into our tools. If you email us at
        support@loanpaylogic.com, we receive your address and message so we can reply.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Cookies and advertising</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        We use Google AdSense to show ads. Google may use cookies, including the DoubleClick
        cookie, to personalize ads based on your visits to this and other sites. You can opt out
        of personalized advertising at Google Ads Settings. We may also use privacy-friendly
        analytics that records aggregate page views without identifying you.
      </p>
      <h2 className="mt-8 text-xl font-semibold">How we use information</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        We use limited technical data to keep the site fast, fix errors, understand which guides
        are helpful, and respond to support requests. We never sell personal information.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        For privacy questions about tax.loanpaylogic.com, email support@loanpaylogic.com and we
        will respond within a reasonable time.
      </p>
    </div>
  );
}
