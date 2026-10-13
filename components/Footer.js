import Link from 'next/link'
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { brand, enrollmentUrl, site } from '@/data/site'
import { programs } from '@/data/programs'
import { SunMark } from '@/components/ui'
import Wordmark from '@/components/Wordmark'

const socialIcon = {
  Facebook,
  Instagram,
}

const explore = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/team' },
  { label: 'Enrollment', href: enrollmentUrl, external: true },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <SunMark className="animate-spin-slow absolute -left-24 top-1/3 size-72 text-sun/5" />
        <div className="absolute -right-24 bottom-0 size-80 rounded-full bg-brand/15 blur-3xl" />
      </div>

      {/* Verse ribbon */}
      <div className="relative border-b border-white/10">
        <div className="container-x py-8 text-center">
          <p className="display mx-auto max-w-3xl text-[clamp(1.05rem,2.2vw,1.5rem)] leading-snug text-white/90">
            “{site.tagline}”
          </p>
          <span className="mt-3 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-sun">
            {site.verseRef}
          </span>
        </div>
      </div>

      <div className="container-x relative grid gap-12 py-16 lg:grid-cols-[1.2fr_0.85fr_0.85fr_1.3fr]">
        <div>
          <Wordmark light size="lg" />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/65">
            {site.dba}, operated by {site.legalName}, is a Virginia-licensed, Christ-centered,
            Montessori-inspired daycare and preschool serving children from {site.ages} in Ashburn,
            Virginia.
          </p>
          <div className="mt-6 flex gap-3">
            {site.socials.map((s) => {
              const Icon = socialIcon[s.label] || Instagram
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full bg-white/8 text-white/70 transition hover:bg-brand hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.16em] text-sun">Programs</h3>
          <ul className="mt-5 space-y-3 text-[0.95rem]">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/programs/${p.slug}`}
                  className="text-white/70 transition hover:text-white hover:pl-1"
                >
                  {p.name}
                  <span className="block text-xs text-white/40">{p.age}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.16em] text-sun">Explore</h3>
          <ul className="mt-5 space-y-3 text-[0.95rem]">
            {explore.map((l) => (
              <li key={l.href}>
                {l.external ? (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 transition hover:text-white hover:pl-1"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link href={l.href} className="text-white/70 transition hover:text-white hover:pl-1">
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.16em] text-sun">Get in touch</h3>
          <ul className="mt-5 space-y-4 text-[0.95rem] text-white/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
              <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">
                {site.address.street}
                <br />
                {site.address.city} {site.address.state} {site.address.zip}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
              <span>
                <a href={site.phoneHref} className="block transition hover:text-white">
                  UAN: {site.phone}
                </a>
                <a href={site.localPhoneHref} className="block transition hover:text-white">
                  {site.localPhone}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
              <a href={`mailto:${site.email}`} className="text-[0.88rem] transition hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand" />
              <span>
                {site.hours.days}
                <br />
                {site.hours.time}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-[0.85rem] text-white/50 sm:flex-row">
          <p>
            Copyrights © {new Date().getFullYear()} {brand.name}. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="transition hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
