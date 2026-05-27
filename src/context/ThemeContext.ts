import { createContext } from 'react'

export type Theme = 'dark' | 'light'

export interface ThemeContextValue {
  theme: Theme
  isDark: boolean
  toggleTheme: () => void
}

// El contexto vive en su propio archivo para satisfacer react-refresh
export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
