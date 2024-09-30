/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,css}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        background: 'var(--background-color)',
        text: 'var(--text-color)',
        card: 'var(--card-background)',
        border: 'var(--border-color)'
      }
    }
  },
  plugins: [],
  safelist: []
}
