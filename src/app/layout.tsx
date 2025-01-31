import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Analytics } from '@vercel/analytics/next'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    { name: 'Aridan Pantoja', url: 'https://aridan.dev' },
    { name: 'Karol Wojtyla', url: 'https://www.linkedin.com/in/karolwojtyla/' },
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },
  icons: '/favicon.ico',
  generator: 'Next.js',
  category: 'website',
  metadataBase: new URL(siteConfig.url),
  manifest: '/manifest.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth">
      <body className={cn('h-full min-h-screen antialiased', outfit.className)}>
        <div className="flex flex-col">
          <Navbar />
          <main className="flex h-full grow flex-col">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
