import React from "react";
import Link from "next/link";

const discover = [
  { name: "Home", link: "/" },
  {
    name: "Collection",
    link: "/collection",
  },
  {
    name: "Search",
    link: "/search",
  },
  {
    name: "Author Profile",
    link: "/author",
  },
  {
    name: "Create NFT",
    link: "/createNft",
  },
];
function Discover() {
  return (
    <ul>
      {discover.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.link}
            className="p-2 px-4 hover:bg-gray-100 block"
          >
            <li>{item.name}</li>
          </Link>
        );
      })}
    </ul>
  );
}

export default Discover;
