import { Playpen_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCallBar from '@/components/MobileCallBar'
import ScrollTop from '@/components/ScrollTop'
import { brand, site } from '@/data/site'

// The school's typeface (GLCM brand kit, Oct 22, 2026).
const playpen = Playpen_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playpen',
})

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Guiding Light Christian Montessori',
    template: '%s | Guiding Light Christian Montessori',
  },
  description: site.shortDescription,
  keywords: [
    'childcare Ashburn VA',
    'child day center Loudoun County',
    'Christian daycare Virginia',
    'infant care Ashburn VA',
    'Montessori preschool Ashburn Virginia',
    'before and after school care 20147',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: brand.name,
    title: 'Guiding Light Christian Montessori',
    description: site.shortDescription,
    images: [
      {
        url: '/glcm-og.jpg',
        width: 1200,
        height: 630,
        alt: brand.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: brand.name,
    description: site.shortDescription,
    images: ['/glcm-og.jpg'],
  },
  icons: {
    icon: '/glcm-favicon.png',
    apple: '/glcm-apple-icon.png',
  },
  alternates: {
    canonical: '/',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: site.name,
  legalName: site.legalName,
  description: site.shortDescription,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: 'US',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '06:30',
    closes: '18:30',
  },
  slogan: site.tagline,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playpen.variable}>
      <head>
        {/* Marks the document as JS-enabled so scroll-reveal never hides content without JS. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
        <ScrollTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  )
}
