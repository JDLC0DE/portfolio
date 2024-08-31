import { useEffect, useState } from 'react'

export type ThemeType = 'light' | 'dark' | undefined
export type darkModeType = [ThemeType, () => void]

export function useDarkMode(): darkModeType {
  const [theme, setTheme] = useState<ThemeType>()

  const setMode = (mode: ThemeType, activeStorage = true) => {
    if (!mode) return
    activeStorage && window.localStorage.setItem('theme', mode)
    document.documentElement.className = mode
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  useEffect(() => {
    const prefersColorSchema = window.matchMedia('(prefers-color-scheme: dark)')
    const systemTheme = prefersColorSchema.matches ? 'dark' : 'light'
    const currentTheme = window.localStorage.getItem('theme')

    if (currentTheme) {
      setMode(currentTheme as ThemeType)
    } else {
      setMode(systemTheme, false)
    }
  }, [theme])

  return [theme, toggleTheme]
}
