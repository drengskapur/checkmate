/** @type {import("tailwindcss").Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,svelte,ts}'],
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
  plugins: []
}
