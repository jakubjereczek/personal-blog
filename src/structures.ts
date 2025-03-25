import { Home, LucideIcon, User2 } from 'lucide-react';

interface Period {
  start: string;
  finished: string;
}
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
  period: Period;
  company: string;
  companyUrl: string;
  location: string;
  role: string;
  description: string;
  highlights: string[];
}

export interface Education {
  period: Period;
  title: string;
  university: string;
  location: string;
  highlights: string[];
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

export interface TimelineItem {
  period: Period;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  location: string;
  url: string | undefined;
}
