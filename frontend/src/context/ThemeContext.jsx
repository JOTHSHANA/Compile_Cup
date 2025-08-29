import React, { createContext, useState, useMemo, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    // 1. Check if the View Transitions API is supported
    if (!document.startViewTransition) {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
      return;
    }

    // 2. Wrap the state update in the API
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