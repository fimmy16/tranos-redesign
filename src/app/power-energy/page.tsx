"use client";

import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/RevealSection";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { energySectorDeployments, generatorProducts, integrationPartners } from "@/data/energy";
import { EnergySectorDeployment, GeneratorProduct, PartnerLogo } from "@/types/product";

export default function PowerEnergyPage(): JSX.Element {
  const { openQuoteModal } = useQuoteModal();
  const loopedPartners: PartnerLogo[] = [...integrationPartners, ...integrationPartners];

  return (
    <>
      <section aria-label="Power and energy hub introduction" className="relative overflow-hidden px-gutter py-20">
        <div className="absolute inset-0 -z-10 bg-tranos-gradient-hero" />
        <div className="mx-auto max-w-[1400px]">
          <span className="clip-accent-angle mb-5 inline-block bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Power Generation &amp; Energy
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white lg:text-display-h1">
            Continuous, Hybrid &amp; Backup Power for Critical Operations
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            Proprietary Tranos THUNDERBOLT generator lines, variable-speed and
            telecom-grade TG-Series LPG gas generators, industrial backup UPS
            networks, and alternative hybrid configurations engineered for
            continuous-duty industrial operation.
          </p>
        </div>
      </section>

      <section aria-label="Global integration partners" className="overflow-hidden border-y border-tranos-slate bg-white py-10">
        <div className="mb-6 px-gutter text-center text-xs font-semibold uppercase tracking-[0.3em] text-tranos-graphite">
          Global Integration Partners
        </div>
        <div className="flex w-max">
          <div className="marquee-track flex items-center gap-16 pr-16">
            {loopedPartners.map((partner: PartnerLogo, index: number) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex h-14 w-32 flex-shrink-0 items-center justify-center opacity-70 grayscale transition-opacity duration-300 hover:opacity-100"
              >
                <Image
                  src={partner.imageSrc}
                  alt={`${partner.name} integration partner logo`}
                  width={120}
                  height={40}
                  draggable={false}
                  className="h-auto max-h-10 w-auto select-none object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <RevealSection as="section" ariaLabel="Generator product lineup" className="px-gutter py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col gap-3">
            <h2 className="text-3xl font-bold text-tranos-navy lg:text-display-h2">
              Generator &amp; Backup Power Product Lines
            </h2>
            <p className="max-w-2xl text-base text-tranos-graphite">
              Full technical specifications available through the Specs Engine for engineering
              procurement teams.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {generatorProducts.map((generator: GeneratorProduct) => (
              <article
                key={generator.id}
                className="data-protected flex flex-col gap-5 rounded-2xl border border-tranos-slate bg-white p-8 shadow-sm"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-tranos-slate/20">
                  <Image
                    src={generator.imageSrc}
                    alt={generator.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    draggable={false}
                    className="select-none object-contain p-10"
                  />
                </div>
                <h3 className="text-xl font-bold text-tranos-navy">{generator.name}</h3>
                <p className="text-sm leading-relaxed text-tranos-graphite">{generator.tagline}</p>
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  {generator.specs.map((spec) => (
                    <div key={spec.label} className="flex flex-col gap-1">
                      <dt className="text-xs uppercase tracking-wider text-tranos-graphite">
                        {spec.label}
                      </dt>
                      <dd className="font-semibold text-tranos-navy">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={generator.datasheetHref}
                    className="rounded-full border border-tranos-navy px-6 py-3 text-center text-sm font-semibold text-tranos-navy transition-colors duration-200 hover:bg-tranos-navy hover:text-white"
                  >
                    Download Full Datasheet
                  </Link>
                  <button
                    type="button"
                    onClick={() => openQuoteModal("Power Generation & Backup")}
                    className="rounded-full bg-tranos-blue px-6 py-3 text-center text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                  >
                    Request Quote
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection
        as="section"
        ariaLabel="Sector deployment breakdown"
        className="border-t border-tranos-slate bg-tranos-slate/20 px-gutter py-24"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col gap-3">
            <h2 className="text-3xl font-bold text-tranos-navy lg:text-display-h2">
              Sector Deployment Overview
            </h2>
            <p className="max-w-2xl text-base text-tranos-graphite">
              Power and energy configurations mapped against the operational demands of each core
              industrial sector.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {energySectorDeployments.map((deployment: EnergySectorDeployment) => (
              <div key={deployment.id} className="flex flex-col gap-4 rounded-2xl border border-tranos-slate bg-white p-6">
                <h3 className="text-lg font-bold text-tranos-navy">{deployment.sector}</h3>
                <ul className="flex flex-col gap-3">
                  {deployment.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm leading-relaxed text-tranos-graphite">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </>
  );
}
