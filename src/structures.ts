import { Home, LucideIcon, User2 } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  Icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { name: 'Blog', href: '/', Icon: Home },
  { name: 'About me', href: '/about', Icon: User2 },
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
  hero: {
    description: string;
  };
}
