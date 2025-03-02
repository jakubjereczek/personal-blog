import { SiteConfig } from '@/structures';

export function getSiteConfig(): SiteConfig {
  return {
    url: 'https://jakubjereczek.com',
    name: 'jakubjereczek.com',
    description:
      'The blog covers web development topics, including front-end, full-stack, JavaScript, and more. It features practical tips, discussions on modern technologies, and insights from real-world projects. Whether you are a beginner or an experienced developer, you will find valuable guidance and inspiration.',
    author: 'Jakub Jereczek',
    keywords: [
      'web development',
      'front-end',
      'full-stack',
      'JavaScript',
      'programming',
      'developer blog',
      'web technologies',
    ],
  };
}
