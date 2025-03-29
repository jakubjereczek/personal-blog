'use client';

import React, { useCallback, useState } from 'react';

import { Heading } from '@/components/articles/article-content';
import { hashKey } from '@/utils/string';

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>('');

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, id: string, index: number) => {
      event.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        setActiveId(id);
        window.scrollTo({
          top:
            element.getBoundingClientRect().top +
            window.scrollY -
            72 -
            (index === 0 ? 315 : 0),
          behavior: 'smooth',
        });
      }
    },
    [],
  );

  return (
    <nav>
      {headings.map((heading, index) => (
        <a
          key={hashKey(`h-${heading.id}-${index}`)}
          href={`#${heading.id}`}
          onClick={(event) => onClick(event, heading.id, index)}
          className={`block py-1 hover:underline ${heading.level === 1 ? 'font-medium' : 'font-normal'} ${activeId === heading.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'}`}
          style={{ paddingLeft: `${(heading.level - 1) * 10}px` }}
        >
          {heading.title}
        </a>
      ))}
    </nav>
  );
}
