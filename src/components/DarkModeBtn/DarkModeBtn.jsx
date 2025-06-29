import React from "react";
import useTheme from "../../Context/theme";

const DarkModeBtn = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <label
      className="cursor-pointer relative h-[2.5em] w-[5em] md:h-[3em] md:w-[6em] rounded-full bg-slate-800 dark:bg-slate-900 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] dark:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)]"
      onClick={toggleDarkMode}
    >
      {/* Border */}
      <span className="absolute inset-[0.1em] rounded-full border-[1px] border-slate-600 dark:border-slate-500"></span>

      {/* Sun/Moon icons */}
      <div className="absolute left-[0.4em] md:left-[0.5em] top-1/2 flex h-[1.8em] w-[1.8em] md:h-[2em] md:w-[2em] -translate-y-1/2 items-center justify-center rounded-full bg-white dark:bg-slate-700 shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.1)]">
        <div className="h-[1.3em] w-[1.3em] md:h-[1.5em] md:w-[1.5em] rounded-full bg-slate-800 dark:bg-slate-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2)]"></div>
      </div>

      {/* Stars/Moon craters */}
      <div className="absolute right-[0.4em] md:right-[0.5em] top-1/2 h-[0.2em] w-[1.2em] md:h-[0.25em] md:w-[1.5em] -translate-y-1/2 rounded-full bg-slate-400 dark:bg-red-500 shadow-[inset_0px_1px_1px_0px_rgba(0,0,0,0.2)]"></div>

      {/* Hidden checkbox */}
      <input
        type="checkbox"
        className="peer h-[1em] w-[1em] opacity-0"
        checked={darkMode}
        onChange={toggleDarkMode}
        aria-label="Toggle dark mode"
      />

      {/* Toggle ball */}
      <span
        className={`absolute left-[0.2em] md:left-[0.25em] top-1/2 flex h-[2.1em] w-[2.1em] md:h-[2.5em] md:w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full bg-slate-700 dark:bg-red-600 shadow-[inset_3px_3px_3px_0px_rgba(0,0,0,0.2),inset_-3px_-3px_3px_0px_rgba(255,255,255,0.1)] duration-300 ${
          darkMode ? "left-[calc(100%-2.3em)] md:left-[calc(100%-2.75em)]" : ""
        }`}
      >
        <span className="relative h-full w-full rounded-full">
          <span className="absolute inset-[0.1em] rounded-full border-[1px] border-slate-500 dark:border-red-500"></span>
        </span>
      </span>
    </label>
  );
};

export default DarkModeBtn;
