/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'crema': '#FFF0C9',
        'marino': '#11111F',
        'rosapastel': '#F57EB6',
        'morado':'#471F41',
        'verde':'#A5D6A7'
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
     },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
