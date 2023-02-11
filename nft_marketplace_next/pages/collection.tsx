import { Awesome, Banner } from "@/collectionPage";
import React from "react";
import { Filter, ListNFTCard, NFTCard } from "@/components/Common";
import images from "../public/img";
const CardArray = [
  { image: images.nft_image_1, name: "Loto", price: 12.3, tokenId: 3 },
  { image: images.nft_image_2, name: "Loto", price: 2.3, tokenId: 3 },
  { image: images.nft_image_3, name: "Loto", price: 2.3, tokenId: 3 },
  { image: images.nft_image_1, name: "Loto", price: 1.3, tokenId: 3 },
  { image: images.nft_image_3, name: "Loto", price: 1.2, tokenId: 3 },
  { image: images.nft_image_2, name: "Loto", price: 12.3, tokenId: 3 },
  { image: images.nft_image_1, name: "Loto", price: 12.3, tokenId: 3 },
  { image: images.nft_image_2, name: "Loto", price: 12.3, tokenId: 3 },
  { image: images.nft_image_1, name: "Loto", price: 12.3, tokenId: 3 },
];
function CollectionPage() {
  return (
    <div className="">
      <Banner />
      <div className="px-5 md:px-10 lg:px-20">
        <Awesome />
        <Filter
          btnName1="All NFT"
          btnName2="Musics"
          btnName3="Sport"
          btnChoice="Filter"
        />
        <ListNFTCard DataArray={CardArray} Images={true} />
      </div>
    </div>
  );
}

export default CollectionPage;
