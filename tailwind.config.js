/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        "big":"48rem"
      },
      screens: {
        "sm": "480px"
      },
      // colors: {
      //   gray: {
      //     400 : '#969798',
      //     500 : '#666666',
      //     700 : '#353535',
      //     800 : '#262626',
      //     900 : '#171818',
      //   }
      // }
    },
  },
  plugins: [],
}
