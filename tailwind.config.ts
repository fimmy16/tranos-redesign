import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tranos-blue": "#003087",
        "tranos-navy": "#001C49",
        "tranos-steel": "#7A9AC0",
        "tranos-slate": "#D0DAEA",
        "tranos-graphite": "#727376",
        "tranos-gold": "#F4A520",
        "tranos-black": "#000000",
      },
      backgroundImage: {
        "tranos-gradient":
          "linear-gradient(135deg, #001C49 0%, #003087 100%)",
        "tranos-gradient-radial":
          "radial-gradient(circle at top right, #003087 0%, #001C49 70%)",
      },
      fontFamily: {
        kuro: ["Kuro", "Arial", "sans-serif"],
        "kuro-bold": ["Kuro Bold", "Arial Bold", "sans-serif"],
      },
      fontSize: {
        "display-h1": ["4rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-h2": ["2.625rem", { lineHeight: "1.15", fontWeight: "700" }],
        "display-h3": ["2rem", { lineHeight: "1.2", fontWeight: "600" }],
      },
      spacing: {
        gutter: "5%",
        "gutter-lg": "6%",
      },
    },
  },
  plugins: [],
};

export default config;
