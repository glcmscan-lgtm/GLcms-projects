'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Clock, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { brand, nav, site } from '@/data/site'
import { Button } from '@/components/ui'
import Wordmark from '@/components/Wordmark'

/** Nav items may point off-site (Brightwheel enrollment), which next/link should not own. */
function NavItemLink({ item, className, children }) {
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link href={item.href} className={className}>
      {children}
    </Link>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setSubOpen(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar — collapses away as soon as you scroll */}
      <div
        className={`hidden overflow-hidden bg-ink text-white/70 transition-all duration-500 lg:block ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-14 opacity-100'
        }`}
      >
        <div className="container-x flex items-center justify-between py-2.5 text-[0.8rem]">
          <div className="flex items-center gap-5 xl:gap-6">
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <Clock className="size-3.5 text-sun" /> {site.hours.label}
            </span>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap transition hover:text-white"
            >
              <MapPin className="size-3.5 text-sun" /> {site.address.full}
            </a>
          </div>
          <div className="flex items-center gap-5 xl:gap-6">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 whitespace-nowrap transition hover:text-white"
            >
              <Phone className="size-3.5 text-sun" /> UAN: {site.phone}
            </a>
            <a
              href={site.localPhoneHref}
              className="inline-flex items-center gap-2 whitespace-nowrap transition hover:text-white"
            >
              <Phone className="size-3.5 text-sun" /> {site.localPhone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 whitespace-nowrap transition hover:text-white"
            >
              <Mail className="size-3.5 text-sun" /> {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'border-b border-ink/5 bg-cream/85 backdrop-blur-xl shadow-[0_10px_30px_-24px_rgba(11,32,56,0.5)]'
            : 'bg-cream/70 backdrop-blur-md'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6 py-3.5">
          <Link href="/" className="min-w-0" aria-label={`${brand.name} — home`}>
            <Wordmark priority />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <div key={item.href} className="group relative">
                <NavItemLink
                  item={item}
                  className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-[0.94rem] font-semibold transition ${
                    isActive(item.href) ? 'bg-brand-soft text-brand' : 'text-ink/80 hover:text-brand'
                  }`}
                >
                  {item.label}
                  {item.children ? <ChevronDown className="size-3.5 transition group-hover:rotate-180" /> : null}
                </NavItemLink>

                {item.children ? (
                  <div className="invisible absolute left-0 top-full w-72 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-3xl border border-ink/5 bg-white p-2 shadow-lift">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex flex-col rounded-2xl px-4 py-3 transition hover:bg-sand"
                        >
                          <span className="font-semibold text-ink">{child.label}</span>
                          <span className="text-[0.8rem] text-ink-400">{child.meta}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Wrapper does the hiding: a `hidden` class on the Button itself loses to
                the `inline-flex` in its own base styles. */}
            <span className="hidden md:block">
              <Button href="/tour" size="sm">
                Book a Tour
              </Button>
            </span>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid size-11 place-items-center rounded-2xl bg-white text-ink shadow-soft lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-cream transition-transform duration-400 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink/5 px-5 py-4">
            <Wordmark size="sm" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center rounded-xl bg-white text-ink shadow-soft"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.href} className="border-b border-ink/5 py-1">
                <div className="flex items-center justify-between">
                  <NavItemLink
                    item={item}
                    className={`block py-3 text-lg font-semibold ${
                      isActive(item.href) ? 'text-brand' : 'text-ink'
                    }`}
                  >
                    {item.label}
                  </NavItemLink>
                  {item.children ? (
                    <button
                      type="button"
                      onClick={() => setSubOpen(subOpen === item.label ? null : item.label)}
                      className="grid size-9 place-items-center rounded-lg bg-white shadow-soft"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown
                        className={`size-4 transition ${subOpen === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                  ) : null}
                </div>
                {item.children && subOpen === item.label ? (
                  <div className="pb-3 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3 py-2.5 text-ink-600 transition hover:bg-sand"
                      >
                        {child.label}
                        <span className="block text-xs text-ink-400">{child.meta}</span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="space-y-3 border-t border-ink/5 px-5 py-5">
            <a
              href={site.phoneHref}
              className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-soft"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-brand-soft text-brand">
                <Phone className="size-4" />
              </span>
              <span className="font-bold text-ink">{site.phone}</span>
            </a>
            <a
              href={site.localPhoneHref}
              className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-soft"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-brand-soft text-brand">
                <Phone className="size-4" />
              </span>
              <span className="font-bold text-ink">{site.localPhone}</span>
            </a>
            <Button href="/tour" className="w-full">
              Book a Tour
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
