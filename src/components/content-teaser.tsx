'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

import { useContentOverflow } from '@/hooks';

interface ContentTeaserProps {
  children: React.ReactNode;
  maxHeight: number;
  title: string;
  description: string;
  text: string;
  link: string;
}

export default function ContentTeaser({
  children,
  maxHeight = 200,
  title,
  description,
  text,
  link,
}: ContentTeaserProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const isContentOverflow = useContentOverflow(contentRef, maxHeight);

  return (
    <div className="relative">
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isContentOverflow ? maxHeight : 'none' }}
      >
        {children}
      </div>

      {isContentOverflow && (
        <div className="relative">
          <div className="absolute bottom-0 bottom-full left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-gray-900" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-xl bg-gradient-to-b from-white to-[#5D6EE0] dark:from-gray-900 dark:to-[#4C5FD5]"
          >
            <div className="p-6 text-center">
              <h3 className="my-2 text-2xl font-bold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="mx-auto mb-8 mt-2 max-w-2xl text-gray-600 dark:text-gray-400">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href={link}
                  className="flex justify-center rounded-lg border border-white bg-white px-6 py-3 font-medium shadow-md backdrop-blur-sm transition-all hover:shadow-[0px_0px_10px_rgba(255,255,255,0.9)]"
                >
                  <span>{text}</span>
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                      ease: 'easeInOut',
                    }}
                  >
                    <ChevronRight size={24} />
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
