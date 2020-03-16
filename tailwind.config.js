module.exports = {
  theme: {
    extend: {}
  },
  variants: {
    borderColor: ["responsive", "hover", "focus", "active", "group-hover"]
  },
  plugins: [
    require("tailwind-caret-color")(),
    require("@tailwindcss/custom-forms")
  ]
};
