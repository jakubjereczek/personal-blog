import { useState, useEffect } from 'react';

import StorageService, { DARK_MODE_KEY } from '@/utils/storage-service';
import { isDarkThemePreferred, toggleClass } from '@/utils/window';

function useDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(
    StorageService.get<boolean>(DARK_MODE_KEY) || isDarkThemePreferred(),
  );

  useEffect(() => {
    toggleClass('dark', darkMode);
    StorageService.set(DARK_MODE_KEY, darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode] as const;
}

export default useDarkMode;
