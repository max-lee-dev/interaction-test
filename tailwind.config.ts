import type {Config} from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: "#FF3D71",
        blue: "#005FFF",
        yellow: "#ff8800",
        cyan: "#00E6E6",
        red: "#FF1F1F",
        paper: "#FFF5E9",
        green: "#379848",
      },
    },
  },
  plugins: [],
} satisfies Config;
