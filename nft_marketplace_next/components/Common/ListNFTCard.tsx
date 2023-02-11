import React from "react";
import NFTCard from "./NFTCard";
import NFTCardSearch from "./NFTCardSearch";

function ListNFTCard({ DataArray, Images }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
      {
        //@ts-ignore
        DataArray?.map((item, index) => {
          if (Images) {
            return (
              <NFTCard
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
                tokenId={item.tokenId}
              />
            );
          } else {
            return (
              <NFTCardSearch
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
                tokenId={item.tokenId}
              />
            );
          }
        })
      }
    </div>
  );
}

export default ListNFTCard;

// imported collection page
