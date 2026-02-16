'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from './ThemeProvider'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  color: string
}

interface FloatingOrb {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  hue: number
  opacity: number
}

export default function MotionBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const themeRef = useRef(theme)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    themeRef.current = theme
  }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    // ── Particles (small floating dots with connections) ──
    const particleCount = Math.min(60, Math.floor((width * height) / 25000))
    const particles: Particle[] = []

    const darkColors = [
      'rgba(99,102,241,',   // indigo
      'rgba(59,130,246,',   // blue
      'rgba(6,182,212,',    // cyan
      'rgba(139,92,246,',   // violet
      'rgba(168,85,247,',   // purple
    ]
    const lightColors = [
      'rgba(245,133,41,',   // orange
      'rgba(221,42,123,',   // rose
      'rgba(129,52,175,',   // purple
      'rgba(81,91,212,',    // indigo
      'rgba(254,218,119,',  // gold
    ]

    for (let i = 0; i < particleCount; i++) {
      const colors = themeRef.current === 'dark' ? darkColors : lightColors
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    // ── Floating orbs (large blurry moving gradients) ──
    const orbCount = 4
    const orbs: FloatingOrb[] = []
    for (let i = 0; i < orbCount; i++) {
      orbs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 200 + 150,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        hue: i * 70,
        opacity: 0.06,
      })
    }

    // ── Shooting meteors ──
    interface Meteor {
      x: number
      y: number
      length: number
      speed: number
      angle: number
      opacity: number
      life: number
      maxLife: number
    }
    const meteors: Meteor[] = []
    let meteorTimer = 0

    function spawnMeteor() {
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3
      meteors.push({
        x: Math.random() * width * 1.2 - width * 0.1,
        y: -20,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 4 + 3,
        angle,
        opacity: Math.random() * 0.6 + 0.2,
        life: 0,
        maxLife: Math.random() * 60 + 40,
      })
    }

    function drawOrbs() {
      if (!ctx) return
      const isDark = themeRef.current === 'dark'
      for (const orb of orbs) {
        orb.opacity = isDark ? 0.06 : 0.12
        orb.x += orb.vx
        orb.y += orb.vy

        if (orb.x < -orb.radius) orb.x = width + orb.radius
        if (orb.x > width + orb.radius) orb.x = -orb.radius
        if (orb.y < -orb.radius) orb.y = height + orb.radius
        if (orb.y > height + orb.radius) orb.y = -orb.radius

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)
        if (isDark) {
          const colors = darkColors[Math.floor(orb.hue / 70) % darkColors.length]
          gradient.addColorStop(0, `${colors}${orb.opacity})`)
          gradient.addColorStop(0.5, `${colors}${orb.opacity * 0.4})`)
          gradient.addColorStop(1, `${colors}0)`)
        } else {
          const colors = lightColors[Math.floor(orb.hue / 70) % lightColors.length]
          gradient.addColorStop(0, `${colors}${orb.opacity})`)
          gradient.addColorStop(0.5, `${colors}${orb.opacity * 0.4})`)
          gradient.addColorStop(1, `${colors}0)`)
        }
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function drawParticles() {
      if (!ctx) return
      const isDark = themeRef.current === 'dark'
      const connectionDist = 120

      // Update colors when theme changes
      const colors = isDark ? darkColors : lightColors

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        // Reassign color on theme change
        const isCurrentlyDarkColor = darkColors.some(c => p.color.startsWith(c))
        const isCurrentlyLightColor = lightColors.some(c => p.color.startsWith(c))
        if (isDark && !isCurrentlyDarkColor) {
          p.color = colors[Math.floor(Math.random() * colors.length)]
        } else if (!isDark && !isCurrentlyLightColor) {
          p.color = colors[Math.floor(Math.random() * colors.length)]
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${p.opacity})`
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * (isDark ? 0.08 : 0.1)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = isDark
              ? `rgba(99,102,241,${alpha})`
              : `rgba(221,42,123,${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    function drawMeteors() {
      if (!ctx) return
      const isDark = themeRef.current === 'dark'

      meteorTimer++
      if (meteorTimer > 120 + Math.random() * 180) {
        meteorTimer = 0
        spawnMeteor()
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i]
        m.x += Math.cos(m.angle) * m.speed
        m.y += Math.sin(m.angle) * m.speed
        m.life++

        const fadeIn = Math.min(m.life / 10, 1)
        const fadeOut = Math.max(1 - (m.life - m.maxLife + 20) / 20, 0)
        const alpha = m.opacity * fadeIn * fadeOut

        if (m.life > m.maxLife || alpha <= 0) {
          meteors.splice(i, 1)
          continue
        }

        const tailX = m.x - Math.cos(m.angle) * m.length
        const tailY = m.y - Math.sin(m.angle) * m.length

        const gradient = ctx.createLinearGradient(tailX, tailY, m.x, m.y)
        if (isDark) {
          gradient.addColorStop(0, `rgba(99,102,241,0)`)
          gradient.addColorStop(0.6, `rgba(99,102,241,${alpha * 0.5})`)
          gradient.addColorStop(1, `rgba(167,139,250,${alpha})`)
        } else {
          gradient.addColorStop(0, `rgba(221,42,123,0)`)
          gradient.addColorStop(0.6, `rgba(221,42,123,${alpha * 0.5})`)
          gradient.addColorStop(1, `rgba(245,133,41,${alpha})`)
        }

        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(m.x, m.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.lineCap = 'round'
        ctx.stroke()

        // Glow at head
        ctx.beginPath()
        ctx.arc(m.x, m.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = isDark
          ? `rgba(167,139,250,${alpha})`
          : `rgba(245,133,41,${alpha})`
        ctx.fill()
      }
    }

    // ── Animation loop ──
    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)
      drawOrbs()
      drawParticles()
      drawMeteors()
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    function handleResize() {
      width = window.innerWidth
      height = window.innerHeight
      if (canvas) {
        canvas.width = width
        canvas.height = height
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{ mixBlendMode: theme === 'dark' ? 'screen' : 'multiply' }}
    />
  )
}
