import Image from 'next/image'
import { ArrowRight, BadgeCheck, CalendarCheck, Clock, HeartHandshake, Phone, Sparkles } from 'lucide-react'
import { site } from '@/data/site'
import { foundingFamilies } from '@/data/foundingFamilies'
import { Button, SunMark } from '@/components/ui'
import Reveal from '@/components/Reveal'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12 lg:pb-28 lg:pt-16">
      {/* Backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[70%] bg-gradient-to-b from-sand via-cream to-cream" />
        <div className="absolute -left-32 top-16 size-96 rounded-full bg-sun/25 blur-3xl" />
        <div className="absolute right-[-10%] top-40 size-96 rounded-full bg-sky/20 blur-3xl" />
        <SunMark className="animate-spin-slow absolute right-[6%] top-6 size-24 text-glow lg:size-32" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(11,32,56,0.14) 1px, transparent 0)',
            backgroundSize: '26px 26px',
            maskImage: 'radial-gradient(ellipse at 50% 0%, black 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        {/* Copy */}
        <div>
          {foundingFamilies.show ? (
            <Reveal delay={40}>
              <a
                href="#founding-families"
                className="group mb-7 inline-flex max-w-full items-center gap-3 rounded-2xl bg-white py-2 pl-2 pr-4 text-left text-[0.85rem] font-semibold leading-snug text-ink shadow-soft ring-1 ring-ink/5 transition hover:-translate-y-0.5 sm:rounded-full"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Sparkles className="size-4" />
                </span>
                <span>{foundingFamilies.heroLink}</span>
                <ArrowRight className="size-4 shrink-0 text-brand transition group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          ) : null}

          <Reveal delay={80}>
            <h1 className="display text-[clamp(2.4rem,5.8vw,4.2rem)] text-ink">
              Shining{' '}
              <span className="relative inline-block text-glow-deep">
                His Light
                <svg
                  aria-hidden="true"
                  viewBox="0 0 240 18"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-4 w-full text-glow"
                >
                  <path
                    d="M3 13C50 5 118 3 168 6c26 1.5 48 4.5 69 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              in Every Child
            </h1>
          </Reveal>

          <Reveal delay={130}>
            <p className="mt-6 text-[0.82rem] font-bold uppercase tracking-[0.16em] text-ink-400">
              Our Values:{' '}
              <span className="text-brand">{site.values}</span>
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-400">
              {site.tagline}{' '}
              <span className="font-semibold text-ink-600">({site.verseRef})</span>
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <span className="relative isolate inline-flex w-full sm:w-auto">
                <span aria-hidden="true" className="animate-tour-ring absolute inset-0 -z-10 rounded-full bg-brand/40" />
                <Button href="/tour#tour-calendar" size="xl" className="w-full sm:w-auto">
                  <CalendarCheck className="size-5" /> Book a Tour <ArrowRight className="size-5" />
                </Button>
              </span>
              <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-soft transition hover:-translate-y-0.5">
                <span className="grid size-10 place-items-center rounded-full bg-sun/25 text-brand">
                  <Phone className="size-4" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[0.72rem] font-semibold uppercase tracking-wider text-ink-400">
                    Call us
                  </span>
                  <a href={site.phoneHref} className="block whitespace-nowrap font-bold text-ink">
                    {site.phone}
                  </a>
                  <a href={site.localPhoneHref} className="block whitespace-nowrap font-bold text-ink">
                    {site.localPhone}
                  </a>
                </span>
              </div>
            </div>
            <p className="mt-4 flex items-center gap-2 text-[0.92rem] font-semibold text-ink-400">
              <Clock className="size-4 text-brand" /> 1-hour tours, Monday to Saturday
            </p>
          </Reveal>

          <Reveal delay={280}>
            <dl className="mt-11 grid max-w-lg grid-cols-3 gap-4 border-t border-ink/8 pt-7">
              {[
                { v: '6 Weeks to 6 Years', l: 'Welcomed' },
                { v: 'Experienced', l: '& caring teachers' },
                { v: '6:30 AM – 6:30 PM', l: 'Monday–Friday' },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="display text-[1.1rem] text-ink sm:text-[1.35rem]">{s.v}</dt>
                  <dd className="mt-1 text-[0.8rem] leading-snug text-ink-400">{s.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Photo collage */}
        <Reveal delay={120} className="relative">
          <div className="relative mx-auto max-w-[520px]">
            <div className="blob-1 relative overflow-hidden bg-sand shadow-lift ring-8 ring-white">
              <Image
                src="/images/school/school-exterior.jpg"
                alt="The front entrance of Guiding Light Christian Montessori in Ashburn, VA"
                width={1672}
                height={941}
                priority
                sizes="(max-width: 1024px) 90vw, 520px"
                className="h-[380px] w-full object-cover sm:h-[460px]"
              />
            </div>

            {/* Floating badges */}
            <div className="animate-float absolute -left-3 top-8 flex items-center gap-3 rounded-3xl bg-white p-3.5 pr-5 shadow-lift sm:-left-8">
              <span className="grid size-11 place-items-center rounded-2xl bg-mint-soft text-mint">
                <BadgeCheck className="size-5" />
              </span>
              <span className="max-w-[15rem] leading-tight">
                <span className="block text-sm font-bold text-ink">Virginia-Licensed</span>
                <span className="block text-[0.75rem] text-ink-400">
                  Montessori-Inspired · Christian Preschool &amp; Daycare
                </span>
              </span>
            </div>

            <div
              className="animate-float absolute -bottom-6 -right-2 flex items-center gap-3 rounded-3xl bg-white p-3.5 pr-5 shadow-lift sm:-right-8"
              style={{ animationDelay: '1.4s' }}
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-brand-soft text-brand">
                <HeartHandshake className="size-5" />
              </span>
              <span className="max-w-[15rem] leading-tight">
                <span className="block text-sm font-bold text-ink">Infant through 6 Years</span>
                <span className="block text-[0.75rem] text-ink-400">Age-appropriate programs</span>
              </span>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}
