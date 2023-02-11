import React, { useState } from "react";
import images from "../../public/img";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
import { Button } from "../rootindex";
const sliderData = [
  {
    title: "Hello NFT",
    id: 1,
    name: "Daulat Hussain",
    collection: "GYm",
    price: "00664 ETH",
    like: 243,
    image: images.user1,
    nftImage: images.nft_image_1,
    time: {
      days: 21,
      hours: 40,
      minutes: 81,
      seconds: 15,
    },
  },
  {
    title: "Buddy NFT",
    id: 2,
    name: "Shoaib Hussain",
    collection: "Home",
    price: "0000004 ETH",
    like: 243,
    image: images.user2,
    nftImage: images.nft_image_2,
    time: {
      days: 77,
      hours: 11,
      minutes: 21,
      seconds: 45,
    },
  },
  {
    title: "Gym NFT",
    id: 3,
    name: "Raayan Hussain",
    collection: "GYm",
    price: "0000064 ETH",
    like: 243,
    image: images.user3,
    nftImage: images.nft_image_3,
    time: {
      days: 37,
      hours: 20,
      minutes: 11,
      seconds: 55,
    },
  },
  {
    title: "Home NFT",
    id: 4,
    name: "Raayan Hussain",
    collection: "GYm",
    price: "4664 ETH",
    like: 243,
    image: images.user4,
    nftImage: images.nft_image_1,
    time: {
      days: 87,
      hours: 29,
      minutes: 10,
      seconds: 15,
    },
  },
];
function BigNFTSlider() {
  const [indexSlider, setIndexSlider] = useState(0);
  const icre = () => {
    if (indexSlider < sliderData.length - 1) {
      setIndexSlider((prev) => prev + 1);
    }
  };
  const dec = () => {
    if (indexSlider > 0) {
      setIndexSlider((prev) => prev - 1);
    }
  };
  return (
    <div className="flex flex-col-reverse md:flex-row mt-10 md:h-[95vh] items-center gap-6 md:gap-0 ">
      {/* left */}
      <div className="px-5 py-8 shadow-yellow-500 shadow-md rounded-3xl md:absolute w-full md:w-[50%] md:max-w-[800px] z-50 bg-gray-600">
        <h1 className="text-3xl font-bold mb-5">
          {sliderData[indexSlider].title}
        </h1>
        <div className="flex items-center gap-16">
          {/* user */}
          <div className="flex items-center">
            <Image
              src={sliderData[indexSlider].image}
              alt="user1"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="ml-4">
              <p>Creator</p>
              <div className="flex items-center">
                <h3 className="font-medium">{sliderData[indexSlider].name}</h3>
                <MdVerified />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <AiFillFire size={36} />
            <div>
              <p>Collection</p>
              <h3>{sliderData[indexSlider].collection}</h3>
            </div>
          </div>
        </div>
        <div className="border-[2px] border-gray-600 rounded-md mt-10">
          <div className="relative -top-[16px] ml-14">
            <div className="bg-gray-500 inline-block p-2 px-4 rounded-md font-medium">
              Current Bid
            </div>
            <h3 className="font-medium">{sliderData[indexSlider].price}</h3>
          </div>
        </div>
        <div className="flex items-center mt-10">
          <MdTimer size={26} />
          <p className="ml-5">Auction ending in</p>
        </div>
        {/* time */}
        <div className="flex items-center gap-6 mt-5">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-black text-[32px]">
              {sliderData[indexSlider].time.days}
            </h1>
            <p className="font-medium">Days</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-black text-[32px]">
              {sliderData[indexSlider].time.hours}
            </h1>
            <p className="font-medium">Hours</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-black text-[32px]">
              {sliderData[indexSlider].time.minutes}
            </h1>
            <p className="font-medium">Mins</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-black text-[32px]">
              {sliderData[indexSlider].time.seconds}
            </h1>
            <p className="font-medium">Secs</p>
          </div>
        </div>
        <hr className="border-black border-[1px] mt-6" />
        <div className="flex justify-center gap-6 mt-6">
          <Button btnName="Place" />
          <Button btnName="view" />
        </div>
        <div className="flex items-center gap-6 mt-6">
          <button
            onClick={dec}
            className="cursor-pointer hover:bg-gray-500 p-2 rounded-full active:opacity-60"
          >
            <TbArrowBigLeftLines
              size={32}
              className={`${indexSlider == 0 && "opacity-20"}`}
            />
          </button>
          <div
            onClick={icre}
            className="cursor-pointer hover:bg-gray-500 p-2 rounded-full active:opacity-60"
          >
            <TbArrowBigRightLine
              size={32}
              className={`${
                indexSlider == sliderData.length - 1 && "opacity-20"
              }`}
            />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex-[0.5] ml-auto h-[95vh]">
        <div className="p-2 border-[3px] border-yellow-400 rounded-3xl h-full overflow-hidden ">
          <Image
            src={sliderData[indexSlider].nftImage}
            alt="nft"
            className="rounded-3xl h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default BigNFTSlider;
