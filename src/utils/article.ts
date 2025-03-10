import { Article } from '@/structures';

export function getLatestArticleDateByTag(
  articles: Article[],
  tag: string,
): Date {
  return articles
    .filter((article) => article.metadata.tags?.includes(tag))
    .map((article) => new Date(article.metadata.date))
    .sort((a, b) => b.getTime() - a.getTime())[0];
}
