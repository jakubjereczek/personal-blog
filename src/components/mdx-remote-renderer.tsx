import 'server-only';

import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';

import { getMDXComponents } from '@/utils/mdx';

export default function MDXRemoteRenderer({ source }: MDXRemoteProps) {
  const components = getMDXComponents();

  return <MDXRemote source={source} components={components} />;
}
