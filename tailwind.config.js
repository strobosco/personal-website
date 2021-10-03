module.exports = {
  important: true,
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      primary: "#212121",
      card: "#1b1b1b",
    }),
    fontSize: {
      heading: "46px",
      footer: "40px",
      icon: "50px",
      footerIcon: "60px",
      p: "20px",
    },
    fontFamily: {
      body: '"Gill Sans"',
    },
    borderRadius: {
      DEFAULT: "10px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
