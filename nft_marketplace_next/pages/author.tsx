import React, { useCallback, useEffect, useState } from "react";
import { Banner } from "../collectionPage";
import { useContext } from "react";
import { MarketContext } from "@/context/MarketProvider";
import Image from "next/image";
import images from "../public/img";
import { MdCloudUpload, MdVerified } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { Button } from "@/components/rootindex";
import { Filter, ListNFTCard } from "@/components/Common";
import { dataSearch } from "@/TypeProps";
import { useRouter } from "next/router";
function AuthorPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>("Own NFTs");
  const TranChinhAccount = "0x3A98B88F87dC415E00f6993A3CBf6EeE01b30D50";
  const [dataSearch, setDataSearch] = useState<dataSearch[]>();
  const [loading, setLoading] = useState(true);
  console.log("search: ", dataSearch);
  //@ts-ignore
  const { signer, fetchMyNFTs } = useContext(MarketContext);
  useEffect(() => {
    setLoading(true);
    async function run() {
      try {
        const respone = await fetchMyNFTs();
        const data = await Promise.all(respone);
        const customData: dataSearch[] = data.map(
          ({ image, name, price, tokenId, category, website }: dataSearch) => {
            //@ts-ignore
            tokenId = tokenId.toNumber();
            return {
              image,
              name,
              price,
              tokenId,
              category,
              website,
            };
          }
        );
        setDataSearch(customData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    setTimeout(async () => {
      await run();
    }, 2000);
  }, [signer]);
  return (
    <div>
      <Banner />
      <div className="p-4 flex items-start justify-between gap-8 max-w-[1000px] mx-auto border-2 border-yellow-400 rounded-xl mt-10">
        <div>
          <Image
            src={images.user4}
            alt="avatar"
            width={140}
            height={140}
            className="rounded-xl"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">
            {signer === TranChinhAccount ? "Tran Chinh" : "Cu May"}
          </h1>
          <i className="mb-2 block">{signer}</i>
          <p className="mb-2">
            Javascript, C++, ReactJs, Nextjs, TypeScript, Solidity, Web3,
            BlockChain
          </p>
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
        <div className="flex items-center gap-6">
          <Button btnName="Follow" />
          <MdCloudUpload />
          <BsThreeDots />
        </div>
      </div>
      <div className="mt-16 px-5 md:px-10 lg:px-20">
        <Filter categoryActive={activeCategory} btnName1="Own NFTs" />
        {loading ? (
          <div className="mt-5 flex justify-center">
            <Image
              src={images.loadingBigIcon}
              alt="loading"
              className="bg-transparent"
            />
          </div>
        ) : (
          <ListNFTCard DataArray={dataSearch} Images={false} />
        )}
      </div>
    </div>
  );
}

export default AuthorPage;
