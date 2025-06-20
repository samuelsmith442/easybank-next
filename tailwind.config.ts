import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkBlue: "hsl(233, 26%, 24%)",
          limeGreen: "hsl(136, 65%, 51%)",
          brightCyan: "hsl(192, 70%, 51%)",
        },
        neutral: {
          grayishBlue: "hsl(233, 8%, 62%)",
          lightGrayishBlue: "hsl(220, 16%, 96%)",
          veryLightGray: "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontSize: {
        body: "18px",
      },
      fontFamily: {
        sans: ["var(--font-public-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
