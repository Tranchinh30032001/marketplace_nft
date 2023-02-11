import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import {
  AudioLive,
  BigNFTSlider,
  Category,
  Collection,
  Feature,
  Fllower,
  Hero,
  Service,
  ExploreSlider,
  Subscrite,
  EarnFree,
} from "@/components/rootindex";
import images from "../public/img";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="px-5 md:px-10 lg:px-20 pt-4">
      <Hero />
      <Service />
      <BigNFTSlider />
      <Subscrite />
      <Category />
      <Feature />
      <Collection />
      <Fllower />
      <AudioLive />
      <ExploreSlider />
      <div className="mt-10">
        <EarnFree />
      </div>
    </div>
  );
}
