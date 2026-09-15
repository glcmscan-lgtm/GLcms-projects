import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCallBar from '@/components/MobileCallBar'
import ScrollTop from '@/components/ScrollTop'
import { brand, site } from '@/data/site'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
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
        url: '/og-glcm.jpg',
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
    images: ['/og-glcm.jpg'],
  },
  icons: {
    icon: '/favicon-glcm.png',
    apple: '/favicon-glcm.png',
  },
  alternates: {
    canonical: '/',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: site.legalName,
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
    closes: '18:00',
  },
  slogan: site.tagline,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable}`}>
      <head>
        {/* Marks the document as JS-enabled so scroll-reveal never hides content without JS. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="pb-16 md:pb-0">
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
