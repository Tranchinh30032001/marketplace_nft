import React, { useEffect, useRef, useState } from "react";
import { SliderCard, Title } from "../Common";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
function ExploreSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="mt-10">
      <Title
        heading="Explore NFTs Video"
        paragrap="Click on play icon & enjoy Nfts Video"
      />

      <div className="">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Navigation]}
          breakpoints={{
            375: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2.25,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.25,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4.25,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <div className="flex justify-end gap-5 mb-5 mt-2">
            <div
              ref={prevRef}
              className="bg-gray-300 p-2 rounded-full active:opacity-25 cursor-pointer"
            >
              <TiArrowLeftThick size={26} />
            </div>
            <div
              ref={nextRef}
              className="bg-gray-300 p-2 rounded-full active:opacity-25 cursor-pointer"
            >
              <TiArrowRightThick size={26} />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default ExploreSlider;
