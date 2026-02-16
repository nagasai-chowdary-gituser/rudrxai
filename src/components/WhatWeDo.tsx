'use client'

import AnimatedSection from './AnimatedSection'
import Link from 'next/link'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Production-Grade Websites',
    description:
      'We build high-performance, scalable websites for businesses — from corporate platforms to full-stack web apps. Clean code, fast loading, SEO-optimized, and built to last.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: 'Chatbots & Conversational AI',
    description:
      'Intelligent chatbots for customer support, lead generation, and internal automation. We build AI-powered conversational agents that understand context, handle complex queries, and integrate seamlessly with your platforms.',
    tech: ['OpenAI', 'LangChain', 'Dialogflow', 'Python', 'Node.js'],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Student & Developer Portfolios',
    description:
      'Stand out from the crowd with a stunning personal portfolio. We design and develop modern, responsive portfolio websites that showcase your skills, projects, and achievements.',
    tech: ['React', 'Next.js', 'Framer Motion', 'Responsive Design', 'Deployment'],
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: 'Real-Time Applications',
    description:
      'Live chat systems, real-time dashboards, collaborative tools, and streaming platforms. We engineer apps that update instantly with WebSockets, Server-Sent Events, and live data sync.',
    tech: ['WebSockets', 'Socket.io', 'Redis', 'Firebase', 'Real-time DB'],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'AI & Machine Learning Solutions',
    description:
      'Custom AI models, NLP systems, computer vision apps, and AI-powered automation. We bring cutting-edge AI directly into your products with production-ready pipelines.',
    tech: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'FastAPI'],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile applications for iOS and Android. Beautiful UI, smooth performance, push notifications, offline support, and App Store deployment — all handled.',
    tech: ['React Native', 'Flutter', 'Expo', 'Firebase', 'App Store'],
    gradient: 'from-emerald-500 to-green-500',
  },
]

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="glow-orb w-[600px] h-[600px] top-[-10%] left-[-15%] dark:bg-primary-600/20 bg-[#DD2A7B]/30" />
      <div className="glow-orb w-[500px] h-[500px] bottom-[-10%] right-[-10%] dark:bg-cyan-500/15 bg-[#515BD4]/25" />

      <div className="section-container relative">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <p className="dark:text-primary-400 text-[#F58529] font-semibold text-sm tracking-widest uppercase mb-4">
            What We Do For You
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 dark:text-white text-[#1a0a1e]">
            Real Services.{' '}
            <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-lg dark:text-gray-400 text-[#4a2a5a] max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just write code — we engineer solutions that solve real problems.
            Here&apos;s exactly what we deliver for our clients.
          </p>
        </AnimatedSection>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <div className="glass-hover rounded-2xl overflow-hidden h-full group flex flex-col">
                {/* Gradient accent bar */}
                <div className={`h-1 bg-gradient-to-r ${service.gradient}`} />

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold dark:text-white text-[#1a0a1e] mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="dark:text-gray-400 text-[#4a2a5a] text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full dark:bg-white/[0.06] bg-[#DD2A7B]/[0.08] dark:text-gray-300 text-[#4a2a5a] border dark:border-white/[0.08] border-[#DD2A7B]/15 font-medium"
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

        {/* CTA */}
        <AnimatedSection delay={0.5} className="text-center mt-16">
          <Link href="/services" className="btn-primary text-base">
            Explore All Services
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
