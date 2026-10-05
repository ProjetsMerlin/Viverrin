import type { ContentPage } from "@/types/cms";
import type { Locale } from "@/lib/i18n/config";
import { mockPages } from "./mock/pages";

const HOME_KEY = "home";

// TODO: remplacer par un appel au CMS
export async function getHomePage(locale: Locale): Promise<ContentPage | null> {
  return (
    mockPages.find(
      (page) => page.locale === locale && page.translationKey === HOME_KEY,
    ) ?? null
  );
}

export async function getPageBySlug(
  locale: Locale,
  slug: string,
): Promise<ContentPage | null> {
  return (
    mockPages.find(
      (page) =>
        page.locale === locale &&
        page.slug === slug &&
        page.translationKey !== HOME_KEY,
    ) ?? null
  );
}

export async function getAllPages(): Promise<ContentPage[]> {
  return mockPages;
}