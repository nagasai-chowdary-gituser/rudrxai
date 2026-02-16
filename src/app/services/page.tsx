import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import CTA from '@/components/CTA'
import Link from 'next/link'
import PageBackground from '@/components/PageBackground'

export const metadata: Metadata = {
  title: 'Services — RUDRXAI',
  description: 'Custom AI solutions, full-stack development, mobile apps, cloud infrastructure, and more.',
}

const services = [
  {
    title: 'Production-Grade Websites',
    description: 'We build high-performance, scalable websites for businesses — from corporate platforms to full-stack web apps. Clean code, fast loading, SEO-optimized, and built to last.',
    capabilities: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js APIs', 'SEO Optimization', 'Admin Dashboards'],
    gradient: 'from-indigo-600 to-blue-600',
  },
  {
    title: 'Chatbots & Conversational AI',
    description: 'Intelligent chatbots for customer support, lead generation, and internal automation. AI-powered conversational agents that understand context and integrate with your platforms.',
    capabilities: ['OpenAI & LLM Integration', 'Custom Chatbot Flows', 'Multi-platform Deployment', 'Context-aware Responses', 'Lead Qualification Bots', 'Dialogflow & LangChain'],
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    title: 'Student & Developer Portfolios',
    description: 'Stand out from the crowd with a stunning personal portfolio. We design and develop modern, responsive portfolio websites that showcase your skills, projects, and achievements.',
    capabilities: ['Custom Design', 'Responsive Layouts', 'Framer Motion Animations', 'Project Showcases', 'Blog Integration', 'Fast Deployment'],
    gradient: 'from-cyan-600 to-teal-600',
  },
  {
    title: 'Real-Time Applications',
    description: 'Live chat systems, real-time dashboards, collaborative tools, and streaming platforms. We engineer apps that update instantly with WebSockets and live data sync.',
    capabilities: ['WebSockets', 'Socket.io', 'Redis Pub/Sub', 'Firebase Realtime DB', 'Live Dashboards', 'Collaborative Tools'],
    gradient: 'from-amber-600 to-orange-600',
  },
  {
    title: 'AI & Machine Learning Solutions',
    description: 'Custom AI models, NLP systems, computer vision apps, and AI-powered automation. We bring cutting-edge AI directly into your products with production-ready pipelines.',
    capabilities: ['Custom ML Models', 'NLP & LLM Integration', 'Computer Vision', 'Predictive Analytics', 'TensorFlow & PyTorch', 'FastAPI Deployment'],
    gradient: 'from-pink-600 to-rose-600',
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications for iOS and Android. Beautiful UI, smooth performance, push notifications, offline support, and App Store deployment — all handled.',
    capabilities: ['React Native', 'Flutter', 'Expo', 'Push Notifications', 'Offline Support', 'App Store Deployment'],
    gradient: 'from-emerald-600 to-green-600',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageBackground />
      <div className="relative z-10">
      {/* Hero */}
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] top-[-200px] right-[-200px] dark:bg-primary-600/30 bg-[#DD2A7B]/30" />
        <div className="glow-orb w-[400px] h-[400px] top-[30%] left-[-15%] dark:bg-cyan-500/20 bg-[#515BD4]/25" />
        <div className="section-container relative">
          <AnimatedSection>
            <p className="dark:text-primary-400 text-[#F58529] font-medium text-sm tracking-widest uppercase mb-4">
              Services
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-4xl dark:text-white text-[#1a0a1e]">
              Everything You Need to{' '}
              <span className="gradient-text">Ship Great Software</span>
            </h1>
            <p className="text-xl dark:text-gray-400 text-[#4a2a5a] max-w-2xl leading-relaxed">
              From idea to production, we handle every layer of the stack. Our team
              of senior engineers brings AI expertise to every project.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="relative h-px max-w-5xl mx-auto">
        <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-transparent dark:via-primary-500/20 dark:to-transparent bg-gradient-to-r from-transparent via-[#515BD4]/30 to-transparent" />
      </div>

      {/* Services grid */}
      <section className="relative pt-12 pb-20">
        <div className="glow-orb w-[500px] h-[500px] top-[15%] right-[-10%] dark:bg-violet-500/20 bg-[#FEDA77]/20" />
        <div className="glow-orb w-[450px] h-[450px] top-[50%] left-[-10%] dark:bg-blue-500/15 bg-[#F58529]/20" />
        <div className="glow-orb w-[400px] h-[400px] bottom-[10%] right-[20%] dark:bg-cyan-500/15 bg-[#DD2A7B]/25" />
        <div className="section-container">
          <div className="space-y-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <div className="glass-hover rounded-2xl overflow-hidden">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Left gradient */}
                    <div className={`p-8 lg:p-10 bg-gradient-to-br ${service.gradient} relative lg:col-span-2`}>
                      <div className="absolute inset-0 dark:bg-dark/30 bg-black/15" />
                      <div className="relative h-full flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-white/80 leading-relaxed text-sm">{service.description}</p>
                      </div>
                    </div>
                    {/* Right capabilities */}
                    <div className="p-8 lg:p-10 lg:col-span-3">
                      <h4 className="text-sm font-medium dark:text-gray-500 text-[#6b4b7a] uppercase tracking-wider mb-6">
                        Capabilities
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.capabilities.map((cap) => (
                          <div key={cap} className="flex items-center gap-3 dark:text-gray-300 text-[#3a2a4a]">
                            <svg className="w-5 h-5 dark:text-primary-400 text-[#515BD4] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span className="text-sm">{cap}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm dark:text-primary-400 text-[#F58529] font-medium mt-8 dark:hover:text-primary-300 hover:text-[#D4721F] transition-colors"
                      >
                        Discuss this service
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
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
