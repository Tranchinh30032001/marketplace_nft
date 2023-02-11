import React, { useState } from "react";
import { Title } from "@/components/Common";
import { UploadNFT } from "@/createNftPage";
import { useContext } from "react";
import { MarketContext } from "@/context/MarketProvider";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";

function CreateNftPage() {
  //@ts-ignore
  const { transaction, isTransaction, setIsTransaction } =
    useContext(MarketContext);
  const router = useRouter();
  const handleClose = () => {
    console.log("hellelele");
    setIsTransaction(false);
    router.push("/search");
  };
  return (
    <div className="px-5 md:px-10 lg:px-20 pt-10">
      <div>
        <div className="max-w-[500px]">
          <Title
            heading="Create new NFT"
            paragrap="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum delectus placeat porro similique a laborum adipisci ullam nulla"
          />
        </div>
        <hr className="my-8" />
        <Title
          heading="Image, Video Audio, or 3D Model"
          paragrap="File types supported: JPG, PNG, GIF, SVG, MP4, MP3, OGG, GLB. Max size: 100MB"
        />
        <hr className="my-8" />
      </div>
      <div>
        <UploadNFT />
      </div>

      {/* alert transaction */}
      {isTransaction && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#05050a99]">
          <div className="w-[300px] absolute top-[70px] z-[100] left-[50%] -translate-x-[50%] rounded-xl text-center p-4 bg-gray-600">
            <h3 className="text-lg font-medium">Create NFT</h3>
            <i>(Your transaction successfully)</i>
            <Link
              href={`https://goerli.etherscan.io/tx/${transaction.hash}`}
              className="p-1 px-4 border-blue-600 border-2 rounded-md bg-blue-800 text-white mt-3 block hover:opacity-60"
            >
              <p>
                {transaction.hash.slice(0, 10)}.....
                {transaction.hash.slice(-10)}
              </p>
            </Link>
            <div
              onClick={handleClose}
              className="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer hover:opacity-40 "
            >
              <GrClose />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateNftPage;
