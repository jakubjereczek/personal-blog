import { LucideIcon } from 'lucide-react';

interface Props {
  position: 'top' | 'bottom';
  label: string;
  size: number;
  Icon?: LucideIcon;
  Component?: React.ReactElement;
  className?: string;
}

export default function Hint({
  position,
  label,
  Icon,
  Component,
  size,
  className = 'text-blue-500 dark:text-blue-400',
}: Props) {
  if (!Component && !Icon) {
    return null;
  }

  return (
    <span className="group/tooltip relative inline-flex items-center">
      {Component ?? (Icon && <Icon size={size} className={className} />)}
      <span
        className={`invisible absolute ${position === 'top' ? '-top-8' : 'top-8'} left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white group-hover/tooltip:visible dark:bg-gray-800`}
      >
        {label}
      </span>
    </span>
  );
}
