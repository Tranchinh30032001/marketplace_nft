import React from "react";
import { Button } from "../rootindex";
import Image from "next/image";
import images from "../../public/img";

function Hero() {
  return (
    <div className="md:flex mt-8 gap-4">
      {/*  left*/}
      <div className="flex-[0.5] flex flex-col justify-center md:relative lg:-top-[100px]">
        <h1 className="text-[56px] font-extrabold max-w-[300px]">
          Discover, collect and sell NFTs
        </h1>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
          quibusdam, sint sunt recusandae aliquam quas nihi.
        </p>
        <div>
          <Button btnName="Start your search" />
        </div>
      </div>
      {/* right */}
      <div className="flex-[0.5] mt-5 md:mt-0">
        <Image src={images.hero} alt="hello" />
      </div>
    </div>
  );
}

export default Hero;
