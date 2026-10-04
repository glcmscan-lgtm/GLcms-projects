import {
  Apple,
  ArrowRight,
  Baby,
  BadgePercent,
  Church,
  ClipboardCheck,
  MapPin,
  Medal,
  Phone,
  PiggyBank,
  Shield,
  Siren,
  Sparkles,
  Stethoscope,
  Users,
} from 'lucide-react'
import { enrollmentUrl, site } from '@/data/site'
import { foundingFamilies as ff } from '@/data/foundingFamilies'
import { Button } from '@/components/ui'
import Reveal from '@/components/Reveal'

const icons = {
  registration: ClipboardCheck,
  annualFee: PiggyBank,
  food: Apple,
  discount: BadgePercent,
  police: Shield,
  responder: Siren,
  veteran: Medal,
  nurse: Stethoscope,
  sibling: Users,
  church: Church,
}

const tileAccents = ['bg-sun-soft', 'bg-mint-soft', 'bg-sky-soft', 'bg-brand-soft']

export default function FoundingFamilies() {
  if (!ff.show) return null

  return (
    <section id="founding-families" aria-labelledby="founding-families-title" className="relative scroll-mt-12 pb-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.75rem] bg-ink px-6 py-12 text-white shadow-lift sm:px-12 sm:py-14 lg:px-14 lg:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -left-28 -top-28 size-96 rounded-full bg-sky/15 blur-3xl" />
              <div className="absolute -bottom-32 right-1/4 size-80 rounded-full bg-sky/10 blur-3xl" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-9">
              {/* The offer */}
              <div className="lg:col-start-1 lg:row-start-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-sun">
                  <Sparkles className="size-4 shrink-0" /> {ff.eyebrow}
                </span>
                <h2
                  id="founding-families-title"
                  className="display mt-6 text-[clamp(2rem,4.6vw,3.2rem)] text-white"
                >
                  {ff.title}{' '}
                  <span className="relative inline-block text-sun">
                    {ff.highlight}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 200 16"
                      preserveAspectRatio="none"
                      className="absolute -bottom-2 left-0 h-3 w-full text-brand"
                    >
                      <path
                        d="M2 11C42 4 90 3 132 6c24 2 46 5 66 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {ff.pillars.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-white/15 px-3.5 py-1.5 text-[0.82rem] font-semibold text-white/85"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-white/80">{ff.text}</p>
              </div>

              {/* What founding families get */}
              <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
                <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-sun">{ff.benefitsTitle}</h3>
                <ul className="mt-5 grid gap-3">
                  {ff.benefits.map((b, i) => {
                    const Icon = icons[b.icon]
                    return (
                      <li key={b.title} className="flex items-center gap-4 rounded-[1.5rem] bg-white p-3.5 pr-5 text-ink">
                        <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${tileAccents[i % 4]}`}>
                          <Icon className="size-6" strokeWidth={1.8} />
                        </span>
                        <span className="display text-[1.1rem] leading-snug">{b.title}</span>
                      </li>
                    )
                  })}
                </ul>

                <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 sm:p-6">
                  <h3 className="display text-[1.2rem] text-white">{ff.discountsTitle}</h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {ff.discounts.map((d) => {
                      const Icon = icons[d.icon]
                      return (
                        <li key={d.label} className="flex items-center gap-3 text-[0.92rem] leading-snug text-white/85">
                          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-sun">
                            <Icon className="size-4" />
                          </span>
                          {d.label}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              {/* Enroll */}
              <div className="lg:col-start-1 lg:row-start-2">
                <p className="display text-[1.35rem] text-white">{ff.cta}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <Button href={enrollmentUrl} target="_blank" rel="noreferrer" size="lg">
                    Enroll Now <ArrowRight className="size-4" />
                  </Button>
                  <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-ink shadow-soft">
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
                <ul className="mt-8 space-y-3 text-[0.92rem] text-white/70">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-sun" />
                    <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">
                      {site.address.full}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Baby className="mt-0.5 size-4 shrink-0 text-sun" />
                    <span>
                      {ff.serving.split(' ').slice(0, -1).join(' ')}{' '}
                      <span className="whitespace-nowrap">{ff.serving.split(' ').at(-1)}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="display relative mt-12 flex flex-col items-center gap-1 border-t border-white/10 pt-8 text-center text-[1.1rem] text-white/85 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-4 sm:text-[1.25rem]">
              {ff.closing.map((c, i) => (
                <span key={c} className="flex items-center gap-4">
                  {i > 0 ? <span aria-hidden="true" className="hidden size-1.5 rounded-full bg-sun sm:block" /> : null}
                  {c}
                </span>
              ))}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
