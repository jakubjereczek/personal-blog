import ArticleCard from '@/components/article-card';
import ItemRenderer from '@/components/item-renderer';
import { getSiteConfig } from '@/config/site';
import ArticleService from '@/lib/article-service';
import { Article, navItems } from '@/structures';
import { hashKey } from '@/utils/string';

function generateJsonLd(articles: Article[]) {
  const { name, description, author, keywords, url } = getSiteConfig();

  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name,
    url: `${url}/`,
    description,
    author: {
      '@type': 'Person',
      url: `${url}/about`,
      name: author,
    },
    keywords,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: navItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${url}${item.href}`,
      })),
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Articles',
      itemListElement: articles
        .filter((article) => !article.metadata.external)
        .map((article, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Article',
            headline: article.metadata.title,
            description: article.metadata.description,
            url: `${url}/article/${article.slug}`,
            datePublished: article.metadata.date,
            dateModified: article.metadata.date,
            author: {
              '@type': 'Person',
              name: author,
              url: `${url}/about`,
            },
            keywords: article.metadata.tags || [],
            mainEntityOfPage: `${url}/article/${article.slug}`,
          },
        })),
    },
  };
}

export default function BlogPage() {
  const articles = ArticleService.getArticles();

  return (
    <>
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
      <script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateJsonLd(articles)),
        }}
      />
    </>
  );
}
