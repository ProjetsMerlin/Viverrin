"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";

type PageLink = {
  translationKey: string;
  locale: Locale;
  slug: string;
};

type LanguageSwitcherProps = {
  currentLocale: Locale;
  pages: PageLink[];
};

export default function LanguageSwitcher({
  currentLocale,
  pages,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const currentSlug = pathname.split("/")[2];

  const currentPage = currentSlug
    ? pages.find((p) => p.locale === currentLocale && p.slug === currentSlug)
    : undefined;

  function getHref(target: Locale): string {
    if (!currentPage) return `/${target}`;

    const translation = pages.find(
      (p) =>
        p.translationKey === currentPage.translationKey && p.locale === target,
    );

    return translation ? `/${target}/${translation.slug}` : `/${target}`;
  }

  return (
    <nav
      aria-label="Language"
      className="flex justify-end gap-3 text-sm uppercase"
    >
      {locales.map((locale) =>
        locale === currentLocale ? (
          <span key={locale} aria-current="true" className="font-semibold">
            {locale}
          </span>
        ) : (
          <Link
            key={locale}
            href={getHref(locale)}
            lang={locale}
            hrefLang={locale}
            className="text-neutral-500 hover:text-neutral-900"
          >
            {locale}
          </Link>
        ),
      )}
    </nav>
  );
}