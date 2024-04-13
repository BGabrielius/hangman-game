import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
        sm: '450px',
      },
      colors: {
        'c-darknavy': '#261676',
        'c-blue': '#2463ff',
        'gradient-pink': '#FE71FE',
        'gradient-blue': '#7199FF',
        'gradient-lightblue': '#344ABA',
        'gradient-darkblue': '#001479',
        'gradient-text': '#67B6FF',
      },
      fontFamily: {
        sans: ['var(--font-memoirs)'],
      },
      boxShadow: {
        's-primary': '0 -3px 0px 3px #3C74FF, 0 -1px 0 6px #140e66',
        's-secondary': '0 -3px 0px 3px #C642FB, 0 -1px 0 6px #140e66',
      },
    },
    fontSize: {
      'f-heading-xl': '136px',
      'f-heading-l': '88px',
      'f-heading-m': '48px',
      'f-heading-s': '32px',
      'f-body': '26px',
    },
  },
  plugins: [],
};
export default config;
