import { ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import FoundingFamilies from '@/components/FoundingFamilies'
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

export default function HomePage() {
  return (
    <>
      <Hero />
      <FoundingFamilies />
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
            <Faq items={faqs.slice(0, 5)} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
