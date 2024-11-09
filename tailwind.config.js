/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fbBg: "#337FFF",
        linkedInBg: "#006699",
        twitterBg: "#33CCFF",
        whatsAppBg: "#00D95F",
      },
      animation: { blob: "blob 9s infinite" },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1.2) rotate(0deg)",
          },
          "33%": {
            transform: "translate(-30px, -50px) scale(1.7) rotate(33deg)",
          },
          "66%": {
            transform: "translate(-10px, 20px) scale(1.5) rotate(66deg)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1.2) rotate(0deg)",
          },
        },
      },
      screens: {
        xl: "1380px",

        mob: { max: "639px" },
        tablet: { min: "640px", max: "1023px" },
        laptop_md: { min: "1024px", max: "1279px" },
        laptop_lg: { min: "1280px", max: "1535px" },
        desktop: { min: "1536px", max: "1919px" },
        desktop_md: { min: "1920px", max: "2559px" },
        desktop_lg: { min: "2560px", max: "3839px" },
        "4k": { min: "3840px" },
      },
    },
  },
  plugins: [],
};
