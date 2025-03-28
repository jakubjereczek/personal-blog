import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'tw-gradient-hero-dark':
          'linear-gradient(to top, rgba(17, 24, 39, 1) 0%, rgba(17, 24, 39, 0.95) 10%, rgba(17, 24, 39, 0.85) 20%, rgba(17, 24, 39, 0.75) 30%, rgba(17, 24, 39, 0.6) 40%, rgba(17, 24, 39, 0.45) 50%, rgba(17, 24, 39, 0.3) 60%, rgba(17, 24, 39, 0.15) 75%, rgba(17, 24, 39, 0) 100%)',
        'tw-gradient-hero-light':
          'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 10%, rgba(255, 255, 255, 0.85) 20%, rgba(255, 255, 255, 0.75) 30%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0.45) 50%, rgba(255, 255, 255, 0.3) 60%, rgba(255, 255, 255, 0.15) 75%, rgba(255, 255, 255, 0) 100%)',
      },
    },
  },
  safelist: [
    {
      pattern: /text-\w{1,}/,
    },
  ],
  plugins: [],
  darkMode: 'class',
} satisfies Config;
