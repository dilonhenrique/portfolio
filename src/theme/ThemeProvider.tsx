import React from 'react';
import {
  ThemeProvider as ThemeProviderStyled,
  useTheme as useThemeStyled
} from 'styled-components';
import theme, { Theme } from './theme';

export function useTheme(): Theme {
  return useThemeStyled() as Theme;
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeProviderStyled theme={theme}>
      {children}
    </ThemeProviderStyled>
  )
}