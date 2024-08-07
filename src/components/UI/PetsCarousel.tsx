"use client"

import { Box, Grid } from '@mui/material'
import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from 'next/image';

const PetsCarousel = () => {
  return (
    <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper w-full h-full"
            >
              {[
                "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/twenty20_11401931-f092-4214-861c-c8ea63b45e67-1024x683.jpg",
                "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/twenty20_11401931-f092-4214-861c-c8ea63b45e67-1024x683.jpg",
                "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/twenty20_11401931-f092-4214-861c-c8ea63b45e67-1024x683.jpg",
                "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/twenty20_11401931-f092-4214-861c-c8ea63b45e67-1024x683.jpg",
              ].map((imageUrl, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={imageUrl}
                    alt="pet"
                    layout="fill"
                    objectFit="cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
  )
}

export default PetsCarousel