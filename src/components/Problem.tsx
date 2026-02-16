'use client'

import AnimatedSection from './AnimatedSection'

const problems = [
  {
    title: 'Slow Development Cycles',
    description:
      'Traditional agencies take months to ship. Your competitors move faster while you wait for endless revisions and delays.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'No AI Expertise',
    description:
      "Most dev shops can't integrate AI/ML capabilities. They build static products in a world that demands intelligence and automation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: 'Budget Overruns',
    description:
      'Projects that start at $50K end at $150K. Poor planning, scope creep, and misaligned incentives drain your runway.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Poor Technical Quality',
    description:
      'Spaghetti code that breaks in production. No tests, no CI/CD, no documentation — a nightmare when you need to scale.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
]

export default function Problem() {
  return (
    <section className="section-padding relative">
      {/* Background accent */}
      <div className="glow-orb w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 dark:bg-primary-600/[0.05] bg-[#DD2A7B]/15" />

      <div className="section-container relative">
        <AnimatedSection className="text-center mb-20">
          <p className="dark:text-primary-400 text-[#DD2A7B] font-semibold text-sm tracking-widest uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 dark:text-white text-[#1a0a1e]">
            Building Software{' '}
            <span className="gradient-text">Shouldn&apos;t Be This Hard</span>
          </h2>
          <p className="dark:text-gray-400 text-[#4a2a5a] text-lg max-w-2xl mx-auto leading-relaxed">
            Most businesses struggle with outdated development approaches that waste
            time, money, and opportunity.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5">
          {problems.map((problem, i) => (
            <AnimatedSection key={problem.title} delay={i * 0.1}>
              <div className="glass-hover p-8 md:p-10 rounded-2xl h-full group">
                <div className="w-12 h-12 rounded-xl dark:bg-red-500/10 bg-[#DD2A7B]/10 border dark:border-red-500/20 border-[#DD2A7B]/25 flex items-center justify-center dark:text-red-400 text-[#DD2A7B] mb-6 dark:group-hover:bg-red-500/20 group-hover:bg-[#DD2A7B]/20 transition-colors duration-500">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold dark:text-white text-[#1a0a1e] mb-3">
                  {problem.title}
                </h3>
                <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
