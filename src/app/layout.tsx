import { Metadata, Viewport } from 'next';

import './global.css';
import Navigation from '@/components/navigation/navigation';
import { getSeoMetadata, metaTags } from '@/config/seo';
import { hashKey } from '@/utils/string';

export const metadata: Metadata = getSeoMetadata();

export const viewport: Viewport = { themeColor: '#111827' };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {metaTags.map((props, index) => (
          <link key={hashKey(`${props.rel}${index}`)} {...props} />
        ))}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/icons_set/ms-icon-144x144.png"
        />
      </head>
      <body>
        <div className="flex min-h-screen flex-col bg-white selection:bg-blue-600 selection:text-blue-100 dark:bg-gray-900 dark:selection:bg-blue-400">
          <Navigation />
          {children}
          <footer className="bg-gray-100 dark:bg-gray-800">
            <div className="mx-auto max-w-4xl px-4 py-4 text-center text-gray-600 dark:text-gray-400">
              <p>&copy; All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
