"use client";

import { Box } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "../UI/SearchBar";
import PetsCard from "../UI/PetsCard";

const AllPetsComponent = ({ pets }: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredPets = pets?.data?.filter(
    (pet: any) =>
      pet?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pet?.breed?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pet?.type?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Box>
      <SearchBar setSearchQuery={setSearchQuery} />
      <PetsCard pets={filteredPets} />
    </Box>
  );
};

export default AllPetsComponent;
