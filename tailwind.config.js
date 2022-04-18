module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        navbargap: "calc(100vh - 58px)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
