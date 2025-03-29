import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

function Tag({
  value,
  icon,
  border = true,
  active = false,
  cursor,
}: {
  value: string;
  icon?: {
    Icon: LucideIcon | IconType;
    size?: number;
    colors: string[];
  };
  border?: boolean;
  active?: boolean;
  cursor?: boolean;
}) {
  return (
    <div
      className={`m-0.5 inline-flex items-center gap-2 rounded-full ${border ? 'border px-4 py-1 shadow-sm' : 'px-1'} ${cursor ? 'cursor-pointer' : ''} h-fit bg-white text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-400 ${active ? 'border-dashed border-blue-600 dark:border-blue-400' : 'border-gray-200 dark:border-gray-700'}`}
    >
      <span>{value}</span>
      {icon && (
        <icon.Icon
          size={icon.size || 16}
          className={'text-' + icon.colors[0] + ' dark:text-' + icon.colors[1]}
        />
      )}
    </div>
  );
}

export default Tag;
