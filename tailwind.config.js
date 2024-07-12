/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "button-transparent-bg": "#ffffff80",
        "dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "faint-transparent": "rgba(0, 0, 0, 0.1)",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
        "primary-color": "#DC4D04",
        "secondary-color": "#f88349",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/agro-industry-3158634.jpg')",
      },
      colors: {
        "primary-color": "#DC4D04",
        "secondary-color": "#f88349",
        disabled: "#fcbc9c",
        "color-font": "#20232A",
        "color-dark-font": "#F7F7F7",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
