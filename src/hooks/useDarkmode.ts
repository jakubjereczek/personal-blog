import { useState, useEffect } from 'react';

import StorageService, { DARK_MODE_KEY } from '@/utils/storageService';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    StorageService.get<boolean>(DARK_MODE_KEY) ??
      window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    StorageService.set(DARK_MODE_KEY, darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode] as const;
};

export default useDarkMode;
