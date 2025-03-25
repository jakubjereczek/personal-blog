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
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {label}
        </h1>
        <span className="m-0.5 inline-flex shrink-0 items-center rounded-full border border-gray-200 bg-blue-600 px-4 py-1 text-sm text-gray-200 shadow-sm dark:border-gray-700 dark:bg-blue-400 dark:text-gray-800">
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
