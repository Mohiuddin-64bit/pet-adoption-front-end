import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const SecondBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "500px",
      }}
    >
      <Image
        src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/guy-holding-smiling-puppy_t20_JaNme9.jpg"
        alt="banner"
        layout="fill"
        objectPosition="left"
        objectFit="cover"
      />
      <Container>
        <Box>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <Typography
              style={{
                fontSize: "45px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Want a pet for your loved ones?
            </Typography>
            <Typography
              sx={{
                maxWidth: "60ch",
              }}
              color="white"
              py={4}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <Button component="a" href="#allPets">View Puppies </Button>

          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SecondBanner;
