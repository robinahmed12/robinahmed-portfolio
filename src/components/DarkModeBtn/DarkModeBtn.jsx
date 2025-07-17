"use client"
import useTheme from "../../Context/theme" // Keeping the original import path
import { Sun, Moon } from "lucide-react" // Importing Lucide icons

const DarkModeBtn = () => {
  const { darkMode, toggleDarkMode } = useTheme() // Keeping the original functionality

  return (
    <label
      htmlFor="darkModeToggle" // Associate label with input for accessibility
      className="relative inline-flex h-8 w-14 cursor-pointer items-center rounded-full bg-gray-200 transition-colors duration-300 ease-in-out dark:bg-slate-800 md:h-9 md:w-16"
    >
      {/* Hidden checkbox input */}
      <input
        id="darkModeToggle"
        type="checkbox"
        className="peer sr-only" // sr-only hides it visually but keeps it accessible
        checked={darkMode}
        onChange={toggleDarkMode}
        aria-label="Toggle dark mode"
      />

      {/* Sun Icon (visible when not in dark mode) */}
      <Sun
        className={`absolute left-2 h-5 w-5 text-slate-800 transition-opacity duration-300 ease-in-out peer-checked:opacity-0 md:h-6 md:w-6`}
      />
      {/* Moon Icon (visible when in dark mode) */}
      <Moon
        className={`absolute right-2 h-5 w-5 text-slate-50 transition-opacity duration-300 ease-in-out peer-checked:opacity-100 md:h-6 md:w-6 ${
          darkMode ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Toggle thumb */}
      <span
        className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 shadow-md transition-transform duration-300 ease-in-out peer-checked:translate-x-6 md:h-7 md:w-7 md:peer-checked:translate-x-7`}
      ></span>
    </label>
  )
}

export default DarkModeBtn
