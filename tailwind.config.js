/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4169E1",
        secondary: "#FAFAFA",
      },
      backgroundImage: "url('/src/assets/bg.png')",
    },
    boxShadow: {
      up: "0 -3px 20px rgba(0, 0, 0, 0.05)", // Customize the shadow as needed
      down: "0 3px 20px rgba(0, 0, 0, 0.05)",
    },
  },
  plugins: [],
};
