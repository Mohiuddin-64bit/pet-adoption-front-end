"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

type TProps = {
  petImage: string[];
};

const PetsCarousel = ({ petImage }: TProps) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper w-full h-full"
    >
      {petImage?.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <Image src={imageUrl} alt="pet" layout="fill" objectFit="cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PetsCarousel;
