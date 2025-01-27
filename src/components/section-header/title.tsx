import { cn } from '@/lib/utils'

type SectionHeaderTitleProps = {
  children: React.ReactNode
  mainTitle?: boolean
} & React.HTMLAttributes<HTMLHeadingElement>

export function SectionHeaderTitle({
  children,
  className,
  mainTitle = false,
  ...props
}: SectionHeaderTitleProps) {
  const HeadingTag = mainTitle ? 'h1' : 'h2'

  return (
    <HeadingTag className={cn('mb-2', className)} {...props}>
      {children}
    </HeadingTag>
  )
}
