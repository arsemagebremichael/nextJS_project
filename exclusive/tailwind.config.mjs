/** @type {import('tailwindcss').Config} */
export default {

    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontSize:{
          'tiny': ['0.1rem', '0.2rem'],
        },
        colors: {
          primary: "#000000",
          secondary: "#D94350",
          green: "#05F258",
          brightGreen: "#00FE66",
          orange: "#FFAD33",
          red: "#FB1313",
          yellow: "#EEFF61",
          teal: "#184A47",
          gray: "#C0C0C0",
        },        
        fontFamily: {
          poppins: "var(--font-poppins), sans-serif",
        },
      },
    },
    plugins: [
      
    require('@tailwindcss/typography'),
    ],
  }