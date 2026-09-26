import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import { site } from '@/data/site'
import { Button, SunMark } from '@/components/ui'
import Reveal from '@/components/Reveal'

export default function CtaBand() {
  return (
    <section className="relative py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.75rem] bg-brand px-7 py-14 shadow-lift sm:px-14">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <SunMark className="animate-spin-slow absolute -left-16 -top-16 size-64 text-white/12" />
              <div className="absolute -bottom-24 right-1/4 size-72 rounded-full bg-sun/30 blur-3xl" />
            </div>

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white">
                  Now enrolling · {site.ages}
                </span>
                <h2 className="display mt-5 max-w-xl text-[clamp(1.9rem,4.2vw,3rem)] text-white">
                  Come see the school, meet our team, and picture your child here.
                </h2>
                <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-white/85">
                  We’re more than a daycare — we’re a community where your child will be loved,
                  supported, and guided through their early years.
                </p>
                <div className="mt-9 flex flex-wrap items-start gap-4">
                  <Button href="/contact" variant="light" size="lg">
                    Book a Visit <ArrowRight className="size-4" />
                  </Button>
                  <div className="flex flex-col items-start gap-3">
                    <Button href={site.phoneHref} variant="ghostLight" size="lg">
                      <Phone className="size-4" /> {site.phone}
                    </Button>
                    <Button href={site.localPhoneHref} variant="ghostLight" size="lg">
                      <Phone className="size-4" /> Local: {site.localPhone}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-xs">
                <div className="blob-1 overflow-hidden ring-8 ring-white/25">
                  <Image
                    src="/images/banner-baby.jpg"
                    alt="A baby exploring the play area"
                    width={1600}
                    height={760}
                    sizes="320px"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-4 py-3 shadow-lift">
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-wider text-ink-400">
                    Open weekdays
                  </span>
                  <span className="display block text-[1.15rem] text-ink">{site.hours.time}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
