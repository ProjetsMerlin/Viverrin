import type { Locale } from "@/lib/i18n/config";

export type ContentPage = {
  translationKey: string;
  locale: Locale;
  slug: string;
  title: string;
  body: string;
};