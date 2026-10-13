import { programs } from '@/data/programs'
import { posts } from '@/data/posts'
import { site } from '@/data/site'

export default function sitemap() {
  const now = new Date()
  const staticRoutes = [
    '',
    '/about',
    '/team',
    '/programs',
    '/enrollment',
    '/gallery',
    '/blog',
    '/faq',
    '/careers',
    '/contact',
    '/terms',
    '/privacy',
  ]

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: now,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.7,
    })),
    ...programs.map((p) => ({
      url: `${site.url}/programs/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(`${p.date}T00:00:00`),
      changeFrequency: 'yearly',
      priority: 0.5,
    })),
  ]
}
