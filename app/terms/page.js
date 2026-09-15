import PageHero from '@/components/PageHero'
import LegalDoc from '@/components/LegalDoc'
import { terms } from '@/data/legal'

export const metadata = {
  title: 'Terms & Conditions',
  description:
    'Enrollment, hours, fees, health and safety, behavioral policy and other terms for families enrolling at Sunlight Childcare LLC.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={terms.title}
        crumbs={[{ label: 'Terms & Conditions' }]}
      />
      <LegalDoc doc={terms} />
    </>
  )
}
