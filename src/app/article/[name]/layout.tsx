import ArticleService from '@/article-service';
import { Article } from '@/config/structures';

function generateJsonLd(article: Article | undefined) {
  if (article) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.metadata.title,
      description: article.metadata.description,
      datePublished: article.metadata.date,
      dateModified: article.metadata.date,
      author: {
        '@type': 'Person',
        name: 'Jakub Jereczek',
      },
      url: `https://jakubjereczek.com/article/${article.slug}`,
      mainEntityOfPage: `https://jakubjereczek.com/article/${article.slug}`,
      ...(article.metadata.tags && {
        keywords: article.metadata.tags.join(', '),
      }),
      image: `https://jakubjereczek.com/articles/images/${article.slug}-dark.png`,
    };
  }
  return {};
}

export default async function ArticleLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ name: string }>;
  children: React.ReactNode;
}>) {
  const { name } = await params;
  const article = ArticleService.getArticle(name);

  return (
    <>
      {children}
      <script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateJsonLd(article)),
        }}
      />
    </>
  );
}
