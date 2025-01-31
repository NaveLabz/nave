'use client'

import { AlignRight } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { siteConfig } from '@/config'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { useState } from 'react'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="block md:hidden">
        <AlignRight />
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader className="hidden">
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <nav>
          <ul className="flex flex-col items-start gap-3 text-muted-foreground">
            {siteConfig.mainNav.map((link) => (
              <li
                key={link.label}
                className="transition-colors hover:text-foreground"
              >
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="w-full">
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                onClick={() => setIsOpen(false)}
                className={buttonVariants({
                  size: 'sm',
                  className: 'w-full',
                })}
              >
                Contatar
              </Link>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
