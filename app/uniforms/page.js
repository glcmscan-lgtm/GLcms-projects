import { ExternalLink, Mail, ShoppingBag, Store } from 'lucide-react'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import Reveal from '@/components/Reveal'
import { Button, SectionHeading } from '@/components/ui'
import { uniforms } from '@/data/uniforms'

export const metadata = {
  title: 'Uniforms',
  description: uniforms.meta,
  alternates: { canonical: '/uniforms' },
}

const stepIcons = { order: ShoppingBag, pickup: Store, help: Mail }

function ShopButton() {
  return (
    <Button href={uniforms.uniformsUrl} target="_blank" rel="noopener noreferrer" size="lg">
      {uniforms.buttonLabel} <ExternalLink className="size-4" />
      <span className="sr-only"> (opens in a new tab)</span>
    </Button>
  )
}

export default function UniformsPage() {
  const { hero, policy, steps, supportEmail } = uniforms

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} text={hero.text} crumbs={[{ label: 'Uniforms' }]}>
        <ShopButton />
      </PageHero>

      {/* Uniform policy */}
      <section id="policy" className="pt-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading title={policy.heading} />
          </Reveal>
          <Reveal delay={80}>
            <div className="max-w-3xl">
              {policy.paragraphs.map((text) => (
                <p key={text} className="mt-5 text-[1.05rem] leading-relaxed text-ink-600">
                  {text}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* How ordering works */}
      <section id="ordering" className="py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading title="How ordering works" />
          </Reveal>
          <Reveal delay={80}>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((step) => {
                const Icon = stepIcons[step.icon]
                return (
                  <li key={step.title} className="rounded-[2rem] border border-ink/5 bg-white p-7 shadow-soft">
                    <span className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-5 text-[1.15rem] font-bold text-ink">{step.title}</h3>
                    <p className="mt-2 text-[1rem] leading-relaxed text-ink-600">
                      {step.text}
                      {step.icon === 'help' ? (
                        <>
                          {' '}
                          <a
                            href={`mailto:${supportEmail}`}
                            className="break-words font-bold text-brand underline underline-offset-4"
                          >
                            {/* Lets the address wrap after the @ in the narrow 3-across cards. */}
                            {supportEmail.split('@')[0]}@<wbr />
                            {supportEmail.split('@')[1]}
                          </a>
                          .
                        </>
                      ) : null}
                    </p>
                  </li>
                )
              })}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex justify-center">
              <ShopButton />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
