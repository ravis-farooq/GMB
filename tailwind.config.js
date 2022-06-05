module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "5/2": "5 / 2",
      },
      screens: {
        xs: { max: "430px" },
      },
    },
  },
  plugins: [],
};
