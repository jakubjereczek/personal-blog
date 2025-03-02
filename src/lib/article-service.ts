import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import { Article, ArticleMetadata } from '@/structures';

export default class ArticleService {
  private static readonly directory = path.join(
    process.cwd(),
    'public/articles',
  );

  static getArticle(slug: string): Article | undefined {
    const filePath = path.join(this.directory, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      return undefined;
    }
    const source = fs.readFileSync(filePath, 'utf8');
    const { metadata, content } = this.parseMarkdown(source);

    return {
      metadata,
      content,
      slug,
    };
  }

  static getArticles(): Article[] {
    const slugs = this.getArticlesNames();

    return (
      slugs
        .map((slug) => {
          const article = this.getArticle(slug);
          if (article) {
            return { ...article, slug } as Article;
          }
          return undefined;
        })
        .filter(
          (article) => article !== undefined && article.metadata,
        ) as Article[]
    ).sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime(),
    );
  }

  static getArticlesNames(): string[] {
    try {
      const filenames = fs.readdirSync(this.directory);
      const slugs = filenames
        .filter((filename) => filename.endsWith('.mdx'))
        .map((filename) => filename.replace(/\.mdx$/, ''));

      return slugs;
    } catch {
      return [];
    }
  }

  private static parseMarkdown(source: string) {
    const parsed = matter(source);

    return {
      metadata: parsed.data as ArticleMetadata,
      content: parsed.content,
    };
  }
}
