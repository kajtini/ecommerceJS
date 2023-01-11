/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        primary: " hsl(26, 100%, 55%)",
        "primary-pale": "hsl(25, 100%, 94%)",
        "neutral-dark": "hsl(220, 13%, 13%)",
        "neutral-dark-grayish": "hsl(219, 9%, 45%)",
        "neutral-light-grayish": "hsl(220, 14%, 75%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "neutral-black": "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [],
};
