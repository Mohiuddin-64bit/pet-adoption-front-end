import AllPetsComponent from "@/components/allPetsComponent/AllPetsComponent";
import PetsCard from "@/components/UI/PetsCard";
import SearchBar from "@/components/UI/SearchBar";
import { Box, Container } from "@mui/material";
import React from "react";

const AllPetsPage = async () => {
  const allPets = await fetch(
    "https://pet-addoption-backend-main.vercel.app/api/v1/pets/all"
  );
  const pets = await allPets.json();
  return (
    <Container>
      <AllPetsComponent pets={pets} />
    </Container>
  );
};

export default AllPetsPage;
