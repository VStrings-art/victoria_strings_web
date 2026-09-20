import type { Config } from "tailwindcss";

const config: Config = {
  // One glob over src/, so a new directory can never be missed the way
  // src/views/ was: classes used only there were silently dropped.
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "var(--font-display)",
          "Georgia",
          // Japanese, then Korean, then anything with the glyph
          "Hiragino Mincho ProN",
          "Yu Mincho",
          "Noto Serif JP",
          "Apple SD Gothic Neo",
          "Malgun Gothic",
          "Noto Serif KR",
          "serif",
        ],
        sans: [
          "var(--font-sans)",
          "system-ui",
          "Hiragino Sans",
          "Yu Gothic",
          "Noto Sans JP",
          "Apple SD Gothic Neo",
          "Malgun Gothic",
          "Noto Sans KR",
          "sans-serif",
        ],
        script: ["var(--font-script)", "cursive"],
      },
      colors: {
        ink: {
          50: "#f5f4f3",
          100: "#e7e4e1",
          200: "#cac4bd",
          300: "#a89f95",
          400: "#7c7268",
          500: "#564e46",
          600: "#3c352f",
          700: "#282320",
          800: "#1a1613",
          900: "#0e0c0b",
          950: "#070605",
        },
        gold: {
          50: "#fdf8ec",
          100: "#faedc9",
          200: "#f4dc98",
          300: "#eec66a",
          400: "#e6b247",
          500: "#c8a34d",
          600: "#a97f34",
          700: "#87612a",
          800: "#6c4c24",
          900: "#5a3f21",
        },
        cream: {
          50: "#fdfcfa",
          100: "#f8f5f0",
          200: "#f4f1ed",
          300: "#ece5da",
        },
        burgundy: {
          500: "#7b1d1b",
          600: "#5d1513",
        },
      },
      letterSpacing: {
        widest2: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
