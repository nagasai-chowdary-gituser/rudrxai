'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

function applyThemeToDOM(theme: Theme) {
  const root = document.documentElement
  if (theme === 'dark') {
    root.classList.remove('light')
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
    root.classList.add('light')
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  // Read stored theme after mount (avoids hydration mismatch)
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
      applyThemeToDOM(stored)
    } else {
      // Default to dark mode for all new visitors
      applyThemeToDOM('dark')
    }
    setMounted(true)
  }, [])

  // Apply theme to DOM whenever it changes (after mount)
  useEffect(() => {
    if (!mounted) return
    applyThemeToDOM(theme)
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      // Apply immediately to DOM for instant feedback
      applyThemeToDOM(next)
      localStorage.setItem('theme', next)
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
