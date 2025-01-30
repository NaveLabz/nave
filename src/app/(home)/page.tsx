import { Benefits } from '@/app/(home)/_components/benefits'
import { FAQ } from '@/app/(home)/_components/faq'
import { Hero } from '@/app/(home)/_components/hero'
import { Steps } from '@/app/(home)/_components/steps'
import { Pricing } from '@/app/(home)/_components/pricing'
import { Projects } from '@/app/(home)/_components/projects'
import { Testimonials } from '@/app/(home)/_components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Steps />
      <Testimonials />
      <Benefits />
      <Pricing />
      <FAQ />
    </>
  )
}
