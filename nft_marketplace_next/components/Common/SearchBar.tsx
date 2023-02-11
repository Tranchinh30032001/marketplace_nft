import React from "react";

function SearchBar({ placeholder, icon1, icon2 }: any) {
  return (
    <div className="flex items-center justify-between max-w-[500px] px-3 mx-auto rounded-full border-shadow overflow-hidden focus-within:border-shadow-yellow cursor-pointer">
      <div className="flex items-center flex-1">
        <div>{icon1 && icon1}</div>
        <input
          className="text-[14px] ml-4 flex-1 border-2 p-2 py-4 bg-transparent"
          type="text"
          placeholder={placeholder}
        />
      </div>
      <div>{icon2 && icon2}</div>
    </div>
  );
}

export default SearchBar;
