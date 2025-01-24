import { WidthWrapper } from '@/components/width-wrapper'
import { siteConfig } from '@/config'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { MobileNav } from './mobile-nav'

export function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60 md:fixed md:top-6 md:border-none md:bg-transparent md:backdrop-blur-0">
      <WidthWrapper className="max-w-prose">
        <div className="mx-auto md:bg-background md:backdrop-blur md:supports-[backdrop-filter]:bg-background/60">
          <nav className="flex h-14 items-center justify-between gap-8 rounded-full px-0 md:border md:px-8">
            <Link href="/">Logo</Link>

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
              href={siteConfig.links.github}
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
