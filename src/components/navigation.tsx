'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useRef } from 'react';

import NavLink from '@/components/navigation-item';
import NavItemMenu from '@/components/navigation-item-menu';
import NavItemTheme from '@/components/navigation-item-theme';
import { useClickOutside, useDark, useScrollVisibility } from '@/hooks';
import { navItems } from '@/structures';
import { hashKey } from '@/utils/string';

const NAV_ITEMS = navItems.length + 1;
const NAV_ITEMS_SIZE = 32;

export default function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useScrollVisibility(64, () => setIsExpanded(false));

  useClickOutside(ref, () => setIsExpanded(false));

  const [isDark, setIsDark] = useDark();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-10 flex justify-center p-4"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -64 }}
      transition={{ duration: 0.3 }}
    >
      <div ref={ref} className="pointer-events-auto">
        <motion.div
          initial={false}
          animate={{
            height: '48px',
            width:
              NAV_ITEMS_SIZE * (isExpanded ? NAV_ITEMS : 1) +
              16 +
              (NAV_ITEMS > 1 ? (NAV_ITEMS - 1) * 8 : 0),
          }}
          className="relative flex items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white/90 backdrop-blur-xl dark:border-gray-700/30 dark:bg-gray-900/90"
        >
          <div
            className="absolute inset-0 z-10 cursor-pointer"
            onClick={() => setIsExpanded(true)}
            style={{ display: isExpanded ? 'none' : 'block' }}
          />
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <NavItemMenu onClick={() => setIsExpanded(true)} />
            </motion.div>
          )}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex h-full items-center justify-between"
            >
              <motion.nav
                className="flex items-center space-x-2"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                }}
              >
                {navItems.map((item) => (
                  <NavLink
                    key={hashKey(`nav-${item.href}`)}
                    href={item.href}
                    icon={item.Icon}
                    label={item.name}
                    pathname={pathname}
                    onClick={() => setIsExpanded(false)}
                  />
                ))}
                <NavItemTheme
                  key={hashKey(`nav-theme`)}
                  isDark={isDark}
                  onClick={() => setIsDark((prev) => !prev)}
                />
              </motion.nav>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
