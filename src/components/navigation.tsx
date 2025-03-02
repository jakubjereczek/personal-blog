'use client';

import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import NavigationItem from '@/components/navigation-item';
import { getSiteConfig } from '@/config/site';
import { useDarkMode } from '@/hooks';
import { navItems } from '@/structures';
import { hashKey } from '@/utils/string';

export default function Navigation() {
  const { name } = getSiteConfig();
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
          <ul className="flex items-center gap-x-2">
            {navItems.map((item) => (
              <li key={hashKey(`nav-${item.href}`)}>
                <NavigationItem
                  href={item.href}
                  label={item.name}
                  Icon={item.Icon}
                />
              </li>
            ))}
            <li key="nav-darkmode">
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="flex h-8 w-8 items-center justify-center text-gray-800 dark:text-gray-200"
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
