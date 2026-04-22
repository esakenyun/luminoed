"use client";

import React, { createContext, useContext, useState } from "react";
import { defaultLocale, Locale, locales } from "@/lib/i18n";
import { useRouter } from "next/navigation";

function resolvePath(object: any, path: string, defaultValue: string = "") {
  return (
    path.split(".").reduce((acc, part) => acc && acc[part], object) ||
    defaultValue
  );
}

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  children,
  dictionary,
  initialLocale,
}: {
  children: React.ReactNode;
  dictionary: any;
  initialLocale: Locale;
}) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(
    locales.includes(initialLocale) ? initialLocale : defaultLocale,
  );

  const t = (key: string) => resolvePath(dictionary, key, key);

  const setLocale = (newLocale: Locale) => {
    if (!locales.includes(newLocale)) return;
    setLocaleState(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
}
