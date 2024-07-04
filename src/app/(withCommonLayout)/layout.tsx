import Footer from "@/components/Shared/Footer/Footer";
import BottomNav from "@/components/Shared/Navbar/BottomNav";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Box } from "@mui/material";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Box sx={{
        display: { xs: "block", md: "none" },
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}>
        <BottomNav />
      </Box>
      <Footer />
    </>
  );
};

export default CommonLayout;
