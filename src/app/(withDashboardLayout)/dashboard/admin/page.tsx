import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import PersonIcon from '@mui/icons-material/Person';

const AdminPage = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-around">
        <Box
          sx={{
            boxShadow: 1,
            borderRadius: 1,
            height: 100,
            width: "400px",
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
              <Typography fontSize={30} fontWeight={700}>94</Typography>
            </Box>
            <PetsIcon fontSize="large"/>
          </Box>
        </Box>
        <Box
          sx={{
            boxShadow: 1,
            borderRadius: 1,
            height: 100,
            width: "400px",
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
              <Typography fontSize={30} fontWeight={700}>56</Typography>
            </Box>
            <DownloadDoneIcon fontSize="large"/>
          </Box>
        </Box>
        <Box
          sx={{
            boxShadow: 1,
            borderRadius: 1,
            height: 100,
            width: "400px",
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
              <Typography fontSize={30} fontWeight={700}>24</Typography>
            </Box>
            <PersonIcon fontSize="large"/>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default AdminPage;
