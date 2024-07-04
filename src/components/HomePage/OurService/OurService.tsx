import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const OurService = () => {
  return (
    <Box
      sx={{
        marginTop: 10,
        position: "relative",
        backgroundImage:
          "url(https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/bone-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: 700,
        minWidth: "100%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Typography color="secondary.main" fontWeight={700}>
          Our Service
        </Typography>
        <Typography fontWeight={700} sx={{
          fontSize: { xs: 30, sm: 40, md: 50 },
        }}>
          Taking Care of Pets
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", sm: 600, md: 800 },
            height: { xs: 300, sm: 400, md: 500 },
            margin: "0 auto",
          }}
        >
          <Image
            src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/diagram.png"
            alt="pet"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OurService;
