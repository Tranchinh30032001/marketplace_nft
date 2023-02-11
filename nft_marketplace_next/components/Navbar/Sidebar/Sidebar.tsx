import React, { useState } from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Discover from "../Discover/Discover";
import HelpCenter from "../HelpCenter/HelpCenter";
import { Button } from "@/components/rootindex";

function Sidebar({ setOpenSideMenu }: any) {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const handleOpenDiscover = () => {
    setOpenDiscover(!openDiscover);
    setOpenHelp(false);
    console.log("xin chao");
  };
  const handleOpenHelp = () => {
    setOpenHelp(!openHelp);
    setOpenDiscover(false);
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0  bg-white p-5">
      <div
        onClick={() => setOpenSideMenu(false)}
        className="absolute z-10 top-4 right-4"
      >
        <GrClose size={24} />
      </div>
      <div>
        <div>
          <h1 className="text-2xl">Logo</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            explicabo. Saepe labore tempore quam voluptatum obcaecati quidem
            quasi optio
          </p>

          <div className="flex items-center gap-10 mt-4 border-b-[1px] border-gray-800 pb-4">
            <TiSocialFacebook size={24} />
            <TiSocialLinkedin size={24} />
            <TiSocialInstagram size={24} />
            <TiSocialTwitter size={24} />
            <TiSocialYoutube size={24} />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-6">
          <div className="relative">
            <div
              onClick={handleOpenDiscover}
              className="flex items-center justify-between"
            >
              <p className="font-medium text-lg">Discover</p>
              {openDiscover ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </div>
            {openDiscover && (
              <div className="bg-transparent mt-2">
                {" "}
                <Discover />{" "}
              </div>
            )}
          </div>
          <div>
            <div
              onClick={handleOpenHelp}
              className="flex items-center justify-between"
            >
              <p className="font-medium text-lg">Help</p>
              {openHelp ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </div>
            {openHelp && (
              <div className="mt-2">
                {" "}
                <HelpCenter />
              </div>
            )}
          </div>
        </div>
        <div className="border-t-[1px] border-black mt-4">
          <div className="flex items-center justify-center gap-5 p-5">
            <Button btnName="Create" handleClick="" />
            <Button btnName="Connect Wallet" handleClick="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
