import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: "#1F314F",
          500: "#68778D",
          300: "#D5E1EF",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        preset1: ["22px", { lineHeight: "120%", letterSpacing: "0px", fontWeight: "700" }],
        preset2: ["15px", { lineHeight: "140%", letterSpacing: "0.2px", fontWeight: "400" }],
      },
      spacing: {
        500: "40px",
        300: "24px",
        200: "16px",
      },
    },
  },
  plugins: [],
} satisfies Config;

