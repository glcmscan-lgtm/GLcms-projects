'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowUp } from 'lucide-react'

export default function ScrollTop() {
  const [show, setShow] = useState(false)
  // No bottom call bar on /tour, so the button can sit at its normal offset there.
  const offset = usePathname() === '/tour' ? 'bottom-8' : 'bottom-20 md:bottom-8'

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed ${offset} right-5 z-40 grid size-12 place-items-center rounded-full bg-ink text-white shadow-lift transition-all duration-400 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="size-5" />
    </button>
  )
}
