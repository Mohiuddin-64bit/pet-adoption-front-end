import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Stack
      px={5}
      boxShadow={1}
      bgcolor={"white"}
      py={2}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Box>
        <Image src="/pet-logo.png" alt="logo" width={50} height={50} />
        <Typography fontWeight={700} textAlign="center" fontSize={11}>
          <Box component="span" color="primary.main">
            Pet
          </Box>{" "}
          Adoption
        </Typography>
      </Box>
      <Stack
        sx={{
          display: { xs: "none", md: "flex" },
        }}
        direction="row"
        gap={4}
        justifyContent="space-between"
      >
        <Typography fontWeight={700} component={Link} href="/">
          Home
        </Typography>
        <Typography fontWeight={700} component={Link} href="/">
          About
        </Typography>
        <Typography fontWeight={700} component={Link} href="/">
          Services
        </Typography>
        <Typography fontWeight={700} component={Link} href="/">
          Contact
        </Typography>
      </Stack>
      {/* Call Us */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: "primary.main",
        }}
      >
        <Box>
          <Image
            alt="phone"
            src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/phone-icon.png"
            width={50}
            height={20}
          />
        </Box>
        <Box>
          <Typography fontSize={16} fontWeight={700}>
            123-456-7890
          </Typography>
          <Typography color="gray" fontSize={13}>
            Call Us Today
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Navbar;
