let plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("first", "&:nth-child(1)");
    }),
    plugin(function ({ addVariant }) {
      addVariant("second", "&:nth-child(2)");
    }),
    plugin(function ({ addVariant }) {
      addVariant("third", "&:nth-child(3)");
    }),
    plugin(function ({ addVariant }) {
      addVariant("fourth", "&:nth-child(4)");
    }),
    plugin(function ({ addVariant }) {
      addVariant("fifth", "&:nth-child(5)");
    }),
  ],
};
