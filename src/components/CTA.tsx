'use client'

import AnimatedSection from './AnimatedSection'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="section-container relative">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary-600/30 dark:via-blue-700/20 dark:to-cyan-600/10 bg-gradient-to-br from-[#F58529]/60 via-[#DD2A7B]/40 to-[#8134AF]/30" />
            <div className="absolute inset-0 dark:bg-dark/60 bg-white/40 backdrop-blur-sm" />
            <div className="glow-orb w-[400px] h-[400px] -top-[100px] -left-[100px] dark:bg-primary-500/30 bg-[#FEDA77]/30" />
            <div className="glow-orb w-[300px] h-[300px] -bottom-[100px] -right-[100px] dark:bg-blue-500/20 bg-[#515BD4]/25" />

            {/* Grid overlay */}
            <div
              className="absolute inset-0 dark:opacity-[0.04] opacity-[0.06]"
              style={{
                backgroundImage: `linear-gradient(rgba(128,128,128,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(128,128,128,0.3) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Content */}
            <div className="relative px-8 py-20 md:px-16 md:py-24 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 dark:text-white text-[#1a0a1e]">
                Ready to Build Something{' '}
                <span className="gradient-text">Extraordinary</span>?
              </h2>
              <p className="text-lg dark:text-gray-300 text-[#4a2a5a] max-w-2xl mx-auto mb-10 leading-relaxed">
                Let&apos;s turn your vision into a product that users love and competitors
                envy. Get in touch and let&apos;s start building.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary text-base">
                  Start Your Project
                </Link>
                <Link href="/portfolio" className="btn-secondary text-base">
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
