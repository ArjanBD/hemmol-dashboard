/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#E8EDF5',
          100: '#C5D0E6',
          200: '#9BAED4',
          300: '#6E8BBF',
          400: '#4D70B0',
          500: '#2E57A1',
          600: '#1F4080',
          700: '#162F60',
          800: '#0D1F41',
          900: '#071428',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
