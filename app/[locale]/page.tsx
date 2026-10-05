import { notFound } from "next/navigation";
import PageTemplate from "@/components/content/PageTemplate";
import { getHomePage } from "@/lib/cms/pages";
import { isLocale } from "@/lib/i18n/config";

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const page = await getHomePage(locale);

  if (!page) {
    notFound();
  }

  return <PageTemplate title={page.title} body={page.body} />;
}