import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import CTA from '@/components/CTA'
import PageBackground from '@/components/PageBackground'

export const metadata: Metadata = {
  title: 'Products — RUDRXAI',
  description: 'Explore our suite of SaaS products powered by AI — used by thousands of users worldwide.',
}

const products = [
  {
    name: 'AI Interviewer',
    tagline: 'Practice Interviews. Master Careers.',
    description:
      'Our flagship AI interview platform that helps job seekers prepare with realistic mock interviews. Powered by advanced language models with real-time feedback.',
    features: [
      { title: 'Resume Analysis', description: 'AI scans your resume, identifies weaknesses, and suggests improvements.' },
      { title: 'ATS Score', description: 'Get your applicant tracking system compatibility score instantly.' },
      { title: 'Real-time AI Interviews', description: 'Practice with our AI interviewer that adapts to your responses.' },
      { title: 'Coding Judge', description: 'Submit code solutions and get evaluated on correctness, efficiency, and style.' },
      { title: 'Emotion Analysis', description: 'Real-time emotion detection helps you master non-verbal communication.' },
      { title: 'Final Boss Mode', description: 'Ultimate difficulty interviews designed by industry experts.' },
    ],
    stats: { users: '2,000+', interviews: '50,000+', rating: '4.9/5' },
    gradient: 'from-violet-600 to-purple-600',
    status: 'Live',
    link: 'https://chowdary1-ai-interviewer-version-2.hf.space/login',
  },
  {
    name: 'Data Vision',
    tagline: 'See Your Data Clearly.',
    description:
      'Intelligent data visualization and analytics platform that transforms raw data into actionable insights with AI-powered dashboards and smart charting.',
    features: [
      { title: 'Smart Charts', description: 'AI-generated visualizations that automatically pick the best chart type for your data.' },
      { title: 'AI Insights', description: 'Automated pattern detection and anomaly identification across datasets.' },
      { title: 'Real-time Analytics', description: 'Live data streaming with instant updates to all connected dashboards.' },
      { title: 'Custom Dashboards', description: 'Drag-and-drop dashboard builder with sharing and collaboration.' },
      { title: 'Data Connectors', description: 'Connect databases, APIs, CSVs, and cloud storage seamlessly.' },
      { title: 'Export & Reports', description: 'Generate PDF/CSV reports with scheduled automated delivery.' },
    ],
    stats: { users: '1,500+', dashboards: '10,000+', sources: '30+' },
    gradient: 'from-blue-600 to-cyan-600',
    status: 'Live',
    link: 'https://datavision-ai-datavision.hf.space/',
  },
  {
    name: 'AI Doctor',
    tagline: 'Your AI Health Companion.',
    description:
      'AI-driven health assistant that provides preliminary diagnosis, symptom analysis, and personalized health recommendations powered by medical AI models.',
    features: [
      { title: 'Symptom Analysis', description: 'Describe your symptoms and get AI-powered preliminary analysis.' },
      { title: 'Health Reports', description: 'Comprehensive health reports based on your medical history and inputs.' },
      { title: 'AI Diagnosis', description: 'Machine learning models trained on medical datasets for preliminary diagnosis.' },
      { title: 'Wellness Tips', description: 'Personalized diet, exercise, and lifestyle recommendations.' },
      { title: 'Medical History', description: 'Securely store and track your medical records over time.' },
      { title: 'Doctor Connect', description: 'Get referred to specialists based on your analysis results.' },
    ],
    stats: { users: '3,000+', consultations: '25,000+', accuracy: '94%' },
    gradient: 'from-emerald-600 to-teal-600',
    status: 'Live',
    link: '#',
  },
  {
    name: 'Stock Price Predictor',
    tagline: 'Predict. Invest. Profit.',
    description:
      'Machine learning-powered stock market prediction tool using historical data, sentiment analysis, and advanced time-series forecasting models.',
    features: [
      { title: 'Price Forecasting', description: 'LSTM and transformer-based models for accurate price predictions.' },
      { title: 'Sentiment Analysis', description: 'Real-time news and social media sentiment tracking for market mood.' },
      { title: 'Trend Detection', description: 'AI identifies bullish/bearish patterns and support/resistance levels.' },
      { title: 'Portfolio Insights', description: 'Track and optimize your portfolio with AI-driven recommendations.' },
      { title: 'Technical Indicators', description: 'RSI, MACD, Bollinger Bands, and 20+ technical indicators.' },
      { title: 'Alerts & Notifications', description: 'Custom price alerts and AI-triggered buy/sell notifications.' },
    ],
    stats: { users: '1,000+', predictions: '100K+', markets: '5+' },
    gradient: 'from-amber-600 to-orange-600',
    status: 'Live',
    link: 'https://naveen-2007-ai-stock-predictor.hf.space/',
  },
  {
    name: 'Gen AI Intelligent Studio',
    tagline: 'Create With Intelligence.',
    description:
      'All-in-one generative AI studio for content creation, code generation, image synthesis, and intelligent automation workflows — your creative AI partner.',
    features: [
      { title: 'Content Generation', description: 'Blog posts, social media content, emails, and marketing copy in seconds.' },
      { title: 'Code Assist', description: 'AI-powered code generation, debugging, and refactoring across languages.' },
      { title: 'Image Synthesis', description: 'Text-to-image generation with style control and editing capabilities.' },
      { title: 'AI Workflows', description: 'Build custom automation pipelines chaining multiple AI models.' },
      { title: 'Template Library', description: 'Pre-built templates for common creative and business tasks.' },
      { title: 'Team Workspace', description: 'Collaborate on AI projects with shared prompts and outputs.' },
    ],
    stats: { users: '2,500+', generations: '500K+', templates: '100+' },
    gradient: 'from-pink-600 to-rose-600',
    status: 'Live',
    link: 'https://naveenkumar-2007--genai-intelligence-studi-streamlit-app-qreybr.streamlit.app/',
  },
  {
    name: 'Perplexity Clone',
    tagline: 'Search Smarter, Not Harder.',
    description:
      'AI-powered conversational search engine that delivers accurate, sourced answers with natural language understanding and real-time web search capabilities.',
    features: [
      { title: 'AI Search', description: 'Ask questions in natural language and get comprehensive, accurate answers.' },
      { title: 'Source Citations', description: 'Every answer comes with verified sources and reference links.' },
      { title: 'Conversational', description: 'Follow-up questions maintain context for deeper exploration.' },
      { title: 'Real-time Web', description: 'Live web crawling ensures answers reflect the latest information.' },
      { title: 'Focus Modes', description: 'Academic, coding, creative, and general search modes for precision.' },
      { title: 'Collections', description: 'Save and organize your research into shareable collections.' },
    ],
    stats: { users: '1,200+', queries: '200K+', sources: '1M+' },
    gradient: 'from-indigo-600 to-violet-600',
    status: 'Live',
    link: 'https://naveen-2007-perplexity-clone.hf.space/',
  },
  {
    name: 'Diabetes Risk Predictor',
    tagline: 'Know Your Risk. Stay Healthy.',
    description:
      'ML-based diabetes risk assessment tool that analyzes health parameters and lifestyle factors to predict and help prevent diabetes onset.',
    features: [
      { title: 'Risk Assessment', description: 'ML models analyze 15+ health parameters for accurate risk scoring.' },
      { title: 'Health Analysis', description: 'Comprehensive analysis of BMI, blood sugar, insulin, and more.' },
      { title: 'Lifestyle Tips', description: 'Personalized diet and exercise plans based on your risk profile.' },
      { title: 'Progress Tracking', description: 'Track your health metrics over time and see improvement trends.' },
      { title: 'Family History', description: 'Genetic risk factor analysis based on family medical history.' },
      { title: 'Doctor Reports', description: 'Generate detailed reports to share with your healthcare provider.' },
    ],
    stats: { users: '800+', assessments: '15,000+', accuracy: '92%' },
    gradient: 'from-red-600 to-pink-600',
    status: 'Live',
    link: 'https://naveen-2007-diabetes.hf.space/',
  },
  {
    name: 'Fake News Detector API',
    tagline: 'Truth, Verified by AI.',
    description:
      'Robust API that leverages NLP and machine learning to detect misinformation, fake news, and unreliable content across text sources with high accuracy.',
    features: [
      { title: 'NLP Analysis', description: 'Deep language analysis to identify manipulation, bias, and deception patterns.' },
      { title: 'Credibility Score', description: 'Get a 0-100 credibility score for any article or text content.' },
      { title: 'Source Verification', description: 'Cross-reference claims against trusted databases and fact-checkers.' },
      { title: 'REST API', description: 'Simple REST API with SDKs for Python, JavaScript, and more.' },
      { title: 'Batch Processing', description: 'Analyze thousands of articles simultaneously with bulk endpoints.' },
      { title: 'Webhook Alerts', description: 'Real-time notifications when misinformation is detected in your feeds.' },
    ],
    stats: { users: '600+', articles: '50K+', accuracy: '96%' },
    gradient: 'from-cyan-600 to-blue-600',
    status: 'Live',
    link: 'https://news-qzod.onrender.com/docs',
  },
]

