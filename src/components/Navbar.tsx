'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slideDown ${
          scrolled
            ? 'dark:bg-dark/70 bg-white/70 backdrop-blur-2xl border-b dark:border-white/[0.06] border-[#DD2A7B]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden">
              <Image
                src="/logo.png"
                alt="RUDRXAI Logo"
                width={36}
                height={36}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <span className="text-xl font-semibold tracking-tight dark:text-white text-[#1a0a1e]">
              RUDRX<span className="gradient-text">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? 'dark:text-white text-[#1a0a1e]'
                    : 'dark:text-gray-400 text-[#6b4b7a] dark:hover:text-white hover:text-[#DD2A7B]'
                }`}
              >
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 dark:bg-white/[0.06] bg-[#DD2A7B]/[0.08] rounded-lg border dark:border-white/[0.08] border-[#DD2A7B]/15"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle + CTA + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="relative w-10 h-10 rounded-xl dark:bg-white/[0.06] bg-[#DD2A7B]/[0.08] dark:border-white/[0.08] border-[#DD2A7B]/15 border flex items-center justify-center dark:text-gray-400 text-[#6b4b7a] dark:hover:text-white hover:text-[#DD2A7B] dark:hover:bg-white/[0.1] hover:bg-[#DD2A7B]/[0.12] transition-all duration-300"
              aria-label="Toggle theme"
              title={`Current: ${theme} mode`}
            >
              {theme === 'dark' ? (
                /* Moon icon — dark mode */
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                /* Sun icon — light mode */
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              )}
            </button>

            <Link
              href="/contact"
              className={`hidden lg:inline-flex px-6 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 dark:bg-gradient-to-r dark:from-primary-600 dark:to-blue-600 dark:border dark:border-primary-500/20 dark:hover:shadow-primary-500/25 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:shadow-[#8134AF]/25 text-white`}
            >
              Start a Project
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block w-6 h-0.5 dark:bg-white bg-[#1a0a1e] rounded-full transition-all duration-300 ${
                    mobileOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 dark:bg-white bg-[#1a0a1e] rounded-full transition-all duration-300 ${
                    mobileOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 dark:bg-white bg-[#1a0a1e] rounded-full transition-all duration-300 ${
                    mobileOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 dark:bg-dark/95 bg-white/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-3xl font-semibold py-3 transition-colors duration-300 ${
                      pathname === link.href
                        ? 'gradient-text'
                        : 'dark:text-gray-400 text-[#6b4b7a] dark:hover:text-white hover:text-[#DD2A7B]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary text-lg"
                >
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
