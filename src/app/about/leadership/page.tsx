import Image from "next/image";
import Link from "next/link";
import { leadershipTeam } from "@/data/leadership";
import { LeadershipProfile } from "@/types/product";

export default function LeadershipPage(): JSX.Element {
  return (
    <>
      <section aria-label="Leadership introduction" className="relative overflow-hidden px-gutter py-20">
        <div className="absolute inset-0 -z-10 bg-tranos-gradient-hero" />
        <div className="mx-auto max-w-[1400px]">
          <span className="clip-accent-angle mb-5 inline-block bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            About Us
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white lg:text-display-h1">
            Tranos Leadership
          </h1>
        </div>
      </section>

      <nav aria-label="About Us section switcher" className="sticky top-24 z-30 border-b border-tranos-slate bg-white/95 px-gutter py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-3">
          <Link href="/about/who-we-are" className="rounded-full bg-tranos-slate/30 px-5 py-3 text-sm font-semibold text-tranos-navy transition-colors duration-200 hover:bg-tranos-slate/60">
            Who We Are
          </Link>
          <span className="rounded-full bg-tranos-navy px-5 py-3 text-sm font-semibold text-white">
            Leadership
          </span>
        </div>
      </nav>

      <section aria-label="Leadership team" className="px-gutter py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 md:grid-cols-2">
          {leadershipTeam.map((leader: LeadershipProfile) => (
            <article key={leader.id} className="flex flex-col gap-4 rounded-2xl border border-tranos-slate bg-white p-8 shadow-sm">
              <div className="relative aspect-square w-24 overflow-hidden rounded-full border border-tranos-slate bg-tranos-slate/20">
                <Image
                  src={leader.imageSrc}
                  alt={leader.imageAlt}
                  fill
                  sizes="96px"
                  draggable={false}
                  className="select-none object-contain p-4"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-tranos-navy">{leader.name}</h2>
                <p className="text-sm font-semibold uppercase tracking-wide text-tranos-blue">
                  {leader.title}
                </p>
              </div>
              {leader.bio.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-tranos-graphite">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
