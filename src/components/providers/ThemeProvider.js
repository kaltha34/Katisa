'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
});

function applyThemeClass(next) {
  const root = document.documentElement;
  root.classList.toggle('light', next === 'light');
  root.classList.toggle('dark', next === 'dark');
  root.style.colorScheme = next;
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('dark');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('katisa-theme');
    const next = saved === 'light' || saved === 'dark' ? saved : 'dark';
    setThemeState(next);
    applyThemeClass(next);
    setReady(true);
  }, []);

  const setTheme = useCallback((next) => {
    setThemeState(next);
    window.localStorage.setItem('katisa-theme', next);
    applyThemeClass(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem('katisa-theme', next);
      applyThemeClass(next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, ready }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
