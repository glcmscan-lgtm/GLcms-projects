import PageHero from '@/components/PageHero'
import LegalDoc from '@/components/LegalDoc'
import { privacy } from '@/data/legal'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How Guiding Light Christian Montessori collects, uses, protects and shares the personal information of parents, guardians and children.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title={privacy.title} crumbs={[{ label: 'Privacy Policy' }]} />
      <LegalDoc doc={privacy} />
    </>
  )
}
