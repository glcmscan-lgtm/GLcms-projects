import PageHero from '@/components/PageHero'
import TeamProfile from '@/components/TeamProfile'
import CtaBand from '@/components/CtaBand'
import Reveal from '@/components/Reveal'
import { SectionHeading } from '@/components/ui'
import { teamGroups } from '@/data/team'

export const metadata = {
  title: 'Our Team',
  description:
    'Meet the founders, director and board of advisors of Guiding Light Christian Montessori, a Christ-centered Montessori preschool in Ashburn, VA.',
  alternates: { canonical: '/team' },
}

const group = (id) => teamGroups.find((g) => g.id === id)

export default function TeamPage() {
  const founders = group('founders').people
  const director = group('director').people
  const staff = group('staff').people
  const advisors = group('advisors')

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people behind Guiding Light"
        text="Meet the founders, director and advisors building a Christ-centered Montessori community where every child is known, loved and encouraged."
        crumbs={[{ label: 'Our Team' }]}
      />

      <section className="py-20 lg:py-24">
        <div className="container-x space-y-20">
          {founders.map((p) => (
            <Reveal key={p.slug}>
              <TeamProfile person={p} layout="feature" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand/60 py-20 lg:py-24">
        <div className="container-x space-y-20">
          {director.map((p) => (
            <Reveal key={p.slug}>
              <TeamProfile person={p} layout="feature" reverse />
            </Reveal>
          ))}
          {staff.map((p) => (
            <Reveal key={p.slug}>
              <TeamProfile person={p} layout="feature" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Our Advisors" title="Board of" highlight="Advisors" />
          </Reveal>
          <div className="mt-12 grid items-start gap-8 md:grid-cols-2">
            {advisors.people.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90} className="h-full">
                <TeamProfile person={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
