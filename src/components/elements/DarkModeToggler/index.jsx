import React from 'react';
import { useDarkMode } from '@/context/darkMode';
import { Switcher } from './styled';
import { TbMoon } from 'react-icons/tb';

export default function DarkModeToggler() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <Switcher checked={darkMode}>
      <input type='checkbox' checked={darkMode} onChange={toggleDarkMode} />
      <span className='thumb'>
        <TbMoon />
      </span>
      <span className='track'></span>
    </Switcher>
  )
}
