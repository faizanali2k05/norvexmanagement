/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#181C3B',
          50: '#ECEDF4',
          100: '#D0D2E5',
          200: '#A1A5CB',
          300: '#7278B1',
          400: '#434B97',
          500: '#181C3B',
          600: '#141832',
          700: '#101429',
          800: '#0C1020',
          900: '#080C17',
        },
        gold: {
          DEFAULT: '#F2C340',
          50: '#FEF9EC',
          100: '#FDF3D9',
          200: '#FAEAB3',
          300: '#F8E08C',
          400: '#F5D666',
          500: '#F2C340',
          600: '#EDB010',
          700: '#B8890D',
          800: '#836209',
          900: '#4E3B06',
        },
        ivory: '#F8F6EE',
        charcoal: '#1F1F1F',
        'light-gray': '#D9DDE6',
        'medium-gray': '#6E7585',
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
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
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
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
