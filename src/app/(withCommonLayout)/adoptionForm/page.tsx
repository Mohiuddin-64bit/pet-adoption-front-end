

import AdoptionForm from "@/components/Forms/AdoptionForm";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const AdoptionFormPage = () => {
  return (
    <Container>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 10,
      }}>
        <Typography variant="h4" fontWeight={700} mb={1}>Pet adoption request</Typography>
        <Typography variant="body1" mb={3} color="gray">
          Please fill out the form below to apply for adoption.
        </Typography>
        <Box>
          {/* Form goes here */}
          <AdoptionForm />
        </Box>
      </Box>
    </Container>
  );
};

export default AdoptionFormPage;
