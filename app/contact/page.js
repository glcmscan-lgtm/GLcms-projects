import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import Faq from '@/components/Faq'
import Reveal from '@/components/Reveal'
import { SectionHeading } from '@/components/ui'
import { faqs } from '@/data/faqs'
import { site } from '@/data/site'

export const metadata = {
  title: 'Contact Us',
  description:
    'Call 800-363-9855 or send a message to book a visit at Guiding Light Christian Montessori, 42885 Orchard Oriole Dr, Ashburn, VA 20147.',
  alternates: { canonical: '/contact' },
}

const cards = [
  {
    icon: Phone,
    label: 'Make a Call',
    value: (
      <>
        <a href={site.phoneHref} className="block">{site.phone}</a>
        <a href={site.localPhoneHref} className="block">Local: {site.localPhone}</a>
      </>
    ),
    accent: 'bg-brand-soft text-brand',
  },
  {
    icon: Mail,
    label: 'Send an Email',
    value: site.email,
    href: `mailto:${site.email}`,
    accent: 'bg-sun-soft text-ink',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: site.address.full,
    href: site.mapsUrl,
    accent: 'bg-sky-soft text-sky',
  },
  {
    icon: Clock,
    label: 'Opening Hours',
    value: `${site.hours.days} · ${site.hours.time}`,
    accent: 'bg-mint-soft text-mint',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Feel free to write us anytime"
        text="Tell us your child’s age and the hours you need, and we will come back to you with availability — usually the same day."
        crumbs={[{ label: 'Contact' }]}
      />

      {/* Contact cards */}
      <section className="py-16">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const Wrapper = card.href ? 'a' : 'div'
            const props = card.href
              ? {
                  href: card.href,
                  ...(card.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}),
                }
              : {}
            return (
              <Reveal key={card.label} delay={i * 90}>
                <Wrapper
                  {...props}
                  className="flex h-full flex-col gap-4 rounded-[2rem] border border-ink/5 bg-white p-7 shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <span className={`grid size-13 place-items-center rounded-2xl ${card.accent}`}>
                    <card.icon className="size-6" strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block text-[0.78rem] font-bold uppercase tracking-[0.14em] text-ink-400">
                      {card.label}
                    </span>
                    <span className="mt-1.5 block text-[0.98rem] font-semibold leading-snug text-ink">
                      {card.value}
                    </span>
                  </span>
                </Wrapper>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Form + map */}
      <section className="pb-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Send a Message"
                title="Book a visit or ask us"
                highlight="anything"
                text="We read every message ourselves — there is no call centre here."
              />
            </Reveal>
            <div className="mt-9">
              <Reveal delay={80}>
                <ContactForm />
              </Reveal>
            </div>
          </div>

          <div className="space-y-6">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-[2rem] border border-ink/5 shadow-soft">
                <iframe
                  title="Guiding Light Christian Montessori location map"
                  src="https://www.google.com/maps?q=42885%20Orchard%20Oriole%20Dr%20Ashburn%20VA%2020147&output=embed"
                  className="h-[340px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-[2rem] bg-ink p-8 text-white">
                <MessageCircle className="size-8 text-sun" />
                <h3 className="display mt-4 text-[1.4rem]">Prefer to Talk?</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-white/70">
                  Call {site.phone} (Local: {site.localPhone}) between 6:30 AM and 6:30 PM, Monday through Friday. If we are assisting
                  children or families when you call, please leave us a message and we will return your call
                  as soon as possible.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-sun px-6 py-3 font-bold text-ink transition hover:brightness-105"
                >
                  <Phone className="size-4" /> {site.phone}
                </a>
                <a
                  href={site.localPhoneHref}
                  className="mt-3 flex w-fit items-center gap-2 rounded-full bg-sun px-6 py-3 font-bold text-ink transition hover:brightness-105"
                >
                  <Phone className="size-4" /> Local: {site.localPhone}
                </a>
                <p className="mt-6 border-t border-white/10 pt-5 text-[0.85rem] text-white/50">
                  Email {site.email}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sand/60 py-24">
        <div className="container-x mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Before you write"
              title="You might find it"
              highlight="here"
              align="center"
            />
          </Reveal>
          <div className="mt-12">
            <Reveal delay={80}>
              <Faq items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
