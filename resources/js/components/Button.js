import React from "react";

const Button = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 px-4 py-2 text-white rounded-md shadow-lg focus:outline-none transition-all hover:bg-blue-800"
    >
      {title}
    </button>
  );
};

export default Button;
