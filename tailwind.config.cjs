/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */

/** @type { DefaultConfig & { theme: { extend: DefaultTheme } } } */
module.exports = {
  content: ["./src/**/*.svelte"],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    colors: {
      yellow: "#ffdb30",
      gray: "#787878",
      white: "#fff",
      black: "#000"
    },
    fontFamily : {
      "me": ['"Monument Extended"', 'Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
      "ps": ['"Product Sans"', 'Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
      "pse": ['"Product Sans Medium"', 'Verdana', 'Geneva', 'Tahoma', 'sans-serif']
    },
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
