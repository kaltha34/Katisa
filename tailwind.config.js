/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brass: {
          DEFAULT: '#c9a227',
          deep: '#a8841a',
          soft: 'rgba(201, 162, 39, 0.16)',
        },
        canvas: '#0b0a09',
        sand: '#f6f0e6',
        // legacy aliases used across older pages during migration
        navy: {
          DEFAULT: '#0b0a09',
          deep: '#070605',
          soft: '#1a1814',
        },
        gold: {
          DEFAULT: '#c9a227',
          dark: '#a8841a',
          soft: 'rgba(201, 162, 39, 0.16)',
        },
        ink: '#f6f0e6',
        muted: 'rgba(246, 240, 230, 0.68)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Syne', 'sans-serif'],
        sans: ['var(--font-body)', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: 'none',
        glow: 'none',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        rise: 'rise 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
