import { Metadata, Viewport } from 'next';

import './global.css';
import Footer from '@/components/footer';
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
          <Footer />
        </div>
      </body>
    </html>
  );
}
