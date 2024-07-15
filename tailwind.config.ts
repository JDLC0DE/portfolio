import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "pastel-sky": "linear-gradient(135deg, #60a5fa 0%, #4ade80 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
