import ArticleService from '@/article-service';
import ArticleCard from '@/articles/article-card';
import ItemRenderer from '@/components/item-renderer';
import { Article } from '@/config/structures';
import { hashKey } from '@/utils/string';

export default function BlogPage() {
  const articles = ArticleService.getArticles();

  return (
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
  );
}
