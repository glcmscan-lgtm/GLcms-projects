import { ArrowRight, CalendarCheck, Check, Church, Medal, Shield, Siren, Stethoscope, Users } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Included from '@/components/Included'
import Founding40 from '@/components/Founding40'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import Reveal from '@/components/Reveal'
import { Button, SectionHeading } from '@/components/ui'
import { brand } from '@/data/site'
import { offer } from '@/data/offer'

export const metadata = {
  title: { absolute: `${offer.tuition.title}: ${brand.name}` },
  description: offer.meta.tuition,
  alternates: { canonical: '/tuition' },
}

const groupIcons = { police: Shield, responder: Siren, veteran: Medal, nurse: Stethoscope, sibling: Users, church: Church }

export default function TuitionPage() {
  const { tuition, quote, discounts, block, founding } = offer
  const { howItWorks, discountsCopy } = tuition

  return (
    <>
      <PageHero title={tuition.title} text={tuition.intro} crumbs={[{ label: 'Tuition' }]}>
        <Button href={quote.href} size="lg">
          {quote.label} <ArrowRight className="size-4" />
        </Button>
        <Button href="/tour#tour-calendar" variant="outline" size="lg">
          <CalendarCheck className="size-4" /> Book a Tour
        </Button>
      </PageHero>

      <Included id="included" className="py-20" />

      <Founding40 className="pb-20" />

      {/* How tuition works */}
      <section id="how-it-works" className="bg-sand/60 py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <SectionHeading title={howItWorks.heading} />
          </Reveal>
          <Reveal delay={80}>
            <ul className="space-y-4">
              {howItWorks.points.map((point) => (
                <li key={point} className="flex gap-4 rounded-[1.5rem] bg-white p-5 shadow-soft">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[1rem] leading-relaxed text-ink-600">{point}</span>
                </li>
              ))}
            </ul>
            <p className="display mt-8 text-[1.2rem] text-ink">{howItWorks.closing}</p>
            <div className="mt-5">
              <Button href={quote.href}>{quote.label}</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Discounts and the Founding 40 small print */}
      <section id="discounts" className="py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading title={discountsCopy.heading} />
            <p className="mt-5 text-[1.1rem] font-semibold text-ink">{discountsCopy.lead}</p>
          </Reveal>
          <Reveal delay={80}>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {discounts.standardGroups.map((g) => {
                const Icon = groupIcons[g.icon]
                return (
                  <li
                    key={g.label}
                    className="flex items-center gap-3 rounded-[1.25rem] border border-ink/5 bg-white p-4 text-[0.96rem] font-semibold leading-snug text-ink shadow-soft"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                      <Icon className="size-5" />
                    </span>
                    {g.label}
                  </li>
                )
              })}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            {founding.show ? (
              <p className="mt-8 rounded-[1.25rem] bg-sand px-5 py-4 text-[1rem] font-semibold text-ink">
                {discountsCopy.foundingNote}
              </p>
            ) : null}
            <p className="mt-4 text-[1rem] font-semibold text-ink-600">{discounts.rule}</p>
            {founding.show ? (
              <p className="mt-8 max-w-3xl border-t border-ink/10 pt-6 text-[0.85rem] leading-relaxed text-ink-400">
                {block.terms}
              </p>
            ) : null}
          </Reveal>
        </div>
      </section>

      {/* Tuition questions */}
      <section className="bg-sand/60 py-20">
        <div className="container-x mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading title={tuition.questionsHeading} align="center" />
          </Reveal>
          <div className="mt-10">
            <Reveal delay={80}>
              <Faq items={offer.faqs.tuition} />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand title={tuition.closing} text={null} enroll />
    </>
  )
}
