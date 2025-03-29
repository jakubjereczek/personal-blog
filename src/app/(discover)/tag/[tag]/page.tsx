import { notFound } from 'next/navigation';

import Articles from '@/components/articles/articles';
import { getSiteConfig } from '@/config/site';
import ArticleService from '@/lib/article-service';
import { Article } from '@/structures';

function generateJsonLd(tag: string, articles: Article[]) {
  const { name, author, keywords, url } = getSiteConfig();

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Articles tagged with ${tag}`,
    url: `${url}/tag/${encodeURIComponent(tag)}`,
    description: `A collection of articles tagged with '${tag}' on ${name}.`,
    keywords: [tag, ...keywords],
    mainEntity: {
      '@type': 'ItemList',
      name: `Articles tagged with ${tag}`,
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          headline: article.metadata.title,
          description: article.metadata.description,
          url: `${url}/article/${article.slug}`,
          datePublished: article.metadata.date,
          dateModified: article.metadata.date,
          author: {
            '@type': 'Person',
            name: author,
            url: `${url}/about`,
          },
          keywords: article.metadata.tags || [],
          mainEntityOfPage: `${url}/article/${article.slug}`,
        },
      })),
    },
  };
}

export async function generateStaticParams() {
  const tags = ArticleService.getTags();

  return tags.map((tag) => ({
    tag,
  }));
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const safeTag = decodeURIComponent(tag);
  const articles = ArticleService.getArticlesByTag(safeTag);

  if (!articles.length) {
    notFound();
  }

  return (
    <>
      <Articles
        label={`Blog articles tagged with ${safeTag}`}
        sublabel={`${articles.length} article${articles.length === 1 ? '' : 's'}`}
        articles={articles}
      />
      <script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateJsonLd(safeTag, articles)),
        }}
      />
    </>
  );
}
