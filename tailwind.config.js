/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        PTSans: "PT Sans",
      },
      colors: {
        primary: {
          DEFAULT: "#ED1C24",
        },
      },
    },
  },
  plugins: [],
};
