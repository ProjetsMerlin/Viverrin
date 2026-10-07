import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import LanguageSwitcher from "@/components/navigation/LanguageSwitcher";
import MainNav from "@/components/navigation/MainNav";
import { getAllPages } from "@/lib/cms/pages";
import { isLocale, locales } from "@/lib/i18n/config";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Arlequin",
  description: "Site éditorial multilingue",
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  
  if (!isLocale(locale)) {
    notFound();
  }
  
  const allPages = await getAllPages();
  
  const localePages = allPages.filter(
    (page) => page.locale === locale && page.translationKey !== "home",
  );

  const lang = locale === "fr" ? "fr-BE" : locale;
  
  return (
    <html lang={lang}>
    <body className="viverrin min-h-screen bg-black text-neutral-900 antialiased">
    <menu className="container flex justify-between items-center gap-6 py-8">
    <MainNav locale={locale} items={localePages} />
    <LanguageSwitcher currentLocale={locale} pages={allPages} />
    </menu>
    {children}
    </body>
    </html>
  );
}