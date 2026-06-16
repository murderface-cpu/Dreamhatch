/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "rgb(248 240 226)",
        ink: "rgb(45 33 25)",
        sun: "rgb(219 168 64)",
        terracotta: {
          DEFAULT: "rgb(192 86 51)",
          deep: "rgb(165 70 41)",
        },
        forest: {
          DEFAULT: "rgb(64 110 92)",
          deep: "rgb(48 84 70)",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        elegant: "0 30px 60px -20px rgba(45, 33, 25, 0.35)",
        warm: "0 20px 50px -15px rgba(192, 86, 51, 0.45)",
      },
      borderRadius: {
        sm: "0.5rem",
        DEFAULT: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
