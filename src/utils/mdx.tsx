import type { MDXComponents } from 'mdx/types';
import { ComponentProps } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function getMDXComponents(): MDXComponents {
  return {
    h1: (props: ComponentProps<'h1'>) => (
      <h1
        className="my-4 text-3xl font-bold text-gray-900 dark:text-gray-200"
        {...props}
      />
    ),
    h2: (props: ComponentProps<'h2'>) => (
      <h2
        className="my-3 text-2xl font-semibold text-gray-900 dark:text-gray-200"
        {...props}
      />
    ),
    h3: (props: ComponentProps<'h3'>) => (
      <h3
        className="my-2 text-xl font-semibold text-gray-900 dark:text-gray-200"
        {...props}
      />
    ),
    h4: (props: ComponentProps<'h4'>) => (
      <h4
        className="my-1 text-lg font-medium text-gray-900 dark:text-gray-200"
        {...props}
      />
    ),
    p: (props: ComponentProps<'p'>) => (
      <p className="my-2 text-gray-600 dark:text-gray-400" {...props} />
    ),
    ul: (props: ComponentProps<'ul'>) => (
      <ul
        className="my-4 list-inside list-disc text-gray-900 dark:text-gray-100"
        {...props}
      />
    ),
    li: (props: ComponentProps<'li'>) => (
      <li className="my-1 text-gray-600 dark:text-gray-400" {...props} />
    ),
    code: (props: ComponentProps<'code'>) => (
      // @ts-expect-error Invalid type definition.
      <SyntaxHighlighter
        language={props.className?.replace(/language-/, '') ?? 'ts'}
        {...props}
        style={vscDarkPlus}
      />
    ),
    pre: (props: ComponentProps<'pre'>) => (
      <pre
        className="my-4 overflow-x-auto rounded bg-gray-900 p-2 text-white dark:bg-gray-700 dark:text-gray-200"
        {...props}
      />
    ),
    a: (props: ComponentProps<'a'>) => (
      <a
        className="text-gray-600 underline decoration-blue-600 hover:text-gray-800 hover:decoration-gray-800 dark:text-gray-400 dark:decoration-blue-400 dark:hover:text-gray-200 dark:hover:decoration-gray-200"
        {...props}
      />
    ),
    img: (props: ComponentProps<'img'>) => (
      <img className="my-4 rounded-lg shadow-lg" alt={props.alt} {...props} />
    ),
  };
}
