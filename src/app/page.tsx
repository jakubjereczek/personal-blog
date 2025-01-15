'use client';

import { motion } from 'framer-motion';
import { Clock, Flame, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

import { getMostViewedArticles } from '@/articles/utils';
import { Article } from '@/config/structures';
import { isRecent30DaysDate } from '@/utils/time';

const articles: Article[] = [
  {
    id: 1,
    title: 'Structured Data in context of SEO',
    date: '2025-01-15T00:00:00Z',
    tags: ['SEO', 'JSON-LD'],
    parameters: {
      views: 9,
      external: 'https://www.google.com/',
    },
    content: '',
  },
];

export default function BlogPage() {
  const mostViewedIds = useMemo(
    () =>
      getMostViewedArticles(articles, Math.floor(0.3 * articles.length)).map(
        (article) => article.id,
      ),
    [],
  );
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
        {articles.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <article className="pb-2">
              <Link href={`/blog/${post.id}`} className="group block">
                <div className="flex flex-col space-y-1">
                  <time className="font-mono text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </time>
                  <h2 className="flex flex-wrap items-center gap-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                    {post.title}
                    {isRecent30DaysDate(post.date) && (
                      <span className="group/tooltip relative inline-flex items-center">
                        <Sparkles
                          size={14}
                          className="text-green-500 dark:text-green-400"
                        />
                        <span className="invisible absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white group-hover/tooltip:visible dark:bg-gray-800">
                          New
                        </span>
                      </span>
                    )}
                    {post.content && post.content.length < 600 && (
                      <span className="group/tooltip relative inline-flex items-center">
                        <Clock
                          size={14}
                          className="text-blue-500 dark:text-blue-400"
                        />
                        <span className="invisible absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white group-hover/tooltip:visible dark:bg-gray-800">
                          Short read
                        </span>
                      </span>
                    )}
                    {mostViewedIds.includes(post.id) && (
                      <span className="group/tooltip relative inline-flex items-center">
                        <Flame
                          size={14}
                          className="text-orange-500 dark:text-orange-400"
                        />
                        <span className="invisible absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white group-hover/tooltip:visible dark:bg-gray-800">
                          Most viewed
                        </span>
                      </span>
                    )}
                    {post.parameters.external && (
                      <span className="text-xs font-normal text-green-600 dark:text-green-400">
                        [external]
                      </span>
                    )}
                  </h2>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
