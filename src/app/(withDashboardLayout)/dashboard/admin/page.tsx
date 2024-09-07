"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import PersonIcon from "@mui/icons-material/Person";
import BarChartComponent from "@/components/Dashboard/BarChartComponent/BarChartComponent";
import PieChartComponent from "@/components/Dashboard/PieChartComponent/PieChartComponent";

const AdminPage = () => {
  return (
    <Box>
      <Stack>
        <Box>
          
        </Box>
      </Stack>
      <Stack direction={{xs: "column", md: "row"}} justifyContent="space-between">
        <Box
          sx={{
            boxShadow: 1,
            borderRadius: 1,
            height: 100,
            width: {xs: "100%", md: "400px"},
            padding: "8px 16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box>
              <Typography>Total Pets</Typography>
              <Typography fontSize={30} fontWeight={700}>
                94
              </Typography>
            </Box>
            <PetsIcon fontSize="large" />
          </Box>
        </Box>
        <Box
          sx={{
            boxShadow: 1,
            borderRadius: 1,
            height: 100,
            width: {xs: "100%", md: "400px"},
            padding: "8px 16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box>
              <Typography>Total Adoption</Typography>
              <Typography fontSize={30} fontWeight={700}>
                56
              </Typography>
            </Box>
            <DownloadDoneIcon fontSize="large" />
          </Box>
        </Box>
        <Box
          sx={{
            boxShadow: 1,
            borderRadius: 1,
            height: 100,
            width: {xs: "100%", md: "400px"},
            padding: "8px 16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box>
              <Typography>Total User</Typography>
              <Typography fontSize={30} fontWeight={700}>
                24
              </Typography>
            </Box>
            <PersonIcon fontSize="large" />
          </Box>
        </Box>
      </Stack>
      <Grid container spacing={5}>
        <Grid item sm={12} lg={4}>
          <Box
            sx={{
              background: "#fff",
              boxShadow: 1,
              borderRadius: 1,
              padding: 2,
              marginTop: 5,
            }}
          >
            <Typography mb={3} fontSize={18} fontWeight={700}>
              Pie Chart
            </Typography>
            <PieChartComponent />
          </Box>
        </Grid>
        <Grid item sm={12} lg={8}>
          <Box
            sx={{
              background: "#fff",
              boxShadow: 1,
              borderRadius: 1,
              padding: 2,
              marginTop: 5,
            }}
          >
            <Typography mb={3} fontSize={18} fontWeight={700}>
              Bar Chart
            </Typography>
            <BarChartComponent />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminPage;
