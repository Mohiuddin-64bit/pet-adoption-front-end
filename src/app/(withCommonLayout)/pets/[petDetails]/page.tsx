"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const PetDetailsPage = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#F1F1F1",
          width: "100%",
          px: { xs: 2, sm: 3, md: 5 },
        }}
      >
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              position: "relative",
              width: { xs: "100%", md: "300px" },
              height: { xs: "300px", lg: "600px" },
            }}
          >
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper w-full h-full"
            >
              {[
                "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/twenty20_11401931-f092-4214-861c-c8ea63b45e67-1024x683.jpg",
                "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/twenty20_11401931-f092-4214-861c-c8ea63b45e67-1024x683.jpg",
                "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/twenty20_11401931-f092-4214-861c-c8ea63b45e67-1024x683.jpg",
                "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/twenty20_11401931-f092-4214-861c-c8ea63b45e67-1024x683.jpg",
              ].map((imageUrl, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={imageUrl}
                    alt="pet"
                    layout="fill"
                    objectFit="cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
          <Grid item xs={12} md={6} px={{ xs: 2, md: 5 }}>
            <Typography
              fontSize={{ xs: 12, md: 42 }}
              fontWeight={700}
              mb={{ xs: 1, md: 1 }}
            >
              Meet Charlie
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
                maxWidth: "300px",
              }}
            >
              <Box>
                <Typography fontSize={16}>
                  <Box
                    component="span"
                    fontWeight={700}
                    color="#5B5B5B"
                    letterSpacing={1}
                  >
                    Gender:
                  </Box>{" "}
                  Male
                </Typography>
                <Typography fontSize={16}>
                  <Box
                    component="span"
                    fontWeight={700}
                    color="#5B5B5B"
                    letterSpacing={1}
                  >
                    Neutered:
                  </Box>{" "}
                  Yes
                </Typography>
                <Typography fontSize={16}>
                  <Box
                    component="span"
                    fontWeight={700}
                    color="#5B5B5B"
                    letterSpacing={1}
                  >
                    Age:
                  </Box>{" "}
                  1 year
                </Typography>
              </Box>
            </Box>
            <Typography color="gray" mb={5}>
              Loves to go out for walks and walks very good on a lead. He is
              very inquisitive and is always on the lookout for rabbits. This
              boy adores human cuddles and loves to snuggle into you.
            </Typography>
            <Button
              sx={{
                mb: 3,
              }}
              variant="contained"
              color="primary"
            >
              Adopt Me
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Container
        sx={{
          marginTop: 5,
        }}
      >
        <Box>
          <Typography fontSize={33} fontWeight={700} mb={3}>
            About Charlie
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 1, sm: 5 },
              alignItems: "center",
            }}
          >
            <Typography fontSize={16} color="gray" mb={5}>
              <PetsIcon
                sx={{
                  color: "secondary.main",
                  fontSize: "sm",
                }}
              />{" "}
              Friendly to other dogs
            </Typography>
            <Typography fontSize={16} color="gray" mb={5}>
              <PetsIcon
                sx={{
                  color: "secondary.main",
                  fontSize: "sm",
                }}
              />{" "}
              Good for Apartments
            </Typography>
            <Typography fontSize={16} color="gray" mb={5}>
              <PetsIcon
                sx={{
                  color: "secondary.main",
                  fontSize: "sm",
                }}
              />{" "}
              Friendly with Children
            </Typography>
          </Box>
          <Typography color="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
            consequat purus, facilisis iaculis nulla. Mauris vel leo bibendum,
            imperdiet justo a, pharetra metus. Pellentesque eget convallis orci.
            Donec in enim eu ex lacinia commodo. Maecenas et mi ante. Donec at
            condimentum lorem. Morbi egestas magna porta, gravida nibh mollis,
            suscipit mauris. Integer mollis vestibulum ante eu gravida. Mauris
            fringilla lectus arcu, mattis porta ex fringilla pretium.
          </Typography>
          <Typography my={5} color="gray">
            Praesent vestibulum magna vel fermentum dictum. Donec eget semper
            orci, sit amet volutpat nisi. Phasellus in erat quis leo hendrerit
            faucibus sed non justo. Fusce laoreet laoreet rhoncus.
          </Typography>

          <Box
            sx={{
              backgroundColor: "#FEF4DF",
              padding: 5,
              borderRadius: 5,
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            <Typography fontWeight={700} mb={2}>
              <AttachFileIcon
                sx={{
                  mr: 1,
                }}
              />
              Adoption Rules
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
              consequat purus, facilisis iaculis nulla. Mauris vel leo bibendum,
              imperdiet justo a, pharetra metus. Pellentesque eget convallis
              orci. Donec in enim eu ex lacinia commodo. Maecenas et mi ante.
              Donec at condimentum lorem.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PetDetailsPage;
