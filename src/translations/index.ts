import { fr } from "./content/fr";
import { en } from "./content/en";
import { pt } from "./content/pt";

// Define a type for the translations
export type Translations = typeof fr;

// Combine all translations into a single object
export const translations = {
  fr,
  en,
  pt,
} as const;

// Define a type for the available locales
export type Locale = keyof typeof translations;

// Utility function to get translations for a specific locale
export const getTranslation = (locale: Locale): Translations => {
  return translations[locale];
};
