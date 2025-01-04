/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#22c55e", // Light green
          dark: "#023020", // Dark green
          Color: "#f9fafb"
        }
      },
    },
  },
  plugins: [],
};
