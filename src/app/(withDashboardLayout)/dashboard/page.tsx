import { Box, Typography } from "@mui/material";
import React from "react";

const DashboardHomePage = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          mb: 5,
          textAlign: "center",
          fontWeight: "medium",
          
        }}
      >
        Welcome to the Dashboard
      </Typography>
    </Box>
  );
};

export default DashboardHomePage;
