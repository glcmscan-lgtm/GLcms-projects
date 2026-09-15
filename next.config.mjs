/** @type {import('next').NextConfig} */
const nextConfig = {
  // This folder is the project root (a stray lockfile lives higher up in the home dir).
  outputFileTracingRoot: import.meta.dirname,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    // Old WordPress URLs -> new routes, so existing links and search results keep working.
    return [
      { source: '/about-2', destination: '/about', permanent: true },
      { source: '/programs-2', destination: '/programs', permanent: true },
      { source: '/portfolio', destination: '/about', permanent: true },
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/toddler', destination: '/programs/infants-toddlers', permanent: true },
      { source: '/preschool', destination: '/programs/preschool-prek', permanent: true },
      // Programs were restructured from three age bands to two; keep the old URLs alive.
      { source: '/flex-care', destination: '/programs', permanent: true },
      { source: '/programs/infant-toddler', destination: '/programs/infants-toddlers', permanent: true },
      { source: '/programs/preschool', destination: '/programs/preschool-prek', permanent: true },
      { source: '/programs/flex-care', destination: '/programs', permanent: true },
      { source: '/terms-conditions', destination: '/terms', permanent: true },
      { source: '/privacy-policy-2', destination: '/privacy', permanent: true },
    ]
  },
}

export default nextConfig
