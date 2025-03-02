import { Metadata } from 'next';

import { getSiteConfig } from '@/config/site';

export function getSeoMetadata(): Metadata {
  const { name, description, author, keywords, url } = getSiteConfig();

  return {
    title: name,
    description,
    authors: [{ name: author }],
    keywords,
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      url: 'https://jakubjereczek.com',
      title: name,
      description,
      siteName: name,
      images: [
        {
          url: `${url}/icons_set/og.png`,
          width: 1200,
          height: 630,
          alt: `${name} Open Graph Image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: name,
      description,
      images: `${url}/icons_set/og.png`,
    },
  };
}

export const metaIcons = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/icons_set/apple-icon-57x57.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/icons_set/apple-icon-60x60.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/icons_set/apple-icon-72x72.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/icons_set/apple-icon-76x76.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/icons_set/apple-icon-114x114.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/icons_set/apple-icon-120x120.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/icons_set/apple-icon-144x144.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/icons_set/apple-icon-152x152.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/icons_set/apple-icon-180x180.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/icons_set/android-icon-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/icons_set/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/icons_set/favicon-96x96.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/icons_set/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/icons_set/manifest.json/',
  },
];
