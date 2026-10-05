import { notFound } from "next/navigation";
import PageTemplate from "@/components/content/PageTemplate";
import { getPageBySlug } from "@/lib/cms/pages";
import { isLocale } from "@/lib/i18n/config";

type ContentPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function ContentPageRoute({ params }: ContentPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const page = await getPageBySlug(locale, slug);

  if (!page) {
    notFound();
  }

  return <PageTemplate title={page.title} body={page.body} />;
}