'use client'

import Link from 'next/link'
import ParticleField from './ParticleField'
import { useTheme } from './ThemeProvider'

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background — dark mode only */}
      <div className="absolute inset-0 z-0">
        {theme === 'dark' ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect fill='%2306070a'/%3E%3C/svg%3E"
            >
              <source src="/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-dark/40" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-950/40 via-dark/30 to-blue-950/35" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#F58529]/30 via-[#DD2A7B]/15 to-[#515BD4]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFF5EE] via-transparent to-transparent" />
          </>
        )}
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-[1]">
        <div className={`glow-orb w-[700px] h-[700px] top-[-10%] left-[-10%] animate-float ${
          theme === 'dark' ? 'bg-primary-600/[0.12]' : 'bg-[#DD2A7B]/30'
        }`} />
        <div
          className={`glow-orb w-[500px] h-[500px] bottom-[0%] right-[-5%] animate-float ${
            theme === 'dark' ? 'bg-blue-600/[0.10]' : 'bg-[#515BD4]/25'
          }`}
          style={{ animationDelay: '-3s' }}
        />
        <div
          className={`glow-orb w-[400px] h-[400px] top-[40%] left-[30%] animate-float ${
            theme === 'dark' ? 'bg-cyan-500/[0.06]' : 'bg-[#F58529]/25'
          }`}
          style={{ animationDelay: '-1.5s' }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 dark:opacity-[0.03] opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(${theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)'} 1px, transparent 1px),
              linear-gradient(90deg, ${theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)'} 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Vignette effect */}
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(ellipse at center, transparent 40%, rgba(6,7,10,0.7) 100%)'
              : 'radial-gradient(ellipse at center, transparent 50%, rgba(255,245,238,0.8) 100%)',
          }}
        />
      </div>

      {/* Particles — dark mode */}
      {theme === 'dark' && (
        <div className="absolute inset-0 z-[2]">
          <ParticleField />
        </div>
      )}

      {/* Hero content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-32 pb-32" style={{ textShadow: theme !== 'light' ? '0 2px 30px rgba(0,0,0,0.5)' : 'none' }}>
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm dark:text-gray-400 text-[#8134AF] font-medium mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Now accepting new projects for 2026
          </div>
        </div>

        <h1
          className="animate-fadeInUp text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-8 dark:text-white text-[#1a0a1e]"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          We Build{' '}
          <span className="gradient-text">Intelligent</span>
          <br />
          Software That{' '}
          <span className="gradient-text">Ships</span>
        </h1>

        <p
          className="animate-fadeInUp text-lg md:text-xl dark:text-gray-400 text-[#4a2a5a] max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
        >
          From custom AI solutions to production-grade SaaS products — we turn
          ambitious ideas into world-class software. Your vision, our engineering
          excellence.
        </p>

        <div
          className="animate-fadeInUp flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
        >
          <Link href="/contact" className="btn-primary text-base">
            Start Your Project
          </Link>
          <a href="#what-we-do" className="btn-secondary text-base group">
            What We Do For You
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
          <Link href="/products" className="btn-secondary text-base group">
            View Our Work
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Stats bar */}
        <div
          className="animate-fadeInUp flex flex-wrap items-center justify-center gap-8 sm:gap-16 mt-24 pt-12 border-t dark:border-white/[0.08] border-[#DD2A7B]/20"
          style={{ animationDelay: '1s', animationFillMode: 'both' }}
        >
          {[
            { value: '50+', label: 'Projects Shipped' },
            { value: '30+', label: 'Happy Clients' },
            { value: '5', label: 'SaaS Products' },
            { value: '99%', label: 'Satisfaction Rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-3xl md:text-4xl font-extrabold ${theme === 'dark' ? 'gradient-text' : 'gradient-text'}`}>
                {stat.value}
              </div>
              <div className="text-xs dark:text-gray-400 text-[#6b4b7a] mt-2 tracking-wider uppercase font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10" style={{
        background: theme === 'dark'
          ? 'linear-gradient(to top, #06070a, transparent)'
          : 'linear-gradient(to top, #FFF5EE, transparent)'
      }} />
      {/* Top gradient fade for navbar blend */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-[3]" style={{
        background: theme === 'dark'
          ? 'linear-gradient(to bottom, rgba(6,7,10,0.5), transparent)'
          : 'linear-gradient(to bottom, rgba(255,245,238,0.5), transparent)'
      }} />
    </section>
  )
}
