import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { brand } from '@/data/site'
import { teamPeople } from '@/data/team'
import TeamPhoto from '@/components/TeamPhoto'
import { Button, SectionHeading } from '@/components/ui'
import Reveal from '@/components/Reveal'

/** Team preview on the homepage and About page. Each card links to that person on the Our Team page. */
export default function FacultyIntro() {
  return (
    <section id="faculty" className="relative overflow-hidden py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-10 size-80 rounded-full bg-sun/18 blur-3xl" />
      </div>

      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow="Our Team"
            title="Meet Our"
            highlight="Team"
            align="center"
            className="mx-auto text-center"
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[1.02rem] leading-relaxed text-ink-400">
            Meet the caring educators and leaders who make {brand.name} a special place for children to
            learn and grow.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {teamPeople.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} className="h-full">
              <Link
                href={`/team#${p.slug}`}
                className="group block h-full rounded-[2rem] border border-ink/5 bg-white p-3 shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-sand">
                  <TeamPhoto person={p} sizes="(max-width: 1024px) 45vw, 240px" />
                </div>
                <span className="block px-2 pt-4 text-center font-bold leading-snug text-ink transition group-hover:text-brand">
                  {p.shortName}
                </span>
                <span className="block px-2 pb-2 pt-1 text-center text-[0.82rem] text-ink-400">{p.previewRole}</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button href="/team">
              Meet our team <ArrowRight className="size-4" />
            </Button>
            <Button href="/tour" variant="outline">
              Meet us in person
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
