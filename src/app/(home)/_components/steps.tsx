import { SectionHeader } from '@/components/section-header'
import { WidthWrapper } from '@/components/width-wrapper'
import { Navigation, PencilRuler, Rocket, Route } from 'lucide-react'

const STEPS = [
  {
    Icon: Navigation,
    title: 'Explorar',
    description: 'Entendemos suas necessidades e planejamos.',
  },
  {
    Icon: PencilRuler,
    title: 'Construir',
    description: 'Criamos um site moderno e funcional para o seu negócio.',
  },
  {
    Icon: Rocket,
    title: 'Lançar',
    description: 'Entregamos e ajudamos no crescimento online.',
  },
]

export function Steps() {
  return (
    <section id="processo" className="scroll-m-16">
      <WidthWrapper className="max-w-5xl">
        <div className="section-spacing">
          <SectionHeader.Root>
            <SectionHeader.Label icon={Route}>
              Nosso processo
            </SectionHeader.Label>
            <SectionHeader.Title>Como funcionamos?</SectionHeader.Title>
            <SectionHeader.Description>
              3 etapas simples para o seu sucesso
            </SectionHeader.Description>
          </SectionHeader.Root>

          <div className="grid grid-cols-1 gap-20 text-balance text-center sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-4">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-3"
              >
                <step.Icon className="size-16" strokeWidth={1.25} />
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}
