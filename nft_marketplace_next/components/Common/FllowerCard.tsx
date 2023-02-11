import React from "react";
import Image from "next/image";
import images from "../../public/img";
import { MdVerified } from "react-icons/md";
import { Button } from "../rootindex";

function FllowerCard({ bg, user }: any) {
  return (
    <div className="p-2 hover:border-shadow rounded-xl cursor-pointer shadow-md flex flex-col items-center">
      <div>
        <Image
          src={bg}
          alt="background"
          className="rounded-[20px] w-[300px] h-[200px]"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="p-2 rounded-full border-2 bg-white -translate-y-[50%]">
          <Image
            src={user}
            alt="user"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="flex items-center gap-10 -mt-5">
          <div>
            <div className="flex items-center">
              <h3 className="font-medium">Tran Chinh</h3>
              <MdVerified />
            </div>
            <p>12.32ETH</p>
          </div>
          <Button btnName="Follwing" />
        </div>
      </div>
    </div>
  );
}

export default FllowerCard;
