

import PetsCard from "@/components/UI/PetsCard";
import SearchBar from "@/components/UI/SearchBar";
import { Box, Container, Typography } from "@mui/material";
import React from "react";


const AllPetsCard = async() => {

    const allPets = await fetch("http://localhost:8000/api/v1/pets/all");
    const pets = await allPets.json();

  return (
    <Container
      sx={{
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Box textAlign="center">
        <Typography color="secondary.main" fontSize={20}>
          Available Pets
        </Typography>
        <Typography fontSize={45} fontWeight={700}>
          Find Your New Friend
        </Typography>
      </Box>
      <SearchBar />
      <PetsCard pets={pets}/>
    </Container>
  );
};

export default AllPetsCard;
