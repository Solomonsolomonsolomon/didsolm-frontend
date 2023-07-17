/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        slider: {
          "0%": {
            width: "0%",
          },
          "50%": {
            width: "50%",
          },
          "100%": {
            width: "100%",
          },
        },
        color: {
          from: {
            color: "transparent",
          },
          to: {
            color: "white",
          },
        },
      },
      animation: {
        animateSlider: "slider 1s linear 1 forwards",
        giveColor: "color 1s linear 1 forwards",
      },
    },
  },
  plugins: [],
};
