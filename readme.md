# Viverrin

Projet Next.js / Node.js / Vercel & CMS Headless

## Commandes utiles

### Installation, démarrage & Build
npx create-next-app@latest Viverrin --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm
npm run dev
npm run build

### Vérifier les types TypeScript (sans générer de fichiers) + Lint
npx tsc --noEmit
npm run lint