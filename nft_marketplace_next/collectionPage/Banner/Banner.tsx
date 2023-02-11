import React from "react";
import Image from "next/image";
import images from "../../public/img";

function Banner() {
  return (
    <div>
      <div>
        <Image
          src={images.creatorbackground1}
          alt="banner"
          className="w-full h-[300px] object-cover"
        />
      </div>
    </div>
  );
}

export default Banner;
