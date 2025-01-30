import { SectionHeader } from '@/components/section-header'
import { Button } from '@/components/ui/button'
import { Meteors } from '@/components/ui/meteors'
import { WidthWrapper } from '@/components/width-wrapper'
import { Boxes, SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const PROJECTS = [
  {
    title: 'Clínica Layse Félix',
    image: '/clinica-layse-felix.webp',
    description:
      'Saúde e bem-estar com pilates, fisioterapia e medicina do trabalho.',
    url: 'https://clinicalaysefelix.com.br',
  },
  {
    title: 'Professora Camile Medeiros',
    image: '/profa-camile-medeiros.webp',
    description:
      'Conteúdos e materiais educacionais da professora Camile Medeiros.',
    url: 'https://profacamilemedeiros.com.br',
  },
  {
    title: 'KRCOD',
    image: '/krcod.webp',
    description:
      'Ferramenta de gerar QR Codes para desenvolvedores e designers.',
    url: 'https://krcod.com',
  },
]

export function Projects() {
  return (
    <section id="projetos" className="scroll-m-40">
      <WidthWrapper>
        <div className="space-y-8 md:space-y-12">
          <SectionHeader.Root>
            <SectionHeader.Label icon={Boxes}>
              Nossos projetos
            </SectionHeader.Label>
            <SectionHeader.Title>Projetos Recentes</SectionHeader.Title>
            <SectionHeader.Description>
              Dê uma olhada em alguns de nossos projetos mais recentes.
            </SectionHeader.Description>
          </SectionHeader.Root>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-4">
            {PROJECTS.map((project, i) => (
              <Link
                className="group relative flex flex-col items-start overflow-hidden text-pretty rounded-xl border border-nave hover:cursor-pointer"
                href={project.url}
                target="_blank"
                key={i}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-transparent backdrop-blur-none transition-all group-hover:bg-background/40 group-hover:backdrop-blur-sm">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-1/2 top-1/2 translate-x-1/2 bg-nave opacity-0 transition-all hover:bg-nave/80 group-hover:-translate-y-1/2 group-hover:opacity-100"
                    >
                      <SquareArrowOutUpRight />
                    </Button>
                  </div>

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1920}
                    height={1080}
                  />
                </div>

                <div className="relative flex w-full grow flex-col gap-1 border-t border-nave p-4">
                  <p className="text-base font-bold md:text-lg">
                    {project.title}
                  </p>

                  <p className="text-sm text-muted-foreground md:text-base">
                    {project.description}
                  </p>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-nave/40 via-transparent to-transparent opacity-30 transition-opacity group-hover:opacity-70">
                    <Meteors number={4} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}
