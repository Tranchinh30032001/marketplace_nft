import React from "react";

function Button({ btnName, handleClick, categoryActive }: any) {
  return (
    <button
      className={`p-2 px-5 text-white rounded-full font-medium shadow-md inline-block leading-6 ${
        btnName == categoryActive
          ? "bg-yellow-400"
          : "bg-gray-800 capitalize hover:text-yellow-400"
      }`}
      onClick={() => handleClick(btnName)}
    >
      {btnName}
    </button>
  );
}

export default Button;
