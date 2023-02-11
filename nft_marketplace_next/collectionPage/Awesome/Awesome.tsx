import React from "react";
import Image from "next/image";
import images from "../../public/img";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { Title } from "@/components/Common";

const array = [1, 2, 3, 4];

function Awesome() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 border-2 border-yellow-400 rounded-xl p-6 my-10">
      {/* left */}
      <div className="flex flex-col items-center">
        <Image
          src={images.nft_image_1}
          alt="aws"
          width={400}
          height={400}
          className="rounded-lg"
        />
        <div className="flex items-center gap-2 mt-3">
          <div className="p-2 bg-gray-400 rounded-full hover:opacity-30 cursor-pointer border-2">
            <TiSocialFacebook />
          </div>
          <div className="p-2 bg-gray-400 rounded-full hover:opacity-30 cursor-pointer">
            <TiSocialInstagram />
          </div>
          <div className="p-2 bg-gray-400 rounded-full hover:opacity-30 cursor-pointer">
            <TiSocialLinkedin />
          </div>
          <div className="p-2 bg-gray-400 rounded-full hover:opacity-30 cursor-pointer">
            <TiSocialTwitter />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-full">
        <div className="max-w-[500px]">
          <Title
            heading="Awesome NFTs Collection"
            paragrap="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde placeat architecto inventore ullam a voluptate magnam magni accusantium"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 w-full mt-5">
          {array.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center border-[1px] border-yellow-400 py-4 px-8 rounded-xl"
              >
                <p className="mb-4">Floor Price</p>
                <h2 className="text-xl font-bold">$193.5589</h2>
                <p className="text-[14px]">+2.11%</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Awesome;
