import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight, Check, Clock } from 'lucide-react'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import Reveal from '@/components/Reveal'
import { Button, SectionHeading, accentMap } from '@/components/ui'
import { getProgram, programs } from '@/data/programs'
import { brand, site } from '@/data/site'

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const program = getProgram(slug)
  if (!program) return {}
  return {
    title: `${program.name} (${program.age})`,
    description: program.description.slice(0, 155),
    alternates: { canonical: `/programs/${program.slug}` },
    openGraph: { images: [program.image] },
  }
}

export default async function ProgramPage({ params }) {
  const { slug } = await params
  const program = getProgram(slug)
  if (!program) notFound()

  const accent = accentMap[program.accent]
  const others = programs.filter((p) => p.slug !== program.slug)

  return (
    <>
      <PageHero
        eyebrow={program.age}
        title={program.name}
        text={program.tagline}
        crumbs={[{ label: 'Programs', href: '/programs' }, { label: program.name }]}
      />

      <section className="py-20">
        <div className="container-x grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="blob-1 overflow-hidden shadow-lift ring-8 ring-white">
              <Image
                src={program.image}
                alt={`${program.name} at ${brand.name}`}
                width={1600}
                height={1067}
                priority
                sizes="(max-width: 1024px) 92vw, 560px"
                className="h-[340px] w-full object-cover sm:h-[440px]"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className={`inline-block rounded-full ${accent.bg} px-4 py-2 text-[0.82rem] font-bold text-ink`}>
                Ages {program.age}
              </span>
              <h2 className="display mt-5 text-[clamp(1.7rem,3.6vw,2.5rem)] text-ink">
                What your child’s time looks like
              </h2>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-400">{program.description}</p>
            </Reveal>

            <Reveal delay={90}>
              <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
                {program.focus.map((f) => (
                  <li key={f} className="flex gap-3 text-[0.94rem] leading-snug text-ink-600">
                    <span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${accent.dot} text-white`}>
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact">
                  Book a Visit <ArrowRight className="size-4" />
                </Button>
                <Button href={site.phoneHref} variant="outline">
                  Call {site.phone}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Daily rhythm */}
      <section className="bg-sand/60 py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="A typical day"
              title="The rhythm of"
              highlight="a day at GLCM"
              text="Predictable enough that children feel safe, flexible enough that they stay children. Times shift with the group — this is the shape, not a stopwatch."
              align="center"
            />
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl">
            {program.day.map((slot, i) => (
              <Reveal key={slot.time} delay={i * 80}>
                <div className="flex gap-6 rounded-[1.75rem] border border-ink/5 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift sm:gap-8">
                  <span className="flex w-32 shrink-0 items-start gap-2 text-[0.88rem] font-bold text-brand sm:w-40">
                    <Clock className="mt-0.5 size-4 shrink-0" />
                    {slot.time}
                  </span>
                  <span className="text-[0.96rem] leading-relaxed text-ink-600">{slot.activity}</span>
                </div>
                {i < program.day.length - 1 ? (
                  <span aria-hidden="true" className="mx-auto block h-5 w-px bg-ink/12" />
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other programs */}
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Also available" title="Other" highlight="programs" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 100}>
                <Link
                  href={`/programs/${other.slug}`}
                  className="group flex items-center gap-6 overflow-hidden rounded-[2rem] border border-ink/5 bg-white p-5 shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <span className="relative size-24 shrink-0 overflow-hidden rounded-[1.4rem]">
                    <Image src={other.image} alt="" fill sizes="96px" className="object-cover" />
                  </span>
                  <span className="flex-1">
                    <span className="display block text-[1.25rem] text-ink">{other.name}</span>
                    <span className="mt-1 block text-[0.85rem] text-ink-400">{other.age}</span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[0.85rem] font-bold text-brand">
                      Explore <ArrowUpRight className="size-3.5 transition group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
