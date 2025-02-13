import { Metadata } from 'next';

import './global.css';
import ArticleService from '@/article-service';
import Navigation from '@/components/navigation';
import { Article } from '@/config/structures';

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
      name: 'List of articles',
      itemListElement: articles.map((article, index) => ({
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
          },
          keywords: article.metadata.tags || [],
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://jakubjereczek.com/article/${article.slug}`,
          },
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const articles = ArticleService.getArticles();

  return (
    <html lang="en">
      <head>
        <script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateJsonLd(articles)),
          }}
        />
      </head>
      <body>
        <div className="flex min-h-screen flex-col bg-white selection:bg-blue-600 selection:text-blue-100 dark:bg-gray-900 dark:selection:bg-blue-400">
          <Navigation />
          <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 pt-24">
            {children}
          </main>
          <footer className="bg-gray-100 dark:bg-gray-800">
            <div className="mx-auto max-w-4xl px-4 py-6 text-center text-gray-600 dark:text-gray-400">
              <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
