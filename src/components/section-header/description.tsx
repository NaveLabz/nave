import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type SectionHeaderDescriptionProps = HTMLAttributes<HTMLParagraphElement>

export function SectionHeaderDescription({
  children,
  className,
  ...props
}: SectionHeaderDescriptionProps) {
  return (
    <p {...props} className={cn('text-muted-foreground', className)}>
      {children}
    </p>
  )
}
