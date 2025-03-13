'use client';

import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import NavigationItem from '@/components/navigation-item';
import { useDarkMode } from '@/hooks';
import { navItems } from '@/structures';
import { hashKey } from '@/utils/string';

export default function Navigation() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <nav className="fixed left-1/2 top-4 z-50 mx-auto w-full max-w-md -translate-x-1/2 rounded-3xl bg-black/5 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex h-12 items-center justify-between">
          <div>
            <Link
              href="/"
              className="group flex items-center gap-2 text-xl font-semibold"
            >
              <div className="relative h-9 w-9">
                <Image
                  src={`/icons_set/logo_mono_white.svg`}
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
                className="flex h-8 w-8 items-center justify-center text-gray-200"
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
