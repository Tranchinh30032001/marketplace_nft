import React from "react";
import Image from "next/image";
import images from "../../public/img";
import { Button } from "../rootindex";
import { useRouter } from "next/router";

function EarnFree() {
  const router = useRouter();
  return (
    <div className="flex items-center gap-10">
      {/* left */}
      <div className="flex-[0.4]">
        <h1 className="text-[60px] font-extrabold mb-4">
          Earn free crypto with Ciscrypt
        </h1>
        <p>a creative agency that lead and insprie</p>
        <div className="mt-8 flex items-center gap-8">
          <Button
            btnName="Create"
            handleClick={() => router.push("/createNft")}
          />
          <Button btnName="Discover" />
        </div>
      </div>
      {/* right */}
      <div className="flex-[0.6]">
        <Image src={images.earn} alt="earn" />
      </div>
    </div>
  );
}

export default EarnFree;
