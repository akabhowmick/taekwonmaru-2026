/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a0f1e',
          mid: '#0f1929',
          light: '#162033',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c96a',
          dim: '#7a6030',
        },
        martial: {
          red: '#c0392b',
          'red-bright': '#e74c3c',
        },
        muted: '#8a94a8',
        border: 'rgba(201, 168, 76, 0.15)',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'marquee': 'marquee 22s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
