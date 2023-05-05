/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "Sans-serif"],
      },
      letterSpacing: {
        widest: ".3em",
      },
      
      backgroundColor: {
        backgroundColor: "#35AFBF",
        syan: "#0D1A2C",
      },
      backgroundImage: {
        hero: "url('../svg/headerimg.svg')",
        kuffner: "url('../svg/KÜFFNERbg.svg')",
      },
      backgroundSize: {
        backgroundSize: " 100%;",
        cover: " cover;",
      },
      textColor: {
        textcolor: "#0D1A2C",
      },
      fontSize: {
        text10xl: "40px"
      },
      maxWidth: {
        with: "599px",
        363: "363px",
        204: "204px",
        67: "90%"
      },
      margin: {
        100: "405px"
      },
      colors: {
        'regal-blue': '#0D1A2C',
      },
    },
  },
  plugins: [],
};
