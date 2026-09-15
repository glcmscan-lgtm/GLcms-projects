import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react'
import PageHero from '@/components/PageHero'
import BlogTeasers, { formatDate } from '@/components/BlogTeasers'
import CtaBand from '@/components/CtaBand'
import Reveal from '@/components/Reveal'
import { SectionHeading } from '@/components/ui'
import { getPost, posts } from '@/data/posts'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', images: [post.image], publishedTime: post.date },
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== post.slug)

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ label: 'Blog', href: '/blog' }, { label: post.category }]}
      />

      <article className="py-16">
        <div className="container-x mx-auto max-w-3xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-5 text-[0.85rem] text-ink-400">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4 text-brand" /> {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4 text-brand" /> {post.readingTime}
              </span>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-7 overflow-hidden rounded-[2.25rem] shadow-lift">
              <Image
                src={post.image}
                alt={post.title}
                width={1600}
                height={1067}
                priority
                sizes="(max-width: 1024px) 92vw, 760px"
                className="h-[300px] w-full object-cover sm:h-[420px]"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rich mt-10">
              <p className="display text-[1.3rem] leading-snug text-ink">{post.excerpt}</p>
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <Link
              href="/blog"
              className="mt-12 inline-flex items-center gap-2 rounded-full border-2 border-ink/12 px-6 py-3 text-[0.9rem] font-bold text-ink transition hover:border-brand hover:text-brand"
            >
              <ArrowLeft className="size-4" /> All articles
            </Link>
          </Reveal>
        </div>
      </article>

      <section className="bg-sand/60 py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Keep reading" title="More from" highlight="the blog" />
          </Reveal>
          <div className="mt-12">
            <BlogTeasers items={related} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
