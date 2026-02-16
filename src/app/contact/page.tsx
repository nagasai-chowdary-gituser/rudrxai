'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import PageBackground from '@/components/PageBackground'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    currency: 'USD',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '3658f6b1-1313-4e04-82be-914a9ffd9b67', // <-- Replace with your Web3Forms access key
          subject: `New Project Inquiry from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          company: formData.company,
          budget: `${formData.currency} ${formData.budget}`,
          message: formData.message,
        }),
      })

      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch {
      alert('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <PageBackground />
      <div className="relative z-10">
      {/* Hero */}
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] top-[-200px] left-[-100px] dark:bg-primary-600/30 bg-[#DD2A7B]/30" />
        <div className="glow-orb w-[400px] h-[400px] top-[10%] right-[-10%] dark:bg-cyan-500/20 bg-[#515BD4]/25" />
        <div className="section-container relative">
          <AnimatedSection>
            <p className="dark:text-primary-400 text-[#F58529] font-medium text-sm tracking-widest uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-4xl dark:text-white text-[#1a0a1e]">
              Let&apos;s Build Something{' '}
              <span className="gradient-text">Extraordinary</span>
            </h1>
            <p className="text-xl dark:text-gray-400 text-[#4a2a5a] max-w-2xl leading-relaxed">
              Tell us about your project and we&apos;ll get back to you Less Than 24 hour with a detailed plan and timeline.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="relative h-px max-w-5xl mx-auto">
        <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-transparent dark:via-primary-500/20 dark:to-transparent bg-gradient-to-r from-transparent via-[#515BD4]/30 to-transparent" />
      </div>

      {/* Contact form + info */}
      <section className="relative pt-10 pb-20">
        <div className="glow-orb w-[500px] h-[500px] bottom-[-10%] right-[-10%] dark:bg-violet-500/20 bg-[#FEDA77]/25" />
        <div className="glow-orb w-[400px] h-[400px] top-[30%] left-[-15%] dark:bg-blue-500/20 bg-[#F58529]/20" />
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                {submitted ? (
                  <div className="glass p-12 rounded-2xl text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold dark:text-white text-[#1a0a1e] mb-3">Message Sent!</h3>
                    <p className="dark:text-gray-400 text-[#4a2a5a]">
                      Thank you for reaching out. We&apos;ll review your project details and get back to you Less Than 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300 text-[#3a2a4a] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl dark:bg-white/[0.06] bg-[#FFF5EE]/80 border dark:border-white/[0.1] border-[#DD2A7B]/20 dark:text-white text-[#1a0a1e] dark:placeholder-gray-400 placeholder-[#6b4b7a] focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 focus:outline-none transition-all text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300 text-[#3a2a4a] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl dark:bg-white/[0.06] bg-[#FFF5EE]/80 border dark:border-white/[0.1] border-[#DD2A7B]/20 dark:text-white text-[#1a0a1e] dark:placeholder-gray-400 placeholder-[#6b4b7a] focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 focus:outline-none transition-all text-sm"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium dark:text-gray-300 text-[#3a2a4a] mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl dark:bg-white/[0.06] bg-[#FFF5EE]/80 border dark:border-white/[0.1] border-[#DD2A7B]/20 dark:text-white text-[#1a0a1e] dark:placeholder-gray-400 placeholder-[#6b4b7a] focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 focus:outline-none transition-all text-sm"
                          placeholder="Company Inc."
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium dark:text-gray-300 text-[#3a2a4a] mb-2">
                          Estimated Budget
                        </label>
                        <div className="flex">
                          <input
                            type="number"
                            id="budget"
                            name="budget"
                            min="0"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-l-xl dark:bg-white/[0.06] bg-[#FFF5EE]/80 border dark:border-white/[0.1] border-[#DD2A7B]/20 border-r-0 dark:text-white text-[#1a0a1e] dark:placeholder-gray-400 placeholder-[#6b4b7a] focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 focus:outline-none transition-all text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            placeholder="e.g. 5000"
                          />
                          <select
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                            className="px-3 py-3.5 rounded-r-xl dark:bg-white/[0.08] bg-[#FFF5EE] border dark:border-white/[0.1] border-[#DD2A7B]/20 dark:text-white text-[#1a0a1e] focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 focus:outline-none transition-all text-sm font-medium cursor-pointer appearance-none text-center w-[72px] shrink-0"
                          >
                            <option value="USD" className="dark:bg-dark bg-[#FFF5EE]">USD</option>
                            <option value="EUR" className="dark:bg-dark bg-[#FFF5EE]">EUR</option>
                            <option value="GBP" className="dark:bg-dark bg-[#FFF5EE]">GBP</option>
                            <option value="INR" className="dark:bg-dark bg-[#FFF5EE]">INR</option>
                            <option value="AUD" className="dark:bg-dark bg-[#FFF5EE]">AUD</option>
                            <option value="CAD" className="dark:bg-dark bg-[#FFF5EE]">CAD</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium dark:text-gray-300 text-[#3a2a4a] mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl dark:bg-white/[0.06] bg-[#FFF5EE]/80 border dark:border-white/[0.1] border-[#DD2A7B]/20 dark:text-white text-[#1a0a1e] dark:placeholder-gray-400 placeholder-[#6b4b7a] focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 focus:outline-none transition-all text-sm resize-none"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      />
                    </div>

                    <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto text-base disabled:opacity-50 disabled:cursor-not-allowed">
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl">
                    <h3 className="text-lg font-semibold dark:text-white text-[#1a0a1e] mb-6">Quick Info</h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl dark:bg-primary-600/10 bg-[#515BD4]/10 border dark:border-primary-500/20 border-[#515BD4]/20 flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 dark:text-primary-400 text-[#515BD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm dark:text-gray-500 text-[#6b4b7a] mb-1">Email</p>
                          <a href="mailto:rudrxaitechsolutions@gmail.com" className="dark:text-white text-[#1a0a1e] dark:hover:text-primary-400 hover:text-[#F58529] transition-colors text-sm">
                            rudrxaitechsolutions@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl dark:bg-primary-600/10 bg-[#515BD4]/10 border dark:border-primary-500/20 border-[#515BD4]/20 flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 dark:text-primary-400 text-[#515BD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm dark:text-gray-500 text-[#6b4b7a] mb-1">Response Time</p>
                          <p className="dark:text-white text-[#1a0a1e] text-sm">Less than 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl dark:bg-primary-600/10 bg-[#515BD4]/10 border dark:border-primary-500/20 border-[#515BD4]/20 flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 dark:text-primary-400 text-[#515BD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm dark:text-gray-500 text-[#6b4b7a] mb-1">Phone</p>
                          <a href="tel:+918897464729" className="dark:text-white text-[#1a0a1e] dark:hover:text-primary-400 hover:text-[#F58529] transition-colors text-sm">
                            +91 88974 64729
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl dark:bg-primary-600/10 bg-[#515BD4]/10 border dark:border-primary-500/20 border-[#515BD4]/20 flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 dark:text-primary-400 text-[#515BD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm dark:text-gray-500 text-[#6b4b7a] mb-1">Location</p>
                          <p className="dark:text-white text-[#1a0a1e] text-sm">Remote-first, Global</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass p-8 rounded-2xl">
                    <h3 className="text-lg font-semibold dark:text-white text-[#1a0a1e] mb-4">What happens next?</h3>
                    <ol className="space-y-4">
                      {[
                        'We review your project details',
                        'Schedule a 30-min discovery call',
                        'Deliver a proposal with timeline & cost',
                        'Begin building your project',
                      ].map((step, i) => (
                        <li key={step} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full dark:bg-primary-600/20 bg-[#515BD4]/20 border dark:border-primary-500/30 border-[#515BD4]/30 flex items-center justify-center dark:text-primary-400 text-[#F58529] text-xs font-bold shrink-0">
                            {i + 1}
                          </span>
                          <span className="text-sm dark:text-gray-400 text-[#4a2a5a]">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
