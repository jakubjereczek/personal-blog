import { MetadataRoute } from 'next';

import {
  generateArticlesSitemap,
  generateMainSitemap,
  generateTagsSitemap,
} from '@/config/sitemap';

enum SitemapType {
  Main = 'main',
  Tags = 'tags',
  Articles = 'articles',
}

export function generateSitemaps() {
  return [
    { id: SitemapType.Main },
    { id: SitemapType.Tags },
    { id: SitemapType.Articles },
  ];
}

export default function sitemap({
  id,
}: {
  id: SitemapType;
}): MetadataRoute.Sitemap {
  switch (id) {
    case SitemapType.Main:
      return generateMainSitemap();
    case SitemapType.Tags:
      return generateTagsSitemap();
    case SitemapType.Articles:
      return generateArticlesSitemap();
    default:
      throw new Error(`Unknown sitemap type: ${id}`);
  }
}
