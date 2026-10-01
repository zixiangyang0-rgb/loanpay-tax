type Faq = { question: string; answer: string };

const SITE = "https://tax.loanpaylogic.com";
const ORG_NAME = "LoanPay Tax";
const ORG_LOGO = `${SITE}/icon.svg`;

export function OrgJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: SITE,
    logo: ORG_LOGO,
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "support@loanpaylogic.com",
        contactType: "customer support",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORG_NAME,
    url: SITE,
    inLanguage: "en-US",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  dateModified = "2026-10-01",
}: {
  title: string;
  description: string;
  url: string;
  dateModified?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: ORG_NAME, url: SITE },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: { "@type": "ImageObject", url: ORG_LOGO },
    },
    datePublished: "2026-01-15",
    dateModified,
    inLanguage: "en-US",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: Faq[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function Byline({ updated = "October 2026" }: { updated?: string }) {
  return (
    <p className="mt-4 text-xs text-slate-500">
      By <span className="font-medium text-slate-300">LoanPay Tax Editorial Team</span> · Updated:{" "}
      {updated} · Educational estimates only, not tax advice.
    </p>
  );
}
