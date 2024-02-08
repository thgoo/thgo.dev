import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mirage: {
          '50': '#f6f6f9',
          '100': '#ececf2',
          '200': '#d4d5e3',
          '300': '#aeb1cb',
          '400': '#8287ae',
          '500': '#626695',
          '600': '#4e517b',
          '700': '#404164',
          '800': '#373855',
          '900': '#323348',
          '950': '#181823',
          '1000': '#141419',
        },
      },
    },
  },
  plugins: [],
};
export default config;
