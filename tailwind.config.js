module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "488px": "488px",
        "80":"80vh"
      },
      colors: {
        "green": "#069c54",
        "dark-green": "#048654"

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
