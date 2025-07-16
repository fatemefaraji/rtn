import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <svg className="w-12 h-12 animate-spin text-emerald-500" viewBox="0 0 50 50">
        <circle
          className="opacity-20"
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
        />
        <path
          className="opacity-100"
          fill="currentColor"
          d="M25 5
             a 20 20 0 0 1 0 40
             a 20 20 0 0 1 0 -40"
        />
      </svg>
    </div>
  );
};

export default Spinner;
