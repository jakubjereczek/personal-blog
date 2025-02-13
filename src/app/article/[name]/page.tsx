import { notFound } from 'next/navigation';

import ArticleService from '@/article-service';
import ArticleContent from '@/articles/article-content';
import MDXRemoteRenderer from '@/articles/mdx-remote-renderer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const article = ArticleService.getArticle(name);

  if (article) {
    return {
      title: article.metadata.title,
      description: article.metadata.description,
      openGraph: {
        title: article.metadata.title,
        description: article.metadata.description,
        type: 'article',
        publishedTime: article.metadata.date,
        url:
          article.metadata.external ||
          `https://jakubjereczek.com/article/${article.slug}`,
        tags: article.metadata.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: article.metadata.title,
        description: article.metadata.description,
      },
    };
  }
}

export async function generateStaticParams() {
  const slugs = ArticleService.getArticlesNames();

  return slugs.map((name) => ({
    name,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const article = ArticleService.getArticle(name);

  if (!article) {
    return notFound();
  }

  return (
    <ArticleContent>
      <MDXRemoteRenderer source={article.content} />
    </ArticleContent>
  );
}
