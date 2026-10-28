import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { SunMark } from '@/components/ui'

export default function PageHero({ eyebrow, title, text, crumbs = [], children }) {
  return (
    <section className="relative overflow-hidden bg-sand pb-16 pt-14 sm:pb-20 sm:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <SunMark className="animate-spin-slow absolute -right-12 -top-12 size-56 text-glow/70" />
        <div className="absolute -bottom-10 -left-24 size-72 rounded-full bg-sky/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(11,32,56,0.16) 1px, transparent 0)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse at 30% 0%, black 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container-x relative">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[0.82rem] text-ink-400">
          <Link href="/" className="font-semibold transition hover:text-brand">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="size-3.5" />
              {c.href ? (
                <Link href={c.href} className="font-semibold transition hover:text-brand">
                  {c.label}
                </Link>
              ) : (
                <span className="text-ink">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        {eyebrow ? <span className="eyebrow mt-6 block">{eyebrow}</span> : null}
        <h1 className="display mt-3 max-w-3xl text-[clamp(2.1rem,5.2vw,3.6rem)] text-ink">{title}</h1>
        {text ? <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-ink-400">{text}</p> : null}
        {/* Optional buttons under the intro. */}
        {children ? <div className="mt-8 flex flex-wrap gap-4">{children}</div> : null}
      </div>
    </section>
  )
}
