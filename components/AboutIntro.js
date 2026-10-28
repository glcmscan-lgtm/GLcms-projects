import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { Button, SectionHeading, SunMark } from '@/components/ui'
import Reveal from '@/components/Reveal'

const points = [
  'Virginia-licensed child day center and preschool in Ashburn',
  'Christ-centered learning environment',
  'Montessori-inspired, hands-on learning',
  'Individualized attention for each child’s developmental needs',
  'Experienced and caring educators',
  'STEM, coding, robotics, sensory learning and creative arts',
]

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/3 size-80 rounded-full bg-mint/12 blur-3xl" />
      </div>

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        {/* Image cluster */}
        <Reveal className="relative">
          <div className="relative mx-auto max-w-[520px]">
            <div className="blob-2 overflow-hidden shadow-lift ring-8 ring-white">
              <Image
                src="/images/school/circle-time-sun-rug.jpg"
                alt="Circle time area with a sunshine rug, learning charts and cubbies"
                width={1500}
                height={1500}
                sizes="(max-width: 1024px) 90vw, 520px"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />
            </div>

            <div className="absolute -bottom-8 -left-4 w-48 overflow-hidden rounded-[1.8rem] shadow-lift ring-6 ring-white sm:-left-10 sm:w-56">
              <Image
                src="/images/school/solar-system-classroom.jpg"
                alt="A bright classroom with arched windows, small tables and a planets rug"
                width={1440}
                height={1200}
                className="h-36 w-full object-cover sm:h-40"
              />
            </div>

            <div className="absolute -right-3 -top-5 rounded-[1.6rem] bg-brand px-5 py-4 text-white shadow-lift sm:-right-8">
              <SunMark className="mb-1 size-6 text-white/80" />
              <span className="display block text-[1.5rem] leading-none">6 weeks</span>
              <span className="text-[0.72rem] font-semibold uppercase tracking-wider text-white/80">
                to 6 years
              </span>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="About Us"
              title="A STEM-Based, Montessori-Inspired Christian Preschool in"
              highlight="Ashburn, Virginia"
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-6 space-y-5 text-[1rem] leading-relaxed text-ink-400">
              <p>
                Welcome to Guiding Light Christian Montessori, a Virginia-licensed child day center and
                Montessori-inspired preschool serving families in Ashburn and the surrounding Loudoun County
                community. We provide high-quality early childhood care and education for children from 6
                weeks to 6 years in a safe, nurturing, and Christ-centered environment.
              </p>
              <p>
                Our approach is rooted in Faith, Truth, and Excellence. We strive to create an atmosphere of
                kindness, respect, compassion, curiosity, and love while helping children develop
                academically, socially, emotionally, physically, and spiritually.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-[0.93rem] leading-snug text-ink-600">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-mint text-white">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/about">
                Learn More <ArrowRight className="size-4" />
              </Button>
              <Button href="/programs" variant="outline">
                See Our Programs
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
