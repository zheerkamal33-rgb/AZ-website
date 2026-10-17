"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  LANG_STORAGE_KEY,
  messages,
  type Lang,
  type Messages,
} from "@/lib/i18n";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Messages;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyDocumentLang(lang: Lang) {
  const root = document.documentElement;
  const y = window.scrollY;
  root.lang = lang === "ku" ? "ckb" : "en";
  root.dir = lang === "ku" ? "rtl" : "ltr";
  root.dataset.lang = lang;
  // Changing dir can jump scroll — restore immediately
  const restore = () => window.scrollTo(0, y);
  restore();
  requestAnimationFrame(() => {
    restore();
    requestAnimationFrame(restore);
  });
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    window.__azLangReady = true;
    try {
      const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
      if (stored === "ku" || stored === "en") {
        setLangState(stored);
      }
    } catch {
      /* ignore */
    }
    return () => {
      window.__azLangReady = false;
    };
  }, []);

  const setLang = useCallback((next: Lang) => {
    const y = window.scrollY;
    const root = document.documentElement;
    root.dataset.langSwitching = "1";
    setLangState(next);
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    applyDocumentLang(next);
    // Keep scroll pinned after React re-renders translated copy
    requestAnimationFrame(() => {
      window.scrollTo(0, y);
      requestAnimationFrame(() => {
        window.scrollTo(0, y);
        window.setTimeout(() => {
          window.scrollTo(0, y);
          delete root.dataset.langSwitching;
        }, 180);
      });
    });
  }, []);

  useEffect(() => {
    // Sync document attrs when lang changes from storage hydrate (not user click)
    applyDocumentLang(lang);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: messages[lang],
      dir: lang === "ku" ? "rtl" : "ltr",
    }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

declare global {
  interface Window {
    __azLangReady?: boolean;
  }
}
