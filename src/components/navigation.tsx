'use client';

import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { getSiteConfig } from '@/config/site';
import { useDarkMode } from '@/hooks';
import { navItems } from '@/structures';

export default function Navigation() {
  const { name } = getSiteConfig();
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <nav className="fixed z-50 w-full bg-opacity-80 shadow-sm backdrop-blur-sm dark:bg-opacity-80">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div>
            <Link
              href="/"
              className="group flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white"
            >
              <div className="relative h-9 w-9">
                <Image
                  src={`/icons_set/${darkMode ? 'logo_mono_white.svg' : 'logo_mono.svg'}`}
                  width={36}
                  height={36}
                  alt="Logo"
                  className="absolute"
                />
                <Image
                  src={`/icons_set/bulb.svg`}
                  width={36}
                  height={36}
                  alt="Logo Hover"
                  className="absolute opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                />
              </div>
              <span className="hidden md:block">{name}</span>
            </Link>
          </div>
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
