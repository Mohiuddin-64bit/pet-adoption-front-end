import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import AllPetsCard from "@/components/HomePage/AllPetsCard/AllPetsCard";
import Banner from "@/components/HomePage/Banner/Banner";
import HowWeWork from "@/components/HomePage/HowWeWork/HowWeWork";
import OurService from "@/components/HomePage/OurService/OurService";
import SecondBanner from "@/components/HomePage/SecondBanner/SecondBanner";
import { Box, Button } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <SecondBanner />
      <HowWeWork />
      <OurService />
      <AllPetsCard />
    </>
  );
};

export default HomePage;
