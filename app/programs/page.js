import PageHero from '@/components/PageHero'
import ProgramsGrid from '@/components/ProgramsGrid'
import TrustBand from '@/components/TrustBand'
import CtaBand from '@/components/CtaBand'
import Faq from '@/components/Faq'
import Founding40 from '@/components/Founding40'
import Reveal from '@/components/Reveal'
import { SectionHeading } from '@/components/ui'
import { faqs } from '@/data/faqs'
import { site } from '@/data/site'

export const metadata = {
  title: 'Our Programs',
  description:
    'Infants & Toddlers (6 weeks–3 years) and Preschool & Pre-K (3–6 years) at Guiding Light Christian Montessori in Ashburn, Virginia.',
  alternates: { canonical: '/programs' },
}

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="We meet kids at their level, regardless of their age"
        text={`${site.positioning} Each program is built around where your child is right now, not where a curriculum says they should be.`}
        crumbs={[{ label: 'Programs' }]}
      />

      <Founding40 compact className="pt-12" />

      <section className="py-24">
        <div className="container-x">
          <ProgramsGrid compact />
        </div>
      </section>

      <TrustBand />

      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Enrolment"
              title="How joining"
              highlight="usually works"
              text="No forms before you have even seen the place. We start with a visit."
            />
            <ol className="mt-9 space-y-6">
              {[
                { n: '01', t: 'Say hello', d: 'Call or send a message with your child’s age and the schedule you need.' },
                { n: '02', t: 'Come and visit', d: 'Meet our team, see the classrooms and ask everything you want to ask.' },
                { n: '03', t: 'Paperwork & start date', d: 'We complete the licensed-care paperwork and agree a gentle first week.' },
              ].map((step) => (
                <li key={step.n} className="flex gap-5">
                  <span className="display grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-white">
                    {step.n}
                  </span>
                  <span>
                    <span className="block font-bold text-ink">{step.t}</span>
                    <span className="mt-1 block text-[0.94rem] leading-relaxed text-ink-400">{step.d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100}>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
