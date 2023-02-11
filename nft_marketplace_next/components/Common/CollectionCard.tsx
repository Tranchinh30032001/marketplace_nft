import React from "react";
import Image from "next/image";
import images from "../../public/img";
import { MdVerified } from "react-icons/md";

function CollectionCard({ image, user }: any) {
  return (
    <div className="hover:border-shadow cursor-pointer rounded-lg p-2 shadow-md">
      <div>
        <Image src={image} alt="background" className="rounded-lg h-[180px]" />
      </div>
      <div className="grid grid-cols-3 gap-1 mt-1">
        <Image
          src={images.creatorbackground3}
          alt="background"
          className="h-[80px] object-fill rounded-bl-lg"
        />
        <Image
          src={images.creatorbackground5}
          alt="background"
          className="h-[80px] object-fill"
        />
        <Image
          src={images.creatorbackground1}
          alt="background"
          className="h-[80px] object-fill rounded-br-lg"
        />
      </div>
      <div className="mt-3">
        <h2 className="font-bold text-xl mb-2">Amazing Collection</h2>
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Image
              src={user}
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex items-center ml-2">
              <p>Creator</p>
              <h3 className="font-medium text-md ml-1">Tran Chinh</h3>
              <MdVerified />
            </div>
          </div>
          <div className="inline-block py-1 px-3 border-2 border-gray-700 rounded-lg text-center">
            <p>4.225ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
