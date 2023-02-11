import React from "react";
import Link from "next/link";
import Image from "next/image";
import images from "../../../public/img";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";

const items = [
  { name: "my profile", link: "/myprofile", icon: FaUserAlt },
  { name: "my items", link: "/myprofile", icon: FaRegImage },
  { name: "edit profile", link: "/myprofile", icon: FaUserEdit },
  { name: "help", link: "/myprofile", icon: MdHelpCenter },
  { name: "dowload", link: "/myprofile", icon: TbDownload },
];

function Profile() {
  return (
    <div className="absolute max-w-[300px] w-full top-[120%] right-0 bg-gray-200 py-6 z-10 rounded-md">
      <div>
        <div className="flex items-center gap-5 px-5">
          <Image
            src={images.user1}
            alt="user"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h2 className="font-medium">Tran Chinh</h2>
            <p className="leading-4 text-[14px]">0x123456789</p>
          </div>
        </div>
        <div>
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className=" first:mt-5 mt-1 hover:bg-gray-500 py-3 px-5 rounded-md"
              >
                <Link className="flex items-center" href={item.link}>
                  <item.icon />
                  <p className="ml-4 capitalize">{item.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
