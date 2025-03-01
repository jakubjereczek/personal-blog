import { Metadata } from 'next';

import ArticleService from '@/article-service';
import ArticleCard from '@/articles/article-card';
import ItemRenderer from '@/components/item-renderer';
import { Article } from '@/config/structures';
import { hashKey } from '@/utils/string';

function generateJsonLd(articles: Article[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'jakubjereczek.com',
    url: 'https://jakubjereczek.com/',
    description:
      'The blog explores web development, covering front-end, full-stack, and JavaScript. It offers practical tips, modern tech insights.',
    author: {
      '@type': 'Person',
      name: 'Jakub Jereczek',
      url: 'https://jakubjereczek.com/about',
    },
    keywords: [
      'web development',
      'front-end',
      'full-stack',
      'JavaScript',
      'programming',
      'developer blog',
      'web technologies',
    ],
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Blog',
          item: 'https://jakubjereczek.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'About me',
          item: 'https://jakubjereczek.com/about',
        },
      ],
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Articles',
      itemListElement: articles
        .filter((article) => !article.metadata.external)
        .map((article, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Article',
            headline: article.metadata.title,
            description: article.metadata.description,
            url: `https://jakubjereczek.com/article/${article.slug}`,
            datePublished: article.metadata.date,
            dateModified: article.metadata.date,
            author: {
              '@type': 'Person',
              name: 'Jakub Jereczek',
              url: 'https://jakubjereczek.com/about',
            },
            keywords: article.metadata.tags || [],
            mainEntityOfPage: `https://jakubjereczek.com/article/${article.slug}`,
          },
        })),
    },
  };
}

export const metadata: Metadata = {
  title: 'jakubjereczek.com',
  description:
    'The blog covers web development topics, including front-end, full-stack, JavaScript, and more. It features practical tips, discussions on modern technologies, and insights from real-world projects. Whether you are a beginner or an experienced developer, you will find valuable guidance and inspiration.',
  authors: [{ name: 'Jakub Jereczek' }],
  keywords: [
    'web development',
    'front-end',
    'full-stack',
    'JavaScript',
    'programming',
    'developer blog',
    'web technologies',
  ],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://jakubjereczek.com',
    title: 'jakubjereczek.com',
    description:
      'The blog covers web development topics, including front-end, full-stack, JavaScript, and more. It features practical tips, discussions on modern technologies, and insights from real-world projects. Whether you are a beginner or an experienced developer, you will find valuable guidance and inspiration.',
    siteName: 'jakubjereczek.com',
    images: [
      {
        url: 'https://jakubjereczek.com/icons_set/og.png',
        width: 1200,
        height: 630,
        alt: 'jakubjereczek.com Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'jakubjereczek.com',
    description:
      'The blog covers web development topics, including front-end, full-stack, JavaScript, and more. It features practical tips, discussions on modern technologies, and insights from real-world projects.',
    images: 'https://jakubjereczek.com/icons_set/og.png',
  },
};

export default function BlogPage() {
  const articles = ArticleService.getArticles();

  return (
    <>
      <div>
        <div className="mb-4 flex items-baseline gap-3">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Blog
          </h1>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {articles.length} articles
          </span>
        </div>
        <div className="space-y-6">
          <ItemRenderer<Article>
            items={articles}
            onItemRender={(article, index) => (
              <ArticleCard index={index} article={article} />
            )}
            onKeyExtract={(article, index) =>
              hashKey(`${article.metadata.title}${index}`)
            }
          />
        </div>
      </div>
      <script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateJsonLd(articles)),
        }}
      />
    </>
  );
}
