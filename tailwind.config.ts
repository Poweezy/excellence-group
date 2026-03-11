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
          luxury: "#c5a059",
        },
        dark: {
          DEFAULT: "#05070a",
          card: "#0a0c10",
          elevated: "#0f1218",
          border: "#1a1e26",
        },
        gold: {
          50: "#fff9e6",
          100: "#ffefbf",
          200: "#ffe080",
          300: "#ffd140",
          400: "#ffc200",
          500: "#d4af35",
          600: "#a88920",
          700: "#7d6618",
          800: "#524310",
          900: "#272108",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
        display: ["Cormorant Garamond", "serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, rgba(5, 7, 10, 0.4), rgba(5, 7, 10, 0.9)), url('/assets/marble-gold-bg.png')",
        "marble-luxury": "url('/assets/marble-gold-bg.png')",
        "gold-metallic": "linear-gradient(135deg, #a88920 0%, #d4af35 50%, #e8cc6a 100%)",
        "radial-luxury": "radial-gradient(circle at center, rgba(212, 175, 53, 0.15) 0%, transparent 70%)",
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
