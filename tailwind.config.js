/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#12141d",
        secondary: "#ff8e5e",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        pageLoad: {
          '0%': { top: '0', },
          '33%': { top: '0', },
          '100%': { top: '-150%', },
        },
        pageLoadImage: {
          '0%': { opacity: 0, top: '2rem' },
          '80%': { opacity: 1, top: '-0.4rem' },
          '100%': { top: '1' }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'page-load': 'pageLoad 3s ease-in-out forwards',
        'page-load-image': 'pageLoadImage .8s ease-in-out forwards'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}