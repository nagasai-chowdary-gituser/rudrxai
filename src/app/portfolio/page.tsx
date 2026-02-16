import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import CTA from '@/components/CTA'
import PageBackground from '@/components/PageBackground'

export const metadata: Metadata = {
  title: 'Portfolio — RUDRXAI',
  description: 'Explore our work — AI platforms, SaaS products, mobile apps, and enterprise solutions.',
}

const projects = [
  {
    title: 'HealthBridge AI Platform',
    category: 'AI / Healthcare',
    description:
      'Built an AI-powered diagnostic assistant for a health-tech startup. Processes medical images with 97% accuracy and integrates with existing EHR systems.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'AWS'],
    impact: '97% diagnostic accuracy',
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    title: 'ScaleUp Commerce',
    category: 'Web / E-Commerce',
    description:
      'Full-stack e-commerce platform with AI-powered product recommendations, real-time inventory management, and dynamic pricing engine.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
    impact: '35% increase in conversions',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'FinFlow Dashboard',
    category: 'SaaS / FinTech',
    description:
      'Enterprise financial analytics dashboard with real-time data visualization, predictive modeling, and automated reporting for 50+ metrics.',
    tech: ['React', 'D3.js', 'Python', 'Apache Kafka', 'GCP'],
    impact: '10K+ daily active users',
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    title: 'RideSync Mobile',
    category: 'Mobile / Logistics',
    description:
      'Cross-platform ride-sharing app with real-time GPS tracking, intelligent driver-rider matching, surge pricing, and in-app payment system.',
    tech: ['React Native', 'Go', 'MongoDB', 'Socket.io', 'Mapbox'],
    impact: '100K+ rides completed',
    gradient: 'from-orange-600 to-amber-600',
  },
  {
    title: 'LegalMind AI',
    category: 'AI / Legal',
    description:
      'NLP-powered legal document analysis platform. Extracts key clauses, identifies risks, and summarizes contracts in seconds instead of hours.',
    tech: ['OpenAI', 'LangChain', 'Next.js', 'Pinecone', 'Azure'],
    impact: '90% time reduction',
    gradient: 'from-pink-600 to-rose-600',
  },
  {
    title: 'EduPlatform LMS',
    category: 'SaaS / EdTech',
    description:
      'Learning management system with AI-personalized learning paths, video conferencing, assignment management, and progress analytics for 200+ institutions.',
    tech: ['Next.js', 'Django', 'PostgreSQL', 'WebRTC', 'AWS'],
    impact: '200+ institutions onboarded',
    gradient: 'from-cyan-600 to-blue-600',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <PageBackground />
      <div className="relative z-10">
      {/* Hero */}
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] top-[-200px] right-[-200px] dark:bg-blue-600/25 bg-[#515BD4]/30" />
        <div className="glow-orb w-[400px] h-[400px] top-[20%] left-[-15%] dark:bg-violet-500/20 bg-[#FEDA77]/25" />
        <div className="section-container relative">
          <AnimatedSection>
            <p className="dark:text-primary-400 text-[#F58529] font-medium text-sm tracking-widest uppercase mb-4">
              Portfolio
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-4xl dark:text-white text-[#1a0a1e]">
              Work That{' '}
              <span className="gradient-text">Speaks for Itself</span>
            </h1>
            <p className="text-xl dark:text-gray-400 text-[#4a2a5a] max-w-2xl leading-relaxed">
              From AI platforms to consumer apps, here&apos;s a selection of projects
              we&apos;re proud of. Each one was delivered on time and on budget.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="relative h-px max-w-5xl mx-auto">
        <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-transparent dark:via-blue-500/20 dark:to-transparent bg-gradient-to-r from-transparent via-[#515BD4]/30 to-transparent" />
      </div>

      {/* Projects grid */}
      <section className="relative pt-12 pb-20">
        <div className="glow-orb w-[500px] h-[500px] top-[10%] left-[-10%] dark:bg-primary-600/15 bg-[#DD2A7B]/25" />
        <div className="glow-orb w-[450px] h-[450px] top-[40%] right-[-10%] dark:bg-cyan-500/15 bg-[#F58529]/20" />
        <div className="glow-orb w-[400px] h-[400px] bottom-[5%] left-[30%] dark:bg-violet-500/15 bg-[#FEDA77]/20" />
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.08}>
                <div className="glass-hover rounded-2xl overflow-hidden h-full group">
                  {/* Project header */}
                  <div className={`p-8 bg-gradient-to-br ${project.gradient} relative`}>
                    <div className="absolute inset-0 dark:bg-dark/40 bg-black/20" />
                    <div className="relative">
                      <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>
                    </div>
                  </div>

                  {/* Project body */}
                  <div className="p-8">
                    <p className="dark:text-gray-400 text-[#4a2a5a] text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Impact */}
                    <div className="flex items-center gap-2 mb-6">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg>
                      <span className="text-sm font-medium text-emerald-400">{project.impact}</span>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1.5 rounded-full dark:bg-white/[0.04] bg-[#DD2A7B]/[0.06] dark:text-gray-400 text-[#4a2a5a] border dark:border-white/[0.06] border-[#DD2A7B]/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      </div>
    </>
  )
}
