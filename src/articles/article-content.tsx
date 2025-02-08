'use client';

import { useEffect, useRef, useState } from 'react';

import TableOfContents from '@/articles/article-table-of-contents';

export interface Heading {
  id: string;
  title: string;
  level: number;
}

function processHeadings(elements: NodeListOf<Element>): Heading[] {
  return Array.from(elements).map((heading) => {
    const level = Number.parseInt(heading.tagName[1]);
    const title = heading.textContent || '';
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    heading.id = id;
    return { id, title, level };
  });
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
      const elements = ref.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
      setHeadings(processHeadings(elements));
    }
  }, []);

  return (
    <div className="flex flex-row">
      <article ref={ref}>{children}</article>
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
