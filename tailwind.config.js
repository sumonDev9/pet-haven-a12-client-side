const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0E7A81',
        secondary: '#131313',
        info:'#706F6F'
      }
    },
  },
  plugins: [],
});
