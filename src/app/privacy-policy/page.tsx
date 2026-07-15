import { companyContact } from "@/data/company";

export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <section aria-label="Privacy policy" className="px-gutter py-20">
      <div className="mx-auto max-w-[900px]">
        <h1 className="mb-6 text-3xl font-bold text-tranos-navy lg:text-display-h2">Privacy Policy</h1>
        <p className="mb-4 text-sm leading-relaxed text-tranos-graphite">
          This page is a placeholder pending legal review. Tranos collects information you submit
          through quote request and newsletter forms — name, company, email, phone number, and
          project details — solely to respond to your enquiry and, where you opt in, to send
          product updates.
        </p>
        <p className="mb-4 text-sm leading-relaxed text-tranos-graphite">
          For questions about this policy or to request removal of your data, contact{" "}
          <a href={`mailto:${companyContact.email}`} className="font-semibold text-tranos-blue">
            {companyContact.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
