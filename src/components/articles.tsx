import ArticleCard from '@/components/article-card';
import ItemRenderer from '@/components/item-renderer';
import { Article } from '@/structures';
import { hashKey } from '@/utils/string';

interface Props {
  label: string;
  sublabel: string;
  articles: Article[];
}

export default function Articles({ label, sublabel, articles }: Props) {
  return (
    <div>
      <div className="mb-4 flex items-baseline gap-3">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {label}
        </h1>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {sublabel}
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
