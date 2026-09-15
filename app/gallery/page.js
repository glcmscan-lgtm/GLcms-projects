import PageHero from '@/components/PageHero'
import GalleryGrid from '@/components/GalleryGrid'
import CtaBand from '@/components/CtaBand'
import { gallery } from '@/data/gallery'

export const metadata = {
  title: 'Gallery',
  description:
    'A glimpse into life at Guiding Light Christian Montessori in Ashburn, Virginia — classrooms, activities, outdoor play and special events.',
  alternates: { canonical: '/gallery' },
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Glimpse Into Life at GLCM"
        text="Explore our classrooms, learning environments, activities, special events, outdoor play, and the joyful experiences that make each day at Guiding Light Christian Montessori meaningful."
        crumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-20">
        <div className="container-x">
          <GalleryGrid items={gallery} />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
