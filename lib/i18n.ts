export type Locale = "en" | "id";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "id"];

export type Dictionary = typeof import("../locales/en.json");

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  if (!locales.includes(locale)) locale = defaultLocale;
  return import(`../locales/${locale}.json`).then((module) => module.default);
};
