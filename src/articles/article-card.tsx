'use client';

import { motion } from 'framer-motion';
import { Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { Article } from '@/config/structures';
import { isRecent30DaysDate } from '@/utils/time';

export default function ArticleCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={article.metadata.external || `/article/${article.slug}`}
        className="group block pb-2"
      >
        <div className="flex flex-col space-y-1">
          <time className="font-mono text-sm text-gray-500 dark:text-gray-400">
            {new Date(article.metadata.date).toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </time>
          <h2 className="flex flex-wrap items-center gap-2 text-xl font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
            <span>{article.metadata.title}</span>
            {isRecent30DaysDate(article.metadata.date) && (
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
            {article.content && article.content.length < 600 && (
              <span className="group/tooltip relative inline-flex items-center">
                <Clock size={14} className="text-blue-500 dark:text-blue-400" />
                <span className="invisible absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white group-hover/tooltip:visible dark:bg-gray-800">
                  Short read
                </span>
              </span>
            )}
            {article.metadata.external && (
              <span className="text-xs font-normal text-green-600 dark:text-green-400">
                [external]
              </span>
            )}
          </h2>
          <p className="line-clamp-2 text-gray-600 dark:text-gray-400">
            {article.metadata.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {(article.metadata.tags || []).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
