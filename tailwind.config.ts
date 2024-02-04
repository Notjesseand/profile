import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // Define your custom font families here
        custom: [
          "Poppins", // Use "Poppins" for the custom font family
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        montserrat: [
          "Montserrat", // Use "Montserrat" for the Montserrat font family
          "Poppins",
          "sans-serif",
        ],
        display: [
          "Darumadrop One", // Use "Darumadrop One" for the display font family
          "sans-serif",
        ],
        satisfy: [
          "Satisfy", // Use "Satisfy" for the Satisfy font family
          "cursive",
        ],
        script: [
          "Bad Script", // Use "Bad Script" for the Bad Script font family
          "cursive",
        ],
      },
    },
  },
  plugins: [],
};
export default config
