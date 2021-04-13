module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-sarif"],
    },
    extend: {
      colors: {
        primary: "#2ECC71",
        secondary: "#137A40",
      },
      backgroundImage: () => ({
        waves: "url('/waves.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
