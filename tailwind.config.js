/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a0a0a',
          deep: '#050505',
          soft: '#141414',
        },
        gold: {
          DEFAULT: '#d1aa6b',
          dark: '#b8923a',
          soft: 'rgba(209, 170, 107, 0.15)',
        },
        ink: '#f5f5f5',
        muted: 'rgba(255,255,255,0.65)',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(0, 0, 0, 0.45)',
        glow: '0 0 40px rgba(209, 170, 107, 0.28)',
      },
      backgroundImage: {
        'grid-navy':
          'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
        'hero-glow':
          'linear-gradient(120deg, rgba(209,170,107,0.18), transparent 40%, rgba(255,255,255,0.04))',
      },
      backgroundSize: {
        grid: '28px 28px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
        rise: 'rise 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
