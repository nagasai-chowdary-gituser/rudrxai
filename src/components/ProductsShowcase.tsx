'use client'

import AnimatedSection from './AnimatedSection'
import Link from 'next/link'

const products = [
  {
    name: 'AI Interviewer',
    tagline: 'Practice Interviews. Master Careers.',
    description:
      'AI-powered interview platform with resume analysis, ATS scoring, real-time mock interviews, coding judge, and emotion analysis.',
    status: 'Live',
    users: '2,000+',
    gradient: 'from-violet-600 to-purple-600',
    features: ['Resume Analysis', 'ATS Score', 'AI Interviews', 'Emotion Detection'],
    link: 'https://chowdary1-ai-interviewer-version-1.hf.space/login',
  },
  {
    name: 'Data Vision',
    tagline: 'See Your Data Clearly.',
    description:
      'Intelligent data visualization and analytics platform that transforms raw data into actionable insights with AI-powered dashboards.',
    status: 'Live',
    users: '2000+',
    gradient: 'from-blue-600 to-cyan-600',
    features: ['Smart Charts', 'AI Insights', 'Real-time Analytics', 'Custom Dashboards'],
    link: 'https://datavision-ai-datavision.hf.space/',
  },
  {
    name: 'AI Doctor',
    tagline: 'Your AI Health Companion.',
    description:
      'AI-driven health assistant that provides preliminary diagnosis, symptom analysis, and personalized health recommendations.',
    status: 'Live',
    users: '2,000+',
    gradient: 'from-emerald-600 to-teal-600',
    features: ['Symptom Analysis', 'Health Reports', 'AI Diagnosis', 'Wellness Tips'],
    link: '#',
  },
  {
    name: 'Stock Price Predictor',
    tagline: 'Predict. Invest. Profit.',
    description:
      'Machine learning-powered stock market prediction tool using historical data, sentiment analysis, and advanced forecasting models.',
    status: 'Live',
    users: '1,000+',
    gradient: 'from-amber-600 to-orange-600',
    features: ['Price Forecasting', 'Sentiment Analysis', 'Trend Detection', 'Portfolio Insights'],
    link: 'https://naveen-2007-ai-stock-predictor.hf.space/',
  },
  {
    name: 'Gen AI Intelligent Studio',
    tagline: 'Create With Intelligence.',
    description:
      'All-in-one generative AI studio for content creation, code generation, image synthesis, and intelligent automation workflows.',
    status: 'Live',
    users: '1000+',
    gradient: 'from-pink-600 to-rose-600',
    features: ['Content Generation', 'Code Assist', 'Image Synthesis', 'AI Workflows'],
    link: 'https://naveenkumar-2007--genai-intelligence-studi-streamlit-app-qreybr.streamlit.app/',
  },
  {
    name: 'Perplexity Clone',
    tagline: 'Search Smarter, Not Harder.',
    description:
      'AI-powered conversational search engine that delivers accurate, sourced answers with natural language understanding and real-time web search.',
    status: 'Live',
    users: '1,200+',
    gradient: 'from-indigo-600 to-violet-600',
    features: ['AI Search', 'Source Citations', 'Conversational', 'Real-time Web'],
    link: 'https://naveen-2007-perplexity-clone.hf.space/',
  },
  {
    name: 'Diabetes Risk Predictor',
    tagline: 'Know Your Risk. Stay Healthy.',
    description:
      'ML-based diabetes risk assessment tool that analyzes health parameters and lifestyle factors to predict and prevent diabetes onset.',
    status: 'Live',
    users: '800+',
    gradient: 'from-red-600 to-pink-600',
    features: ['Risk Assessment', 'Health Analysis', 'Lifestyle Tips', 'Progress Tracking'],
    link: 'https://naveen-2007-diabetes.hf.space/',
  },
  {
    name: 'Fake News Detector API',
    tagline: 'Truth, Verified by AI.',
    description:
      'Robust API that leverages NLP and machine learning to detect misinformation, fake news, and unreliable content across text sources.',
    status: 'Live',
    users: '600+',
    gradient: 'from-cyan-600 to-blue-600',
    features: ['NLP Analysis', 'Credibility Score', 'Source Verification', 'REST API'],
    link: 'https://news-qzod.onrender.com/docs',
  },
]

export default function ProductsShowcase() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] top-0 right-[-200px] dark:bg-purple-600/[0.05] bg-[#DD2A7B]/25" />

      <div className="section-container relative">
        <AnimatedSection className="text-center mb-20">
          <p className="dark:text-primary-400 text-[#515BD4] font-semibold text-sm tracking-widest uppercase mb-4">
            Our Products
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 dark:text-white text-[#1a0a1e]">
            SaaS Products{' '}
            <span className="gradient-text">People Love</span>
          </h2>
          <p className="dark:text-gray-400 text-[#4a2a5a] text-lg max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just build for clients — we build our own products too.
            Thousands of users trust our SaaS platforms every day.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.1}>
              <div className="glass-hover rounded-2xl overflow-hidden h-full flex flex-col group">
                {/* Product header with gradient */}
                <div className={`p-8 bg-gradient-to-br ${product.gradient} relative`}>
                  <div className="absolute inset-0 dark:bg-dark/40 bg-black/20" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/20 text-white">
                        {product.status}
                      </span>
                      <span className="text-xs text-white/70">{product.users} users</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                    <p className="text-white/70 text-sm">{product.tagline}</p>
                  </div>
                </div>

                {/* Product body */}
                <div className="p-8 flex-1 flex flex-col">
                  <p className="dark:text-gray-400 text-[#4a2a5a] text-sm leading-relaxed mb-6 flex-1">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1.5 rounded-full dark:bg-white/[0.04] bg-[#515BD4]/[0.08] dark:text-gray-300 text-[#4a2a5a] border dark:border-white/[0.06] border-[#515BD4]/15"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium btn-primary hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Visit Site
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                    <Link
                      href="/products"
                      className="text-sm dark:text-gray-400 text-[#6b4b7a] dark:hover:text-white hover:text-[#DD2A7B] transition-colors flex items-center gap-1 group/link"
                    >
                      Details
                      <svg
                        className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
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
  )
}
