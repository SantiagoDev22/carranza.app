import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: 
    {
      colors: {
        oc: {
          green: {
            1: '#244B5A',
            2: '#6B858F'
          },
          brown: {
            1: '#C67437'
          }
        }
      },
      backgroundImage: {
        "hero": "url(/images/website/home/hero.png)",
        "gradient-black": 'linear-gradient(0deg, #00000000 30.02%, #00224b00 189.95%)',
        "gradient-black-esp": 'linear-gradient(0deg, #00000000 30.02%, #00224b00 189.95%)'
      },
    },
  },
  plugins: [],
};
export default config;
