import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "#f2f2f2",
        duckEgg: "#b0d9c9",
        charcoal: "#36413d",
        teal: "#009393",
        sunshine: "#f3d98f",
        leafyGreen: "#889f65",
        sunset: "#f2945a",
      },
    },
  },
  plugins: [],
};
export default config;
