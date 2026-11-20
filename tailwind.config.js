/** @type {import('tailwindcss').Config} */

// Theme colors are CSS variables (see styles/globals.css) so light/dark mode is
// a single class swap on <html> rather than dark: variants on every element.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        ink: token("ink"),
        muted: token("muted"),
        line: token("line"),
        accent: token("accent"),
        "accent-ink": token("accent-ink"),
        sun: token("sun"),
        "logo-shade1": "#19b44a",
        "logo-shade2": "#1b643a",
        "logo-shade3": "#6eb08a",
        "logo-shade4": "#4b9d6c",
        "logo-shade5": "#89d6ad",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        site: "1400px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "spin-slow": "spin 18s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
