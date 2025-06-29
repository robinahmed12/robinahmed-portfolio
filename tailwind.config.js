/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = ["./src/**/*.{js,jsx,ts,tsx,mdx}"];
export const theme = {
  extend: {
    colors: {
      // Your custom color palette
      slate: {
        800: "#1E293B", // Dark blue-gray for text and dark sections
        900: "#0F172A", // Dark mode navbar
      },
      red: {
        600: "#DC2626", // Your accent red color
      },
      pink: {
        100: "#FECACA", // Project card background
      },
      gray: {
        50: "#F8FAFC", // Light text for dark backgrounds
      },

      // Semantic color names based on your table
      navbar: {
        light: "#FFFFFF",
        dark: "#0F172A",
      },
      hero: "#FFFFFF",
      projects: "#FECACA",
      footer: "#1E293B",

      // Text colors
      text: {
        light: "#1E293B",
        dark: "#F8FAFC",
      },

      // Button colors
      button: {
        primary: "#DC2626",
        secondary: "#1E293B",
        light: "#F8FAFC",
      },

      // Accent color
      accent: "#DC2626",
    },
  },
};
export const plugins = [];
