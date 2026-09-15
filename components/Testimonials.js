import { Quote, Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { SectionHeading } from '@/components/ui'
import Reveal from '@/components/Reveal'

export default function Testimonials() {
  // No real parent quotes yet — the section stays hidden rather than showing filler.
  if (!testimonials.length) return null

  return (
    <section className="relative overflow-hidden py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonial"
          title="Parents' words are the key to"
          highlight="happy kids"
          align="center"
        />
        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <figure className="relative h-full rounded-[2.25rem] border border-ink/5 bg-white p-8 shadow-soft">
                <Quote className="size-8 rotate-180 text-sun" />
                <blockquote className="mt-4 text-[1.02rem] leading-relaxed text-ink-600">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-ink/8 pt-5">
                  <span>
                    <span className="block font-bold text-ink">{t.name}</span>
                    <span className="block text-[0.82rem] text-ink-400">{t.role}</span>
                  </span>
                  <span className="flex gap-0.5 text-sun">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-current" />
                    ))}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
