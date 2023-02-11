import React from "react";
import images from "../../public/img";
import Image from "next/image";

function SliderCard() {
  return (
    <div className="cursor-pointer hover:border-shadow-yellow">
      <div>
        <Image
          src={images.creatorbackground2}
          alt="ground"
          className="rounded-xl"
        />
      </div>
      <div className="p-2">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">NFT Video#1432</h2>
          <small>6 of 100</small>
        </div>
        <div className="flex items-center justify-between">
          <div className="border-[1px] border-gray-500 rounded-md py-1 px-3 mt-4">
            <small className="p-1 block bg-gray-400 rounded-md text-white -mt-[15px]">
              Current Bid
            </small>
            <p className="font-bold">1.000 ETH</p>
          </div>
          <div>
            <small>Reaming time</small>
            <p className="mt-2 font-bold">3H:15P:20S</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderCard;
