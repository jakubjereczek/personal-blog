import { Metadata } from 'next';

import './global.css';
import Navigation from '@/components/navigation';

export const metadata: Metadata = {
  title: 'jakubjereczek.com',
  description:
    'The blog covers web development topics, including front-end, full-stack, JavaScript, and more. It features practical tips, discussions on modern technologies, and insights from real-world projects. Whether you are a beginner or an experienced developer, you will find valuable guidance and inspiration.',
  authors: [{ name: 'Jakub Jereczek' }],
  keywords: [
    'web development',
    'front-end',
    'full-stack',
    'JavaScript',
    'programming',
    'developer blog',
    'web technologies',
  ],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://jakubjereczek.com',
    title: 'jakubjereczek.com',
    description:
      'The blog covers web development topics, including front-end, full-stack, JavaScript, and more. It features practical tips, discussions on modern technologies, and insights from real-world projects. Whether you are a beginner or an experienced developer, you will find valuable guidance and inspiration.',
    siteName: 'jakubjereczek.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="flex min-h-screen flex-col bg-white selection:bg-blue-600 selection:text-blue-100 dark:bg-gray-900 dark:selection:bg-blue-400">
          <Navigation />
          <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 pt-24">
            {children}
          </main>
          <footer className="bg-gray-100 dark:bg-gray-800">
            <div className="mx-auto max-w-4xl px-4 py-6 text-center text-gray-600 dark:text-gray-400">
              <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
