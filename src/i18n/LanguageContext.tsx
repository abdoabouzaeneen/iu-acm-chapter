import React, { useState, useEffect } from 'react';
import { LanguageContext, type Language, type Direction } from './context';

const STORAGE_KEY = 'iu_acm_chapter_lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === 'en' || saved === 'ar') return saved;
      if (typeof navigator !== 'undefined' && navigator.language?.startsWith('ar')) {
        return 'ar';
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  const dir: Direction = lang === 'ar' ? 'rtl' : 'ltr';
  const isRtl = lang === 'ar';

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }

    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    if (isRtl) {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
  }, [lang, dir, isRtl]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const toggleLang = () => {
    setLangState((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, dir, isRtl, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
