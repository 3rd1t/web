const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  purge: ["../**/*.tsx"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
      },
      colors: {
        carbon: {
          50: "#f3f3f3",
          100: "#dcdcdc",
          200: "#bebebe",
          300: "#a4a4a4",
          400: "#8c8c8c",
          500: "#6f6f6f",
          600: "#565656",
          700: "#3d3d3d",
          800: "#282828",
          900: "#171717",
        },
        research: {
          100: "#E6EEFF",
          200: "#BFD4FF",
          300: "#99B9FF",
          400: "#4D85FF",
          500: "#0051FF",
          600: "#0049E6",
          700: "#003199",
          800: "#002473",
          900: "#00184D",
        },
        project: {
          100: "#F8D8D1",
          200: "#F2ACA6",
          300: "#D97374",
          400: "#B34A55",
          500: "#811C31",
          600: "#6E142F",
          700: "#5C0E2D",
          800: "#4A0829",
          900: "#3D0526",
        },
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-debug-screens"), require("@tailwindcss/typography")],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
