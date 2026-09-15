import Image from 'next/image'
import { Check, Church, Clock, HeartHandshake, MapPin, ShieldCheck, Sparkles } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Highlights from '@/components/Highlights'
import FacultyIntro from '@/components/FacultyIntro'
import TrustBand from '@/components/TrustBand'
import CtaBand from '@/components/CtaBand'
import Faq from '@/components/Faq'
import Reveal from '@/components/Reveal'
import { Button, SectionHeading, SunMark } from '@/components/ui'
import { faqs } from '@/data/faqs'
import { site } from '@/data/site'

export const metadata = {
  title: 'About Us',
  description:
    'Guiding Light Christian Montessori is a Virginia-licensed, Christ-centered, Montessori-inspired child day center and preschool for children 6 weeks to 6 years in Ashburn, Virginia.',
  alternates: { canonical: '/about' },
}

const values = [
  {
    icon: ShieldCheck,
    title: 'Safe & Licensed',
    text: 'A Virginia-licensed child day center and preschool committed to maintaining a safe, secure, and professionally operated environment.',
  },
  {
    icon: Church,
    title: 'Christ-Centered',
    text: 'Christian faith and values are intentionally woven into our school community, helping children learn kindness, compassion, truth, gratitude, and love for others.',
  },
  {
    icon: HeartHandshake,
    title: 'Experienced & Caring Teachers',
    text: 'Our educators are selected for their experience, qualifications, character, and genuine love for children.',
  },
  {
    icon: Sparkles,
    title: 'Purposeful Learning',
    text: 'Montessori-inspired, hands-on experiences encourage independence, curiosity, creativity, problem-solving, and a lifelong love of learning.',
  },
]

const expectations = [
  'Virginia-licensed child day center and preschool in Ashburn',
  'Christ-centered learning environment',
  'Montessori-inspired, hands-on learning',
  'Individualized attention for each child’s developmental needs',
  'Experienced and caring educators',
  'Safe, secure, and nurturing classrooms',
  'STEM, coding, robotics, sensory learning, creative arts, and enrichment activities',
  'A community rooted in Faith, Truth, and Excellence',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Christ-Centered Preschool & Daycare in Ashburn, Virginia"
        text={`${site.tagline} (${site.verseRef})`}
        crumbs={[{ label: 'About' }]}
      />

      {/* Story */}
      <section className="relative overflow-hidden py-24">
        <div className="container-x grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <SectionHeading eyebrow="Our Story" title="More Than a Daycare — a" highlight="Community" />
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-ink-400">
                <p>
                  Welcome to Guiding Light Christian Montessori, a Virginia-licensed child day center and
                  Montessori-inspired preschool serving families in Ashburn and the surrounding Loudoun
                  County community. We provide high-quality early childhood care and education for children
                  from 6 weeks to 6 years in a safe, nurturing, and Christ-centered environment where
                  children are encouraged to learn, explore, develop confidence, and grow.
                </p>
                <p>
                  Our approach is rooted in Faith, Truth, and Excellence. We strive to create an atmosphere
                  of kindness, respect, compassion, curiosity, and love while helping children develop
                  academically, socially, emotionally, physically, and spiritually. Our Montessori-inspired
                  approach encourages children to learn through hands-on experiences, purposeful activities,
                  sensory exploration, independence, and age-appropriate discovery.
                </p>
                <p>
                  We believe early childhood education is about much more than preparing children
                  academically. It is about building character, developing confidence, encouraging
                  curiosity, nurturing relationships, and helping children understand that they are deeply
                  loved by God. From a baby’s earliest experiences through the preschool and Pre-K years,
                  our teachers provide developmentally appropriate care and individualized attention
                  designed around each child’s unique needs.
                </p>
                <p>
                  Our infant and toddler programs encourage secure relationships, sensory exploration,
                  language development, movement, curiosity, and growing independence. Our preschool and
                  Pre-K programs combine Montessori-inspired learning with structured and hands-on
                  educational experiences that support literacy, mathematics, science, practical life,
                  social-emotional development, STEM, coding, robotics, creative expression, and
                  kindergarten readiness.
                </p>
                <p className="display text-[1.35rem] leading-snug text-ink">
                  We’re more than a daycare — we’re a community where children are loved, supported,
                  challenged, and guided during some of the most important years of their lives.
                </p>
              </div>

              <div className="mt-9 rounded-[2rem] border border-ink/5 bg-white p-7 shadow-soft">
                <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.16em] text-brand">
                  What families can expect
                </h3>
                <ul className="mt-5 grid gap-3">
                  {expectations.map((e) => (
                    <li key={e} className="flex gap-3 text-[0.95rem] leading-snug text-ink-600">
                      <Check className="mt-0.5 size-4 shrink-0 text-mint" strokeWidth={3} />
                      {e}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-4">
                  <Button href="/programs">See Our Programs</Button>
                  <Button href="/contact" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="relative mx-auto max-w-md">
              <div className="blob-2 overflow-hidden shadow-lift ring-8 ring-white">
                <Image
                  src="/images/about-room.jpg"
                  alt="Our bright, childproofed play and learning room in Ashburn, VA"
                  width={479}
                  height={482}
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="h-[380px] w-full object-cover"
                />
              </div>

              <div className="mt-8 space-y-4 rounded-[2rem] border border-ink/5 bg-white p-6 shadow-soft">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span className="text-[0.94rem] leading-snug text-ink-600">
                    <span className="block font-bold text-ink">Visit anytime</span>
                    {site.address.full}
                  </span>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span className="text-[0.94rem] leading-snug text-ink-600">
                    <span className="block font-bold text-ink">Hours</span>
                    {site.hours.days}, {site.hours.time}
                    <span className="block text-ink-400">{site.hours.closed}</span>
                  </span>
                </div>
                <div className="flex gap-3">
                  <HeartHandshake className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span className="text-[0.94rem] leading-snug text-ink-600">
                    <span className="block font-bold text-ink">Ages</span>
                    {site.ages}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-sand/60 py-24">
        <SunMark
          aria-hidden="true"
          className="animate-spin-slow pointer-events-none absolute -left-16 top-10 size-56 text-sun/40"
        />
        <div className="container-x relative">
          <Reveal>
            <SectionHeading
              eyebrow="What we stand for"
              title="Four Things You’ll Notice"
              highlight="From the Beginning"
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="flex h-full gap-5 rounded-[2rem] border border-ink/5 bg-white p-7 shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-sun-soft text-ink">
                    <v.icon className="size-6" strokeWidth={1.8} />
                  </span>
                  <span>
                    <h3 className="display text-[1.22rem] text-ink">{v.title}</h3>
                    <p className="mt-2 text-[0.94rem] leading-relaxed text-ink-400">{v.text}</p>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-24">
        <Highlights />
      </div>

      <FacultyIntro />
      <TrustBand />

      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Good to know"
              title="Questions parents"
              highlight="always ask"
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl">
            <Reveal delay={80}>
              <Faq items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
