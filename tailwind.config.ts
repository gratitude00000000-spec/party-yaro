import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E8001C',
          50: '#FFF0F1',
          100: '#FFD6DA',
          200: '#FFB3BB',
          300: '#FF808C',
          400: '#FF3D50',
          500: '#E8001C',
          600: '#C50018',
          700: '#A30014',
          800: '#7A000F',
          900: '#52000A',
        },
        party: {
          gold: '#C9A84C',
          dark: '#1A1A1A',
          gray: '#6B7280',
          light: '#F9FAFB',
        },
        line: {
          DEFAULT: '#06C755',
          dark: '#05A847',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto)', 'Noto Sans JP', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #3D0009 100%)',
        'card-gradient': 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%)',
      },
      animation: {
        'pulse-line': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
