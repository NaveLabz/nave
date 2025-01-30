import { SectionHeader } from '@/components/section-header'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { WidthWrapper } from '@/components/width-wrapper'
import { Sparkles } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    role: 'Pride and Prejudice',
    image: '/karol-wojtyla.webp',
  },
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    role: 'Pride and Prejudice',
    image: '/karol-wojtyla.webp',
  },
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    role: 'Pride and Prejudice',
    image: '/karol-wojtyla.webp',
  },
]
export function Testimonials() {
  return (
    <section id="avaliacoes" className="scroll-m-40">
      <WidthWrapper>
        <div className="space-y-8 md:space-y-12">
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
