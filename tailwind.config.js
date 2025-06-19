// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zwart: "#181818",
        paars: "#B0AFC6",
        turquoise: "#7FC29B",
        groen: "#B5EF8A",
        geel: "#DFFF63",
        wit: "#FFFFFF",
        roze: "#FF63E5"
      },
      fontFamily: {
        'Fractul-Variable': ['fractul-variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
}