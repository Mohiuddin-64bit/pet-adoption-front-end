import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1D1D1D",
        color: "white",
        padding: "20px 0",
      }}
    >
      <Container>
        <Box
          sx={{
            padding: "20px 0",
          }}
        >
          <Typography
            fontWeight={700}
            textAlign="center"
            color="white"
            fontSize={28}
          >
            <Box component="span" color="primary.main">
              Pet
            </Box>{" "}
            Adoption
          </Typography>
        </Box>
        <div className="w-full border-b border-gray-700" />
        <Grid container gap={3} justifyContent="space-between" mt={8}>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box>
              <Image
                src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/footer-icon-1.png"
                alt="icon1"
                width={86}
                height={86}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography color="white">516 Columbia Blvd</Typography>
              <Typography color="white">Sonoma, CA 21202</Typography>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box>
              <Image
                src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/footer-icon-2.png"
                alt="icon1"
                width={86}
                height={86}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography color="white">Office: 772-619-6309</Typography>
              <Typography color="white">Inquiries: 772-619-6432</Typography>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box>
              <Image
                src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/footer-icon-3.png"
                alt="icon1"
                width={86}
                height={86}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography color="white">Mon - Fri: 9am - 8pm</Typography>
              <Typography color="white">Sat - Sun: Closed</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          backgroundColor: "#232323",
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 2, sm: 4 },
          padding: "20px 0",
          mt: 8,
        }}
      >
        <Typography color="gray">Home</Typography>
        <Typography color="gray">About</Typography>
        <Typography color="gray">Services</Typography>
        <Typography color="gray">Blog</Typography>
        <Typography color="gray">Contact</Typography>
      </Box>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 0",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Typography textAlign="center" color="gray">
          © 2022 Pet Adoption. All Rights Reserved.
        </Typography>
        <Typography textAlign="center" color="gray">
          Privacy Policy
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
