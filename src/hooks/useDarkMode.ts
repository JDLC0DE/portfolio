import { create } from 'zustand'
import { useEffect } from 'react'

export enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark'
}

export type darkModeType = [ThemeEnum | null, () => void]

interface ThemeStore {
  theme: ThemeEnum | null
  setTheme: (theme: ThemeEnum) => void
}

const useThemeStore = create<ThemeStore>(set => ({
  theme: null,
  setTheme: theme => set({ theme })
}))

export function useDarkMode(): darkModeType {
  const { theme, setTheme } = useThemeStore()

  const setMode = (mode: ThemeEnum, activeStorage = true) => {
    if (!mode) return
    activeStorage && window.localStorage.setItem('theme', mode)
    document.documentElement.className = mode
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === ThemeEnum.LIGHT
      ? setMode(ThemeEnum.DARK)
      : setMode(ThemeEnum.LIGHT)
  }

  useEffect(() => {
    const prefersColorSchema = window.matchMedia('(prefers-color-scheme: dark)')
    const systemTheme = prefersColorSchema.matches
      ? ThemeEnum.DARK
      : ThemeEnum.LIGHT
    const currentTheme = window.localStorage.getItem('theme')

    if (currentTheme) {
      setMode(currentTheme as ThemeEnum)
    } else {
      setMode(systemTheme, false)
    }
  }, [theme])

  return [theme, toggleTheme]
}
