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
        ink: "#1B1F24",
        slate: "#5C6670",
        body: "#3E464F",
        taupe: "#878787",
        stone: "#F3F1EC",
        rule: "#D9D4CA",
        blue: "#2495D3",
        tab: "#1B7DB5",
      },
      fontFamily: {
        sans: ["Montserrat", "Arial", "sans-serif"],
        tag: ["Montserrat", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widestcustom: "0.36em",
        label: "0.25em",
        tab: "0.3em",
      },
      maxWidth: {
        site: "1440px",
      },
      padding: {
        site: "clamp(22px, 6.6vw, 96px)",
      },
    },
  },
  plugins: [],
};

export default config;
