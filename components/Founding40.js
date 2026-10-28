import Link from 'next/link'
import { ArrowRight, CalendarCheck, HandCoins, Sparkles } from 'lucide-react'
import { enrollmentUrl } from '@/data/site'
import { offer } from '@/data/offer'
import { Button } from '@/components/ui'
import Reveal from '@/components/Reveal'

const icons = { fee: HandCoins }

/**
 * The Founding 40 offer. Full version on Home and /tuition, `compact` strip on Programs, About,
 * Tour and Contact. Everything it says comes from data/offer.js.
 */
export default function Founding40({ compact = false, home = false, className = '' }) {
  if (!offer.founding.show) return null
  return compact ? <Strip className={className} /> : <Block home={home} className={className} />
}

function Strip({ className }) {
  const { bar } = offer
  return (
    <div className={`container-x ${className}`}>
      <p className="flex flex-col items-center justify-center gap-x-3 gap-y-1.5 rounded-[1.5rem] border border-brand/25 bg-sand px-5 py-4 text-center text-[0.95rem] font-semibold leading-snug text-ink sm:flex-row sm:flex-wrap">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="size-4 shrink-0 text-brand" />
          {bar.text}
        </span>
        <Link href={bar.href} className="inline-flex items-center gap-1 whitespace-nowrap font-bold text-brand underline underline-offset-4">
          {bar.link} <ArrowRight className="size-4" />
        </Link>
      </p>
    </div>
  )
}

function Block({ home, className }) {
  const { block } = offer
  return (
    <section id="founding-40" aria-labelledby="founding-40-title" className={className}>
      {/* Older campaign links pointed at #founding-families. */}
      {home ? <span id="founding-families" aria-hidden="true" /> : null}
      <div className="container-x">
        <Reveal>
          <div className="rounded-[2.75rem] border-2 border-brand bg-sand px-6 py-12 sm:px-12 sm:py-14 lg:px-14 lg:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-sun">
                <Sparkles className="size-4 shrink-0" /> {block.label}
              </span>
              <h2 id="founding-40-title" className="display mt-6 text-[clamp(2rem,4.6vw,3.2rem)] text-ink">
                {block.heading}
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-600">{block.subheading}</p>
            </div>

            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {block.cards.map((card) => {
                const Icon = card.icon ? icons[card.icon] : null
                return (
                  <li
                    key={card.title}
                    className="flex flex-col items-center rounded-[2rem] border border-ink/5 bg-white px-6 py-8 text-center shadow-soft"
                  >
                    <span className="flex h-16 items-center">
                      {Icon ? (
                        <span className="grid size-16 place-items-center rounded-2xl bg-brand-soft text-brand">
                          <Icon className="size-8" strokeWidth={1.8} />
                        </span>
                      ) : (
                        <span className="display text-[2.8rem] leading-none text-brand">{card.big}</span>
                      )}
                    </span>
                    <h3 className="display mt-5 text-[1.25rem] leading-snug text-ink">{card.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">{card.text}</p>
                  </li>
                )
              })}
            </ul>

            <div className="mt-10 text-center">
              <p className="display text-[1.2rem] text-ink">{block.scarcity}</p>
              {block.deadline ? <p className="mt-2 text-[0.95rem] text-ink-600">{block.deadline}</p> : null}
              <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                <Button href="/tour#tour-calendar" size="lg">
                  <CalendarCheck className="size-4" /> Book a Tour
                </Button>
                <Button href={enrollmentUrl} target="_blank" rel="noreferrer" variant="outline" size="lg">
                  Enroll Now <ArrowRight className="size-4" />
                </Button>
              </div>
              {home ? (
                <Link
                  href={offer.bar.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-[0.95rem] font-bold text-brand underline underline-offset-4"
                >
                  {block.detailsLink} <ArrowRight className="size-4" />
                </Link>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
