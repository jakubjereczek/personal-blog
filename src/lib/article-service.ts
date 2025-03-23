import Service from '@/lib/service';
import { Article } from '@/structures';

class ArticleService extends Service<Article> {
  constructor() {
    super('public/articles');
  }

  getArticle(slug: string): Article | undefined {
    return this.get(slug);
  }

  getArticles(): Article[] {
    return this.getMany();
  }

  getArticlesNames(): string[] {
    return this.getList();
  }

  getTags(): string[] {
    return [
      ...new Set(
        this.getMany()
          .map((entry) => entry.metadata.tags || [])
          .flat(),
      ),
    ];
  }

  getArticlesByTag(tag: string) {
    return this.getArticles().filter((article) =>
      article.metadata.tags?.includes(tag),
    );
  }
}

export default new ArticleService();
