import { Banner } from "@/collectionPage";
import { Filter, ListNFTCard, SearchBar } from "@/components/Common";
import { BsSearch, BsArrowRight } from "react-icons/bs";
import images from "../public/img";
import React, { useEffect, useContext, useState, useCallback } from "react";
import { MarketContext } from "@/context/MarketProvider";
import { dataSearch } from "@/TypeProps";
import Image from "next/image";
function SearchPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All NFT");
  const [dataSearch, setDataSearch] = useState<dataSearch[]>();
  console.log("dataSearch: ", dataSearch);
  const [loading, setLoading] = useState(true);
  const handleCategory = useCallback(
    (category: string) => {
      setActiveCategory(category);
    },
    [activeCategory]
  );
  //@ts-ignore
  const { fetchNFTs } = useContext(MarketContext);
  useEffect(() => {
    setLoading(true);
    async function run() {
      const result = await fetchNFTs();
      const data = await Promise.all(result);
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
      const filterCustomData: dataSearch[] = customData.filter(
        (item: dataSearch) => {
          if (activeCategory === "All NFT") {
            return true;
          } else {
            if (item.category !== activeCategory) {
              return false;
            }
            return true;
          }
        }
      );
      setDataSearch(filterCustomData);
      setLoading(false);
    }
    run();
  }, [activeCategory]);
  return (
    <div className="px-5 md:px-10 lg:px-20 pt-10">
      <Banner />
      <div className="mt-10">
        <SearchBar
          placeholder="Type your keyword..."
          icon1={<BsSearch />}
          icon2={<BsArrowRight />}
        />
      </div>
      <div className="mt-[80px]">
        <Filter
          categoryActive={activeCategory}
          handleClick={handleCategory}
          btnName1="All NFT"
          btnName2="Arts"
          btnName3="Musics"
          btnName4="Sports"
          btnName5="Photography"
          btnChoice="Filter"
        />
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

export default SearchPage;
