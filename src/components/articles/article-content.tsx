'use client';

import { useEffect, useRef, useState } from 'react';

import TableOfContents from '@/components/articles/article-table-of-contents';

export interface Heading {
  id: string;
  title: string;
  level: number;
}

export default function ArticleContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    if (ref.current) {
      setHeadings(
        Array.from(ref.current.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(
          (heading) => {
            const level = Number.parseInt(heading.tagName[1]);
            const title = heading.textContent || '';
            const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            heading.id = id;
            return { id, title, level };
          },
        ),
      );
    }
  }, []);

  return (
    <div className="flex flex-row">
      <article className="min-w-0 flex-grow overflow-x-auto" ref={ref}>
        {children}
      </article>
      <aside className="relative ml-8 hidden w-64 shrink-0 lg:block">
        <div className="sticky top-24">
          <h2 className="my-4 text-xl font-semibold text-gray-900 dark:text-white">
            Table of Contents
          </h2>
          <TableOfContents headings={headings} />
        </div>
      </aside>
    </div>
  );
}
