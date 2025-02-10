import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rose-bright": "#EA5454",
        "teal-light": "#44D3D2",
        "amber-warm": "#FCAE4A",
        "blue-soft": "#549EF2",
        "gray-cool": "#4D4F62",
        white: "#FAFAFA"
      },
    },
  },
  plugins: [],
} satisfies Config;

