import React, { useState } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

function NFTCard({ image, price, name, tokenId, Images }: any) {
  const [heart, setHeart] = useState(false);
  return (
    <div className="p-2 w-fit rounded-lg shadow-md hover:border-shadow-yellow cursor-pointer">
      <div className="overflow-hidden relative">
        <div className="">
          <Image src={image} alt="user" className="h-[300px] object-cover" />
        </div>
        <div className="absolute top-0 right-0 rounded-bl-xl bg-gray-50 px-10 py-1 md:py-0  skew-x-[45deg] -mr-[30px]">
          <div className="-skew-x-[45deg]">
            <p>Remaining time</p>
            <h2 className="text-xl font-bold">3h:15p:20s</h2>
          </div>
        </div>
        <div className="absolute -bottom-[1px] left-0 bg-gray-50 skew-x-[45deg] px-10 rounded-tr-xl -ml-[36px]">
          <div className="-skew-x-[45deg]">
            <h1 className="font-bold">{`${name} # ${tokenId}`}</h1>
            <div className="flex items-end justify-between">
              <div className="border-[1px] border-gray-400 p-1 mt-3 -translate-y-2 rounded-md">
                <h3 className="bg-gray-400 rounded-md p-[2px] -mt-[10px] text-[13px]">
                  Current Bid
                </h3>
                <p className="text-[13px] text-center">{`${price} ETH`}</p>
              </div>
              <small className="translate-x-12">61 in Stock</small>
            </div>
          </div>
        </div>
        <div
          onClick={() => setHeart(!heart)}
          className="absolute top-5 left-5 bg-gray-50 flex items-center px-2 rounded-full cursor-pointer"
        >
          {heart ? (
            <AiFillHeart className="text-red-600" />
          ) : (
            <AiOutlineHeart />
          )}
          <span className="ml-1">22</span>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;
