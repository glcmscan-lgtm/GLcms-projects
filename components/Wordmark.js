import Image from 'next/image'
import { brand } from '@/data/site'

/**
 * The school's logo (GLCM brand kit v1.0, Oct 22, 2026). It is always shown whole:
 * never cropped, redrawn or recolored.
 *
 *  - header / drawer: the logo with the school name beside it as live text, because the
 *    full logo is too detailed to read at header size. From 1024 to 1279 px wide the main
 *    menu needs the room, so the name hides there and the logo shows a little larger.
 *  - footer (`light`): the logo larger, on a white panel, because it is made for light
 *    backgrounds. The panel padding is the brand kit's clear space (10% of the logo width).
 */
const logo = { src: '/glcm-logo.png', width: 1000, height: 713 }

const sizes = {
  sm: { logo: 'h-11', line1: 'text-[1rem]', line2: 'text-[0.62rem]' },
  md: {
    logo: 'h-12 sm:h-14 lg:h-16 xl:h-14',
    line1: 'text-[1.05rem] sm:text-[1.2rem]',
    line2: 'text-[0.66rem] sm:text-[0.72rem]',
  },
}

export default function Wordmark({ light = false, size = 'md', priority = false, className = '' }) {
  if (light) {
    return (
      <span className={`inline-flex rounded-3xl bg-white p-6 ${className}`}>
        <Image
          src={logo.src}
          alt={brand.name}
          width={logo.width}
          height={logo.height}
          sizes="240px"
          className="h-auto w-56 sm:w-60 lg:w-44 xl:w-60"
        />
      </span>
    )
  }

  const s = sizes[size] || sizes.md

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={logo.src}
        alt=""
        width={logo.width}
        height={logo.height}
        priority={priority}
        sizes="96px"
        className={`${s.logo} w-auto`}
      />
      <span className="leading-none lg:hidden xl:block">
        <span className={`display block text-ink ${s.line1}`}>{brand.line1}</span>
        <span
          className={`mt-1 block font-semibold uppercase tracking-[0.1em] text-ink-400 ${s.line2}`}
        >
          {brand.line2}
        </span>
      </span>
    </span>
  )
}
