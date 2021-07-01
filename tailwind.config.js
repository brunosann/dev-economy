module.exports = {
  purge: ["./resources/**/*.blade.php", "./resources/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        dropDown: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        dropDown: "dropDown 200ms ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
