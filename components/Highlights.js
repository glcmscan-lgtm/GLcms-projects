import Image from 'next/image'
import { Blocks, GraduationCap, Home, ShieldCheck } from 'lucide-react'
import { highlights } from '@/data/site'
import { accentMap } from '@/components/ui'
import Reveal from '@/components/Reveal'

const icons = { home: Home, shield: ShieldCheck, graduation: GraduationCap, blocks: Blocks }

export default function Highlights() {
  return (
    <section className="relative -mt-4 pb-6">
      <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item, i) => {
          const Icon = icons[item.icon]
          const accent = accentMap[item.accent]
          return (
            <Reveal key={item.title} delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-ink/5 bg-white p-7 shadow-soft sm:p-8 xl:p-10 transition-all duration-400 hover:-translate-y-2 hover:shadow-lift">
                <div
                  className={`absolute -right-12 -top-12 size-36 rounded-full ${accent.bg} transition-transform duration-500 group-hover:scale-[2.6]`}
                />
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className={`grid size-16 place-items-center rounded-2xl ${accent.bg} text-ink`}>
                      <Icon className="size-8" strokeWidth={1.8} />
                    </span>
                    <span className="relative size-16 overflow-hidden rounded-2xl ring-2 ring-white">
                      <Image
                        src={item.image}
                        alt=""
                        width={250}
                        height={272}
                        className="size-full object-cover"
                      />
                    </span>
                  </div>
                  <h3 className="display mt-6 text-[1.45rem] text-ink xl:text-[1.65rem]">{item.title}</h3>
                  <p className="mt-3 text-[1rem] leading-relaxed text-ink-400 xl:text-[1.06rem]">{item.text}</p>
                  <span className={`mt-6 block h-1.5 w-14 rounded-full ${accent.dot}`} />
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
