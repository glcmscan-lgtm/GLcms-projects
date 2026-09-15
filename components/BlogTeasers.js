import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CalendarDays } from 'lucide-react'
import Reveal from '@/components/Reveal'

export function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function BlogTeasers({ items }) {
  return (
    <div className="grid gap-7 lg:grid-cols-3">
      {items.map((post, i) => (
        <Reveal key={post.slug} delay={i * 110}>
          <article className="group flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-ink/5 bg-white shadow-soft transition-all duration-400 hover:-translate-y-2 hover:shadow-lift">
            <Link href={`/blog/${post.slug}`} className="relative block overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={1600}
                height={1067}
                sizes="(max-width: 1024px) 92vw, 380px"
                className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[0.75rem] font-bold text-brand">
                {post.category}
              </span>
            </Link>
            <div className="flex flex-1 flex-col p-7">
              <span className="inline-flex items-center gap-2 text-[0.8rem] text-ink-400">
                <CalendarDays className="size-3.5" /> {formatDate(post.date)} · {post.readingTime}
              </span>
              <h3 className="display mt-3 text-[1.28rem] leading-snug text-ink">
                <Link href={`/blog/${post.slug}`} className="transition hover:text-brand">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-ink-400">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-[0.88rem] font-bold text-ink transition hover:gap-3 hover:text-brand"
              >
                Read article <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
