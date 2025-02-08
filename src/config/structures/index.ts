interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: 'Blog', href: '/' },
  { name: 'About', href: '/about' },
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
