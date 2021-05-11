module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-sarif"],
    },
    extend: {
      zIndex: {
        1000: "1000",
      },
      colors: {
        primary: "#2ECC71",
        secondary: "#137A40",
        "dark-primary": "#36393F",
        "dark-secondary": "#2F3136",
        "dark-light": "#4F545C",
      },
      backgroundImage: () => ({
        waves: "url('/waves.svg')",
        stars: "url('/stars.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      brightness: ["dark"],
      invert: ["dark"],
      backgroundImage: ["dark"],
      backgroundColor: ["active"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
