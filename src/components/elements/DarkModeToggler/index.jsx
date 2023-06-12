import React from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';

export default function DarkModeToggler() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <input type='checkbox' checked={darkMode} onChange={toggleDarkMode} />
  )
}
