import Link from 'next/link'
import { ArrowRight, FlaskConical, Languages, Music, PiggyBank, Utensils } from 'lucide-react'
import { offer } from '@/data/offer'
import { Button, SectionHeading } from '@/components/ui'
import Reveal from '@/components/Reveal'

const icons = { lunch: Utensils, music: Music, spanish: Languages, stem: FlaskConical, noFees: PiggyBank }

/** What every tuition plan includes (Home and /tuition). `closing` adds the tuition line and quote button. */
export default function Included({ closing = false, id, className = '' }) {
  const { includedCopy, quote } = offer
  return (
    <section id={id} className={className}>
      <div className="container-x">
        <Reveal>
          <SectionHeading title={includedCopy.heading} highlight={includedCopy.headingHighlight} align="center" />
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          {offer.included.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <Reveal key={item.title} delay={i * 70} as="li" className="last:col-span-2 lg:last:col-span-1">
                <div className="flex h-full flex-col items-center rounded-[1.75rem] border border-ink/5 bg-white p-5 text-center shadow-soft sm:p-6">
                  <span className="grid size-13 place-items-center rounded-2xl bg-sun-soft text-ink">
                    <Icon className="size-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="display mt-4 text-[1.05rem] leading-snug text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-[0.86rem] leading-snug text-ink-400">{item.note}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
        {closing ? (
          <Reveal className="mt-10 flex flex-col items-center gap-5 text-center">
            <p className="display text-[1.25rem] text-ink">{includedCopy.closing}</p>
            <Button href={quote.href}>{quote.label}</Button>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}

/** Short form for the program pages: the five items in a box, with a link to /tuition. */
export function IncludedBox() {
  const { includedCopy } = offer
  return (
    <div className="mt-8 rounded-[1.75rem] border border-ink/5 bg-sand p-6">
      <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.16em] text-brand">
        {includedCopy.heading} {includedCopy.headingHighlight}
      </h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {offer.included.map((item) => {
          const Icon = icons[item.icon]
          return (
            <li key={item.title} className="flex items-center gap-3 text-[0.94rem] font-semibold leading-snug text-ink">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white text-ink">
                <Icon className="size-4" strokeWidth={1.8} />
              </span>
              {item.title}
            </li>
          )
        })}
      </ul>
      <Link
        href="/tuition"
        className="mt-5 inline-block text-[0.95rem] font-bold text-brand underline underline-offset-4"
      >
        {includedCopy.tuitionLink} <ArrowRight className="inline size-4 align-[-0.15em]" />
      </Link>
    </div>
  )
}
