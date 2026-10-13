import Image from 'next/image'
import { SunMark } from '@/components/ui'

/**
 * A team member's photo, filling its parent (the parent sets the size and shape).
 * Until a headshot arrives (photo: null), it shows the person's initials on a warm background.
 */
export default function TeamPhoto({ person, sizes }) {
  if (person.photo) {
    return (
      <Image
        src={person.photo}
        alt={person.photoAlt}
        fill
        sizes={sizes}
        className="object-cover object-top"
      />
    )
  }

  return (
    <div aria-hidden="true" className="flex size-full flex-col items-center justify-center bg-sun-soft">
      <SunMark className="size-10 text-sun" />
      <span className="display mt-3 text-[2.4rem] text-ink/75">{person.initials}</span>
    </div>
  )
}
