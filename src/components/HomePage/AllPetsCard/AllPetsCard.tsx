import PetsCard from "@/components/UI/PetsCard";
import SearchBar from "@/components/UI/SearchBar";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import React from "react";

const AllPetsCard = async () => {
  const allPets = await fetch(
    "https://pet-addoption-backend-main.vercel.app/api/v1/pets/all"
  );
  const pets = await allPets.json();

  return (
    <Container
      id="allPets"
      sx={{
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Box textAlign="center" mb={5}>
        <Typography color="secondary.main" fontSize={20}>
          Available Pets
        </Typography>
        <Typography fontSize={45} fontWeight={700}>
          Find Your New Friend
        </Typography>
      </Box>
      <PetsCard pets={pets} />
      <Box textAlign="center" mt={5}>
        <Link href="/allPets">
          <Button variant="contained" color="secondary">
            View More
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default AllPetsCard;
