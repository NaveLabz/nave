import { Benefits } from '@/app/(home)/_components/benefits'
import { FAQ } from '@/app/(home)/_components/faq'
import { Hero } from '@/app/(home)/_components/hero'
import { Steps } from '@/app/(home)/_components/steps'

export default function Home() {
  return (
    <>
      <Hero />
      <Steps />
      <Benefits />
      <FAQ />
    </>
  )
}
