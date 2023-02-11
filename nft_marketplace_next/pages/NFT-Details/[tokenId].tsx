import { Button2 } from "@/components/rootindex";
import { MarketContext } from "@/context/MarketProvider";
import { nftDetail } from "@/TypeProps";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { MdCloudUpload, MdTimer, MdVerified } from "react-icons/md";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import images from "../../public/img";

function NFT_TokenId() {
  const [nftDetail, setNftDetail] = useState<nftDetail>();
  const [isDescription, setIsDescription] = useState<boolean>(false);
  const [isDetail, setIsDetail] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  //@ts-ignore
  const { transaction, buyNFT, isTransaction, fetchAllNft, setIsTransaction } =
    useContext(MarketContext);
  //@ts-ignore
  const { signer } = useContext(MarketContext);
  useEffect(() => {
    if (router.isReady) {
      //@ts-ignore
      async function run() {
        const respone = await fetchAllNft();
        const data = await Promise.all(respone);
        const querys = router.query.tokenId;
        const filterData = data.filter((item: nftDetail) => {
          return item.tokenId.toString() === querys;
        });
        setNftDetail(filterData[0]);
      }
      run();
    }
  }, [router.isReady]);
  const handleBuy = async () => {
    setIsLoading(true);
    await buyNFT(nftDetail);
    setIsLoading(false);
  };
  const handleClose = () => {
    setIsTransaction(false);
    router.push("/author");
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row px-5 md:px-10 lg:px-20 pt-10 gap-16">
      {/* left */}
      <div className="flex-[0.5]">
        <div>
          <img
            src={nftDetail?.image}
            alt="img-detail"
            className="rounded-xl w-full h-[540px] object-cover"
          />
        </div>
        <div className="mt-5">
          <div
            onClick={() => setIsDescription(!isDescription)}
            className="px-4 flex items-center justify-between bg-yellow-400 rounded-lg p-2 mb-4 cursor-pointer hover:opacity-70 text-black"
          >
            <h3 className="">Description</h3>
            {isDescription ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>
          {isDescription ? (
            <p className="p-2 bg-gray-200 rounded-md mb-4 text-black">
              {nftDetail?.description}
            </p>
          ) : (
            ""
          )}
          <div
            onClick={() => setIsDetail(!isDetail)}
            className="bg-yellow-400 rounded-lg p-2 mb-4 cursor-pointer hover:opacity-70 flex px-4 items-center justify-between text-black"
          >
            <h3>Detail</h3>
            {isDetail ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>
          {isDetail ? (
            <div className="p-2 bg-gray-200 rounded-md text-black">
              <p>2000x2000 pxImage(658KB)</p>
              <p>Seller: {nftDetail?.seller}</p>
              <p className="mt-4">TokenID: {nftDetail?.tokenId.toString()}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* right */}
      <div className="flex-[0.5]">
        <div className="flex items-center justify-between">
          <small className="bg-yellow-400 py-1 px-3 rounded-full font-medium text-black">
            Vitural Worlds
          </small>
          <div className="flex items-center gap-8">
            <MdCloudUpload
              size={24}
              className="cursor-pointer hover:opacity-50"
            />
            <BsThreeDots
              size={24}
              className="cursor-pointer hover:opacity-50"
            />
          </div>
        </div>
        <div className="mt-10">
          {/* top */}
          <h1 className="text-4xl font-bold">
            {nftDetail?.name}#{nftDetail?.tokenId.toString()}
          </h1>
          {/* name infor */}
          <div className="flex items-center justify-between max-w-[360px] mt-6">
            <div className="flex items-center">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <Image
                  src={images.user1}
                  alt="user1"
                  className="h-full object-cover"
                />
              </div>
              <div className="ml-3">
                <h4 className="leading-5">Creator</h4>
                <div className="flex items-center">
                  <p className="font-medium">Tran Chinh</p>
                  <MdVerified />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <Image
                  src={images.creatorbackground1}
                  alt="user1"
                  className="h-full object-cover"
                />
              </div>
              <div className="ml-3 flex flex-col justify-center">
                <h4 className="leading-5">Collection</h4>
                <div className="flex items-center">
                  <p className="font-medium">{nftDetail?.category}</p>
                  <MdVerified />
                </div>
              </div>
            </div>
          </div>
          {/* time and price */}
          <div className="mt-6">
            {/* time */}
            <div>
              <div className="flex items-center gap-3">
                <MdTimer />
                <p>Auction ending in</p>
              </div>
              <div className="mt-6 flex items-center gap-8">
                <div>
                  <h3 className="text-4xl font-extrabold">2</h3>
                  <p className="mt-4 font-medium ">Days</p>
                </div>
                <div>
                  <h3 className="text-4xl font-extrabold">22</h3>
                  <p className="mt-4 font-medium ">Hours</p>
                </div>
                <div>
                  <h3 className="text-4xl font-extrabold">45</h3>
                  <p className="mt-4 font-medium ">Minutes</p>
                </div>
                <div>
                  <h3 className="text-4xl font-extrabold">12</h3>
                  <p className="mt-4 font-medium ">Seconds</p>
                </div>
              </div>
            </div>
            {/* price */}
            <div className="max-w-[360px] border-2 border-yellow-400 mt-10 rounded-xl">
              <div className="-translate-y-[16px] ml-5">
                <div className="bg-yellow-400 rounded-md p-1 px-2 inline-block text-black">
                  Current Bid
                </div>
                <p className="font-medium text-xl">
                  {nftDetail?.price} ETH (=={" "}
                  {
                    //@ts-ignore
                    nftDetail?.price * 3000
                  }{" "}
                  USD)
                </p>
              </div>
            </div>
          </div>
          {/* buy NFT */}
          <div className="mt-10 flex items-center gap-6">
            <div>
              {nftDetail?.seller === signer || nftDetail?.owner === signer ? (
                <p className="text-lg text-yellow-800">
                  You can't buy your own NFT
                </p>
              ) : (
                <button
                  onClick={handleBuy}
                  className="py-3 px-12 rounded-full bg-yellow-400 text-black"
                >
                  Buy NFT{" "}
                  {isLoading && (
                    <Image
                      src={images.loadingIcon}
                      alt="loading"
                      width={24}
                      height={24}
                      className="rounded-full ml-4 inline-block"
                    />
                  )}
                </button>
              )}
            </div>
            <div>
              <Button2 heading="Make Offer" />
            </div>
          </div>
        </div>
      </div>
      {isTransaction && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#05050a99]">
          <div className="w-[300px] absolute top-[70px] z-[100] left-[50%] -translate-x-[50%] rounded-xl text-center p-4 bg-gray-600">
            <h3 className="text-lg font-medium">Buy NFT</h3>
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

export default NFT_TokenId;
