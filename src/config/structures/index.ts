interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: 'Blog', href: '/' },
  { name: 'About', href: '/about' },
];

export interface Article {
  id: number;
  title: string;
  date: string;
  tags: string[];
  parameters: {
    external?: string;
    views?: number;
  };
  content?: string;
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  color: string;
  description: string;
}
