import { SectionHeader } from '@/components/section-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { WidthWrapper } from '@/components/width-wrapper'
import { MessageCircleQuestion } from 'lucide-react'

const QUESTIONS = [
  {
    question: 'Quanto tempo leva para criar um site?',
    answer:
      'O prazo varia conforme a complexidade do projeto, mas, em média, um site simples pode ser entregue em 2 a 4 semanas.',
  },
  {
    question: 'Vocês oferecem suporte após a entrega do site?',
    answer:
      'Sim! Oferecemos suporte e manutenção para garantir que seu site continue funcionando perfeitamente.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'Trabalhamos com parcelamento e diversas formas de pagamento. O valor pode variar conforme o projeto.',
  },
  {
    question: 'Posso solicitar mudanças no design?',
    answer:
      'Claro! Antes da entrega final, você pode solicitar ajustes no design para garantir que fique do jeito que imaginou.',
  },
  {
    question: 'Preciso ter um domínio e hospedagem antes de contratar?',
    answer:
      'Não! Podemos ajudar você a registrar seu domínio e escolher a melhor hospedagem para seu site.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="scroll-m-48">
      <WidthWrapper className="max-w-3xl">
        <div className="section-spacing">
          <SectionHeader.Root>
            <SectionHeader.Label icon={MessageCircleQuestion}>
              FAQ
            </SectionHeader.Label>
            <SectionHeader.Title>Perguntas frequentes</SectionHeader.Title>
            <SectionHeader.Description>
              Encontre as informações que você precisa sobre nossos serviços. Se
              tiver mais dúvidas, sinta-se à vontade para entrar em contato
              conosco!
            </SectionHeader.Description>
          </SectionHeader.Root>

          <Accordion type="single" collapsible>
            {QUESTIONS.map((question, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{question.question}</AccordionTrigger>
                <AccordionContent>{question.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </WidthWrapper>
    </section>
  )
}
