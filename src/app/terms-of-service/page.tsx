import { companyContact } from "@/data/company";

export default function TermsOfServicePage(): JSX.Element {
  return (
    <section aria-label="Terms of service" className="px-gutter py-20">
      <div className="mx-auto max-w-[900px]">
        <h1 className="mb-6 text-3xl font-bold text-tranos-navy lg:text-display-h2">Terms of Service</h1>
        <p className="mb-4 text-sm leading-relaxed text-tranos-graphite">
          This page is a placeholder pending legal review. Product specifications published on this
          site are indicative and subject to confirmation on formal quotation. Datasheets and
          catalog codes referenced across the site should be verified against the current Tranos
          catalog before being used for procurement.
        </p>
        <p className="mb-4 text-sm leading-relaxed text-tranos-graphite">
          For a binding quotation or contract terms, contact{" "}
          <a href={`mailto:${companyContact.email}`} className="font-semibold text-tranos-blue">
            {companyContact.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
