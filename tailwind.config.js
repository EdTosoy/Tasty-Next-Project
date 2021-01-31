module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "488px": "488px",
        "550px": "550px",
        80: "80vh",
      },
      colors: {
        green: "#069c54",
        DarkModegreen: "#1d2521",
        "dark-green": "#048654",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
