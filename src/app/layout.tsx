import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: 'Aridan Pantoja', url: 'https://aridan.dev' }],
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
  manifest: '/manifest.json',
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
    <html lang="pt-BR" className="h-full">
      <body className={cn('h-full antialiased', outfit.className)}>
        <div className="flex h-full flex-col">
          <Navbar />
          <main className="flex grow flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
