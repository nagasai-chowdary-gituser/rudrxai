'use client'

import AnimatedSection from './AnimatedSection'

const features = [
  {
    title: 'Production-Grade Websites',
    description: 'High-performance, scalable websites — from corporate platforms to full-stack web apps. SEO-optimized and built to last.',
    gradient: 'from-indigo-500/20 to-blue-600/20',
    borderColor: 'border-indigo-500/20',
    iconColor: 'text-indigo-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Chatbots & Conversational AI',
    description: 'Intelligent chatbots for customer support, lead generation, and automation — powered by the latest LLMs and NLP.',
    gradient: 'from-violet-500/20 to-purple-600/20',
    borderColor: 'border-violet-500/20',
    iconColor: 'text-violet-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: 'Student & Developer Portfolios',
    description: 'Stand out with a stunning personal portfolio. Modern, responsive designs that showcase your skills and achievements.',
    gradient: 'from-cyan-500/20 to-teal-600/20',
    borderColor: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Applications',
    description: 'Live chat, dashboards, collaborative tools, and streaming platforms — apps that update instantly with WebSockets.',
    gradient: 'from-orange-500/20 to-amber-600/20',
    borderColor: 'border-orange-500/20',
    iconColor: 'text-orange-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: 'AI & Machine Learning',
    description: 'Custom AI models, NLP, computer vision, and intelligent automation integrated seamlessly into your products.',
    gradient: 'from-pink-500/20 to-rose-600/20',
    borderColor: 'border-pink-500/20',
    iconColor: 'text-pink-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps with React Native and Flutter. Beautiful, performant, and ready for the App Store.',
    gradient: 'from-emerald-500/20 to-green-600/20',
    borderColor: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="section-padding relative">
      <div className="glow-orb w-[500px] h-[500px] top-1/2 -translate-y-1/2 -left-[200px] dark:bg-blue-600/[0.05] bg-[#DD2A7B]/25" />

      <div className="section-container relative">
        <AnimatedSection className="text-center mb-20">
          <p className="dark:text-primary-400 text-[#DD2A7B] font-semibold text-sm tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 dark:text-white text-[#1a0a1e]">
            End-to-End{' '}
            <span className="gradient-text">Technical Capabilities</span>
          </h2>
          <p className="dark:text-gray-400 text-[#4a2a5a] text-lg max-w-2xl mx-auto leading-relaxed">
            From concept to production, we cover every layer of the modern software
            stack — with AI woven into everything we build.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <div className="glass-hover p-8 rounded-2xl h-full group relative overflow-hidden">
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`}
                />

                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl dark:bg-white/[0.03] bg-white/50 border ${feature.borderColor} flex items-center justify-center ${feature.iconColor} mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold dark:text-white text-[#1a0a1e] mb-3 dark:group-hover:text-white group-hover:text-[#1a0a1e] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="dark:text-gray-400 text-[#4a2a5a] text-sm leading-relaxed dark:group-hover:text-gray-300 group-hover:text-[#6b4b7a] transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
