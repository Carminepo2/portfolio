module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/constants/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        "primary-btn": "0 4px 14px 0 rgb(252 211 77 / 39%)",
        "secondary-btn": "0 4px 14px 0 rgb(0 0 0 / 10%)",
      },
      dropShadow: {
        purple: "0 4px 6px rgba(196, 181, 253, 0.6)",
        pink: "0 4px 6px rgba(249, 168, 212, 0.6)",
        yellow: "0 4px 6px rgba(252, 211, 77, 0.6)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
