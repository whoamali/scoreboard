module.exports = {
  content: [
    "./src/pages/**/*.{html,jsx,tsx}",
    "./src/components/**/*.{html,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      Fredoka: ["Fredoka", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
