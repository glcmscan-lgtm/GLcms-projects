'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import Reveal from '@/components/Reveal'

/** Masonry-style gallery (CSS columns) with a keyboard-accessible lightbox. */
export default function GalleryGrid({ items }) {
  const [index, setIndex] = useState(null)
  const open = index !== null

  const close = useCallback(() => setIndex(null), [])
  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close, next, prev])

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {items.map((item, i) => (
          <Reveal key={item.src} delay={(i % 3) * 90} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-[1.75rem] bg-sand shadow-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.w}
                height={item.h}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 32vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute right-4 top-4 grid size-10 scale-75 place-items-center rounded-full bg-white/90 text-ink opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100">
                <Expand className="size-4" />
              </span>
              <span className="absolute inset-x-5 bottom-5 translate-y-3 text-left text-[0.88rem] font-semibold text-white opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                {item.alt}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-3 grid size-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6" />
          </button>
          <figure className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="overflow-hidden rounded-[2rem] bg-sand">
              <Image
                src={items[index].src}
                alt={items[index].alt}
                width={items[index].w}
                height={items[index].h}
                className="max-h-[74vh] w-full object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-white/70">
              {items[index].alt} · {index + 1} / {items.length}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-3 grid size-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      ) : null}
    </>
  )
}
