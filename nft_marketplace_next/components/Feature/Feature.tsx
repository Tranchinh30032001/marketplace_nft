import images from "../../public/img";
import { Filter, Title } from "../Common";
import { NFTCard } from "../Common";
import { ListNFTCard } from "../Common";
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

function Feature() {
  return (
    <div className="mt-10 flex flex-col items-center md:items-stretch">
      <Title
        heading="Featured NFTs"
        paragrap="Discover the mosting outstanding NFTs in all topics of life"
      />
      <Filter
        btnName1="All NFTs"
        btnName2="Sports"
        btnName3="Musics"
        btnName4="Game"
        btnChoice="Most Recent"
      />
      <ListNFTCard DataArray={CardArray} Images={true} />
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
        {CardArray.map((item, index) => {
          return (
            <NFTCard
              key={index}
              image={item.image}
              price={item.price}
              name={item.name}
              tokenId={item.tokenId}
              Image={true}
            />
          );
        })}
      </div> */}
    </div>
  );
}

export default Feature;
