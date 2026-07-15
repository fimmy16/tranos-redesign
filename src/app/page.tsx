"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RevealSection from "@/components/RevealSection";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { useTabListKeyboardNav } from "@/hooks/useTabListKeyboardNav";
import { businessDivisions, complianceCertificates } from "@/data/divisions";
import { caseStudySectors } from "@/data/case-studies";
import { integrationPartners } from "@/data/energy";
import { BusinessDivision, ComplianceCertificate, ProductInterest } from "@/types/product";

const SERVICES = [
  { name: "Fabrication", href: "/services" },
  { name: "Installation & Maintenance", href: "/services" },
  { name: "Commissioning", href: "/services" },
];

// Maps a homepage division card to the Quote modal's product-interest options.
const DIVISION_TO_PRODUCT_INTEREST: Record<string, ProductInterest> = {
  gaskets: "Gaskets",
  "power-distribution": "Power Protection & Distribution",
  "power-energy": "Power Generation & Backup",
  enclosures: "Enclosures",
  "cable-management": "Cable Management & Support System",
  "warehouse-storage": "Warehouse Storage System",
  "lighting-wiring": "Light & Wiring Devices",
};

export default function HomePage(): JSX.Element {
  const { openQuoteModal } = useQuoteModal();
  const [activeDivisionId, setActiveDivisionId] = useState<string>(businessDivisions[0].id);
  const activeDivision =
    businessDivisions.find((division) => division.id === activeDivisionId) ?? businessDivisions[0];
  const divisionIds = businessDivisions.map((division) => division.id);
  const { registerRef, handleKeyDown } = useTabListKeyboardNav(
    divisionIds,
    activeDivisionId,
    setActiveDivisionId
  );

  return (
    <>
      <section aria-label="Hero introduction" className="relative overflow-hidden px-gutter py-24 lg:py-32">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          src="/videos/tranos-engineering.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-tranos-navy/70" />
        <div className="mx-auto max-w-[1400px] text-center">
          <RevealSection as="div" className="flex flex-col items-center gap-6">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-display-h1">
              Building a better future and adding value to life through innovative and
              engineering solutions.
            </h1>
            <p className="text-lg italic text-white/80">&hellip;Think further.</p>
            <Link
              href="/#products"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-tranos-navy transition-transform duration-200 hover:scale-[1.02]"
            >
              Explore Products
            </Link>
          </RevealSection>
        </div>
      </section>

      <RevealSection as="section" ariaLabel="Product catalog" id="products" className="px-gutter py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col items-center gap-3 text-center">
            <h2 className="text-3xl font-bold text-tranos-navy lg:text-display-h2">Products</h2>
            <p className="max-w-2xl text-base text-tranos-graphite">
              Explore Tranos&apos; full product catalog across seven business divisions.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Product category switcher">
            {businessDivisions.map((division: BusinessDivision) => (
              <button
                key={division.id}
                ref={registerRef(division.id)}
                type="button"
                role="tab"
                id={division.id}
                aria-selected={activeDivisionId === division.id}
                tabIndex={activeDivisionId === division.id ? 0 : -1}
                onClick={() => setActiveDivisionId(division.id)}
                onKeyDown={handleKeyDown}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200 ${
                  activeDivisionId === division.id
                    ? "bg-tranos-navy text-white"
                    : "bg-tranos-slate/30 text-tranos-navy hover:bg-tranos-slate/60"
                }`}
              >
                {division.name}
              </button>
            ))}
          </div>

          <div role="tabpanel" aria-label={`${activeDivision.name} overview`} className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-tranos-slate bg-white p-8 lg:grid-cols-2 lg:p-12">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-tranos-slate/10 data-protected">
              <Image
                src={activeDivision.imageSrc}
                alt={activeDivision.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                draggable={false}
                className="select-none object-contain p-8"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-tranos-navy">{activeDivision.name}</h3>
              <p className="text-base leading-relaxed text-tranos-graphite">
                {activeDivision.shortDescription}
              </p>
              <ul className="flex flex-wrap gap-2">
                {activeDivision.productLines.map((line) => (
                  <li
                    key={line}
                    className="rounded-full border border-tranos-blue/30 bg-tranos-blue/5 px-3 py-1 text-xs text-tranos-navy"
                  >
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={activeDivision.href}
                  className="rounded-full border border-tranos-navy px-6 py-3 text-center text-sm font-semibold text-tranos-navy transition-colors duration-200 hover:bg-tranos-navy hover:text-white"
                >
                  View {activeDivision.name}
                </Link>
                <button
                  type="button"
                  onClick={() =>
                    openQuoteModal(DIVISION_TO_PRODUCT_INTEREST[activeDivision.id] ?? "Other")
                  }
                  className="rounded-full bg-tranos-blue px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                >
                  Get in Touch With Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection as="section" ariaLabel="Industries we serve" className="bg-tranos-slate/20 px-gutter py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <h2 className="text-3xl font-bold text-tranos-navy lg:text-display-h2">
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {caseStudySectors.map((sector) => (
              <Link
                key={sector}
                href={`/case-studies?sector=${encodeURIComponent(sector)}`}
                className="flex min-h-[96px] items-center justify-center rounded-2xl border border-tranos-slate bg-white p-4 text-center text-sm font-semibold text-tranos-navy shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                {sector}
              </Link>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection as="section" ariaLabel="Our services" className="px-gutter py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <h2 className="text-3xl font-bold text-tranos-navy lg:text-display-h2">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="flex items-center justify-center rounded-2xl border border-tranos-slate bg-white p-6 text-center text-base font-semibold text-tranos-navy shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection as="section" ariaLabel="Why you can trust us" className="bg-tranos-slate/20 px-gutter py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-tranos-navy lg:text-display-h2">
              Why You Can Trust Us
            </h2>
            <p className="text-base leading-relaxed text-tranos-graphite">
              Through a robust Quality Management System (QMS) founded on precision, expertise, and
              reliability, Tranos prioritizes customer satisfaction by leveraging advanced CNC
              technology, skilled professionals, and error-proof processes to deliver consistent
              product and service excellence. Our commitment to quality is reinforced by ISO
              9001:2015 certification.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-tranos-slate bg-white data-protected">
            <Image
              src="/images/tranos-logo.png"
              alt="Tranos brand mark — CNC and precision manufacturing photography pending"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              draggable={false}
              className="select-none object-contain p-16"
            />
          </div>
        </div>
      </RevealSection>

      <section aria-label="Our partners" className="overflow-hidden border-y border-tranos-slate bg-white py-10">
        <div className="mb-6 px-gutter text-center text-xs font-semibold uppercase tracking-[0.3em] text-tranos-graphite">
          Our Partners
        </div>
        <div className="flex w-max">
          <div className="marquee-track flex items-center gap-16 pr-16">
            {[...integrationPartners, ...integrationPartners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex h-20 w-40 flex-shrink-0 items-center justify-center opacity-70 grayscale transition-opacity duration-300 hover:opacity-100"
              >
                <Image
                  src={partner.imageSrc}
                  alt={`${partner.name} integration partner logo`}
                  width={160}
                  height={64}
                  draggable={false}
                  className="h-auto max-h-16 w-auto select-none object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <RevealSection as="section" ariaLabel="Compliance verification" className="px-gutter py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col gap-3">
            <h2 className="text-3xl font-bold text-tranos-navy lg:text-display-h2">
              Independently Verified Compliance
            </h2>
            <p className="max-w-2xl text-base text-tranos-graphite">
              Certified quality and safety management systems governing every division of Tranos&apos;
              industrial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {complianceCertificates.map((certificate: ComplianceCertificate) => (
              <div key={certificate.id} className="flex flex-col gap-3 rounded-2xl border border-tranos-slate bg-tranos-slate/20 p-8">
                <span className="text-2xl font-bold text-tranos-navy">{certificate.standard}</span>
                <h3 className="text-base font-semibold text-tranos-navy/90">{certificate.title}</h3>
                <p className="text-sm leading-relaxed text-tranos-graphite">{certificate.description}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-tranos-graphite">
                  Scope: {certificate.issuedScope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection as="section" ariaLabel="Latest news" className="bg-tranos-slate/20 px-gutter py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-6 flex flex-col items-center gap-3 text-center">
            <h2 className="text-3xl font-bold text-tranos-navy lg:text-display-h2">Latest News</h2>
            <p className="max-w-2xl text-base text-tranos-graphite">
              News and updates are coming soon.
            </p>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
