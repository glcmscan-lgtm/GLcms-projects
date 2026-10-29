import Link from 'next/link'
import { offer } from '@/data/offer'

/** Founding 40 offer line above the header on every page. It scrolls away with the page. */
export default function AnnouncementBar() {
  if (!offer.founding.show) return null
  const { bar } = offer

  return (
    <div className="bg-brand text-sun">
      <p className="container-x py-2.5 text-center text-[0.8rem] font-semibold leading-snug sm:text-[0.85rem]">
        <span className="sm:hidden">{bar.shortText}</span>
        <span className="hidden sm:inline">{bar.text}</span>{' '}
        <Link href={bar.href} className="whitespace-nowrap font-bold underline underline-offset-4 transition hover:text-white">
          <span className="sm:hidden">{bar.shortLink}</span>
          <span className="hidden sm:inline">{bar.link}</span>
        </Link>
      </p>
    </div>
  )
}
