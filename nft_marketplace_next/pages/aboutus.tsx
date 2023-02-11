import React from "react";
import images from "../public/img";
import Image from "next/image";
import { Title } from "@/components/Common";
import { EarnFree } from "@/components/rootindex";
const founderArray = [
  {
    name: "Niamh O'Shea",
    position: "Co-founder and Chief Executive",
    images: images.founder1,
  },
  {
    name: "Danien Jame",
    position: "Co-founder and Chief Executive",
    images: images.founder2,
  },
  {
    name: "Orla Dwyer",
    position: "Co-founder, Chairman",
    images: images.founder3,
  },
  {
    name: "Dara Frazier",
    position: "Co-Founder, Chief Strategy Officer",
    images: images.founder4,
  },
];
const factsArray = [
  {
    title: "10 million",
    info: "Articles have been public around the world (as of Sept. 30, 2021)",
  },
  {
    title: "100,000",
    info: "Registered users account (as of Sept. 30, 2021)",
  },
  {
    title: "220+",
    info: "Countries and regions have our presence (as of Sept. 30, 2021",
  },
];
function About() {
  return (
    <div className="px-5 md:px-10 lg:px-20 pt-16">
      {/* About US */}
      <div className="flex items-center justify-between gap-8">
        <div className="flex-[0.4]">
          <h1 className="text-4xl font-bold mb-5">🎁 About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            dolore ut, error ipsa saepe, reiciendis animi repudiandae minus
            tempora et illo omnis, atque labore voluptatum nulla expedita. Ipsa,
            aliquam dolores.
          </p>
        </div>
        <div className="flex-[0.6]">
          <Image src={images.hero2} alt="hero2" className="w-full" />
        </div>
      </div>
      {/* Fouder */}
      <div>
        <div>
          <Title
            heading="👏 Founder"
            paragrap="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between mt-10">
          {founderArray.map((item, index) => {
            return (
              <div
                key={index}
                className="p-2 hover:border-shadow-yellow cursor-pointer rounded-xl max-w-[260px]"
              >
                <div className="h-[240px]">
                  <Image
                    src={item.images}
                    alt="image"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h2 className="font-bold mt-4 mb-2">{item.name}</h2>
                <p>{item.position}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Fast Fact */}
      <div>
        <div className="max-w-[400px] mt-10">
          <h1 className="text-4xl font-bold">🧨 Fast Facts</h1>
          <p className="mt-6">
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-between text-black mt-10">
          {factsArray.map((item, index) => {
            return (
              <div key={index} className="bg-yellow-400 rounded-xl p-6">
                <h1 className="font-bold text-4xl mb-6">{item.title}</h1>
                <small className="">{item.info}</small>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-20">
        <EarnFree />
      </div>
    </div>
  );
}

export default About;
