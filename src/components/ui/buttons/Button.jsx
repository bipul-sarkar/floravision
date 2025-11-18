import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className="w-[217px] h-16 rounded-xl text-[28px] text-center border-2 text-[#FFFFFF] opacity-75"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
