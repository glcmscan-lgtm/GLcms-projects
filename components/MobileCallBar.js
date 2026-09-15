import Link from 'next/link'
import { CalendarCheck, Phone } from 'lucide-react'
import { site } from '@/data/site'

/** Always-reachable call / visit actions on small screens. */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/8 bg-cream/95 backdrop-blur-lg md:hidden">
      <div className="grid grid-cols-2 gap-3 px-4 py-3">
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink/12 py-3 text-[0.92rem] font-bold text-ink"
        >
          <Phone className="size-4 text-brand" /> Call
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand py-3 text-[0.92rem] font-bold text-white"
        >
          <CalendarCheck className="size-4" /> Book a Visit
        </Link>
      </div>
    </div>
  )
}
