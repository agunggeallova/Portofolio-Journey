"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }) {
  // /id is the indexable Indonesian homepage. Deriving the starting language
  // from the URL (not just localStorage) means that route renders Indonesian
  // in the server HTML too — a crawler never sees the English flash that the
  // toggle-only version had. Lazy initial state keeps hydration in step.
  const pathname = usePathname();
  const isIdRoute = typeof pathname === "string" && pathname.startsWith("/id");
  const [lang, setLangState] = useState(() => (isIdRoute ? "id" : "en"));

  useEffect(() => {
    // The URL wins on /id; only the language-agnostic routes read the stored
    // preference, so a saved "en" can't flip the Indonesian page back.
    if (isIdRoute) return;
    const stored = window.localStorage.getItem("lang");
    if (stored === "en" || stored === "id") {
      // Reading localStorage is a sync with an external store and can only
      // happen post-mount (SSR has no window). Doing it in an effect is the
      // hydration-safe pattern; the alternative is a lazy initializer, which
      // would mismatch server and client HTML for returning visitors.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(stored);
    }
  }, [isIdRoute]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(next) {
    setLangState(next);
    window.localStorage.setItem("lang", next);
  }

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
