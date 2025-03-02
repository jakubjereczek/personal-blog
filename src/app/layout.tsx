import { Metadata, Viewport } from 'next';

import './global.css';
import Navigation from '@/components/navigation';
import { getBuildTimeString } from '@/config/build';
import { getSeoMetadata, metaIcons } from '@/config/seo';
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
        {metaIcons.map((props, index) => (
          <link
            key={hashKey(`${props.rel}${props.sizes}${index}`)}
            {...props}
          />
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
          <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 pt-24">
            {children}
          </main>
          <footer className="bg-gray-100 dark:bg-gray-800">
            <div className="mx-auto max-w-4xl px-4 py-6 text-center text-gray-600 dark:text-gray-400">
              <p>&copy; All rights reserved. {getBuildTimeString()}</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
