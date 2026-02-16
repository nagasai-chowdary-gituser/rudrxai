'use client'

import PageBackground from '@/components/PageBackground'
import AnimatedSection from '@/components/AnimatedSection'

export default function PrivacyPolicyPage() {
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
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="dark:text-gray-400 text-[#4a2a5a] max-w-2xl mx-auto">
            Last updated: February 16, 2026
          </p>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection delay={0.1}>
          <div className="max-w-4xl mx-auto glass p-8 md:p-12 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">1. Introduction</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                RUDRXAI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium dark:text-gray-200 text-[#2a1a3e] mb-2">Personal Information</h3>
                  <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                    When you contact us or use our services, we may collect your name, email address, phone number, company name, and project details that you voluntarily provide.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium dark:text-gray-200 text-[#2a1a3e] mb-2">Usage Data</h3>
                  <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                    We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium dark:text-gray-200 text-[#2a1a3e] mb-2">Cookies & Tracking</h3>
                  <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                    We may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookie preferences through your browser settings.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">3. How We Use Your Information</h2>
              <ul className="space-y-3 dark:text-gray-400 text-[#4a2a5a]">
                {[
                  'To provide, operate, and maintain our services',
                  'To respond to your inquiries and fulfill your requests',
                  'To send you project updates and relevant communications',
                  'To improve our website and user experience',
                  'To detect, prevent, and address technical issues or fraud',
                  'To comply with legal obligations',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8134AF] mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">4. Data Sharing & Disclosure</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only with trusted service providers who assist us in operating our website and conducting our business, and only when those parties agree to keep this information confidential. We may also disclose your information when required by law or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">5. Data Security</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">6. Data Retention</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">7. Your Rights</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed mb-3">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="space-y-3 dark:text-gray-400 text-[#4a2a5a]">
                {[
                  'Access, correct, or delete your personal data',
                  'Object to or restrict the processing of your data',
                  'Request data portability',
                  'Withdraw consent at any time',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#515BD4] mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">8. Third-Party Links</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                Our website may contain links to third-party sites that are not operated by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">9. Changes to This Policy</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after changes are posted constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold dark:text-white text-[#1a0a1e] mb-4">10. Contact Us</h2>
              <p className="dark:text-gray-400 text-[#4a2a5a] leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{' '}
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
