'use client';

import React, { useCallback, useState } from 'react';

import { Heading } from '@/articles/article-content';

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>('');

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      event.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        setActiveId(id);
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 64,
          behavior: 'smooth',
        });
      }
    },
    [],
  );

  return (
    <nav>
      {headings.map((heading) => (
        <a
          key={heading.id}
          href={`#${heading.id}`}
          onClick={(event) => onClick(event, heading.id)}
          className={`block py-1 ${heading.level === 1 ? 'font-medium' : ''} ${activeId === heading.id ? 'text-blue-600 underline dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 dark:hover:text-gray-200'}`}
          style={{ paddingLeft: `${(heading.level - 1) * 10}px` }}
        >
          {heading.title}
        </a>
      ))}
    </nav>
  );
}
