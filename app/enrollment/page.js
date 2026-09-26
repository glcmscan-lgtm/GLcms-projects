import Link from 'next/link'
import { ArrowRight, ClipboardCheck } from 'lucide-react'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import CtaBand from '@/components/CtaBand'
import Reveal from '@/components/Reveal'
import { Button, SectionHeading, accentMap } from '@/components/ui'
import { goodToKnow, requirements, steps } from '@/data/enrollment'
import { programs } from '@/data/programs'
import { site } from '@/data/site'

export const metadata = {
  title: 'Enrollment',
  description:
    'How to enroll at Guiding Light Christian Montessori in Ashburn, VA — visit the school, complete the paperwork and secure your child’s place. Ages 6 weeks to 6 years.',
  alternates: { canonical: '/enrollment' },
}

export default function EnrollmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Enrollment"
        title="Enrolling is simple — and it starts with a visit"
        text="Four small steps from your first message to your child’s first morning with us. We will walk you through each one."
        crumbs={[{ label: 'Enrollment' }]}
      />

      {/* Steps */}
      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="From first hello to"
              highlight="first day"
              align="center"
              className="mx-auto text-center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const accent = accentMap[step.accent] || accentMap.sun
              return (
                <Reveal key={step.n} delay={i * 90}>
                  <div className="flex h-full flex-col rounded-[2rem] border border-ink/5 bg-white p-7 shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift">
                    <span
                      className={`display grid size-14 place-items-center rounded-2xl ${accent.bg} text-[1.15rem] text-ink`}
                    >
                      {step.n}
                    </span>
                    <h3 className="display mt-5 text-[1.15rem] leading-snug text-ink">{step.title}</h3>
                    <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink-400">{step.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Requirements + good to know */}
      <section className="bg-sand/60 py-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Paperwork"
                title="What we will need"
                highlight="from you"
                text="Virginia licensing asks for all of this before a child’s first day. We will give you the forms and help you through them."
              />
              <ul className="mt-8 space-y-4">
                {requirements.map((r) => (
                  <li key={r} className="flex gap-3.5 text-[0.96rem] leading-relaxed text-ink-600">
                    <ClipboardCheck className="mt-0.5 size-5 shrink-0 text-mint" strokeWidth={1.9} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2.25rem] border border-ink/5 bg-white p-8 shadow-soft sm:p-10">
              <h3 className="display text-[1.5rem] text-ink">Good to know</h3>
              <dl className="mt-7 divide-y divide-ink/8">
                {goodToKnow.map((g) => (
                  <div key={g.label} className="py-4 first:pt-0 last:pb-0">
                    <dt className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-ink-400">
                      {g.label}
                    </dt>
                    <dd className="mt-1.5 text-[1rem] font-semibold leading-snug text-ink">{g.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-7 border-t border-ink/8 pt-6 text-[0.88rem] leading-relaxed text-ink-400">
                Full details are set out in our{' '}
                <Link href="/terms" className="font-bold text-brand underline underline-offset-4">
                  Terms &amp; Conditions
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Choose a program */}
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Choose a program"
              title="Which room will your child"
              highlight="join?"
              align="center"
              className="mx-auto text-center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {programs.map((p, i) => {
              const accent = accentMap[p.accent] || accentMap.sun
              return (
                <Reveal key={p.slug} delay={i * 90}>
                  <Link
                    href={`/programs/${p.slug}`}
                    className="group flex h-full flex-col rounded-[2rem] border border-ink/5 bg-white p-8 shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift"
                  >
                    <span
                      className={`inline-flex w-fit items-center gap-2 rounded-full ${accent.bg} px-4 py-1.5 text-[0.78rem] font-bold text-ink`}
                    >
                      {p.age}
                    </span>
                    <h3 className="display mt-5 text-[1.3rem] text-ink">{p.name}</h3>
                    <p className="mt-2.5 flex-1 text-[0.93rem] leading-relaxed text-ink-400">{p.tagline}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.88rem] font-bold text-brand">
                      See the program
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="bg-sand/60 py-24">
        <div className="container-x mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Start here"
              title="Check availability for"
              highlight="your child"
              align="center"
              text={`Tell us your child’s age and the hours you need. We care for children ${site.ages}.`}
              className="mx-auto text-center"
            />
          </Reveal>
          <div className="mt-12">
            <Reveal delay={80}>
              <ContactForm />
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <div className="flex flex-col items-center gap-3">
                <Button href={site.phoneHref} variant="outline">
                  Or call {site.phone}
                </Button>
                <Button href={site.localPhoneHref} variant="outline">
                  {site.localPhone}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
