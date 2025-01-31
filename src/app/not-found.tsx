import { buttonVariants } from '@/components/ui/button'
import { WidthWrapper } from '@/components/width-wrapper'
import { Telescope } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="mb-0 py-0">
      <WidthWrapper className="max-w-3xl">
        <div className="flex w-full flex-col items-center justify-center text-pretty text-center">
          <Telescope className="size-16" />
          <h1 className="my-4">Página não encontrada</h1>
          <p className="mb-6 text-sm text-muted-foreground">
            Ops! A página que você está procurando não existe. Ela pode ter sido
            removida, ter tido seu nome alterado ou estar temporariamente
            indisponível.
          </p>
          <Link href="/" className={buttonVariants()}>
            Voltar para a página inicial
          </Link>
        </div>
      </WidthWrapper>
    </section>
  )
}
