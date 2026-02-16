import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RUDRXAI — AI-Powered Software Solutions',
  description:
    'We build world-class software products and AI solutions for ambitious businesses. From custom development to production-grade SaaS, we turn your vision into reality.',
  keywords: ['AI', 'Software Development', 'SaaS', 'Machine Learning', 'Web Development', 'Mobile Apps'],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'RUDRXAI — AI-Powered Software Solutions',
    description:
      'We build world-class software products and AI solutions for ambitious businesses.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme !== 'light' && theme !== 'dark') {
                    theme = 'dark';
                  }
                  var d = document.documentElement.classList;
                  d.remove('dark', 'light');
                  d.add(theme);
                } catch(e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
