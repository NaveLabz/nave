import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type SectionHeaderRootProps = HTMLAttributes<HTMLDivElement>

export function SectionHeaderRoot({
  children,
  className,
  ...props
}: SectionHeaderRootProps) {
  return (
    <div
      {...props}
      className={cn(
        'mx-auto flex max-w-prose flex-col items-center justify-center text-balance text-center',
        className,
      )}
    >
      {children}
    </div>
  )
}
