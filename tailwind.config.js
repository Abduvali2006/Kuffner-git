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
      },
      backgroundImage: {
        hero: "url('../svg/headerimg.svg')",
      },
      backgroundSize: {
        backgroundSize: " 100%;",
        cover: " cover;",
      },
      textColor: {
        textColor: "#32A3B2",
      },
      fontSize: {
        text10xl: "40px"
      },
      maxWidth: {
        with: "599px",
        363: "363px",
        204: "204px"
      },
      margin: {
        100: "405px"
      }
    },
  },
  plugins: [],
};
