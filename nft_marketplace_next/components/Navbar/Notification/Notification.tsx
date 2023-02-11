import React from "react";
import Image from "next/image";
import images from "../../../public/img";

function Notification() {
  return (
    <div className="max-w-[320px] w-[320px] p-3 bg-gray-200 absolute top-[150%] rounded-md z-10 -left-[200px]">
      <div>
        <h1 className="text-2xl font-medium mb-5">Notification</h1>
        <div className="flex items-center hover:bg-gray-500 p-2 rounded-md">
          <Image
            src={images.user1}
            alt="user"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col justify-center ml-4 flex-wrap">
            <h2 className="font-medium">Tran Chinh</h2>
            <p className="leading-4 text-gray-900">
              Tran Chinh vua dang 1 thong bao moi...
            </p>
            <small className="leading-4 mt-1">3 minutes ago</small>
          </div>
          <div className="bg-green-600 rounded-full w-[8px] h-[8px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
