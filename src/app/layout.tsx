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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons_set/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons_set/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons_set/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons_set/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons_set/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons_set/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons_set/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons_set/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons_set/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons_set/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons_set/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons_set/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons_set/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons_set/manifest.json/" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/icons_set/ms-icon-144x144.png"
        />
      </head>
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
