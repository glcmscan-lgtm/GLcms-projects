import { CalendarCheck, CircleParking, Clock, DoorOpen, MapPin, Phone, Smile } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Founding40 from '@/components/Founding40'
import Reveal from '@/components/Reveal'
import { Button } from '@/components/ui'
import { site } from '@/data/site'
import { tour } from '@/data/tour'
import { offer } from '@/data/offer'

export const metadata = {
  title: 'Book a Tour',
  description:
    'Book a 1-hour tour of Guiding Light Christian Montessori, 42885 Orchard Oriole Dr, Ashburn, VA 20147. Tours Monday to Saturday.',
  alternates: { canonical: '/tour' },
}

const icons = { clock: Clock, smile: Smile, door: DoorOpen, parking: CircleParking }

export default function TourPage() {
  return (
    <>
      <PageHero eyebrow={tour.eyebrow} title={tour.title} text={tour.text} crumbs={[{ label: 'Book a Tour' }]} />

      <section className="py-16 lg:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          {/* Calendar */}
          <div
            id="tour-calendar"
            className="overflow-hidden rounded-[2rem] border border-ink/5 bg-white shadow-soft"
          >
            {tour.bookingUrl ? (
              <iframe
                src={tour.bookingUrl}
                title="Book a school tour"
                className="block h-[calc(100svh_-_7rem)] min-h-[440px] w-full border-0 sm:h-[780px]"
              />
            ) : (
              <div className="px-6 py-12 text-center sm:px-12 sm:py-16">
                <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <CalendarCheck className="size-8" strokeWidth={1.8} />
                </span>
                <h2 className="display mt-6 text-[1.7rem] text-ink">Online booking opens soon</h2>
                <p className="mx-auto mt-3 max-w-md text-[1.02rem] leading-relaxed text-ink-400">
                  Call us and we will find a tour time that works for your family.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button href={site.phoneHref} size="lg">
                    <Phone className="size-4" /> {site.phone}
                  </Button>
                  <Button href={site.localPhoneHref} variant="outline" size="lg">
                    <Phone className="size-4" /> {site.localPhone}
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* What to expect */}
          <Reveal delay={100}>
            <aside className="rounded-[2rem] bg-sand/70 p-7 sm:p-9">
              <h2 className="display text-[1.5rem] text-ink">What to expect</h2>
              <ul className="mt-6 space-y-5">
                {tour.expect.map((e) => {
                  const Icon = icons[e.icon]
                  return (
                    <li key={e.title} className="flex gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-brand shadow-soft">
                        <Icon className="size-5" />
                      </span>
                      <span>
                        <span className="block font-bold text-ink">{e.title}</span>
                        <span className="mt-0.5 block text-[0.92rem] leading-relaxed text-ink-400">{e.text}</span>
                      </span>
                    </li>
                  )
                })}
              </ul>

              <ul className="mt-8 space-y-3 border-t border-ink/10 pt-6 text-[0.95rem] text-ink-600">
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-brand" />
                  {tour.hours}
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>
                    <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="font-semibold transition hover:text-brand">
                      {site.address.full}
                    </a>
                    <span className="mt-1 block text-[0.88rem] text-ink-400">{offer.location.line}</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>
                    <a href={site.phoneHref} className="font-semibold transition hover:text-brand">
                      {site.phone}
                    </a>
                    {' or '}
                    <a href={site.localPhoneHref} className="font-semibold transition hover:text-brand">
                      {site.localPhone}
                    </a>
                  </span>
                </li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Below the calendar, never above it, so the calendar stays first on phones. */}
      <Founding40 compact className="pb-20" />
    </>
  )
}
