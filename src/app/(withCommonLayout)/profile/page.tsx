import PetsCard from "@/components/UI/PetsCard";
import { Container, Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ResponsiveProfile = () => {
  return (
    <Container
      sx={{
        py: 12,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { xs: 200, sm: 250, md: 300 },
          position: "relative",
          borderRadius: 1,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1441441247730-d09529166668?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-lg"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: 1,
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 40, sm: 10 },
            left: { xs: 10, sm: 200, md: 250 },
            p: 4,
          }}
        >
          <Typography variant="h5" fontWeight={700} color="white">
            John Doe
          </Typography>
          <Typography variant="body1" color="white">
            mohiuddin.niddu@gmail.com
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: -80, sm: -100, md: -120 },
            left: { xs: 10, sm: 20 },
            p: 4,
          }}
        >
          <Box
            sx={{
              width: { xs: 100, sm: 150, md: 200 },
              height: { xs: 100, sm: 150, md: 200 },
              borderRadius: "50%",
              overflow: "hidden",
              border: "5px solid white",
              boxShadow: 1,
              position: "relative",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        </Box>
      </Box>
      {/* About me */}
      <Box
        sx={{
          mt: 20,
        }}
      >
        <Typography variant="h4" fontWeight={700} mb={2}>
          About Me
        </Typography>
        <Typography variant="body1" color="gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Box>
      {/* My Adopted Pets */}
      <Box
        sx={{
          mt: 5,
        }}
      >
        <Typography
          variant="h4"
          my={2}
          textAlign="center"
          fontWeight={700}
        >
          My Adopted Pets
        </Typography>
        <Typography mb={3} variant="body1" textAlign="center" color="gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <PetsCard />
      </Box>
    </Container>
  );
};

export default ResponsiveProfile;
