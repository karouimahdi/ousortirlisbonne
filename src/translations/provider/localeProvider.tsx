"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useState,
  useEffect,
} from "react";
import { Translations } from "..";
import { Locale } from "..";
import { getTranslation } from "..";
import { getCookie, setCookie } from "cookies-next/client";
import { usePathname, useRouter } from "next/navigation";

// Create a context for the translations
const TranslationContext = createContext<{
  translations: Translations;
  setLocale: (locale: Locale) => void;
  locale: Locale;
} | null>(null);

// Create a provider component
export const TranslationProvider = ({
  children,
  initialLocal,
}: {
  children: ReactNode;
  initialLocal: Locale;
}) => {
  const router = useRouter();

  // State to manage the current locale
  const [locale, setLocaleState] = useState<Locale>(initialLocal); // Default locale for SSR

  // Initialize the locale on the client side
  useEffect(() => {
    const cookie = getCookie("locale");
    if (cookie) {
      const acceptedLocales = ["en", "fr", "pt"];
      if (!acceptedLocales.includes(cookie)) {
        setCookie("locale", "en");
        setLocaleState("en");
      } else {
        setLocaleState(cookie as Locale);
      }
    } else {
      const browserLang = navigator.language.slice(0, 2) as Locale;
      setCookie("locale", browserLang);
      setLocaleState(browserLang);
    }
  }, []);

  // Memoized translations based on the current locale
  const translations = useMemo(() => getTranslation(locale), [locale]);

  // Function to update the locale
  const setLocale = (newLocale: Locale) => {
    setCookie("locale", newLocale); // Update the cookie
    setLocaleState(newLocale); // Update the state
    router.refresh(); // Refresh the page to apply the new locale
  };

  return (
    <TranslationContext.Provider
      value={{
        translations,
        setLocale,
        locale,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

// Custom hook to use the translation context
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
