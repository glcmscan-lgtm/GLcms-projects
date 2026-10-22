import Link from 'next/link'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

const variants = {
  primary: 'bg-brand text-white shadow-[0_16px_30px_-14px_rgba(74,98,128,0.55)] hover:bg-brand-dark hover:-translate-y-0.5',
  ink: 'bg-ink text-white hover:bg-ink-600 hover:-translate-y-0.5',
  sun: 'bg-sun text-ink hover:brightness-105 hover:-translate-y-0.5',
  outline: 'border-2 border-ink/15 text-ink hover:border-brand hover:text-brand hover:-translate-y-0.5',
  light: 'bg-white text-ink shadow-soft hover:-translate-y-0.5',
  ghostLight: 'border-2 border-white/30 text-white hover:bg-white/10',
}

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-[0.95rem]',
  lg: 'px-8 py-4 text-base',
  xl: 'px-10 py-5 text-[1.125rem] font-bold',
}

export function Button({ href, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    const external = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')
    if (external) {
      return (
        <a href={href} className={cls} {...rest}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}

export function SectionHeading({ eyebrow, title, highlight, text, align = 'left', light = false, className = '' }) {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'
  return (
    <div className={`flex max-w-2xl flex-col ${alignment} ${className}`}>
      {eyebrow ? <span className={`eyebrow ${light ? 'text-sun' : ''}`}>{eyebrow}</span> : null}
      <h2
        className={`display mt-3 text-[clamp(1.9rem,4.4vw,3.1rem)] ${light ? 'text-white' : 'text-ink'}`}
      >
        {title}{' '}
        {highlight ? (
          <span className="relative inline-block">
            <span className="relative z-10">{highlight}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 200 16"
              preserveAspectRatio="none"
              className="absolute -bottom-1 left-0 h-3 w-full text-brand/40"
            >
              <path
                d="M2 11C42 4 90 3 132 6c24 2 46 5 66 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        ) : null}
      </h2>
      {text ? (
        <p className={`mt-5 text-[1.02rem] leading-relaxed ${light ? 'text-white/75' : 'text-ink-400'}`}>{text}</p>
      ) : null}
    </div>
  )
}

/** Soft blurred colour blobs used as section backgrounds. */
export function Blobs({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sun/25 blur-3xl" />
      <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-sky/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
    </div>
  )
}

/** The little sun mark that echoes the "Sunlight" half of the logo. */
export function SunMark({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <circle cx="50" cy="50" r="20" fill="currentColor" />
      {Array.from({ length: 12 }).map((_, i) => (
        <rect
          key={i}
          x="48.5"
          y="4"
          width="3"
          height="13"
          rx="1.5"
          fill="currentColor"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
    </svg>
  )
}

export const accentMap = {
  sun: { bg: 'bg-sun-soft', dot: 'bg-brand', text: 'text-ink', ring: 'ring-brand/40' },
  sky: { bg: 'bg-sky-soft', dot: 'bg-sky', text: 'text-ink', ring: 'ring-sky/40' },
  mint: { bg: 'bg-mint-soft', dot: 'bg-mint', text: 'text-ink', ring: 'ring-mint/40' },
  brand: { bg: 'bg-brand-soft', dot: 'bg-brand', text: 'text-ink', ring: 'ring-brand/40' },
}
