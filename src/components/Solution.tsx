'use client'

import AnimatedSection from './AnimatedSection'

const steps = [
  {
    number: '01',
    title: 'Discover & Strategize',
    description:
      'We deeply understand your business, users, and goals. Our team crafts a technical strategy and detailed roadmap before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Design & Architect',
    description:
      'Premium UI/UX design paired with robust, scalable architecture. We build systems meant to handle millions of users from day one.',
  },
  {
    number: '03',
    title: 'Build & Integrate AI',
    description:
      'Agile sprints with weekly deliverables. We integrate cutting-edge AI/ML where it matters — intelligent features, not buzzwords.',
  },
  {
    number: '04',
    title: 'Ship & Scale',
    description:
      'Production deployment with CI/CD, monitoring, and documentation. We stay on to optimize, iterate, and ensure your product thrives.',
  },
]

export default function Solution() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb w-[600px] h-[600px] -bottom-[200px] -right-[200px] dark:bg-primary-600/[0.06] bg-[#FEDA77]/20" />

      <div className="section-container relative">
        <AnimatedSection className="text-center mb-20">
          <p className="dark:text-primary-400 text-[#8134AF] font-semibold text-sm tracking-widest uppercase mb-4">
            Our Approach
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 dark:text-white text-[#1a0a1e]">
            A Smarter Way to{' '}
            <span className="gradient-text">Build Software</span>
          </h2>
          <p className="dark:text-gray-400 text-[#4a2a5a] text-lg max-w-2xl mx-auto leading-relaxed">
            We combine deep AI expertise with proven engineering practices to deliver
            products that outperform the competition — on time and on budget.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="glass-hover p-8 rounded-2xl h-full group relative overflow-hidden">
                {/* Step number background */}
                <span className="absolute -top-4 -right-2 text-[120px] font-bold dark:text-white/[0.02] text-black/[0.03] leading-none select-none dark:group-hover:text-white/[0.04] group-hover:text-black/[0.06] transition-colors duration-700">
                  {step.number}
                </span>

                <div className="relative">
                  <span className="text-sm font-mono dark:text-primary-400 text-[#DD2A7B] mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold dark:text-white text-[#1a0a1e] mb-4">
                    {step.title}
                  </h3>
                  <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] dark:bg-gradient-to-r dark:from-transparent dark:via-primary-500/50 dark:to-transparent bg-gradient-to-r from-transparent via-[#DD2A7B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
