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
              <Icons.logo className="h-fit w-48 fill-nave" />
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
          <p>
            Desenvolvido com ❤️ por{' '}
            <Link
              href="https://www.linkedin.com/in/karolwojtyla/"
              target="_blank"
              className="text-nave underline underline-offset-4 transition-colors hover:text-nave/80"
            >
              Karol Wojtyla
            </Link>{' '}
            &{' '}
            <Link
              href="https://www.linkedin.com/in/aridanpantoja/"
              target="_blank"
              className="text-nave underline underline-offset-4 transition-colors hover:text-nave/80"
            >
              Aridan Pantoja
            </Link>
          </p>
        </WidthWrapper>
      </div>
    </footer>
  )
}
