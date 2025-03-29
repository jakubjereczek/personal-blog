import { Menu } from 'lucide-react';

const NavItemMenu = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="rounded-full p-2 text-gray-700 transition-all transition-transform duration-200 hover:scale-110 hover:bg-gray-100 dark:text-white dark:hover:bg-white/10"
      onClick={onClick}
    >
      <Menu size={18} />
    </button>
  );
};

export default NavItemMenu;
