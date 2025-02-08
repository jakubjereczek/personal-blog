'client only';

import { isBrowser } from '@/utils/window';

// storage keys
export const DARK_MODE_KEY = 'dark_mode';

class StorageService {
  static get<T>(key: string): T | null {
    if (!isBrowser()) {
      return null;
    }
    const item = window.localStorage.getItem(key);
    if (!item) {
      return null;
    }
    try {
      return JSON.parse(item) as T;
    } catch (error) {
      console.error(
        `Error parsing data from localStorage for key ${key}:`,
        error,
      );
      return null;
    }
  }

  static set<T>(key: string, value: T): void {
    if (isBrowser()) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(
          `Error setting data in localStorage for key ${key}:`,
          error,
        );
      }
    }
  }

  static delete(key: string): void {
    if (isBrowser()) {
      window.localStorage.removeItem(key);
    }
  }

  static clear(): void {
    if (isBrowser()) {
      window.localStorage.clear();
    }
  }

  static exists(key: string): boolean {
    if (!isBrowser()) {
      return false;
    }
    return window.localStorage.getItem(key) !== null;
  }
}

export default StorageService;
