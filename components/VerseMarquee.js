import { SunMark } from '@/components/ui'

const words = ['Kindness', 'Respect', 'Compassion', 'Curiosity', 'Play', 'Faith', 'Confidence']

export default function VerseMarquee() {
  const strip = [...words, ...words]
  return (
    <section className="relative overflow-hidden border-y border-ink/5 bg-ink py-5">
      <div className="animate-marquee flex w-max items-center gap-10">
        {strip.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center gap-10">
            <span className="display whitespace-nowrap text-[1.5rem] text-white/85 sm:text-[2rem]">{word}</span>
            <SunMark className="size-5 shrink-0 text-sun" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </section>
  )
}
