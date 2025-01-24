import { SectionHeader } from '@/components/section-header'
import { WidthWrapper } from '@/components/width-wrapper'
import { MessageCircleMore, Route } from 'lucide-react'

const STEPS = [
  {
    Icon: MessageCircleMore,
    title: 'Subscribe',
    description: 'Select your plan that fits your needs and Subscribe it.',
  },
]

export default function Home() {
  return (
    <section className="my-32">
      <WidthWrapper className="max-w-5xl">
        <div className="space-y-8">
          <SectionHeader.Root>
            <SectionHeader.Label icon={Route}>
              Nosso processo
            </SectionHeader.Label>
            <SectionHeader.Title>Como funcionamos?</SectionHeader.Title>
            <SectionHeader.Description>
              3 etapas simples para o seu sucesso
            </SectionHeader.Description>
          </SectionHeader.Root>

          <div className="grid grid-cols-3 gap-4 text-balance text-center">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-3"
              >
                <step.Icon className="size-16" />
                <h3 className="text-2xl">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}
