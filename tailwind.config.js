/** @type {import('tailwindcss').Config} */
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
        "logo-shade1": "#19b44a",
        "logo-shade2": "#1b643a",
        "logo-shade3": "#6eb08a",
        "logo-shade4": "#4b9d6c",
        "logo-shade5": "#89d6ad",
      },
    },
  },
  plugins: [],
};
