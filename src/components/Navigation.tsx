'use client';

import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems } from '@/config/structures';
import { useDarkMode } from '@/hooks';

export default function Navigation() {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <nav className="fixed z-50 w-full bg-white shadow-sm dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold text-gray-900 dark:text-white"
          >
            jakubjereczek.com
          </Link>
          <ul className="flex items-center space-x-4 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`hover:text-blue-600 hover:underline dark:hover:text-blue-400 ${
                    pathname === item.href
                      ? 'text-blue-600 underline dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="rounded-full bg-gray-200 p-2 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                aria-label={darkMode ? 'Light mode' : 'Dark mode'}
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
