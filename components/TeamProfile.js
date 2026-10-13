import { ChevronDown } from 'lucide-react'
import TeamPhoto from '@/components/TeamPhoto'

function BioBlocks({ blocks, headingAs: Heading = 'h4' }) {
  return blocks.map((b, i) => {
    if (typeof b === 'string') {
      return (
        <p key={i} className="text-[1rem] leading-relaxed text-ink-400">
          {b}
        </p>
      )
    }
    if (b.heading) {
      return (
        <Heading key={i} className="display pt-3 text-[1.25rem] text-ink">
          {b.heading}
        </Heading>
      )
    }
    return (
      <blockquote key={i} className="rounded-2xl border-l-4 border-sun bg-sun-soft/70 px-6 py-5">
        <p className="display text-[1.15rem] leading-snug text-ink">{b.quote}</p>
        <cite className="mt-2 block text-[0.85rem] font-semibold not-italic text-ink-400">{b.cite}</cite>
      </blockquote>
    )
  })
}

/**
 * One person (or the founders together) on the Our Team page.
 * layout="feature" puts the photo beside the text, layout="card" stacks them.
 */
export default function TeamProfile({ person, layout = 'card', reverse = false }) {
  const feature = layout === 'feature'
  const wide = person.photoShape === 'wide'
  const Name = feature ? 'h2' : 'h3'
  const sub = feature ? 'h3' : 'h4'

  return (
    <article
      id={person.slug}
      className={`scroll-mt-28 ${
        feature
          ? 'grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14'
          : 'flex h-full flex-col rounded-[2rem] border border-ink/5 bg-white p-4 shadow-soft sm:p-5'
      }`}
    >
      <div
        className={`relative overflow-hidden bg-sand ${
          feature
            ? `rounded-[2.5rem] shadow-lift ring-8 ring-white lg:sticky lg:top-32 ${
                wide ? 'aspect-[4/3] w-full' : `mx-auto aspect-[4/5] w-full max-w-[360px] lg:max-w-[420px] ${reverse ? 'lg:mr-0' : 'lg:ml-0'}`
              } ${reverse ? 'lg:order-2' : ''}`
            : 'aspect-[4/3] rounded-[1.5rem]'
        }`}
      >
        <TeamPhoto person={person} sizes={feature ? '(max-width: 1024px) 90vw, 520px' : '(max-width: 768px) 90vw, 560px'} />
      </div>

      <div className={feature ? '' : 'flex flex-1 flex-col px-2 pb-2 pt-6 sm:px-3'}>
        <span className="eyebrow">{person.role}</span>
        <Name className={`display mt-2 text-ink ${feature ? 'text-[clamp(1.8rem,3.6vw,2.5rem)]' : 'text-[1.6rem]'}`}>
          {person.name}
        </Name>
        {person.subtitle ? (
          <p className="mt-2 text-[0.92rem] font-semibold text-ink-600">{person.subtitle}</p>
        ) : null}

        <div className="mt-5 space-y-4">
          <BioBlocks blocks={person.intro} headingAs={sub} />
        </div>

        {person.more?.length ? (
          <details className="group mt-6">
            <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-full border-2 border-ink/15 px-5 py-2.5 text-[0.92rem] font-semibold text-ink transition hover:border-brand hover:text-brand [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">{person.moreLabel}</span>
              <span className="hidden group-open:inline">Show less</span>
              <ChevronDown className="size-4 transition group-open:rotate-180" />
            </summary>
            <div className="mt-6 space-y-4">
              <BioBlocks blocks={person.more} headingAs={sub} />
            </div>
          </details>
        ) : null}
      </div>
    </article>
  )
}
