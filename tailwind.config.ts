import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#494AF8",
        dark: "#363C4F",
        "dark-gray": "#555555",
        "light-gray": "#CCCCCC",
      },
    },
  },
  plugins: [],
};
export default config;
