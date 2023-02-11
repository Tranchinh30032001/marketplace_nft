import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import { Discover, HelpCenter } from "../Navbar";

function Footer() {
  return (
    <div className="mt-10 px-5 md:px-10 lg:px-20 bg-gray-800 py-10">
      <div className="flex flex-col gap-10 md:grid md:grid-cols-10">
        {/* 1 */}
        <div className="col-span-3 ">
          <h1 className="text-xl font-medium">Logo</h1>
          <p className="mt-4 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem saepe culpa aliquam, assumenda nesciunt nulla quae
            eos sapiente, corrupti temporibus.
          </p>
          <div>
            <div className="flex items-center gap-3">
              <div className="cursor-pointer hover:bg-gray-400 p-1 rounded-full">
                <TiSocialFacebook size={24} />
              </div>
              <div className="cursor-pointer hover:bg-gray-400 p-1 rounded-full">
                <TiSocialLinkedin size={24} />
              </div>
              <div className="cursor-pointer hover:bg-gray-400 p-1 rounded-full">
                <TiSocialInstagram size={24} />
              </div>
              <div className="cursor-pointer hover:bg-gray-400 p-1 rounded-full">
                <TiSocialTwitter size={24} />
              </div>
              <div className="cursor-pointer hover:bg-gray-400 p-1 rounded-full">
                <TiSocialYoutube size={24} />
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="col-span-2 ">
          <h1 className="text-xl font-medium">Discover</h1>
          <div className="px-1">
            <Discover />
          </div>
        </div>
        {/* 3 */}
        <div className="col-span-2 ">
          <h1 className="text-xl font-medium">Help Center</h1>
          <div className="px-1">
            <HelpCenter />
          </div>
        </div>
        {/* 4 */}
        <div className="col-span-3 ">
          <h1 className="text-xl font-medium">Subscribe</h1>
          <div className="flex items-center justify-between p-3 border-[1px] rounded-full bg-gray-400 mt-6 mb-6">
            <input
              className="flex-1 bg-transparent placeholder:text-white text-white"
              type="email"
              placeholder="Enter your email*"
            />
            <RiSendPlaneFill className="text-gray-100" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            doloribus commodi deleniti? Impedit, fugit nam. Unde, ducimus atque
            in quo molestias
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
