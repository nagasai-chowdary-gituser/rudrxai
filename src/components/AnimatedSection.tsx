'use client'

import { motion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimatedSection({ children, className = '', delay = 0 }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // During SSR / before hydration, render content visible (no opacity: 0)
  if (!mounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
