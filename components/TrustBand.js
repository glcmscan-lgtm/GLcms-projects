import { trustFacts } from '@/data/site'
import { SunMark } from '@/components/ui'
import Reveal from '@/components/Reveal'

export default function TrustBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <SunMark className="animate-spin-slow absolute -right-10 -top-10 size-56 text-sun/8" />
        <div className="absolute -left-20 bottom-0 size-72 rounded-full bg-sky/15 blur-3xl" />
      </div>
      <div className="container-x relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {trustFacts.map((fact, i) => (
          <Reveal key={fact.label} delay={i * 90}>
            <div className="text-center sm:text-left">
              <span className="display block text-[clamp(1.7rem,3.4vw,2.4rem)] text-sun">{fact.value}</span>
              <span className="mt-2 block text-[0.9rem] text-white/60">{fact.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
