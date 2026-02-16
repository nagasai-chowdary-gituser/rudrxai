import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import PageBackground from '@/components/PageBackground'

export const metadata: Metadata = {
  title: 'About — RUDRXAI',
  description: 'Learn about our mission, values, and the team building the future of intelligent software.',
}

const values = [
  {
    title: 'Engineering Excellence',
    description: 'Every line of code is written with intent. We believe in clean architecture, comprehensive testing, and documentation that outlasts the team.',
  },
  {
    title: 'AI-First Thinking',
    description: 'We approach every problem through the lens of intelligence. If AI can make it better, faster, or smarter — we integrate it.',
  },
  {
    title: 'Ship, Then Iterate',
    description: 'Perfect is the enemy of shipped. We believe in rapid delivery with continuous improvement based on real user feedback.',
  },
  {
    title: 'Radical Transparency',
    description: 'Weekly demos, open communication, and honest timelines. We treat your budget like our own and never hide behind scope documents.',
  },
]

const timeline = [
  { year: '2023', title: 'Founded', description: 'Started with 2 engineers and a vision to make AI accessible.' },
  { year: '2024', title: 'First 20 Clients', description: 'Delivered 30+ projects across AI, web, and mobile.' },
  { year: '2025', title: 'SaaS Launch', description: 'Launched 3 proprietary SaaS products with 2000+ users.' },
  { year: '2026', title: 'Scaling Up', description: 'Growing the team and expanding globally with enterprise clients.' },
]

export default function AboutPage() {
  return (
    <>
      <PageBackground />
      <div className="relative z-10">
      {/* Hero */}
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] top-[-200px] left-[-100px] dark:bg-primary-600/30 bg-[#DD2A7B]/30" />
        <div className="glow-orb w-[400px] h-[400px] top-[10%] right-[-10%] dark:bg-blue-500/20 bg-[#515BD4]/25" />
        <div className="section-container relative">
          <AnimatedSection>
            <p className="dark:text-primary-400 text-[#F58529] font-medium text-sm tracking-widest uppercase mb-4">
              About Us
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-4xl dark:text-white text-[#1a0a1e]">
              We&apos;re Building the Future of{' '}
              <span className="gradient-text">Intelligent Software</span>
            </h1>
            <p className="text-xl dark:text-gray-400 text-[#4a2a5a] max-w-2xl leading-relaxed">
              RUDRXAI is a product engineering studio specializing in AI-powered
              software. We build for clients who refuse to settle for mediocre technology.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="relative h-px max-w-5xl mx-auto">
        <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-transparent dark:via-primary-500/20 dark:to-transparent bg-gradient-to-r from-transparent via-[#515BD4]/30 to-transparent" />
      </div>

      {/* Mission */}
      <section className="relative pt-12 pb-20">
        <div className="glow-orb w-[500px] h-[500px] top-[20%] right-[-15%] dark:bg-violet-500/20 bg-[#FEDA77]/25" />
        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-[#1a0a1e]">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] text-lg leading-relaxed mb-6">
                We believe every ambitious business deserves access to world-class software
                engineering. Too many great ideas die because of bad technology partners.
              </p>
              <p className="dark:text-gray-400 text-[#4a2a5a] text-lg leading-relaxed">
                Our mission is to be the engineering team that turns &ldquo;impossible&rdquo;
                into &ldquo;shipped&rdquo; — combining deep AI expertise with battle-tested
                engineering to build products that win markets.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="glass p-10 rounded-2xl">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: '50+', label: 'Projects Delivered' },
                    { value: '45+', label: 'Happy Clients' },
                    { value: '5', label: 'SaaS Products' },
                    { value: '<4 weeks', label: 'Avg. Time to MVP' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                      <div className="text-sm dark:text-gray-500 text-[#6b4b7a]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="relative h-px max-w-5xl mx-auto">
        <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-transparent dark:via-blue-500/20 dark:to-transparent bg-gradient-to-r from-transparent via-[#F58529]/25 to-transparent" />
      </div>

      {/* Values */}
      <section className="relative pt-12 pb-20">
        <div className="glow-orb w-[400px] h-[400px] bottom-0 right-0 dark:bg-blue-600/20 bg-[#515BD4]/25" />
        <div className="glow-orb w-[350px] h-[350px] top-[10%] left-[-10%] dark:bg-cyan-500/15 bg-[#DD2A7B]/25" />
        <div className="section-container relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-[#1a0a1e]">
              Our <span className="gradient-text">Values</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="glass-hover p-8 rounded-2xl h-full">
                  <h3 className="text-xl font-semibold dark:text-white text-[#1a0a1e] mb-3">{value.title}</h3>
                  <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="relative h-px max-w-5xl mx-auto">
        <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-transparent dark:via-primary-500/20 dark:to-transparent bg-gradient-to-r from-transparent via-[#FEDA77]/30 to-transparent" />
      </div>

      {/* Timeline */}
      <section className="relative pt-12 pb-20">
        <div className="glow-orb w-[450px] h-[450px] bottom-[-10%] left-[20%] dark:bg-primary-600/20 bg-[#F58529]/20" />
        <div className="section-container relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-[#1a0a1e]">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </AnimatedSection>
          <div className="max-w-2xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1}>
                <div className="flex gap-8 pb-12 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full dark:bg-primary-600/20 bg-[#515BD4]/20 border dark:border-primary-500/30 border-[#515BD4]/30 flex items-center justify-center dark:text-primary-400 text-[#F58529] text-sm font-bold shrink-0">
                      {item.year.slice(2)}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px h-full dark:bg-white/[0.06] bg-black/[0.06] mt-4" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold dark:text-white text-[#1a0a1e] mb-1">{item.title}</h3>
                    <p className="dark:text-gray-400 text-[#4a2a5a] text-sm">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
