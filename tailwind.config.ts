import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: '#4F46E5', light: '#00C2FF', dark: '#030014', surface: '#0A0A2A'
        }
      },
      fontFamily: {
        display: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
