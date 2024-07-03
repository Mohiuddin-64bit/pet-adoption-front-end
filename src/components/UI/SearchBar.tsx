import { Box, TextField } from "@mui/material";
import React from "react";

const SearchBar = () => {
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
      />
    </Box>
  );
};

export default SearchBar;
