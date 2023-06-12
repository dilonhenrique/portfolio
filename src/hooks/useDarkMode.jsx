import { useEffect, useState } from 'react';
export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(true);

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
};
