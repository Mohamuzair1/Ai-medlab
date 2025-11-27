/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0ea5a4", // teal-500
        accentColor: "#4f46e5", // indigo-600
        yellowColor: "#f59e0b",
        purpleColor: "#7c3aed",
        irisBlueColor: "#06b6d4",
        headingColor: "#0f172a",
        textColor: "#374151",
        pageBgStart: "#f0fdfa",
        pageBgEnd: "#eef2ff",
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
};
