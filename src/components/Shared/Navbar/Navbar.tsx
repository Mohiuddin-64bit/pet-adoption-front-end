"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = () => {
  const AuthMenus = dynamic(() => import("@/components/UI/AuthMenus"), {
    ssr: false,
  });

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
        position: { xs: "relative", md: "sticky" },
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
        ml={5}
        gap={4}
        justifyContent="space-between"
      >
        <Typography fontWeight={700} component={Link} href="/">
          Home
        </Typography>
        <Typography fontWeight={700} component={Link} href="/allPets">
          Pets
        </Typography>
        <Typography fontWeight={700} component={Link} href="/about">
          About
        </Typography>
        <Typography fontWeight={700} component={Link} href="/contact">
          Contact
        </Typography>
      </Stack>

      {/* Call Us and profile */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        <AuthMenus />

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
          {/* Call us */}
          <Box>
            <Typography fontSize={16} fontWeight={700}>
              123-456-7890
            </Typography>
            <Typography color="gray" fontSize={13}>
              Call Us Today
            </Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Navbar;
