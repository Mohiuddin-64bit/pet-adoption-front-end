import { TPet } from "@/types";
import { Box, TextField } from "@mui/material";
import React from "react";

const SearchBar = ({setSearchQuery}:any) => {
  return (
    <Box
      sx={{
        margin: "40px 0",
        backgroundColor: "#fff",
        borderRadius: "5px",
        textAlign: "right",
      }}
    >
      <TextField
        id=""
        label="Search for pets"
        variant="outlined"
        margin="normal"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
