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
        grey: {
          900: "#141414",
          800: "#1F1F1F",
          700: "#333333",
        },
        green: "#C4F82A",
        white: "#FFFFFF",
      },
      fontSize: {
        preset1: [
          "24px",
          { lineHeight: "150%", letterSpacing: "0px", fontWeight: "600" },
        ], // Semibold
        preset2: [
          "14px",
          { lineHeight: "150%", letterSpacing: "0px", fontWeight: "400" },
        ], // Regular
        preset2Bold: [
          "14px",
          { lineHeight: "150%", letterSpacing: "0px", fontWeight: "700" },
        ], // Bold
      },
      spacing: {
        500: "40px",
        300: "24px",
        200: "16px",
        150: "12px",
        100: "8px",
        50: "4px",
      },
    },
  },
  plugins: [],
} satisfies Config;

