'use client';

import { motion } from 'framer-motion';
import { Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import Hint from '@/components/hint';
import { Article } from '@/structures';
import { hashKey } from '@/utils/string';
import { isRecent30DaysDate } from '@/utils/time';

export default function ArticleCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 + 0.2 }}
    >
      <Link
        href={article.metadata.external || `/article/${article.slug}`}
        className="group block pb-2"
        rel={article.metadata.external ? 'nofollow' : 'dofollow'}
      >
        <div className="flex flex-col space-y-1">
          <time className="font-mono text-sm text-gray-500 dark:text-gray-400">
            {new Date(article.metadata.date).toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </time>
          <h2 className="block flex flex-wrap items-center gap-2 text-xl font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
            <span>{article.metadata.title}</span>
            {isRecent30DaysDate(article.metadata.date) && (
              <Hint
                position="top"
                label="New"
                size={14}
                Icon={Sparkles}
                className="text-green-500 dark:text-green-400"
              />
            )}
            {article.content && article.content.length < 6000 && (
              <Hint position="top" label="Short read" size={14} Icon={Clock} />
            )}
            {article.metadata.external && (
              <Hint
                position="top"
                label="Available on external platform"
                size={14}
                Component={
                  <span className="text-xs font-normal text-green-600 dark:text-green-400">
                    [external]
                  </span>
                }
              />
            )}
          </h2>
          <div className="flex flex-wrap gap-2 py-2">
            {(article.metadata.tags || []).map((tag, index) => (
              <Link href={`/tag/${tag}`} key={hashKey(`tag-${tag}-${index}`)}>
                <span className="inline-flex rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                  {tag}
                </span>
              </Link>
            ))}
          </div>
          <p className="line-clamp-3 text-gray-600 dark:text-gray-400">
            {article.metadata.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
