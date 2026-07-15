"use client";

import { useQuoteModal } from "@/context/QuoteModalContext";

const services = [
  {
    title: "Fabrication",
    description:
      "In-house fabrication of switchgear, enclosures, cable support systems, and generator sets at our Lagos facility, under ISO 9001:2015 quality management.",
  },
  {
    title: "Installation & Maintenance",
    description:
      "Field installation and scheduled maintenance support for electrical distribution, power generation, and cable management systems.",
  },
  {
    title: "Commissioning",
    description:
      "Testing and commissioning of power distribution, protection, and control panels through to final handover.",
  },
];

export default function ServicesPage(): JSX.Element {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <section aria-label="Services introduction" className="relative overflow-hidden px-gutter py-20">
        <div className="absolute inset-0 -z-10 bg-tranos-gradient-hero" />
        <div className="mx-auto max-w-[1400px]">
          <span className="clip-accent-angle mb-5 inline-block bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Services
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white lg:text-display-h1">
            Fabrication, Installation &amp; Maintenance, and Commissioning
          </h1>
        </div>
      </section>

      <section aria-label="Service offerings" className="px-gutter py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-tranos-slate bg-white p-8">
              <h2 className="mb-3 text-xl font-bold text-tranos-navy">{service.title}</h2>
              <p className="text-sm leading-relaxed text-tranos-graphite">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 flex max-w-[1400px] justify-center">
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="rounded-full bg-tranos-blue px-8 py-4 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
          >
            Request Quote
          </button>
        </div>
      </section>
    </>
  );
}
