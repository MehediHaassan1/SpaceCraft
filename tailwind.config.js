/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brandPrimary": "#36453B",
        "brandSecondary": "#596869",
        "baseColor": "#515751",
        "commonColor": "#F5F9E9",
        "baseColorLight": "#C2C1A5",
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

