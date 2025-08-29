import React, { createContext, useState, useMemo, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (!document.startViewTransition) {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
      return;
    }

    document.startViewTransition(() => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    });
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};