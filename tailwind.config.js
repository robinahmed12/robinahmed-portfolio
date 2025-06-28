// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        slate: {
          800: "#1E293B",
          900: "#0F172A",
        },
        red: {
          600: "#DC2626",
          700: "#B91C1C",
        },
        pink: {
          100: "#FECACA",
        },
        light: "#F8FAFC",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  darkMode: "class",
};
