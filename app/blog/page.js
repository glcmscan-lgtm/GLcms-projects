import PageHero from '@/components/PageHero'
import BlogTeasers from '@/components/BlogTeasers'
import CtaBand from '@/components/CtaBand'
import { posts } from '@/data/posts'

export const metadata = {
  title: 'Blog',
  description:
    'Notes on early learning, play and parenting from Guiding Light Christian Montessori in Ashburn, Virginia.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Latest Blog"
        title="Checkout our latest news, updates & articles"
        text="Short, practical notes from the day care floor — on readiness, play, art and the small habits that add up."
        crumbs={[{ label: 'Blog' }]}
      />

      <section className="py-20">
        <div className="container-x">
          <BlogTeasers items={posts} />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