export default function ProductsPage() {
  return (
    <>
      <PageBackground />
      <div className="relative z-10">
      {/* Hero */}
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] top-[-200px] left-1/2 -translate-x-1/2 dark:bg-primary-600/30 bg-[#DD2A7B]/30" />
        <div className="glow-orb w-[400px] h-[400px] top-[20%] right-[-10%] dark:bg-blue-500/20 bg-[#515BD4]/25" />
        <div className="section-container relative">
          <AnimatedSection>
            <p className="dark:text-primary-400 text-[#F58529] font-medium text-sm tracking-widest uppercase mb-4">
              Our Products
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-4xl dark:text-white text-[#1a0a1e]">
              SaaS Products That{' '}
              <span className="gradient-text">People Love Using</span>
            </h1>
            <p className="text-xl dark:text-gray-400 text-[#4a2a5a] max-w-2xl leading-relaxed">
              We build, operate, and scale our own products. Thousands of users trust
              our platforms every day — and that experience feeds directly into client work.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="relative h-px max-w-5xl mx-auto">
        <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-transparent dark:via-primary-500/20 dark:to-transparent bg-gradient-to-r from-transparent via-[#515BD4]/30 to-transparent" />
      </div>

      {/* Products */}
      <section className="relative pt-12 pb-20">
        <div className="glow-orb w-[500px] h-[500px] top-[10%] left-[-10%] dark:bg-violet-500/20 bg-[#FEDA77]/20" />
        <div className="glow-orb w-[450px] h-[450px] top-[35%] right-[-10%] dark:bg-cyan-500/15 bg-[#F58529]/20" />
        <div className="glow-orb w-[400px] h-[400px] top-[60%] left-[5%] dark:bg-blue-500/15 bg-[#DD2A7B]/25" />
        <div className="glow-orb w-[400px] h-[400px] bottom-[10%] right-[15%] dark:bg-primary-600/15 bg-[#515BD4]/20" />
        <div className="section-container space-y-32">
          {products.map((product, i) => (
            <AnimatedSection key={product.name}>
              <div className="space-y-12">
                {/* Product header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${product.gradient} text-white`}>
                        {product.status}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-[#1a0a1e] mb-3">{product.name}</h2>
                    <p className="text-lg dark:text-gray-400 text-[#4a2a5a]">{product.tagline}</p>
                  </div>
                  <div className="flex items-center gap-8">
                    {Object.entries(product.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold gradient-text">{value}</div>
                        <div className="text-xs dark:text-gray-500 text-[#6b4b7a] capitalize mt-1">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <p className="dark:text-gray-400 text-[#4a2a5a] text-lg leading-relaxed max-w-3xl flex-1">
                    {product.description}
                  </p>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium btn-primary hover:-translate-y-0.5 transition-all duration-300 shrink-0"
                  >
                    Visit Site
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>

                {/* Features grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {product.features.map((feature, j) => (
                    <AnimatedSection key={feature.title} delay={j * 0.05}>
                      <div className="glass-hover p-6 rounded-2xl h-full">
                        <h3 className="text-base font-semibold dark:text-white text-[#1a0a1e] mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                {i < products.length - 1 && (
                  <div className="h-px dark:bg-white/[0.06] bg-black/[0.06]" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTA />
      </div>
    </>
  )
}
