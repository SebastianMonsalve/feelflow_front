import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      className="bg-primary w-full h-12 lg:h-14 text-text-contrast text-lg font-bold rounded-xl hover:bg-primary-hover cursor-pointer mt-4 lg:mt-8"
      onClick={() => {
        onClick();
      }}
    >
      {label}
    </button>
  );
};

export default Button;
