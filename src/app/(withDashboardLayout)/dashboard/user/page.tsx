"use client";

import LoadingBar from "@/components/LoadingBar/LoadingBar";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const UserPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/dashboard/user/newAdoptionPost`);
  }, [router]);
  return (
    <Box>
      <LoadingBar />
    </Box>
  );
};

export default UserPage;
