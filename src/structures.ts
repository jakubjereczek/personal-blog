import { Home, LucideIcon, User2, Book } from 'lucide-react';
import { IconType } from 'react-icons';

interface Period {
  start: string | undefined;
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
  { name: 'Courses', href: 'courses', Icon: Book },
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

export interface Technology {
  name: string;
  Icon: IconType;
  color: string;
}

export interface Platform {
  name: string;
  Icon: IconType;
  color: string;
}

export interface Course {
  title: string;
  description: string;
  finishedAt: string;
  technologies: Technology[];
  duration: number; // minutes
  platform: Platform;
  certificateUrl: string;
  courseUrl: string;
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
  technologies: Technology[];
  location: string;
  url?: string;
  certUrl?: string;
  duration?: number;
  platform?: Platform;
}
