import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#F4D04E",
        gray: {
          950: "#111111",
          500: "#6B6B6B",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      fontSize: {
        preset1: [
          "24px",
          { lineHeight: "150%", letterSpacing: "0px", fontWeight: "800" },
        ],
        preset2: [
          "16px",
          { lineHeight: "150%", letterSpacing: "0px", fontWeight: "500" },
        ],
        preset3: [
          "14px",
          { lineHeight: "150%", letterSpacing: "0px", fontWeight: "500" },
        ], 
        preset3Bold: [
          "14px",
          { lineHeight: "150%", letterSpacing: "0px", fontWeight: "800" },
        ], 
      },
      spacing: {
        300: "24px",
        150: "12px",
        100: "8px",
        50: "4px",
      },
    },
  },
  plugins: [],
} satisfies Config;

