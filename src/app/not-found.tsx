import { LightbulbOff } from 'lucide-react';

import MainContentWrapper from '@/components/main-content-wrapper';

export default function NotFound() {
  return (
    <MainContentWrapper pt={24}>
      <div className="flex flex-col items-center pt-12 text-center">
        <LightbulbOff className="h-24 w-24 text-gray-800 dark:text-gray-200" />
        <h2 className="mt-8 text-2xl font-extrabold text-gray-900 dark:text-gray-200">
          Could not find requested resource!
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
    </MainContentWrapper>
  );
}

// ...
