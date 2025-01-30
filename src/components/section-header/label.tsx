import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { HTMLAttributes } from 'react'

type SectionHeaderLabelProps = {
  icon?: LucideIcon
} & HTMLAttributes<HTMLDivElement>

export function SectionHeaderLabel({
  children,
  className,
  icon: Icon,
  ...props
}: SectionHeaderLabelProps) {
  return (
    <div
      {...props}
      className={cn(
        'mb-4 flex items-center gap-1.5 rounded-md border bg-gradient-to-r from-foreground to-[#fcd2f3] px-3 py-1.5 text-xs text-background',
        className,
      )}
    >
      {Icon && <Icon className="size-3" />}
      {children}
    </div>
  )
}
