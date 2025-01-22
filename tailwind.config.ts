import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#f5f5f5",
        ancent: "#e0e7ff",
        primaryText: "#1f2937",
        secondaryText: "#4b5563",
        textBgPurple: "#dbeafe",
      },
      borderRadius: {
        lg: "10px",
        md: "7px",
        sm: "5px",
      },
    },
  },
  plugins: [],
} satisfies Config;
