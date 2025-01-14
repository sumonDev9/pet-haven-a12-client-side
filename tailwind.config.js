const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
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
