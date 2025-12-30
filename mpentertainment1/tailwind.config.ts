import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mpPink: {
          50: "#fff1f7",
          100: "#ffe4ef",
          200: "#ffc7dd",
          300: "#ff9fc3",
          400: "#ff6da2",
          500: "#ff3f82",
        },
      },
      borderRadius: {
        mp: "28px",
        mp2: "40px",
      },
      boxShadow: {
        glass: "0 18px 40px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
