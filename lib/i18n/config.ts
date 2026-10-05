// C'est ici que l'on définit les langues supportées par l'application La première langue de la liste est la langue par défaut
export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = locales[0];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}