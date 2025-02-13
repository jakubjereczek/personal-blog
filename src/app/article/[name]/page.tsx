import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import ArticleService from '@/article-service';
import ArticleContent from '@/articles/article-content';
import MDXRemoteRenderer from '@/articles/mdx-remote-renderer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata | undefined> {
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
        tags: article.metadata.tags?.join(', ') || '',
        images: [
          {
            url: `/articles/images/${article.slug}.png`,
            width: 2400,
            height: 1260,
            alt: article.metadata.title || 'Article Image',
          },
          {
            url: `/articles/images/${article.slug}-dark.png`,
            width: 2400,
            height: 1260,
            alt: article.metadata.title || 'Article Image',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        images: [
          {
            url: `/articles/images/${article.slug}.png`,
            width: 2400,
            height: 1260,
            alt: article.metadata.title || 'Article Image',
          },
          {
            url: `/articles/images/${article.slug}-dark.png`,
            width: 2400,
            height: 1260,
            alt: article.metadata.title || 'Article Image',
          },
        ],
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
      <div className="mb-8 overflow-hidden rounded-lg">
        <Image
          src={`/articles/images/${name}.png`}
          width={920}
          height={320}
          alt={article.metadata.title}
          className="block dark:hidden"
        />
        <Image
          src={`/articles/images/${name}-dark.png`}
          width={920}
          height={320}
          alt={article.metadata.title}
          className="hidden dark:block"
        />
      </div>

      <MDXRemoteRenderer source={article.content} />
    </ArticleContent>
  );
}
