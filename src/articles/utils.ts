import { Article } from '@/config/structures';

export function getMostViewedArticles(
  articles: Article[],
  count: number,
): Article[] {
  return articles
    .filter(
      (post) =>
        post.parameters.views !== undefined && post.parameters.views > 10,
    )
    .sort((a, b) => {
      const difference = (b.parameters.views || 0) - (a.parameters.views || 0);
      if (difference !== 0) {
        return difference;
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, count);
}
