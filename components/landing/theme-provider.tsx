import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type ThemeContextValue = {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  isDark: false,
  toggleTheme: () => {},
})

function getSavedTheme() {
  return typeof window !== 'undefined' && window.localStorage.getItem('nestni-theme') === 'dark'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(getSavedTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
    window.localStorage.setItem('nestni-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme: () => setIsDark((current) => !current) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
