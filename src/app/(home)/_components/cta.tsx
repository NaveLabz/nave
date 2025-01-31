import { SectionHeader } from '@/components/section-header'
import { buttonVariants } from '@/components/ui/button'
import { Meteors } from '@/components/ui/meteors'
import { WidthWrapper } from '@/components/width-wrapper'
import { siteConfig } from '@/config'
import Link from 'next/link'

export function CTA() {
  return (
    <section>
      <WidthWrapper className="max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl border border-nave bg-gradient-to-tl from-nave/40 via-transparent to-transparent px-4 py-8 md:px-6 md:py-16">
          <div className="absolute inset-0 -z-20 opacity-10">
            <Meteors number={4} />
          </div>
          <SectionHeader.Root>
            <SectionHeader.Title>
              Pronto para lançar seu projeto?
            </SectionHeader.Title>
            <SectionHeader.Description>
              Transforme sua ideia em um site incrível e conquiste novos
              horizontes.
            </SectionHeader.Description>

            <Link
              target="_blank"
              className={buttonVariants({ size: 'sm', className: 'mt-6' })}
              href={siteConfig.links.instagram}
            >
              Fazer orçamento
            </Link>
          </SectionHeader.Root>
        </div>
      </WidthWrapper>
    </section>
  )
}
