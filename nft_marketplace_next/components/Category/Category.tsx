import React from "react";
import images from "../../public/img";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";
import { Title } from "../Common";

const CategoryArray = [
  {
    images: images.creatorbackground1,
    name: "Dance Monkey",
  },
  {
    images: images.creatorbackground2,
    name: "Sports",
  },
  {
    images: images.creatorbackground3,
    name: "Entirtment Art",
  },
  {
    images: images.creatorbackground4,
    name: "Time Life",
  },
  {
    images: images.creatorbackground5,
    name: "Animals Art",
  },
  {
    images: images.creatorbackground6,
    name: "Music",
  },
  {
    images: images.creatorbackground7,
    name: "Digital Arts",
  },
  {
    images: images.creatorbackground8,
    name: "Hubby",
  },
  {
    images: images.creatorbackground8,
    name: "Bad Arts",
  },
  {
    images: images.creatorbackground9,
    name: " Arts",
  },
  {
    images: images.creatorbackground10,
    name: "My Fav",
  },
];
function Category() {
  return (
    <div>
      <Title
        heading="Browse by category"
        paragrap="Explore the NFTs in the most featured categories"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {CategoryArray.map((item, index) => {
          return (
            <div className="" key={index}>
              <Image
                src={item.images}
                alt="image"
                className="rounded-lg mb-2 overflow-hidden w-[300px] h-[120px]"
              />
              <div className="flex items-center gap-4">
                <BsCircleFill size={30} />
                <div className="">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="leading-4">1995 NFTs</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
