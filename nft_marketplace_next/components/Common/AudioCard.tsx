import React, { useState } from "react";
import Image from "next/image";
import images from "../../public/img";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

function AudioCard() {
  const [heart, setHeart] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  return (
    <div className="overflow-hidden w-fit rounded-lg border-[1px] border-gray-300">
      <div className="relative">
        <div className="">
          <Image
            src={images.nft_image_1}
            alt="nft"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="absolute w-[300px] max-w-full flex justify-center top-0 right-0 rounded-bl-xl bg-gray-50 px-10 py-1 md:py-0  skew-x-[45deg] -mr-[30px]">
          <div className="-skew-x-[45deg]">
            <p>Remaining time</p>
            <h2 className="text-xl font-bold">3h:15p:20s</h2>
          </div>
        </div>
        <div className="absolute w-[300px] max-w-full -bottom-[1px] left-0 bg-gray-50 rounded-tr-xl py-4 px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold">NFT Musicl#3</h1>
              <div className="flex items-end justify-between">
                <div className="border-[1px] border-gray-400 p-1 mt-3 -translate-y-2 rounded-md">
                  <h3 className="bg-gray-400 rounded-md p-[2px] -mt-[10px] text-[13px]">
                    Current Bid
                  </h3>
                  <p className="text-[13px] text-center">65.02 ETH</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-end">
                <Image
                  src={images.user1}
                  alt="user"
                  width={30}
                  height={30}
                  className="rounded-full border-2 border-yellow-400"
                />
                <Image
                  src={images.user2}
                  alt="user"
                  width={30}
                  height={30}
                  className="rounded-full border-2 border-yellow-400"
                />
                <Image
                  src={images.user3}
                  alt="user"
                  width={30}
                  height={30}
                  className="rounded-full border-2 border-yellow-400"
                />
                <Image
                  src={images.user4}
                  alt="user"
                  width={30}
                  height={30}
                  className="rounded-full border-2 border-yellow-400"
                />
              </div>
              <small className="text-right block mt-3">24 in Stock</small>
            </div>
          </div>
          <div className="absolute -top-[60%] left-4 flex items-center gap-8">
            <Image src={images.musiceWave} alt="music" />
            <div
              onClick={() => setPlayMusic(!playMusic)}
              className="bg-yellow-400 p-4 rounded-full active:opacity-40 cursor-pointer"
            >
              {playMusic ? (
                <TbPlayerPause size={20} />
              ) : (
                <TbPlayerPlay size={20} />
              )}
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

export default AudioCard;
