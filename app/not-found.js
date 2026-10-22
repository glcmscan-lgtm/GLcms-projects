import { Button, SunMark } from '@/components/ui'

export const metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <SunMark className="animate-spin-slow absolute -right-16 top-0 size-72 text-glow/70" />
        <div className="absolute -left-20 bottom-0 size-72 rounded-full bg-sky/20 blur-3xl" />
      </div>
      <div className="container-x relative text-center">
        <span className="display block text-[clamp(4rem,14vw,9rem)] leading-none text-brand">404</span>
        <h1 className="display mt-4 text-[clamp(1.6rem,4vw,2.5rem)] text-ink">
          This page has wandered off
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-[1.02rem] leading-relaxed text-ink-400">
          The link may be old, or the page may have moved in our redesign. Let’s get you back somewhere
          useful.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="/">Back to home</Button>
          <Button href="/programs" variant="outline">
            See our programs
          </Button>
        </div>
      </div>
    </section>
  )
}
