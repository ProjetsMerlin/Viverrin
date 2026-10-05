import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

type NavItem = {
  slug: string;
  title: string;
};

type MainNavProps = {
  locale: Locale;
  items: NavItem[];
};

const homeLabels: Record<Locale, string> = {
  fr: "Accueil",
  en: "Home",
};

export default function MainNav({ locale, items }: MainNavProps) {
  return (
    <nav aria-label="Main">
      <ul className="flex flex-wrap gap-4 text-sm">
        <li>
          <Link href={`/${locale}`} className="hover:underline">
            {homeLabels[locale]}
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.slug}>
            <Link href={`/${locale}/${item.slug}`} className="hover:underline">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}