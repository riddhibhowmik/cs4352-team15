/** @type {import('tailwindcss').Config} */
// colors and fonts point at the css variables in src/styles/theme.css
// so changing a value there updates the whole app
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--bt-brand)',
          mid: 'var(--bt-brand-mid)',
          dark: 'var(--bt-brand-dark)',
          soft: 'var(--bt-brand-soft)',
          tint: 'var(--bt-brand-tint)',
        },
        ink: {
          DEFAULT: 'var(--bt-ink)',
          muted: 'var(--bt-ink-muted)',
        },
        line: 'var(--bt-line)',
        surface: 'var(--bt-surface)',
        canvas: 'var(--bt-canvas)',
        nav: 'var(--bt-nav)',
        danger: {
          DEFAULT: 'var(--bt-danger)',
          tint: 'var(--bt-danger-tint)',
        },
        caution: 'var(--bt-caution)',
        info: 'var(--bt-info)',
        teal: 'var(--bt-teal)',
        mauve: 'var(--bt-mauve)',
      },
      fontFamily: {
        heading: 'var(--bt-font-heading)',
        body: 'var(--bt-font-body)',
      },
    },
  },
  plugins: [],
}
