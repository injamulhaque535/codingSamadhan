/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "service-bg-img": "url('/images/service-bg.jpg')",
        "portfolio-bg-img": "url('/images/portfolio-bg.png')",
        "blogs-bg-img": "url('/images/blogs-bg.jpg')",
        "about-bg-img": "url('/images/about-bg.jpg')",
        "support-bg-img": "url('/images/support-bg.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#2D4A8A",
      secondary: "#FD5E2C",
      heading: "#15171C",
      text: "#1B201C",
      white: "#ffffff",
      black: "#333333",
      green: "#1DBF73",
      hover: "#FD5E2C",
      border: "#cccccc",
      biscuit: "#FABE9B",
      sweet: "#FF756C",
      shadow: "rgba(0, 0, 0, 0.15)",
      gray: "#f0f0f0",
      overlay: "#00000080",
      transparent: "transparent",
    },
  },
  plugins: [],
};
