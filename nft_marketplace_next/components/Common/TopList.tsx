import React from "react";
import { Button2 } from "../rootindex";

function TopList({
  heading,
  btn1,
  btn2,
  btn3,
  icon1,
  icon2,
  icon3,
  setOptionAction,
}: any) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-10 capitalize text-center">
        {heading}
      </h1>
      <div className="flex items-center gap-4 bg-gray-300 py-2 px-5 rounded-full ">
        <Button2
          handleClick={() => setOptionAction(btn1)}
          heading={btn1}
          icon1={icon1}
        />
        <Button2
          handleClick={() => setOptionAction(btn2)}
          heading={btn2}
          icon1={icon2}
        />
        <Button2
          handleClick={() => setOptionAction(btn3)}
          heading={btn3}
          icon1={icon3}
        />
      </div>
    </div>
  );
}

export default TopList;
