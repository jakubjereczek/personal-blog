import 'server-only';

import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';

import { getMDXComponents } from '@/articles/get-mdx-component';

export default function MDXRemoteRenderer({ source }: MDXRemoteProps) {
  const components = getMDXComponents();

  return <MDXRemote source={source} components={components} />;
}
