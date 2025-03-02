'use client';

import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Hint from '@/components/hint';

interface Props {
  href: string;
  label: string;
  Icon: LucideIcon;
}

export default function NavigationItem({ href, label, Icon }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`rounded-full bg-gray-200 p-2 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 ${pathname === href ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-200'} flex h-8 w-8 items-center justify-center`}
    >
      <Hint
        position="bottom"
        Icon={Icon}
        label={label}
        size={16}
        className=""
      />
    </Link>
  );
}
