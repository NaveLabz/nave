import { SectionHeader } from '@/components/section-header'
import { WidthWrapper } from '@/components/width-wrapper'
import { Boxes } from 'lucide-react'
import Image from 'next/image'

export function Projects() {
  return (
    <section id="projetos" className="scroll-m-16">
      <WidthWrapper className="max-w-5xl">
        <div className="space-y-16 md:space-y-12">
          <SectionHeader.Root>
            <SectionHeader.Label icon={Boxes}>
              Nossos projetos
            </SectionHeader.Label>
            <SectionHeader.Title>Projetos Recentes</SectionHeader.Title>
            <SectionHeader.Description>
              Dê uma olhada em alguns de nossos projetos mais recentes.
            </SectionHeader.Description>
          </SectionHeader.Root>

          <div className="grid grid-cols-1 gap-20 text-balance text-center md:grid-cols-2 md:gap-6">
            <div className="overflow-hidden rounded-xl border border-[#f089d9]">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tl from-[rgba(240,137,217,0.3)] via-transparent to-transparent"></div>
                <Image
                  src="/project-placeholder.webp"
                  alt="Teste"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}
