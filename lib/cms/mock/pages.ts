import type { ContentPage } from "@/types/cms";

export const mockPages: ContentPage[] = [
  {
    translationKey: "home",
    locale: "fr",
    slug: "",
    title: "Bienvenue sur mon site",
    body: "Ce contenu sera bientôt modifiable depuis le CMS headless.",
  },
  {
    translationKey: "home",
    locale: "en",
    slug: "",
    title: "Welcome to my website",
    body: "This content will soon be editable from the headless CMS.",
  },
  {
    translationKey: "about",
    locale: "fr",
    slug: "a-propos",
    title: "À propos",
    body: "Ici, nous présenterons le site, le projet ou l'organisation.",
  },
  {
    translationKey: "about",
    locale: "en",
    slug: "about",
    title: "About",
    body: "Here we will present the website, the project or the organization.",
  },
  {
    translationKey: "legal",
    locale: "fr",
    slug: "mentions-legales",
    title: "Mentions légales",
    body: "Contenu des mentions légales.",
  },
  {
    translationKey: "legal",
    locale: "en",
    slug: "legal-notice",
    title: "Legal notice",
    body: "Legal notice content.",
  },
];