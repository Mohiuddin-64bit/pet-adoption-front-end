"use client"

import LoadingBar from "@/components/LoadingBar/LoadingBar";
import { getUserInfo } from "@/services/auth.services";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";


const DashboardHomePage = () => {
  const { role } = getUserInfo();
  const router = useRouter();

  useEffect(() => {
    if (role) {
      router.push(`/dashboard/${role}`);
    }
  }, [role, router]);

  return (
    <>
      <Box>
        <LoadingBar />
      </Box>
    </>
  );
};

export default DashboardHomePage;