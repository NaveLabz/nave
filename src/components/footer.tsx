import { Icons } from '@/components/icons'
import { WidthWrapper } from '@/components/width-wrapper'
import { siteConfig } from '@/config'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="space-y-6 text-center">
      <WidthWrapper>
        <div>
          <div className="flex flex-col items-center gap-6">
            <Link
              href="/"
              target="_top"
              className="flex w-fit items-center justify-center"
            >
              <Icons.logo className="h-fit w-48 fill-foreground/80 transition-colors hover:fill-foreground/50" />
            </Link>

            <ul className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
              {siteConfig.mainNav.map((link) => (
                <li
                  key={link.label}
                  className="transition-colors hover:text-foreground"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </WidthWrapper>

      <div className="border-t py-4 text-xs text-muted-foreground">
        <WidthWrapper>
          <p>Created by Karol Wojtyla, Aridan Pantoja</p>
        </WidthWrapper>
      </div>
    </footer>
  )
}
