/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss");

const rotateY = plugin(function ({ addUtilities }) {
     const newUtilities = {
          ".rotate-y-90": {
               transform: "rotateY(90deg)",
          },
          ".rotate-y-180": {
               transform: "rotateY(180deg)",
          },
          ".rotate-y-270": {
               transform: "rotateY(270deg)",
          },
          ".rotate-y-360": {
               transform: "rotateY(360deg)",
          },
     };
     addUtilities(newUtilities);
});

module.exports = {
     content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
     theme: {
          extend: {
               colors: {
                    emerald: {
                         50: "#fff4ed",
                         100: "#ffe6d5",
                         200: "#feccaa",
                         300: "#fdac74",
                         400: "#fb8a3c",
                         500: "#f97316",
                         600: "#ea670c",
                         700: "#c2570c",
                         800: "#9a4a12",
                         900: "#7c3d12",
                         950: "#432007",
                    },
               },
          },
     },
     plugins: [rotateY],
};
