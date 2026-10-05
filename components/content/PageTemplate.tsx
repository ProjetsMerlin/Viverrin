type PageTemplateProps = {
  title: string;
  body: string;
};

export default function PageTemplate({ title, body }: PageTemplateProps) {
  return (
    <main className="container">
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-neutral-700">{body}</p>
    </main>
  );
}