import Image from 'next/image'
import { brand } from '@/data/site'

/**
 * Guiding Light Christian Montessori artwork, in two lockups:
 *
 *  - header / drawer: the lettering only, lifted out of the crest with the book
 *    graphic erased. The full crest is a stacked emblem and goes illegible at
 *    header heights.
 *  - footer (`light`): the whole crest. Its lettering is navy and would vanish on
 *    the dark footer, so it sits on a white panel rather than a light artwork swap.
 *
 * Filenames are brand-specific on purpose: the old /logo.png held different
 * artwork, and reusing that path left stale copies in browser caches.
 */
const crest = { src: '/logo-glcm.png', width: 800, height: 573 }
const wordmark = { src: '/logo-glcm-text.png', width: 800, height: 169 }

const heights = {
  sm: 'h-8',
  md: 'h-10 sm:h-12',
  lg: 'h-16 sm:h-20',
}

export default function Wordmark({ light = false, size = 'md', priority = false, className = '' }) {
  const art = light ? crest : wordmark

  const logo = (
    <Image
      src={art.src}
      alt={brand.name}
      width={art.width}
      height={art.height}
      priority={priority}
      sizes="320px"
      className={`${heights[size]} w-auto`}
    />
  )

  if (light) {
    return (
      <span className={`inline-flex rounded-3xl bg-white px-5 py-4 shadow-soft ${className}`}>
        {logo}
      </span>
    )
  }

  return <span className={`inline-flex ${className}`}>{logo}</span>
}
