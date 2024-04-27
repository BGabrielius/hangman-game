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
        lg: '1110px',
        sm: '505px',
      },
      animation: {
        'ping-once': 'ping 1s linear 1',
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
        's-util-play': '0 8px 0 7px #9D2DF5, 0 12px 0 11px #243041',
        's-util-lg': '0 5px 0 6px rgba(157, 45, 245, 0.75)',
        's-util-sm': '0 4px 0 1px rgba(157, 45, 245, 0.75)',
        's-transparent':
          '0 -3px 0px 3px rgba(60, 116, 255, 0.5), 0 -1px 0 6px rgba(20, 14, 102, 0.75)',
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
