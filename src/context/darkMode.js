import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const setMode = mode => {
    window.localStorage.setItem('darkMode', mode)
    setDarkMode(mode)
  };

  const toggleDarkMode = () => {
    setMode(!darkMode)
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('darkMode');
    localTheme && setDarkMode(localTheme === 'true');
  }, []);

  return [darkMode, toggleDarkMode];
}