"use client";

import Image from "next/image";
import { Suspense, useCallback, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import RevealSection from "@/components/RevealSection";
import { caseStudies, caseStudySectors } from "@/data/case-studies";
import { CaseStudy, CaseStudySector } from "@/types/product";

function CaseStudiesContent(): JSX.Element {
  const searchParams = useSearchParams();
  const sectorParam = searchParams.get("sector") as CaseStudySector | null;
  const initialSector: CaseStudySector | null =
    sectorParam && caseStudySectors.includes(sectorParam) ? sectorParam : null;

  const [activeSector, setActiveSector] = useState<CaseStudySector | null>(initialSector);

  const handleSectorChange = useCallback((sector: CaseStudySector) => {
    setActiveSector((previousSector) => (previousSector === sector ? null : sector));
  }, []);

  const filteredCaseStudies: CaseStudy[] = useMemo(() => {
    if (!activeSector) {
      return caseStudies;
    }
    return caseStudies.filter((study) => study.sector === activeSector);
  }, [activeSector]);

  return (
    <>
      <section aria-label="Case studies introduction" className="relative overflow-hidden px-gutter py-20">
        <div className="absolute inset-0 -z-10 bg-tranos-gradient-hero" />
        <div className="mx-auto max-w-[1400px]">
          <span className="clip-accent-angle mb-5 inline-block bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Case Studies
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white lg:text-display-h1">
            Projects Delivered Across Nigeria&apos;s Critical Sectors
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            Field-proven infrastructure across Power &amp; Energy, Oil &amp; Gas, Residential &amp;
            Commercial, Industrial &amp; Manufacturing, and Telecommunications operations.
          </p>
        </div>
      </section>

      <nav
        aria-label="Case study sector filter"
        className="sticky top-24 z-30 border-b border-tranos-slate bg-white/95 px-gutter py-4 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-3">
          {caseStudySectors.map((sector) => (
            <button
              key={sector}
              type="button"
              aria-pressed={activeSector === sector}
              onClick={() => handleSectorChange(sector)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200 ${
                activeSector === sector
                  ? "bg-tranos-navy text-white"
                  : "bg-tranos-slate/30 text-tranos-navy hover:bg-tranos-slate/60"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>
      </nav>

      <section aria-label="Case study project grid" className="px-gutter py-20">
        <div className="mx-auto max-w-[1400px]">
          {filteredCaseStudies.length === 0 ? (
            <p className="text-sm text-tranos-graphite">No projects found for this sector yet.</p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredCaseStudies.map((study: CaseStudy) => (
                <RevealSection
                  as="article"
                  key={study.id}
                  ariaLabel={study.title}
                  className="data-protected flex flex-col overflow-hidden rounded-2xl border border-tranos-slate bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-tranos-slate/20">
                    <Image
                      src={study.imageSrc}
                      alt={study.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      draggable={false}
                      className="select-none object-contain p-10"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h2 className="text-lg font-bold text-tranos-navy">{study.title}</h2>
                    <p className="text-sm leading-relaxed text-tranos-graphite">
                      <span className="font-semibold text-tranos-navy">Project: </span>
                      {study.projectSummary}
                    </p>
                    <span className="mt-auto w-fit rounded-full bg-tranos-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-tranos-blue">
                      {study.sector}
                    </span>
                  </div>
                </RevealSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function CaseStudiesPage(): JSX.Element {
  return (
    <Suspense fallback={null}>
      <CaseStudiesContent />
    </Suspense>
  );
}
