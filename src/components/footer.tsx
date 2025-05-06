export default function Footer() {
  return (
    <div className="relative overflow-hidden">
      <div className="text-gray-100 dark:text-gray-800">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="currentColor"
          className="min-w-[1280px]"
        >
          <path
            d="M0,0 
             C480,100 960,-50 1440,50 
             L1440,150 L0,150 Z"
            fill="inherit"
          />
        </svg>
        <div className="absolute inset-0 flex items-end justify-center pb-4 text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 / jakubjereczek.com. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
