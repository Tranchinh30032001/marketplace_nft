import React, { useState } from "react";
import Image from "next/image";
import images from "../../public/img";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

function AudioCardSmall() {
  const [playMusic, setPlayMusic] = useState(false);
  return (
    <div className="flex items-center gap-3 bg-gray-300 rounded-lg py-5 px-3">
      <div>
        <Image
          src={images.creatorbackground2}
          alt="ground"
          className="rounded-md w-[90px] h-[70px] "
        />
      </div>
      <div>
        <h1 className="font-bold mb-1">NFT Music#1142</h1>
        <div className="flex items-center gap-3">
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
          <div className="flex items-end justify-between">
            <div className="border-[1px] border-gray-400 p-1 mt-3 -translate-y-2 rounded-md">
              <h3 className="bg-gray-400 rounded-md w-fit -mt-[10px] text-[12px] px-1">
                Price
              </h3>
              <p className="text-[13px] text-center font-medium">65.2ETH</p>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setPlayMusic(!playMusic)}
        className="bg-yellow-400 p-4 rounded-full active:opacity-40 cursor-pointer"
      >
        {playMusic ? <TbPlayerPause size={20} /> : <TbPlayerPlay size={20} />}
      </div>
    </div>
  );
}

export default AudioCardSmall;
