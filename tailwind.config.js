/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090a0f',
        charcoal: {
          950: '#07080b',
          900: '#0c0e14',
          850: '#11141c',
          800: '#161a24',
          700: '#212736',
          600: '#323a4e',
        },
        saffron: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          glow: '#ff6a00',
        },
        lime: {
          accent: '#84cc16',
          glow: '#a3e635',
        },
        cream: {
          50: '#fdfbf7',
          100: '#f8f5ee',
          200: '#eee8dc',
          300: '#ded4c1',
          400: '#9e9687',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.15) 0%, rgba(132, 204, 22, 0.05) 45%, transparent 70%)',
        'subtle-grid': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
