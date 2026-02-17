import type { Metadata } from 'next'
import PageBackground from '@/components/PageBackground'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Terms of Service — RUDRXAI',
  description: 'Review the terms and conditions for using RUDRXAI services, including payment terms, intellectual property, and more.',
}

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen dark:bg-dark bg-[var(--color-bg)]">
      <PageBackground />

      <div className="relative z-10 section-container pt-32 pb-20">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="dark:text-primary-400 text-[#F58529] font-medium text-sm tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-[#1a0a1e] mb-6">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="dark:text-gray-400 text-[#4a2a5a] max-w-2xl mx-auto">
            Last updated: February 16, 2026
          </p>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection delay={0.1}>
          <div className="max-w-4xl mx-auto glass p-8 md:p-12 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">1. Agreement to Terms</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                By accessing or using the RUDRXAI website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and clients of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">2. Our Services</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                RUDRXAI provides custom software development, AI/ML solutions, web and mobile application development, cloud infrastructure, and related technology consulting services. The specific scope, deliverables, and timelines for each project will be outlined in a separate project agreement or statement of work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">3. Client Responsibilities</h2>
              <ul className="space-y-3 dark:text-gray-400 text-[#4a2a5a]">
                {[
                  'Provide accurate and complete information required for the project',
                  'Respond to communications and provide feedback in a timely manner',
                  'Ensure you have the rights to any content, materials, or data provided to us',
                  'Maintain confidentiality of any account credentials or access provided',
                  'Use our services only for lawful purposes',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8134AF] mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">4. Intellectual Property</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium dark:text-gray-200 text-[#2a1a3e] mb-2">Our IP</h3>
                  <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                    The RUDRXAI website, branding, proprietary tools, frameworks, and pre-existing code libraries remain our exclusive intellectual property. You may not reproduce, distribute, or create derivative works from our proprietary materials without written consent.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium dark:text-gray-200 text-[#2a1a3e] mb-2">Client IP</h3>
                  <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                    Upon full payment, all custom code, designs, and deliverables created specifically for your project will be transferred to you, unless otherwise specified in the project agreement. We may retain the right to showcase the work in our portfolio unless a non-disclosure agreement is in place.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">5. Payment Terms</h2>
              <ul className="space-y-3 dark:text-gray-400 text-[#4a2a5a]">
                {[
                  'Payment schedules and amounts will be defined in individual project agreements',
                  'Invoices are due within the timeframe specified in the agreement (typically 15 days)',
                  'Late payments may incur additional fees as outlined in the project agreement',
                  'We reserve the right to pause or suspend work if payments are overdue',
                  'All fees are non-refundable unless otherwise stated in the project agreement',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#515BD4] mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">6. Confidentiality</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of the engagement. This obligation survives the termination of the business relationship and extends to all employees, contractors, and agents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">7. Warranties & Disclaimers</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                We strive to deliver high-quality software that meets the agreed-upon specifications. However, our services are provided &quot;as is&quot; without warranties of any kind, either express or implied, unless specifically stated in a project agreement. We do not guarantee that our website will be uninterrupted, error-free, or free of harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">8. Limitation of Liability</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                To the maximum extent permitted by applicable law, RUDRXAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising out of or related to the use of our services, regardless of the theory of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">9. Project Cancellation</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                Either party may terminate a project engagement with written notice as specified in the project agreement. In the event of cancellation, the client is responsible for payment for all work completed up to the date of termination. Any deposits or milestone payments already made may be non-refundable depending on the stage of work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">10. Governing Law</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be resolved through good-faith negotiation, and if necessary, through the appropriate courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">11. Changes to Terms</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of our services constitutes acceptance of the updated terms. We encourage you to review these terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">12. Contact Us</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                For questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:rudrxaitechsolutions@gmail.com" className="gradient-text hover:underline">
                  rudrxaitechsolutions@gmail.com
                </a>
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
