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
          DEFAULT: "#D4AF37", // Metallic Gold
          light: "#F5E6AD",
          dark: "#A68920",
          luxury: "#C5A059",
        },
        secondary: {
          DEFAULT: "#10B981", // Emerald Green
          light: "#34D399",
          dark: "#065F46",
        },
        dark: {
          DEFAULT: "#0A2540", // Deep Navy
          card: "#0D2D4D",
          elevated: "#11355A",
          border: "#1B446D",
        },
        gold: {
          50: "#FFFDF5",
          100: "#FEF9E6",
          200: "#FDF0BD",
          300: "#FCE185",
          400: "#FBD24D",
          500: "#D4AF37",
          600: "#A68920",
          700: "#786317",
          800: "#4A3D0F",
          900: "#1C1706",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        display: ["Playfair Display", "serif"],
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
