import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { programs } from '@/data/programs'
import { accentMap } from '@/components/ui'
import Reveal from '@/components/Reveal'

export default function ProgramsGrid({ compact = false }) {
  return (
    <div className="grid gap-7 lg:grid-cols-3">
      {programs.map((program, i) => {
        const accent = accentMap[program.accent]
        return (
          <Reveal key={program.slug} delay={i * 110}>
            <Link
              href={`/programs/${program.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-ink/5 bg-white shadow-soft transition-all duration-400 hover:-translate-y-2 hover:shadow-lift"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.name}
                  width={1600}
                  height={1067}
                  sizes="(max-width: 1024px) 92vw, 380px"
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/55 to-transparent" />
                <span
                  className={`absolute bottom-4 left-4 rounded-full ${accent.bg} px-3.5 py-1.5 text-[0.78rem] font-bold text-ink`}
                >
                  {program.age}
                </span>
                <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/90 text-ink transition group-hover:bg-brand group-hover:text-white">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="display text-[1.5rem] text-ink">{program.name}</h3>
                <p className="mt-1.5 text-[0.88rem] font-semibold text-brand">{program.tagline}</p>
                <p className="mt-4 flex-1 text-[0.93rem] leading-relaxed text-ink-400">
                  {compact
                    ? program.description
                    : `${program.description.split('. ').slice(0, 2).join('. ')}.`}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.9rem] font-bold text-ink transition group-hover:gap-3 group-hover:text-brand">
                  Explore program <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        )
      })}
    </div>
  )
}
