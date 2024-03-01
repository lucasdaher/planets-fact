/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        "dark-blue": "#070724",
        "gray-blue": "#38384F",
        gray: "#838391",
        cyan: "#419EBB",
        "light-orange": "#EDA249",
        purple: "#6F2ED6",
        orange: "#D14C32",
        red: "#D83A34",
        "dark-orange": "#CD5120",
        "diamond-green": "1EC2A4",
        blue: "#2D68F0",
      },
    },
  },
  plugins: [],
};
