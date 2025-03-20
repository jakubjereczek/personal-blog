import { useState, useEffect } from 'react';

import StorageService, { DARK_MODE_KEY } from '@/utils/storage-service';
import { isDarkThemePreferred, toggleClass } from '@/utils/window';

function useDark() {
  const [isDark, setIsDark] = useState(
    StorageService.exists(DARK_MODE_KEY)
      ? !!StorageService.get(DARK_MODE_KEY)
      : isDarkThemePreferred(),
  );
  useEffect(() => {
    toggleClass('dark', isDark);
    StorageService.set(DARK_MODE_KEY, isDark);
  }, [isDark]);

  return [isDark, setIsDark] as const;
}

export default useDark;
