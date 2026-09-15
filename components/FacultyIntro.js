import { GraduationCap } from 'lucide-react'
import { brand } from '@/data/site'
import { Button, SectionHeading, SunMark } from '@/components/ui'
import Reveal from '@/components/Reveal'

/**
 * Placeholder faculty section. Drop headshots, titles, biographies, education and
 * certifications in here once they are ready.
 */
export default function FacultyIntro() {
  return (
    <section id="faculty" className="relative overflow-hidden py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-10 size-80 rounded-full bg-sun/18 blur-3xl" />
      </div>

      <div className="container-x relative mx-auto max-w-3xl text-center">
        <Reveal>
          <SectionHeading
            eyebrow="Our Team"
            title="Meet Our"
            highlight="Faculty"
            align="center"
            className="mx-auto text-center"
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-ink-400">
            Meet the caring educators and leaders who make {brand.name} a special place for children to
            learn and grow.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-12 rounded-[2.5rem] border border-dashed border-ink/15 bg-white/60 px-8 py-14">
            <span className="mx-auto grid size-16 place-items-center rounded-3xl bg-sun-soft text-ink">
              <GraduationCap className="size-8" strokeWidth={1.7} />
            </span>
            <p className="display mt-6 text-[1.35rem] text-ink">
              Faculty profiles and introductions coming soon.
            </p>
            <SunMark className="animate-spin-slow mx-auto mt-6 size-8 text-sun/60" />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10">
            <Button href="/contact">Meet us in person</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
