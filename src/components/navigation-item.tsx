import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

const NavLink = ({
  pathname,
  href,
  icon: Icon,
  onClick,
}: {
  pathname: string;
  href: string;
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      className={`rounded-full bg-gray-200 p-2 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 ${pathname === href ? 'bg-gray-300 dark:bg-gray-600' : ''} flex h-8 w-8 items-center justify-center text-gray-800 duration-200 hover:scale-110 dark:text-gray-200`}
      onClick={onClick}
    >
      <Icon size={18} />
    </Link>
  );
};

export default NavLink;
