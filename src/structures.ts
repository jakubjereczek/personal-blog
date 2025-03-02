interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: 'Blog', href: '/' },
  { name: 'About me', href: '/about' },
];

export type ArticleMetadata = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  external?: string;
};

export type Article = {
  metadata: ArticleMetadata;
  content: string;
  slug: string;
};

export interface Experience {
  period: string;
  company: string;
  role: string;
  color: string;
  description: string;
}

export interface SiteConfig {
  url: string;
  name: string;
  description: string;
  author: string;
  keywords: string[];
}
