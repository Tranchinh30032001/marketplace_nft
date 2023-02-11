import React from "react";
import images from "../../public/img";
import Image from "next/image";
import Link from "next/link";

const NFTCardSearch = ({ image, price, name, tokenId }: any) => {
  return (
    <Link
      href={{ pathname: `/NFT-Details/${tokenId}` }}
      className="rounded-lg overflow-hidden border-[1px] border-yellow-400"
    >
      <div className="">
        <img
          src={image}
          alt="alt"
          className="rounded-lg h-[300px] w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="border-yellow-400 border-2 rounded-full w-[26px] h-[26px] overflow-hidden">
            <Image
              src={images.user1}
              alt="user1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="border-yellow-400 border-2 rounded-full w-[26px] h-[26px] overflow-hidden">
            <Image src={images.user1} alt="user1" className="object-contain" />
          </div>
          <div className="border-yellow-400 border-2 rounded-full w-[26px] h-[26px] overflow-hidden">
            <Image src={images.user1} alt="user1" className="object-contain" />
          </div>
          <div className="border-yellow-400 border-2 rounded-full w-[26px] h-[26px] overflow-hidden">
            <Image src={images.user1} alt="user1" className="object-contain" />
          </div>
        </div>
        <p>{tokenId}</p>
      </div>
      <div className="px-4">
        <h2 className="text-xl font-bold mb-4">{name}</h2>
      </div>
      <div className="flex items-center justify-between px-4">
        <div className="border-[1px] border-gray-400 p-1 mt-3 -translate-y-2 rounded-md inline-block">
          <h3 className="bg-gray-400 rounded-md p-[2px] -mt-[10px] text-[13px]">
            Current Bid
          </h3>
          <p className="text-[13px] text-center">{`${price} ETH`}</p>
        </div>
        <p>1 hours left</p>
      </div>
    </Link>
  );
};

export default NFTCardSearch;
