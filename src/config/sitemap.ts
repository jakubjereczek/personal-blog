import { MetadataRoute } from 'next';

import { getSiteConfig } from '@/config/site';
import ArticleService from '@/lib/article-service';
import { navItems } from '@/structures';
import { getLatestArticleDateByTag } from '@/utils/article';

export function generateArticlesSitemap(): MetadataRoute.Sitemap {
  const { url } = getSiteConfig();
  const articles = ArticleService.getArticles().filter(
    (article) => !article.metadata.external,
  );

  return articles.map((article) => ({
    url: `${url}/article/${article.slug}`,
    lastModified: new Date(article.metadata.date).toISOString(),
    changeFrequency: 'monthly',
    images: [`${url}/images/${article.slug}-dark.png`],
  }));
}

export function generateTagsSitemap(): MetadataRoute.Sitemap {
  const { url } = getSiteConfig();
  const tags = ArticleService.getTags();
  const articles = ArticleService.getArticles();

  return tags.map((tag) => ({
    url: `${url}/tag/${decodeURIComponent(tag)}`,
    lastModified: getLatestArticleDateByTag(articles, tag).toISOString(),
    changeFrequency: 'daily',
  }));
}

export function generateMainSitemap(): MetadataRoute.Sitemap {
  const { url } = getSiteConfig();

  return navItems.map((item) => ({
    url: `${url}${item.href}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
  }));
}
