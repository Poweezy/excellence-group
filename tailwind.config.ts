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
        primary: {
          DEFAULT: "#d4af35",
          light: "#e8cc6a",
          dark: "#a88920",
        },
        dark: {
          DEFAULT: "#0a0f1e",
          card: "#101729",
          elevated: "#161f35",
          border: "#1e2d4d",
        },
        slate: {
          850: "#13203a",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0a0f1e 0%, #0d1a3a 50%, #0a1628 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(212,175,53,0.05) 0%, rgba(16,23,41,0) 100%)",
        "gold-gradient": "linear-gradient(90deg, #a88920 0%, #d4af35 50%, #e8cc6a 100%)",
        "radial-glow": "radial-gradient(ellipse at center, rgba(212, 175, 53, 0.08) 0%, transparent 70%)",
      },
      boxShadow: {
        "gold-sm": "0 0 12px rgba(212, 175, 53, 0.15)",
        "gold-md": "0 0 24px rgba(212, 175, 53, 0.2)",
        "gold-lg": "0 0 40px rgba(212, 175, 53, 0.25)",
        "card": "0 4px 30px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 50px rgba(0, 0, 0, 0.6)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 12px rgba(212, 175, 53, 0.15)" },
          "50%": { boxShadow: "0 0 30px rgba(212, 175, 53, 0.4)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
