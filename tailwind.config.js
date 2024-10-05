/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,svelte,ts}'], 
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)', 
        background: 'var(--background-color)', 
        text: 'var(--text-color)', 
        card: 'var(--card-background)', 
        border: 'var(--border-color)', 
      },
      // Consider adding more theme customizations here as needed:
      // fontFamily: {},
      // fontSize: {},
      // spacing: {}, 
      // borderRadius: {}, 
      // etc.
    },
  },
  plugins: [], // You can add Tailwind plugins here if you need them later 
};