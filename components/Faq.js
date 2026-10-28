'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Minus, Plus } from 'lucide-react'

export default function Faq({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="divide-y divide-ink/8 overflow-hidden rounded-[2rem] border border-ink/5 bg-white shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition hover:bg-sand/50 sm:px-8"
              >
                <span className={`text-[1.02rem] font-bold ${isOpen ? 'text-brand' : 'text-ink'}`}>
                  {item.q}
                </span>
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-full transition ${
                    isOpen ? 'bg-brand text-white' : 'bg-sand text-ink'
                  }`}
                >
                  {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                </span>
              </button>
            </h3>
            <div
              className={`grid transition-all duration-400 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 sm:px-8">
                  <p className="text-[0.96rem] leading-relaxed text-ink-400">{item.a}</p>
                  {item.link ? (
                    <Link
                      href={item.link.href}
                      className="mt-3 inline-block text-[0.95rem] font-bold text-brand underline underline-offset-4"
                    >
                      {item.link.label}
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
