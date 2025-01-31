import { SectionHeader } from '@/components/section-header'
import { WidthWrapper } from '@/components/width-wrapper'
import {
  Gauge,
  Headset,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  Search,
  Star,
} from 'lucide-react'

const BENEFITS = [
  {
    Icon: Palette,
    title: 'Design Personalizado',
    description: 'Sites feitos sob medida para destacar sua marca.',
  },
  {
    Icon: MonitorSmartphone,
    title: 'Responsividade Total',
    description: 'Perfeito em qualquer dispositivo, do mobile ao desktop.',
  },
  {
    Icon: Gauge,
    title: 'Performance Otimizada',
    description: 'Velocidade e eficiência para conquistar seu público.',
  },
  {
    Icon: MousePointerClick,
    title: 'Foco em Conversão',
    description: 'Estratégias para transformar visitantes em clientes.',
  },
  {
    Icon: Search,
    title: 'SEO Pronto',
    description: 'Seu site otimizado para aparecer no topo das buscas.',
  },
  {
    Icon: Headset,
    title: 'Suporte Dedicado',
    description: 'Acompanhamento e ajustes sempre que você precisar.',
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="scroll-m-32">
      <WidthWrapper className="max-w-5xl">
        <div className="section-spacing">
          <SectionHeader.Root>
            <SectionHeader.Label icon={Star}>
              Seus benefícios
            </SectionHeader.Label>
            <SectionHeader.Title>Vantagens da Nave</SectionHeader.Title>
            <SectionHeader.Description>
              6 principais pontos para o seu sucesso digital
            </SectionHeader.Description>
          </SectionHeader.Root>

          <div className="grid grid-cols-1 gap-20 text-balance text-center sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-x-4 md:gap-y-12">
            {BENEFITS.map((benefit, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-3"
              >
                <benefit.Icon className="size-16" strokeWidth={1.25} />
                <h3 className="text-2xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}
