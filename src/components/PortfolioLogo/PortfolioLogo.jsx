import React from "react";
import { FaCode } from "react-icons/fa";

const PortfolioLogo = () => {
  return (
    <div className="flex items-center group cursor-pointer">
      {/* Animated Code Icon */}
      <div className="relative mr-3">
        <div className="w-12 h-12 rounded-lg bg-[#DC2626] flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
          <FaCode className="text-white text-2xl" />
        </div>
        <div className="absolute -inset-2 border-2 border-[#DC2626] rounded-lg opacity-0 group-hover:opacity-100 group-hover:-inset-1 transition-all duration-300 pointer-events-none"></div>
      </div>

      {/* Name with creative styling */}
      <div className="relative">
        <h1 className="text-2xl font-bold text-[#1E293B] dark:text-[#F8FAFC] tracking-tight">
          <span className="relative inline-block text-[#F8FAFC] dark:text-[#1E293B]">
            Robin
            {/* Animated underline effect */}
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#DC2626] group-hover:w-full transition-all duration-300 ease-out"></span>
          </span>
          <span className="font-light ml-1 dark:text-[#1E293B] text-[#F8FAFC]">Ahmed</span>
        </h1>
        <div className="absolute -bottom-2 left-0 text-xs font-mono text-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Frontend Developer
        </div>
      </div>
    </div>
  );
};

export default PortfolioLogo;
