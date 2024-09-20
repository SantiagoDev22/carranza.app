import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
      '2xl': '1400px'    
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // < 540px
        md: '7.125rem', // 540px
        lg: '8.5rem', // 720px
        xl: '7.5rem', // 960px
        '2xl': '8.125rem' // 1140px
      }
    },
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
          },
          white: {
            1: '#F3F3F3'
          }
        }
      },
      backgroundImage: {
        "hero": "url(/images/website/home/hero.png)",
        "gradient-black": 'linear-gradient(0deg, #00000000 30.02%, #00224b00 189.95%)',
        "gradient-black-esp": 'linear-gradient(0deg, #0000006b 30.02%, #00224b00 189.95%)',
        "hero-blog": "url(/images/website/blog/hero.png)",
        "hero-funciona": "url(/images/website/funciona/background.png)"
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
