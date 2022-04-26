module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        navbargap: "calc(100vh - 58px)",
        searchbarmobile: "calc(100vw - 82px)",
      },
      screens: {
        xs: "23.125rem",
        sm: "35rem",
        md: "53.3125rem",
        lg: "64rem",
        xlg: "70rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
