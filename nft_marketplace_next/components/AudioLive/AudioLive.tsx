import React from "react";
import { AudioCard, AudioCardSmall, Title } from "../Common";

function AudioLive() {
  return (
    <div className="mt-10">
      <Title
        heading="Audio Collection"
        paragrap="Discover the mosting outstanding NFTs in all topics of life"
      />
      <div className="flex flex-col flex-wrap md:flex-row gap-3 mt-10">
        <div className="md:w-[calc((100%-12px)/2)] xl:flex-[0.35]">
          <AudioCard />
        </div>
        <div className="md:w-[calc((100%-12px)/2)] xl:flex-[0.35]">
          <AudioCard />
        </div>
        <div className=" xl:flex-[0.3] grid grid-rows-3 gap-5">
          <AudioCardSmall />
          <AudioCardSmall />
          <AudioCardSmall />
        </div>
      </div>
    </div>
  );
}

export default AudioLive;
