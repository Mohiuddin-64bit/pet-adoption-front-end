import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography component={Link} href="/" variant="h5" fontWeight={600}>
          <Box component="span" color="primary.main">
            Pet
          </Box>
          Adoption
        </Typography>
        <Stack direction="row" gap={4} justifyContent="space-between">
          <Typography component={Link} href="/">
            Home
          </Typography>
          <Typography component={Link} href="/">
            About
          </Typography>
          <Typography component={Link} href="/">
            Services
          </Typography>
          <Typography component={Link} href="/">
            Contact
          </Typography>
        </Stack>
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
