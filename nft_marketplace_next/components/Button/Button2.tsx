import React, { useState } from "react";

function Button2({ heading, icon1, icon2, icon3, handleClick }: any) {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
    if (handleClick) {
      handleClick();
    }
  };
  return (
    <div
      onClick={handleOpen}
      className="flex items-center w-fit px-4 py-2 border-2 rounded-full bg-gray-800 cursor-pointer text-white hover:text-yellow-400 hover:border-yellow-400"
    >
      {icon1}
      <button className="mx-2 font-medium capitalize">{heading}</button>
      {open ? (icon3 ? icon3 : icon2) : icon2}
    </div>
  );
}

export default Button2;
