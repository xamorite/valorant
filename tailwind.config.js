/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "val-dark": "#0f1923",
        "val-darker": "#0b141c",
        "val-red": "#ff4655",
        "val-white": "#ece8e1",
        "val-grey": "#7e7e7e",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
