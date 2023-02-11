import { InputItem } from "@/createNftPage/Dropzone/DropZone";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";
import { useDropzone } from "react-dropzone";
import { useCallback, useState, useContext } from "react";
import { MarketContext } from "@/context/MarketProvider";
function MyProfile() {
  const prefixImage = "../public/img/";
  const [avatar, setAvatar] = useState("user-1.png");
  //@ts-ignore
  const { signer } = useContext(MarketContext);
  const onDrop = useCallback((fileAccepted: any) => {
    console.log("file: ", fileAccepted[0]);
    setAvatar(fileAccepted[0].name);
  }, []);
  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    //@ts-ignore
    accept: "image*/",
    maxSize: 5000000,
  });
  return (
    <div className="max-w-[1024px] mx-auto p-4">
      <div>
        <h1 className="font-bold text-3xl mb-4">Profile Setting</h1>
        <p className="max-w-[620px] w-full font-medium text-[15px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in
          iure exercitationem cumque, eligendi repellat laboriosam ullam illum
          natus consequatur itaque.
        </p>
        <hr className="mt-4" />
      </div>
      <div className="flex items-start justify-between">
        <div className="mt-6 cursor-pointer" {...getRootProps()}>
          <input {...getInputProps()} type="text" />
          <div className=" border-2 overflow-hidden rounded-full w-[100px] h-[100px]">
            <Image
              src={"/" + prefixImage + avatar}
              alt="avatar"
              width={300}
              height={300}
              className="h-full object-cover"
            />
          </div>
          <h2 className="mt-3 font-medium text-lg">Change Avatar</h2>
        </div>
        <div className="">
          <div className="my-4">
            <label className="text-lg font-bold text-[#444444] ml-3" htmlFor="">
              UserName:
            </label>
            <div className="mt-1 p-2 px-3 border-[1px] border-yellow-400 rounded-xl">
              <input
                placeholder="Tran Chinh"
                type="text"
                className="placeholder:text-[13px] text-[13px] w-full"
              />
            </div>
          </div>
          <InputItem
            heading="Email"
            placeholder="Email *"
            icon={<HiOutlineMail size={24} />}
          />
          <div className="mt-4 flex flex-col">
            <label className="text-lg font-bold text-[#444444] ml-3" htmlFor="">
              Description
            </label>
            <textarea
              className="border-[1px] rounded-xl mt-2 border-yellow-400 p-2 px-3 placeholder:text-[13px] text-[13px] outline-none"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore tempora voluptatum laborum"
              name="description"
              id=""
              //@ts-ignore
              cols="20"
              //@ts-ignore
              rows="6"
            ></textarea>
            <div className="mt-4">
              <InputItem
                heading="Website"
                icon={<MdOutlineHttp size={24} />}
                placeholder="website"
              />
              <div className="flex flex-col sm:flex-row sm:flex-wrap  gap-4 mt-8 sm:justify-center md:justify-start lg:justify-between">
                <InputItem
                  heading="Royaltes"
                  icon={<TiSocialFacebook size={24} />}
                  placeholder="facebook.com"
                />
                <InputItem
                  heading="size"
                  icon={<TiSocialTwitter size={24} />}
                  placeholder="twitter.com"
                />
                <InputItem
                  heading="propertie"
                  icon={<TiSocialInstagram size={24} />}
                  placeholder="instagram"
                />
              </div>
              <div className="mt-4">
                <InputItem
                  heading="Wallet Address"
                  icon={<TiSocialInstagram size={24} />}
                  placeholder={signer}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
