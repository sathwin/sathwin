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
        // Clean dark theme
        navy: "#0a0a0a",
        surface: "#111111",
        panel: "#1a1a1a",
        border: "#262626",
        "border-light": "#1f1f1f",

        // Warm gradient accent colors
        "accent-orange": "#ff6b35",
        "accent-amber": "#f7931e",
        "accent-yellow": "#ffd166",
        "accent-mint": "#06ffa5",
        "accent-teal": "#14b8a6",

        // Text colors
        "text-primary": "#ffffff",
        "text-secondary": "#a3a3a3",
        "text-tertiary": "#737373",
        "text-muted": "#525252",
        "text-faint": "#404040",
      },
      fontFamily: {
        display: ["'Inter'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "Menlo", "monospace"],
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

