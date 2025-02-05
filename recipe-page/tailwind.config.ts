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
        rose: {
          800: "#7A284E",
          50: "#FFF7FB",
        },
        stone: {
          900: "#312E2C",
          600: "#5F564D",
          150: "#E3DDD7",
          100: "#F3E5D7",
        },
        brown: {
          800: "#854632",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        youngSerif: ["var(--font-young-serif)", "serif"],
      },
      fontSize: {
        preset1: [
          "36px",
          { lineHeight: "100%", letterSpacing: "0px", fontWeight: "400" },
        ],
        preset2: [
          "28px",
          { lineHeight: "100%", letterSpacing: "0px", fontWeight: "400" },
        ],
        preset3: [
          "20px",
          { lineHeight: "100%", letterSpacing: "0px", fontWeight: "600" },
        ],
        preset4: [
          "16px",
          { lineHeight: "150%", letterSpacing: "0px", fontWeight: "400" },
        ],
        preset4Bold: [
          "16px",
          { lineHeight: "150%", letterSpacing: "0px", fontWeight: "700" },
        ],
      },
      spacing: {
        1600: "128px",
        600: "48px",
        500: "40px",
        400: "32px",
        300: "24px",
        200: "16px",
        150: "12px",
        100: "8px",
      },
    },
  },
  plugins: [],
} satisfies Config;

