import { ArrowRight, MapPin } from 'lucide-react'
import Hero from '@/components/Hero'
import Founding40 from '@/components/Founding40'
import Included from '@/components/Included'
import Highlights from '@/components/Highlights'
import VerseMarquee from '@/components/VerseMarquee'
import AboutIntro from '@/components/AboutIntro'
import ProgramsGrid from '@/components/ProgramsGrid'
import TrustBand from '@/components/TrustBand'
import GalleryGrid from '@/components/GalleryGrid'
import FacultyIntro from '@/components/FacultyIntro'
import Testimonials from '@/components/Testimonials'
import CtaBand from '@/components/CtaBand'
import Faq from '@/components/Faq'
import { Button, SectionHeading } from '@/components/ui'
import Reveal from '@/components/Reveal'
import { gallery } from '@/data/gallery'
import { faqs } from '@/data/faqs'
import { site } from '@/data/site'
import { offer } from '@/data/offer'

export const metadata = {
  title: { absolute: 'Guiding Light Christian Montessori: Christian Preschool in Ashburn, VA' },
  description: offer.meta.home,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Founding40 home className="pb-20" />
      <Included closing className="pb-16" />

      {/* Location */}
      <section className="pb-20">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-center gap-4 rounded-[1.75rem] border border-ink/5 bg-white px-6 py-5 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left">
              <span className="flex flex-col items-center gap-3 sm:flex-row">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <MapPin className="size-5" />
                </span>
                <span>
                  <span className="block font-bold text-ink">{site.address.full}</span>
                  <span className="mt-0.5 block text-[0.92rem] text-ink-400">{offer.location.line}</span>
                </span>
              </span>
              <Button href={site.mapsUrl} target="_blank" rel="noreferrer" variant="outline">
                Get Directions <ArrowRight className="size-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Highlights />
      <VerseMarquee />
      <AboutIntro />

      {/* Programs */}
      <section className="relative overflow-hidden bg-sand/60 py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <Reveal>
              <SectionHeading
                eyebrow="Our Programs"
                title="We meet kids at their level"
                highlight="regardless of their age"
              />
            </Reveal>
            <Reveal delay={100}>
              <Button href="/programs" variant="ink">
                View All <ArrowRight className="size-4" />
              </Button>
            </Reveal>
          </div>
          <div className="mt-14">
            <ProgramsGrid />
          </div>
        </div>
      </section>

      <TrustBand />
      <FacultyIntro />

      {/* Gallery */}
      <section className="relative overflow-hidden bg-sand/60 py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <Reveal>
              <SectionHeading
                eyebrow="Life at GLCM"
                title="A peek into our"
                highlight="everyday moments"
                text="Messy hands, block towers, story circles and a lot of laughing — this is what a day here looks like."
              />
            </Reveal>
            <Reveal delay={100}>
              <Button href="/gallery" variant="ink">
                Full gallery <ArrowRight className="size-4" />
              </Button>
            </Reveal>
          </div>
          <div className="mt-14">
            <GalleryGrid items={gallery.slice(0, 6)} />
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Good to know"
              title="Questions parents"
              highlight="always ask"
              text={`Anything we have not covered? Call ${site.phone} (${site.localPhone}) — we would rather answer than have you wonder.`}
            />
            <div className="mt-8">
              <Button href="/faq" variant="outline">
                See all FAQs
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={[offer.faqs.cost, ...faqs.slice(0, 5)]} />
          </Reveal>
        </div>
      </section>

      <CtaBand foundingLine />
    </>
  )
}
