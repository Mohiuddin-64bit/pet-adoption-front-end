import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Banner from "@/components/HomePage/Banner/Banner";
import HowWeWork from "@/components/HomePage/HowWeWork/HowWeWork";
import SecondBanner from "@/components/HomePage/SecondBanner/SecondBanner";
import { Button } from "@mui/material";
import React from "react";

const HomePage = () => {
  return <>
    <Banner />
    <AboutUs />
    <SecondBanner />
    <HowWeWork />
  </>;
};

export default HomePage;
