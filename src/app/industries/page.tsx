import Link from "next/link";
import { caseStudySectors } from "@/data/case-studies";

const industryDescriptions: Record<string, string> = {
  "Power & Energy":
    "Generation, distribution, and backup power infrastructure for utilities and independent power producers.",
  "Oil & Gas": "ATEX-rated enclosures, switchgear, and hazardous-area equipment for upstream and downstream operations.",
  "Residential & Commercial": "Electrical distribution, backup power, and wiring infrastructure for residential and commercial buildings.",
  "Industrial & Manufacturing": "Plant-wide power distribution, control panels, and cable management for production facilities.",
  Telecommunications: "Backup and hybrid power systems, low-noise generator enclosures, and remote monitoring for telecom sites.",
};

export default function IndustriesPage(): JSX.Element {
  return (
    <>
      <section aria-label="Industries introduction" className="relative overflow-hidden px-gutter py-20">
        <div className="absolute inset-0 -z-10 bg-tranos-gradient-hero" />
        <div className="mx-auto max-w-[1400px]">
          <span className="clip-accent-angle mb-5 inline-block bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Industries
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white lg:text-display-h1">
            Sectors We Serve
          </h1>
        </div>
      </section>

      <section aria-label="Industry sectors" className="px-gutter py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudySectors.map((sector) => (
            <Link
              key={sector}
              href={`/case-studies?sector=${encodeURIComponent(sector)}`}
              className="rounded-2xl border border-tranos-slate bg-white p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <h2 className="mb-3 text-xl font-bold text-tranos-navy">{sector}</h2>
              <p className="text-sm leading-relaxed text-tranos-graphite">
                {industryDescriptions[sector]}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-tranos-blue">
                View case studies &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
