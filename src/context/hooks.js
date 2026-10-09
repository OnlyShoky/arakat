import { useContext } from 'react'
import { LangContext, ThemeContext } from './contexts'

export const useLang = () => useContext(LangContext)
export const useTheme = () => useContext(ThemeContext)
