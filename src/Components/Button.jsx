import React from "react";

const Button = ({ label }) => {
  return (
    <button className="bg-primary w-full h-14 text-text-contrast text-lg font-bold rounded-xl hover:bg-primary-hover cursor-pointer mt-4 lg:mt-10">
      {label}
    </button>
  );
};

export default Button;
