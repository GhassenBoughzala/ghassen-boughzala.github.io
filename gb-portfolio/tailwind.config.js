module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#21B754",
        "primary-content": "#000000",
        secondary: "#1DB78E",
        "btn-color" : "#21B754",
        "secondary-content": "#010D07",
        accent: "#21B7AB",
        "accent-content": "#010D0B",
        neutral: "#19362E",
        "neutral-content": "#CDD3D1",
        info: "#3dd6ff",
        success: "#23d18b",
        warning: "#fdae2a",
        error: "#ff6e6e",
      },
    },
  },
  daisyui: {
    themes: [
      "light", "dark",
    ],
  },
  plugins: [require("daisyui")],
}