import { Award, HeartHandshake, Sparkles, Users } from 'lucide-react'
import PageHero from '@/components/PageHero'
import BambooHrJobs from '@/components/BambooHrJobs'
import CareersForm from '@/components/CareersForm'
import Reveal from '@/components/Reveal'
import { SectionHeading } from '@/components/ui'
import { careersIntro } from '@/data/careers'
import { brand, site } from '@/data/site'

export const metadata = {
  title: 'Careers',
  description:
    'Join the Guiding Light Christian Montessori team in Ashburn, VA. View our current openings and apply online.',
  alternates: { canonical: '/careers' },
}

const values = [
  {
    icon: HeartHandshake,
    title: 'A heart for children',
    text: 'Warmth and patience matter to us as much as any certificate on the wall.',
  },
  {
    icon: Sparkles,
    title: 'Christ-centered care',
    text: 'Faith runs through the day here — in the songs, the stories and the way we treat each other.',
  },
  {
    icon: Award,
    title: 'Qualified and current',
    text: 'CPR, First Aid and Medication Administration Training (MAT) are supported and kept up to date.',
  },
  {
    icon: Users,
    title: 'A small, close team',
    text: 'You will be known by name — by the children, the families and by us.',
  },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={careersIntro.heading}
        text={careersIntro.text}
        crumbs={[{ label: 'Careers' }]}
      />

      {/* Why work here */}
      <section className="py-16">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="flex h-full flex-col gap-4 rounded-[2rem] border border-ink/5 bg-white p-7 shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift">
                <span className="grid size-13 place-items-center rounded-2xl bg-sun-soft text-ink">
                  <v.icon className="size-6" strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-[1.02rem] font-bold leading-snug text-ink">{v.title}</span>
                  <span className="mt-2 block text-[0.92rem] leading-relaxed text-ink-400">{v.text}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Open roles — served live from BambooHR */}
      <section className="bg-sand/60 py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Current opportunities"
              title="Roles we are"
              highlight="hiring for"
              align="center"
              text="Our live openings are listed below. If your experience fits one of these — or you are simply keen to be part of the team — we would love to hear from you."
              className="mx-auto text-center"
            />
          </Reveal>

          <div className="mx-auto mt-14 max-w-4xl">
            <Reveal delay={80}>
              <BambooHrJobs />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Apply now"
                title="Tell us about"
                highlight="yourself"
                text="Fill in the form and email your résumé across — we read every application ourselves."
              />
            </Reveal>
            <div className="mt-9">
              <Reveal delay={80}>
                <CareersForm />
              </Reveal>
            </div>
          </div>

          <Reveal delay={120}>
            <div className="rounded-[2rem] bg-ink p-8 text-white">
              <h3 className="display text-[1.4rem]">Before you apply</h3>
              <ul className="mt-5 space-y-4 text-[0.94rem] leading-relaxed text-white/70">
                <li>
                  <span className="font-bold text-sun">Where</span>
                  <br />
                  {brand.name}, {site.address.full}
                </li>
                <li>
                  <span className="font-bold text-sun">Hours</span>
                  <br />
                  {site.hours.days}, {site.hours.time}. Shift patterns vary by role.
                </li>
                <li>
                  <span className="font-bold text-sun">Certifications</span>
                  <br />
                  CPR, First Aid and MAT are required for lead roles — tell us what you already hold.
                </li>
                <li>
                  <span className="font-bold text-sun">Background checks</span>
                  <br />
                  All staff complete the background checks required by Virginia childcare licensing.
                </li>
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-[0.85rem] text-white/50">
                Questions about a role? Call {site.phone} or email {site.email}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
