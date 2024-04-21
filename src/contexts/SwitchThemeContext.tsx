import { createContext, ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { darkTheme, defaultTheme } from '../styles/themes/default'

interface SwitchThemeProviderProps {
  children: ReactNode
}

type Theme = 'dark' | 'light'

interface SwitchThemeContextData {
  themeSelected: Theme
  toggleTheme: (themeActive: Theme) => void
}

export const SwitchThemeContext = createContext<SwitchThemeContextData>(
  {} as SwitchThemeContextData,
)

export function SwitchThemeProvider({ children }: SwitchThemeProviderProps) {
  const { saveToLocalStorage } = useLocalStorage()
  const [themeSelected, setThemeSelected] = useState<Theme>(() => {
    const data = localStorage.getItem('@coffee-delivery:theme-active')

    if (data === 'dark' || data === 'light') {
      return data as Theme
    }

    return 'light'
  })

  function toggleTheme() {
    const newTheme = themeSelected === 'light' ? 'dark' : 'light'
    setThemeSelected(newTheme)
    saveToLocalStorage(newTheme, '@coffee-delivery:theme-active')
  }

  return (
    <SwitchThemeContext.Provider value={{ themeSelected, toggleTheme }}>
      <ThemeProvider
        theme={themeSelected === 'light' ? defaultTheme : darkTheme}
      >
        {children}
      </ThemeProvider>
    </SwitchThemeContext.Provider>
  )
}
