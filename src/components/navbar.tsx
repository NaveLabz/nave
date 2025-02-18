import { WidthWrapper } from '@/components/width-wrapper'
import { siteConfig } from '@/config'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { MobileNav } from './mobile-nav'
import { Icons } from './icons'

export function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60 md:fixed md:top-6 md:border-none md:bg-transparent md:backdrop-blur-none">
      <WidthWrapper className="max-w-3xl">
        <div className="mx-auto">
          <nav className="flex h-14 items-center justify-between gap-8 rounded-full px-0 md:border md:bg-background md:px-8 md:backdrop-blur md:supports-[backdrop-filter]:bg-background/60">
            <Link href="/" className="flex items-center">
              <Icons.logo className="h-fit w-16 translate-y-1 fill-nave" />
            </Link>

            <ul className="hidden items-center gap-3 text-sm text-muted-foreground md:flex">
              {siteConfig.mainNav.map((link) => (
                <li
                  key={link.label}
                  className="transition-colors hover:text-foreground"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              className={buttonVariants({
                size: 'sm',
                className: 'hidden md:flex',
              })}
            >
              Contatar
            </Link>

            <MobileNav />
          </nav>
        </div>
      </WidthWrapper>
    </header>
  )
}
