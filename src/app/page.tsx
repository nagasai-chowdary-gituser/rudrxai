import Hero from '@/components/Hero'
import WhatWeDo from '@/components/WhatWeDo'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Features from '@/components/Features'
import ProductsShowcase from '@/components/ProductsShowcase'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-[1] dark:bg-dark bg-[var(--color-bg)]">
        <WhatWeDo />
        <Problem />
        <Solution />
        <Features />
        <ProductsShowcase />
        <CTA />
      </div>
    </>
  )
}
