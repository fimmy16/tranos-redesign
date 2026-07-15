"use client";

import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/RevealSection";
import { useQuoteModal } from "@/context/QuoteModalContext";
import {
  cableClampProducts,
  cableGlandFamilies,
  cableGlandsIntro,
  cableGlandsValueProps,
  cableTraySpec,
  cableTraySurfaceTreatments,
  equipmentRacks,
} from "@/data/cable-management";

const sectionLinks = [
  { id: "cable-trays", label: "Cable Trays & Ladders" },
  { id: "equipment-racks", label: "Equipment Racks & Supports" },
  { id: "cable-clamps", label: "Clamps & Cleats" },
  { id: "cable-glands", label: "Cable Glands" },
];

export default function CableManagementPage(): JSX.Element {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <section aria-label="Cable management hub introduction" className="relative overflow-hidden px-gutter py-20">
        <div className="absolute inset-0 -z-10 bg-tranos-gradient-hero" />
        <div className="mx-auto max-w-[1400px]">
          <span className="clip-accent-angle mb-5 inline-block bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Cable Management & Support
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white lg:text-display-h1">
            Cable Management &amp; Support System
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            Tranos TRAC Cable Trays &amp; Ladders, Tranos ERIS Equipment Racks &amp;
            Instrumentation Supports, Tranos Ellis Cable Clamps/Cleats, and a full range of cable
            glands.
          </p>
        </div>
      </section>

      <nav
        aria-label="Cable management section switcher"
        className="sticky top-24 z-30 border-b border-tranos-slate bg-white/95 px-gutter py-4 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-3">
          {sectionLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-full bg-tranos-slate/30 px-5 py-3 text-sm font-semibold text-tranos-navy transition-colors duration-200 hover:bg-tranos-slate/60"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <RevealSection
        as="section"
        id="cable-trays"
        ariaLabel="Cable trays and ladders"
        className="px-gutter py-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-4 text-2xl font-bold text-tranos-navy lg:text-display-h3">
            Cable Trays and Ladders
          </h2>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <p className="text-sm leading-relaxed text-tranos-graphite">
                Our Cable Trays are specially designed for use in a wide range of settings. They are
                fabricated from quality mild steel and stainless-steel materials to meet your cable
                routing needs.
              </p>
              <p className="text-sm leading-relaxed text-tranos-graphite">
                These products are available in various size options, ranging from {cableTraySpec.width}{" "}
                in width and load depth of {cableTraySpec.height}. Tranos&apos; Trays are easy to
                install and require low maintenance.
              </p>
              <table className="mt-2 w-full border-collapse text-left text-sm">
                <tbody>
                  <tr className="border-b border-tranos-slate">
                    <th scope="row" className="py-3 pr-4 font-semibold text-tranos-navy">Model</th>
                    <td className="py-3 text-tranos-graphite">{cableTraySpec.model}</td>
                  </tr>
                  <tr className="border-b border-tranos-slate">
                    <th scope="row" className="py-3 pr-4 font-semibold text-tranos-navy">Material</th>
                    <td className="py-3 text-tranos-graphite">{cableTraySpec.material}</td>
                  </tr>
                  <tr className="border-b border-tranos-slate">
                    <th scope="row" className="py-3 pr-4 font-semibold text-tranos-navy">Finish</th>
                    <td className="py-3 text-tranos-graphite">{cableTraySpec.finish}</td>
                  </tr>
                  <tr className="border-b border-tranos-slate">
                    <th scope="row" className="py-3 pr-4 font-semibold text-tranos-navy">Mounting</th>
                    <td className="py-3 text-tranos-graphite">{cableTraySpec.mounting}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-3 pr-4 font-semibold text-tranos-navy">Compliance</th>
                    <td className="py-3 text-tranos-graphite">{cableTraySpec.compliance}</td>
                  </tr>
                </tbody>
              </table>
              <Link
                href="/documents/tranos-trac-datasheet.pdf"
                className="mt-2 w-fit rounded-full bg-tranos-blue px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
              >
                Download Technical Datasheet
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-tranos-slate bg-tranos-slate/20 data-protected">
              <Image
                src="/images/products/cable-management/steel-cable-tray.webp"
                alt="Tranos TRAC cable tray"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                draggable={false}
                className="select-none object-contain p-12"
              />
            </div>
          </div>

          <div className="mt-14">
            <h3 className="mb-6 text-lg font-bold text-tranos-navy">Surface Treatments</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {cableTraySurfaceTreatments.map((treatment) => (
                <div key={treatment.name} className="rounded-2xl border border-tranos-slate bg-white p-5">
                  <h4 className="mb-2 text-sm font-semibold text-tranos-navy">{treatment.name}</h4>
                  <p className="text-sm leading-relaxed text-tranos-graphite">{treatment.useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection
        as="section"
        id="equipment-racks"
        ariaLabel="Equipment racks and instrumentation supports"
        className="bg-tranos-slate/20 px-gutter py-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-10 text-2xl font-bold text-tranos-navy lg:text-display-h3">
            Equipment Rack &amp; Instrumentation Support
          </h2>
          {equipmentRacks.map((rack) => (
            <div key={rack.id} className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-tranos-slate bg-white data-protected">
                <Image
                  src={rack.imageSrc}
                  alt={rack.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  draggable={false}
                  className="select-none object-contain p-12"
                />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <h3 className="text-xl font-bold text-tranos-navy">{rack.name}</h3>
                {rack.description.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-tranos-graphite">
                    {paragraph}
                  </p>
                ))}
                <Link
                  href={rack.datasheetHref}
                  className="mt-2 w-fit rounded-full bg-tranos-blue px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                >
                  Data Sheet
                </Link>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection
        as="section"
        id="cable-clamps"
        ariaLabel="Cable clamps and cleats"
        className="px-gutter py-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-10 text-2xl font-bold text-tranos-navy lg:text-display-h3">
            Cable Clamps &amp; Cleats
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {cableClampProducts.map((clamp) => (
              <article
                key={clamp.id}
                className="data-protected flex flex-col overflow-hidden rounded-2xl border border-tranos-slate bg-white shadow-sm"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-tranos-slate/20">
                  <Image
                    src={clamp.imageSrc}
                    alt={clamp.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    draggable={false}
                    className="select-none object-contain p-8"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-base font-semibold text-tranos-navy">{clamp.name}</h3>
                  <p className="text-sm leading-relaxed text-tranos-graphite">{clamp.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection
        as="section"
        id="cable-glands"
        ariaLabel="Cable glands"
        className="bg-tranos-slate/20 px-gutter py-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-4 text-2xl font-bold text-tranos-navy lg:text-display-h3">
            Cable Glands
          </h2>
          <div className="mb-10 flex max-w-3xl flex-col gap-4">
            {cableGlandsIntro.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-tranos-graphite">
                {paragraph}
              </p>
            ))}
          </div>

          <h3 className="mb-8 text-lg font-bold text-tranos-navy">Our Cable Gland Range</h3>
          <div className="flex flex-col gap-14">
            {cableGlandFamilies.map((family, index) => (
              <div key={family.id} className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl border border-tranos-slate bg-white data-protected">
                    <Image
                      src={family.imageSrc}
                      alt={family.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 100vw"
                      draggable={false}
                      className="select-none object-contain p-8"
                    />
                  </div>
                  <h4 className="text-base font-semibold text-tranos-navy">
                    {index + 1}. {family.name}
                  </h4>
                  <p className="text-sm leading-relaxed text-tranos-graphite">{family.description}</p>
                  <dl className="flex flex-col gap-1 text-sm">
                    <div className="flex gap-2">
                      <dt className="font-semibold text-tranos-navy">{family.specLabel}:</dt>
                      <dd className="text-tranos-graphite">{family.specValue}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-semibold text-tranos-navy">Best For:</dt>
                      <dd className="text-tranos-graphite">{family.bestFor}</dd>
                    </div>
                  </dl>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-tranos-slate bg-white">
                  {family.codeTable ? (
                    <table className="w-full min-w-[320px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="bg-tranos-navy">
                          <th scope="col" className="px-5 py-3 font-semibold text-white">Product</th>
                          <th scope="col" className="px-5 py-3 font-semibold text-white">Code</th>
                        </tr>
                      </thead>
                      <tbody>
                        {family.codeTable.map((row) => (
                          <tr key={row.code} className="border-b border-tranos-slate">
                            <td className="px-5 py-3 text-tranos-graphite">{row.product}</td>
                            <td className="px-5 py-3 text-tranos-graphite">{row.code}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="flex h-full flex-col items-start justify-center gap-4 p-6">
                      <p className="text-sm leading-relaxed text-tranos-graphite">
                        Part codes for this range are confirmed against the current Tranos catalog
                        at time of order.
                      </p>
                      <button
                        type="button"
                        onClick={() => openQuoteModal("Cable Management & Support System")}
                        className="rounded-full border border-tranos-navy px-5 py-2.5 text-sm font-semibold text-tranos-navy transition-colors duration-200 hover:bg-tranos-navy hover:text-white"
                      >
                        Contact Us for Exact Part Codes
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {cableGlandsValueProps.map((valueProp) => (
              <div key={valueProp.title} className="rounded-2xl border border-tranos-slate bg-white p-6">
                <h4 className="mb-2 text-base font-semibold text-tranos-navy">{valueProp.title}</h4>
                <p className="text-sm leading-relaxed text-tranos-graphite">{valueProp.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => openQuoteModal("Cable Management & Support System")}
              className="rounded-full bg-tranos-blue px-8 py-4 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
            >
              Request Quote
            </button>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
