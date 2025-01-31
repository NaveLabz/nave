import { SectionHeader } from '@/components/section-header'
import { buttonVariants } from '@/components/ui/button'
import { Meteors } from '@/components/ui/meteors'
import { Separator } from '@/components/ui/separator'
import { WidthWrapper } from '@/components/width-wrapper'
import { siteConfig } from '@/config'
import {
  Circle,
  CircleCheck,
  CircleDollarSign,
  Earth,
  Orbit,
} from 'lucide-react'
import Link from 'next/link'

const PLANS = [
  {
    Icon: Circle,
    title: 'Plutão',
    price: 'R$ 500',
    items: [
      'Landing Page',
      'Link Tree personalizada',
      'Design responsivo',
      'Site leve e rápido',
      'Hospedagem e domínio',
      'Relatórios de desempenho',
    ],
  },
  {
    Icon: Earth,
    title: 'Terra',
    price: 'R$ 1200',
    items: [
      'Blog ou portfólio',
      'Site institucional',
      'Painel para edição de conteúdo',
      'Integração com redes sociais',
      'Hospedagem e domínio',
      'Relatórios de desempenho',
    ],
  },
  {
    Icon: Orbit,
    title: 'Júpiter',
    price: 'R$ 3500',
    items: [
      'E-commerce completo',
      'Painel de gerenciamento',
      'Automação de e-mails',
      'SEO otimizado para vendas',
      'Hospedagem e domínio',
      'Relatórios de desempenho',
    ],
  },
]

export function Pricing() {
  return (
    <section id="precos" className="scroll-m-32">
      <WidthWrapper className="max-w-5xl">
        <div className="section-spacing">
          <SectionHeader.Root>
            <SectionHeader.Label icon={CircleDollarSign}>
              Nossos preços
            </SectionHeader.Label>
            <SectionHeader.Title>Tabela de preços</SectionHeader.Title>
            <SectionHeader.Description>
              Escolha a melhor opção para o seu negócio e decole no digital!
            </SectionHeader.Description>
          </SectionHeader.Root>

          <div className="grid grid-cols-1 gap-8 text-balance sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-4">
            {PLANS.map((plan, i) => (
              <div
                className="group relative flex flex-col items-start gap-5 overflow-hidden rounded-xl border border-nave p-6 [&:nth-child(2)]:bg-nave/10"
                key={i}
              >
                <div className="absolute inset-0 -z-20 bg-gradient-to-tl from-nave/40 via-transparent to-transparent opacity-40">
                  <Meteors number={4} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <plan.Icon className="size-5" />
                    <p className="text-sm">{plan.title}</p>
                  </div>
                  <p className="text-4xl font-bold">{plan.price}</p>
                  <p className="text-muted-foreground">Em até 8x sem juros</p>
                </div>

                <Separator className="bg-gradient-to-l from-transparent via-nave to-transparent" />

                <ul className="space-y-2">
                  {plan.items.map((item, i) => (
                    <li className="flex items-center gap-2" key={i}>
                      <CircleCheck className="size-4" /> {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={siteConfig.links.instagram}
                  target="_blank"
                  className={buttonVariants({ className: 'mt-auto w-full' })}
                >
                  Fazer orçamento
                </Link>
              </div>
            ))}
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}
