// "use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import AttachFileIcon from "@mui/icons-material/AttachFile";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import PetsCarousel from "@/components/UI/PetsCarousel";
import AdoptModal from "./component/AdoptModal";
import AdoptButton from "./component/AdoptButton";

type TProps = {
  params: {
    petDetails: string;
  };
};

type TPet = {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  temperament: string;
  medicalHistory: string;
  adoptionRequirements: string;
  description: string;
  petPhoto: string[];
};

const PetDetailsPage = async ({ params }: TProps) => {
  const singlePet = await fetch(
    `https://pet-addoption-backend-main.vercel.app/api/v1/pets/${params.petDetails}`
  );
  const pets = await singlePet.json();
  const pet = pets.data;

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
            <PetsCarousel petImage={pet?.petPhoto} />
          </Grid>
          <Grid item xs={12} md={6} px={{ xs: 2, md: 5 }}>
            <Typography
              fontSize={{ xs: 12, md: 42 }}
              fontWeight={700}
              mb={{ xs: 1, md: 1 }}
            >
              {pet?.name}
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
                    Species:
                  </Box>{" "}
                  {pet?.species}
                </Typography>
                <Typography fontSize={16}>
                  <Box
                    component="span"
                    fontWeight={700}
                    color="#5B5B5B"
                    letterSpacing={1}
                  >
                    breed:
                  </Box>{" "}
                  {pet?.breed}
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
                  {pet?.age} months
                </Typography>
                <Typography fontSize={16}>
                  <Box
                    component="span"
                    fontWeight={700}
                    color="#5B5B5B"
                    letterSpacing={1}
                  >
                    Temperament:
                  </Box>{" "}
                  {pet?.temperament}
                </Typography>
                <Typography fontSize={16}>
                  <Box
                    component="span"
                    fontWeight={700}
                    color="#5B5B5B"
                    letterSpacing={1}
                  >
                    Medical History:
                  </Box>{" "}
                  {pet?.medicalHistory}
                </Typography>
                <Typography fontSize={16}>
                  <Box
                    component="span"
                    fontWeight={700}
                    color="#5B5B5B"
                    letterSpacing={1}
                  >
                    Adoption Requirements:
                  </Box>{" "}
                  {pet?.adoptionRequirements}
                </Typography>
              </Box>
            </Box>
            <AdoptButton id={pet?.id} />
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
            About {pet?.name}
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
          <Typography color="gray">{pet?.description}</Typography>

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
              Adoption Requirements
            </Typography>
            <Typography>{pet?.adoptionRequirements}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PetDetailsPage;
