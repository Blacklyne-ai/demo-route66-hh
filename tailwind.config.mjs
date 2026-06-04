/** @type {import('tailwindcss').Config} */
// Route 66 Borrmann Motors KG - brand palette extracted from the original logo:
//   onyx black #0A0A0A (matt muscle-car paint, primary dark surface)
//   chrome silver #C9C9CD (logo gear, premium accents)
//   route66 red #B91C1C (Route 66 highway sign red, warm signal red)
//   warm cream #FAFAF7 (light section bodies)
// Colours are exposed as RGB triplets so Tailwind opacity modifiers work.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        onyx: {
          DEFAULT: 'rgb(var(--rgb-onyx) / <alpha-value>)',
          deep: 'rgb(var(--rgb-onyx-deep) / <alpha-value>)',
          ink: 'rgb(var(--rgb-onyx-ink) / <alpha-value>)',
          900: 'rgb(var(--rgb-onyx-900) / <alpha-value>)',
          800: 'rgb(var(--rgb-onyx-800) / <alpha-value>)',
          700: 'rgb(var(--rgb-onyx-700) / <alpha-value>)',
        },
        chrome: {
          DEFAULT: 'rgb(var(--rgb-chrome) / <alpha-value>)',
          warm: 'rgb(var(--rgb-chrome-warm) / <alpha-value>)',
          dark: 'rgb(var(--rgb-chrome-dark) / <alpha-value>)',
        },
        route: {
          DEFAULT: 'rgb(var(--rgb-route) / <alpha-value>)',
          deep: 'rgb(var(--rgb-route-deep) / <alpha-value>)',
          bright: 'rgb(var(--rgb-route-bright) / <alpha-value>)',
        },
        cream: {
          DEFAULT: 'rgb(var(--rgb-cream) / <alpha-value>)',
          warm: 'rgb(var(--rgb-cream-warm) / <alpha-value>)',
          deep: 'rgb(var(--rgb-cream-deep) / <alpha-value>)',
        },
        ink: 'rgb(var(--rgb-onyx) / <alpha-value>)',
        muted: 'rgb(var(--rgb-muted) / <alpha-value>)',
        'muted-light': 'rgb(var(--rgb-muted-light) / <alpha-value>)',
        line: 'rgb(var(--rgb-border) / <alpha-value>)',
        green: 'rgb(var(--rgb-green) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Work Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Oswald', '"Work Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '999px',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
