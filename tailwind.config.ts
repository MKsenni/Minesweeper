import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto Mono', 'monospace', 'sans-serif'],
      serif: ['Roboto Mono', 'monospace', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
