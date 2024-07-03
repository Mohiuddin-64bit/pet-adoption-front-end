import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Banner from "@/components/HomePage/Banner/Banner";
import SecondBanner from "@/components/HomePage/SecondBanner/SecondBanner";
import { Button } from "@mui/material";
import React from "react";

const HomePage = () => {
  return <>
    <Banner />
    <AboutUs />
    <SecondBanner />
  </>;
};

export default HomePage;
