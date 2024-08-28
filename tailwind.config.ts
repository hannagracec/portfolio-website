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
        "off-white": "#EBEBEB",
        "black-ish": "#222222",
        "deep-blue": "#383E79",
      },
      screens: {
        'ms': '970px',
      },
    },
  },
  plugins: [],
};
export default config;
