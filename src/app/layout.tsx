import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadataBase = new URL('https://codeclub.smvdu.ac.in')

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: 'Code Club SMVDU | Think. Code. Solve. Grow.',
    template: '%s | Code Club SMVDU',
  },
  description: 'A student-driven technical community at SMVDU focused on problem-solving, coding, technical learning, and continuous practice. Join us for DSA, coding contests, tech talks, hackathons, and projects.',
  keywords: ['Code Club', 'SMVDU', 'coding', 'DSA', 'programming', 'hackathon', 'tech community', 'student club'],
  authors: [{ name: 'Code Club SMVDU' }],
  creator: 'Code Club SMVDU',
  publisher: 'Code Club SMVDU',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Code Club SMVDU',
    title: 'Code Club SMVDU | Think. Code. Solve. Grow.',
    description: 'A student-driven technical community at SMVDU focused on problem-solving, coding, technical learning, and continuous practice.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Code Club SMVDU',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Club SMVDU',
    description: 'Think. Code. Solve. Grow. - Student technical community at SMVDU',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF9F6' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1A1A' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}