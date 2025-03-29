import { Moon, Sun } from 'lucide-react';
import React from 'react';

const NavItemTheme = ({
  isDark,
  onClick,
}: {
  isDark: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 p-2 text-gray-800 duration-200 hover:scale-110 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default NavItemTheme;
