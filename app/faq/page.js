import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import Reveal from '@/components/Reveal'
import { Button } from '@/components/ui'
import { faqs } from '@/data/faqs'
import { site } from '@/data/site'

export const metadata = {
  title: 'FAQs',
  description:
    'Ages, licensing, hours, faith-based care, flexible schedules and visits — the questions families ask us most.',
  alternates: { canonical: '/faq' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions parents always ask"
        text="If your question is not here, please just call. We would rather answer than have you wonder."
        crumbs={[{ label: 'FAQs' }]}
      />

      <section className="py-20">
        <div className="container-x mx-auto max-w-3xl">
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact">Send a message</Button>
              <div className="flex flex-col items-center gap-3">
                <Button href={site.phoneHref} variant="outline">
                  Call {site.phone}
                </Button>
                <Button href={site.localPhoneHref} variant="outline">
                  {site.localPhone}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  )
}
