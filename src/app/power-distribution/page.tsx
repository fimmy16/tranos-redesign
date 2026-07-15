"use client";

import Image from "next/image";
import RevealSection from "@/components/RevealSection";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { atexPanelProducts, atexPanelsIntro } from "@/data/atex-panels";
import {
  lowVoltageSwitchgear,
  mediumVoltageSwitchgear,
  powerDistributionIntro,
} from "@/data/power-distribution";
import { AtexPanelProduct, SwitchgearFeatureSet } from "@/types/product";

export default function PowerDistributionPage(): JSX.Element {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <section aria-label="Power protection and distribution introduction" className="relative overflow-hidden px-gutter py-20">
        <div className="absolute inset-0 -z-10 bg-tranos-gradient-hero" />
        <div className="mx-auto max-w-[1400px]">
          <span className="clip-accent-angle mb-5 inline-block bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Power Protection &amp; Distribution
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white lg:text-display-h1">
            Nigeria&apos;s Leading Manufacturer of Power Distribution &amp; Control Systems
          </h1>
          {powerDistributionIntro.map((paragraph) => (
            <p key={paragraph} className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <nav
        aria-label="Power distribution section switcher"
        className="sticky top-24 z-30 border-b border-tranos-slate bg-white/95 px-gutter py-4 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-3">
          <a href="#low-voltage" className="rounded-full bg-tranos-slate/30 px-5 py-3 text-sm font-semibold text-tranos-navy transition-colors duration-200 hover:bg-tranos-slate/60">
            Low-Voltage Switchgear
          </a>
          <a href="#atex-power-panels" className="rounded-full bg-tranos-slate/30 px-5 py-3 text-sm font-semibold text-tranos-navy transition-colors duration-200 hover:bg-tranos-slate/60">
            ATEX Power Panels
          </a>
          <a href="#medium-voltage" className="rounded-full bg-tranos-slate/30 px-5 py-3 text-sm font-semibold text-tranos-navy transition-colors duration-200 hover:bg-tranos-slate/60">
            Medium Voltage
          </a>
        </div>
      </nav>

      <RevealSection as="section" id="low-voltage" ariaLabel="Low voltage power distribution panels and switchgears" className="px-gutter py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-10 text-2xl font-bold text-tranos-navy lg:text-display-h3">
            Low-Voltage Power Distribution Panels and Switchgears
          </h2>
          <div className="flex flex-col gap-16">
            {lowVoltageSwitchgear.map((switchgear: SwitchgearFeatureSet, index: number) => {
              const isEvenRow = index % 2 === 0;
              return (
                <article
                  key={switchgear.id}
                  className={`flex flex-col gap-10 lg:flex-row ${isEvenRow ? "" : "lg:flex-row-reverse"}`}
                >
                  <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-2xl border border-tranos-slate bg-tranos-slate/10 data-protected">
                    <Image
                      src={
                        switchgear.id === "siemens-sivacon-s8"
                          ? "/images/products/power-distribution/siemens-sivacon-s8.webp"
                          : "/images/products/power-distribution/tranos-elite-panel.webp"
                      }
                      alt={switchgear.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      draggable={false}
                      className="select-none object-contain p-10"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-4">
                    <h3 className="text-xl font-bold text-tranos-navy">{switchgear.name}</h3>
                    <p className="text-sm font-semibold uppercase tracking-wide text-tranos-blue">
                      {switchgear.tagline}
                    </p>
                    {switchgear.description.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-relaxed text-tranos-graphite">
                        {paragraph}
                      </p>
                    ))}
                    {switchgear.stats && (
                      <ul className="flex flex-col gap-1">
                        {switchgear.stats.map((stat) => (
                          <li key={stat} className="text-sm font-semibold text-tranos-navy">
                            {stat}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-tranos-navy">
                        Features
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {switchgear.features.map((feature) => (
                          <li key={feature} className="flex gap-2 text-sm text-tranos-graphite">
                            <span aria-hidden="true" className="text-tranos-blue">
                              &bull;
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {switchgear.applications && (
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-tranos-navy">
                          Applications
                        </p>
                        <ul className="flex flex-col gap-1.5">
                          {switchgear.applications.map((application) => (
                            <li key={application} className="flex gap-2 text-sm text-tranos-graphite">
                              <span aria-hidden="true" className="text-tranos-blue">
                                &bull;
                              </span>
                              {application}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => openQuoteModal("Power Protection & Distribution")}
                      className="mt-2 w-fit rounded-full bg-tranos-blue px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                    >
                      {switchgear.callToAction}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </RevealSection>

      <RevealSection
        as="section"
        id="atex-power-panels"
        ariaLabel="ATEX power panels"
        className="border-t border-tranos-slate bg-tranos-slate/20 px-gutter py-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-6 text-2xl font-bold text-tranos-navy lg:text-display-h3">
            ATEX Power Panels
          </h2>
          <div className="mb-10 flex flex-col gap-4">
            {atexPanelsIntro.map((paragraph) => (
              <p key={paragraph} className="max-w-3xl text-sm leading-relaxed text-tranos-graphite">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {atexPanelProducts.map((panel: AtexPanelProduct) => (
              <article
                key={panel.id}
                className="data-protected flex flex-col overflow-hidden rounded-2xl border border-tranos-slate bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-tranos-slate/10">
                  <Image
                    src={panel.imageSrc}
                    alt={panel.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    draggable={false}
                    className="select-none object-contain p-6"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-base font-semibold text-tranos-navy">{panel.name}</h3>
                  <ul className="flex flex-col gap-1.5">
                    {panel.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-xs leading-relaxed text-tranos-graphite">
                        <span aria-hidden="true" className="text-tranos-blue">
                          &bull;
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => openQuoteModal("Power Protection & Distribution")}
              className="rounded-full bg-tranos-blue px-8 py-4 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
            >
              Request Quote
            </button>
          </div>
        </div>
      </RevealSection>

      <RevealSection as="section" id="medium-voltage" ariaLabel="Medium voltage power switchgears" className="px-gutter py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-10 text-2xl font-bold text-tranos-navy lg:text-display-h3">
            Medium Voltage Power Switchgears
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {mediumVoltageSwitchgear.map((switchgear: SwitchgearFeatureSet) => (
              <article
                key={switchgear.id}
                className="flex flex-col gap-4 rounded-2xl border border-tranos-slate bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-tranos-navy">{switchgear.name}</h3>
                <p className="text-sm font-semibold uppercase tracking-wide text-tranos-blue">
                  {switchgear.tagline}
                </p>
                {switchgear.description.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-tranos-graphite">
                    {paragraph}
                  </p>
                ))}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-tranos-navy">
                    Features
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {switchgear.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm text-tranos-graphite">
                        <span aria-hidden="true" className="text-tranos-blue">
                          &bull;
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {switchgear.applications && (
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-tranos-navy">
                      Benefits
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {switchgear.applications.map((application) => (
                        <li
                          key={application}
                          className="rounded-full bg-tranos-blue/10 px-3 py-1 text-xs font-semibold text-tranos-blue"
                        >
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => openQuoteModal("Power Protection & Distribution")}
                  className="mt-2 w-fit rounded-full bg-tranos-blue px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                >
                  {switchgear.callToAction}
                </button>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>
    </>
  );
}
