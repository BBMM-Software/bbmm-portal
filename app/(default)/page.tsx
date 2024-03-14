export const metadata = {
  title: 'BBMM Software',
  description: "BBMM Software, a freelancing firm with 5+ years of experience, specializes in custom software development using industry-leading practices to meet unique client needs. We're committed to quality, fostering lasting partnerships, and driving success—contact us to bring your ideas to life."
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
