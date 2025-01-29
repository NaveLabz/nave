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
    <HeadingTag
      className={cn('', className, mainTitle ? 'mb-4' : 'mb-2')}
      {...props}
    >
      {children}
    </HeadingTag>
  )
}
