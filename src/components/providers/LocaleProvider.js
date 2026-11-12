'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { defaultLocale, t as translate } from '@/lib/i18n';

const LocaleContext = createContext({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key) => translate(defaultLocale, key),
});

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(defaultLocale);

  useEffect(() => {
    const saved = window.localStorage.getItem('katisa-locale');
    if (saved === 'en' || saved === 'si' || saved === 'ta') {
      setLocaleState(saved);
      document.documentElement.lang = saved === 'en' ? 'en' : saved;
    }
  }, []);

  const setLocale = useCallback((next) => {
    if (next !== 'en' && next !== 'si' && next !== 'ta') return;
    setLocaleState(next);
    window.localStorage.setItem('katisa-locale', next);
    document.documentElement.lang = next === 'en' ? 'en' : next;
  }, []);

  const t = useCallback((key) => translate(locale, key), [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
