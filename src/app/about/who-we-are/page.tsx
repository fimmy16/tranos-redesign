import Link from "next/link";
import { companyValues, missionStatement, valuesIntro, visionStatement, whoWeAreCopy } from "@/data/who-we-are";
import { complianceCertificates } from "@/data/divisions";
import { companyContact } from "@/data/company";
import { CompanyValue } from "@/types/product";

export default function WhoWeArePage(): JSX.Element {
  return (
    <>
      <section aria-label="Who we are introduction" className="relative overflow-hidden px-gutter py-20">
        <div className="absolute inset-0 -z-10 bg-tranos-gradient-hero" />
        <div className="mx-auto max-w-[1400px]">
          <span className="clip-accent-angle mb-5 inline-block bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            About Us
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white lg:text-display-h1">
            Who We Are
          </h1>
        </div>
      </section>

      <nav aria-label="About Us section switcher" className="sticky top-24 z-30 border-b border-tranos-slate bg-white/95 px-gutter py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-3">
          <span className="rounded-full bg-tranos-navy px-5 py-3 text-sm font-semibold text-white">
            Who We Are
          </span>
          <Link href="/about/leadership" className="rounded-full bg-tranos-slate/30 px-5 py-3 text-sm font-semibold text-tranos-navy transition-colors duration-200 hover:bg-tranos-slate/60">
            Leadership
          </Link>
        </div>
      </nav>

      <section aria-label="Who we are copy" className="px-gutter py-20">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6">
          {whoWeAreCopy.map((paragraph) => (
            <p key={paragraph} className="max-w-3xl text-base leading-relaxed text-tranos-graphite">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section aria-label="Mission and vision" className="bg-tranos-slate/20 px-gutter py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-tranos-slate bg-white p-8">
            <h2 className="mb-3 text-xl font-bold text-tranos-navy">Our Mission</h2>
            <p className="text-sm italic leading-relaxed text-tranos-graphite">{missionStatement}</p>
          </div>
          <div className="rounded-2xl border border-tranos-slate bg-white p-8">
            <h2 className="mb-3 text-xl font-bold text-tranos-navy">Our Vision</h2>
            <p className="text-sm italic leading-relaxed text-tranos-graphite">{visionStatement}</p>
          </div>
        </div>
      </section>

      <section aria-label="Our values" className="px-gutter py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-4 text-3xl font-bold text-tranos-navy lg:text-display-h2">Our Values</h2>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-tranos-graphite">{valuesIntro}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {companyValues.map((value: CompanyValue) => (
              <div key={value.id} className="rounded-2xl border border-tranos-slate bg-white p-6">
                <h3 className="mb-2 text-base font-semibold text-tranos-navy">{value.name}</h3>
                <p className="text-sm leading-relaxed text-tranos-graphite">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Certifications and standards" className="bg-tranos-slate/20 px-gutter py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-10 text-3xl font-bold text-tranos-navy lg:text-display-h2">
            Certifications &amp; Standards
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {complianceCertificates.map((certificate) => (
              <div key={certificate.id} className="rounded-2xl border border-tranos-slate bg-white p-8">
                <span className="text-2xl font-bold text-tranos-navy">{certificate.standard}</span>
                <h3 className="mt-2 text-base font-semibold text-tranos-navy/90">{certificate.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tranos-graphite">
                  {certificate.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Head office information" className="px-gutter py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-4 text-2xl font-bold text-tranos-navy">Head Office</h2>
          <p className="text-sm text-tranos-graphite">{companyContact.headOfficeAddress}</p>
          <p className="mt-2 text-sm text-tranos-graphite">Factory: {companyContact.factoryAddress}</p>
        </div>
      </section>
    </>
  );
}
