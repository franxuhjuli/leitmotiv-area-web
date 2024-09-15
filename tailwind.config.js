/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "banner1": "url('./banner-fotos.jpg')",
        "banner2": "url('./banner-globos.jpg')",
      },
      plugins: [],
    },
  },
};
