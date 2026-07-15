import Link from "next/link";
import {
  careersHeroCopy,
  earlyCareerPrograms,
  experiencedHires,
  wantToWorkCopy,
} from "@/data/careers";
import { CareerProgram } from "@/types/product";

export default function CareersPage(): JSX.Element {
  return (
    <>
      <section aria-label="Careers introduction" className="relative overflow-hidden px-gutter py-24">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          src="/videos/tranos-our-people.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-tranos-navy/70" />
        <div className="mx-auto max-w-[1400px]">
          <span className="clip-accent-angle mb-5 inline-block bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Careers
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white lg:text-display-h1">
            {careersHeroCopy.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85">
            {careersHeroCopy.subheadline}
          </p>
        </div>
      </section>

      <section aria-label="Want to work at Tranos" className="px-gutter py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-6 text-3xl font-bold text-tranos-navy lg:text-display-h2">
            {wantToWorkCopy.subheading}
          </h2>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              {wantToWorkCopy.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-tranos-graphite">
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-tranos-navy">
                At Tranos We
              </p>
              <ul className="flex flex-col gap-2">
                {wantToWorkCopy.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-tranos-graphite">
                    <span aria-hidden="true" className="text-tranos-blue">
                      &bull;
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <Link
              href={wantToWorkCopy.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-tranos-blue px-8 py-4 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
            >
              {wantToWorkCopy.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="Early career roles" className="bg-tranos-slate/20 px-gutter py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-10 text-3xl font-bold text-tranos-navy lg:text-display-h2">
            Early Career Roles
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {earlyCareerPrograms.map((program: CareerProgram) => (
              <article key={program.id} className="flex flex-col gap-4 rounded-2xl border border-tranos-slate bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-tranos-navy">{program.name}</h3>
                <p className="text-sm leading-relaxed text-tranos-graphite">{program.description}</p>
                {program.benefits && (
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-tranos-navy">
                      Benefits
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {program.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-2 text-sm text-tranos-graphite">
                          <span aria-hidden="true" className="text-tranos-blue">
                            &bull;
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-tranos-navy">
                    Eligibility Criteria
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {program.eligibility.map((criterion) => (
                      <li key={criterion} className="flex gap-2 text-sm text-tranos-graphite">
                        <span aria-hidden="true" className="text-tranos-blue">
                          &bull;
                        </span>
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={program.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-fit rounded-full border border-tranos-navy px-6 py-3 text-sm font-semibold text-tranos-navy transition-colors duration-200 hover:bg-tranos-navy hover:text-white"
                >
                  {program.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Experienced hires" className="px-gutter py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-6 text-3xl font-bold text-tranos-navy lg:text-display-h2">
            Experienced Hires
          </h2>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              {experiencedHires.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-tranos-graphite">
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-tranos-navy">
                {experiencedHires.lookingForHeading}
              </p>
              <ul className="flex flex-col gap-2">
                {experiencedHires.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-tranos-graphite">
                    <span aria-hidden="true" className="text-tranos-blue">
                      &bull;
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <Link
              href={experiencedHires.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-tranos-blue px-8 py-4 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
            >
              {experiencedHires.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
