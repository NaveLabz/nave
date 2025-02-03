import { SectionHeader } from '@/components/section-header'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { WidthWrapper } from '@/components/width-wrapper'
import { Sparkles } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'A Nave ofereceu um serviço de extrema qualidade, possibilitando a facilidade e acessibilidade através do site produzido para o meu perfil. Recomendo para quem quer ampliar o seu negócio com qualidade e eficácia.',
    name: 'Camile Medeiros',
    role: 'CEO - Profa. Camile Medeiros',
    image: '/camile-medeiros.webp',
  },
  {
    quote:
      'Impecável! Surpreendeu todas as expectativas. A Nave foi muito prestativa, flexível e pontual com muito bom gosto. A entrega ficou perfeita, de forma muito organizada. Recomendo fortemente.',
    name: 'Fabiana Macedo',
    role: 'CEO & Co-Founder - Local MKT',
    image: '/fabiana-macedo.webp',
  },
  {
    quote:
      'Muito bom mesmo! Maravilhoso o serviço prestado pela Nave. Com certeza voltaremos a trabalhar juntos no futuro!',
    name: 'Lucas Botelho',
    role: 'CEO & Co-Founder - Agência Zion Web',
    image: '/lucas-botelho.webp',
  },
]
export function Testimonials() {
  return (
    <section id="avaliacoes" className="scroll-m-40">
      <WidthWrapper>
        <div className="section-spacing">
          <SectionHeader.Root>
            <SectionHeader.Label icon={Sparkles}>
              Nossas avaliações
            </SectionHeader.Label>
            <SectionHeader.Title>Avaliação dos clientes</SectionHeader.Title>
            <SectionHeader.Description>
              Conheça as incríveis experiências de clientes com nossos serviços
            </SectionHeader.Description>
          </SectionHeader.Root>

          <InfiniteMovingCards
            items={TESTIMONIALS}
            direction="right"
            speed="slow"
          />
        </div>
      </WidthWrapper>
    </section>
  )
}
