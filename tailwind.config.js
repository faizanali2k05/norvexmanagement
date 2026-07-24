/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    borderRadius: {
      'none': '0px',
      'sm': '0px',
      DEFAULT: '0px',
      'md': '0px',
      'lg': '0px',
      'xl': '0px',
      '2xl': '0px',
      '3xl': '0px',
      'full': '0px',
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F172A',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        gold: {
          DEFAULT: '#EBA700',
          50: '#FDF8E6',
          100: '#FAEFCC',
          200: '#F5DE99',
          300: '#EFCD66',
          400: '#EABB33',
          500: '#EBA700',
          600: '#CC8E00',
          700: '#996A00',
          800: '#664700',
          900: '#332300',
        },
        ivory: '#F8F6EE',
        charcoal: '#1F1F1F',
        'light-gray': '#D9DDE6',
        'medium-gray': '#6E7585',
      },
      fontFamily: {
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
        display: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.15' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      boxShadow: {
        card: '0 4px 24px rgba(24,28,59,0.07)',
        'card-hover': '0 12px 40px rgba(24,28,59,0.13)',
        gold: '0 4px 24px rgba(242,195,64,0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'count-up': 'countUp 2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
