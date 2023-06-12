'use client';

import React, { useState } from 'react';
import {
  ThemeProvider as ThemeProviderStyled,
  useTheme as useThemeStyled
} from 'styled-components';
import { Theme, darkTheme, lightTheme } from './theme';
import { useDarkMode } from '@/hooks/useDarkMode';

export function useTheme(): Theme {
  return useThemeStyled() as Theme;
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const tema = darkMode ? darkTheme : lightTheme;

  console.log(darkMode)

  return (
    <ThemeProviderStyled theme={tema}>
      {children}
    </ThemeProviderStyled>
  )
}