import React from "react";
import images from "../../public/img";
import Image from "next/image";
import { Button } from "../rootindex";
const itemSerivces = [
  images.service1,
  images.service2,
  images.service3,
  images.service4,
];
function Service() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
      {itemSerivces.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-between"
          >
            <Image src={item} alt="service" />
            <div className="mt-4">
              <Button btnName="Step 1" />
            </div>
            <h2 className="text-xl font-medium my-4">Filter & Discover</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              eius quisquam minima? .
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Service;
