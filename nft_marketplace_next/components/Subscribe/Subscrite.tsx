import React from "react";
import images from "../../public/img";
import { RiSendPlaneFill } from "react-icons/ri";
import { Button } from "../rootindex";
import Image from "next/image";

function Subscrite() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
      {/* left */}
      <div className="flex-[0.36]">
        <h1 className="text-[36px] md:text-[40px] lg:text-[50px] font-black">
          Never miss a drop
        </h1>
        <p className="text-xl mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          maxime ipsa illo.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <Button btnName="01" />
            <p className="font-medium ml-4">Get more discount</p>
          </div>
          <div className="flex items-center">
            <Button btnName="02" />
            <p className="font-medium ml-4">Get premium magazines</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-5 border-[1px] rounded-full bg-gray-400 mt-6 mb-6">
          <input
            className="flex-1 bg-transparent placeholder:text-white text-white"
            type="email"
            placeholder="Enter your email*"
          />
          <RiSendPlaneFill size={26} className="text-gray-100" />
        </div>
      </div>
      {/* right */}
      <div className="flex-[0.64]">
        <Image src={images.update} alt="hero" />
      </div>
    </div>
  );
}

export default Subscrite;
