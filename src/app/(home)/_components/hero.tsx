import { ScrollIndicator } from '@/app/(home)/_components/scroll-indicator'
import { SectionHeader } from '@/components/section-header'
import { SparklesCore } from '@/components/ui/sparkles'
import { WidthWrapper } from '@/components/width-wrapper'
import Link from 'next/link'

export function Hero() {
  return (
    <section>
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_300px_at_50%_200px,#f089d9,transparent)] opacity-10"></div>
      <div className="absolute inset-0 -z-20 h-full w-full opacity-60">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1}
          maxSize={2}
          particleDensity={12}
          className="h-full w-full"
        />
      </div>
      <WidthWrapper>
        <SectionHeader.Root className="flex flex-col items-center justify-center text-balance text-center">
          <SectionHeader.Label>20% OFF em Landing Pages!</SectionHeader.Label>

          <SectionHeader.Title mainTitle>
            Transforme sua presença digital com a{' '}
            <span className="text-[#f089d9]">Nave Labz</span>
          </SectionHeader.Title>

          <SectionHeader.Description>
            Criamos sites e experiências digitais que ajudam sua empresa a a se
            destacar no mundo online.
          </SectionHeader.Description>

          <Link
            href="#precos"
            target="_self"
            className="mt-6 inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-[#f089d9] bg-[linear-gradient(110deg,#000103,45%,rgba(240,137,217,0.25),55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-foreground transition-colors hover:text-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-ring"
          >
            Ver preços
          </Link>
        </SectionHeader.Root>
      </WidthWrapper>

      <ScrollIndicator />
    </section>
  )
}
