"use client";

import PetFileUploader from "@/components/Forms/PetFileUploader";
import PetForm from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

export const validationSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  species: z.string().min(3, "Species must be at least 3 characters"),
  breed: z.string().min(3, "Breed must be at least 3 characters"),
  age: z.string().min(1, "Age must be at least 1 character"),
  size: z.string().min(1, "Size must be at least 1 character"),
  location: z.string().min(3, "Location must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  temperament: z.string().min(3, "Temperament must be at least 3 characters"),
  medicalHistory: z
    .string()
    .min(3, "Medical History must be at least 3 characters"),
  adoptionRequirements: z
    .string()
    .min(3, "Adoption Requirements must be at least 3 characters"),
});

const NewAdoptionPostPage = () => {
  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <Container
      sx={{
        boxShadow:
          "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;",
        borderRadius: "10px",
        overflow: "hidden",
        padding: "30px",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        New Adoption Post
      </Typography>
      <PetForm
        onSubmit={handleFormSubmit}
        resolver={zodResolver(validationSchema)}
        defaultValues={{
          name: "",
          species: "",
          breed: "",
          age: "",
          size: "",
          location: "",
          description: "",
          temperament: "",
          medicalHistory: "",
          adoptionRequirements: "",
        }}
      >
        <Grid container spacing={2} my={1}>
          <Grid item md={4}>
            <PetInput name="name" label="Name" type="name" fullWidth={true} />
          </Grid>
          <Grid item md={4}>
            <PetInput
              name="species"
              label="Species"
              type="species"
              fullWidth={true}
            />
          </Grid>
          <Grid item md={4}>
            <PetInput
              name="breed"
              label="Breed"
              type="breed"
              fullWidth={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} my={1}>
          <Grid item md={4}>
            <PetInput name="age" label="Age" type="age" fullWidth={true} />
          </Grid>
          <Grid item md={4}>
            <PetInput name="size" label="Size" type="size" fullWidth={true} />
          </Grid>
          <Grid item md={4}>
            <PetInput
              name="location"
              label="Location"
              type="location"
              fullWidth={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} my={1}>
          <Grid item md={12}>
            <PetInput
              name="description"
              label="Description"
              type="description"
              fullWidth={true}
            />
          </Grid>
          <Grid item md={6}>
            <PetInput
              name="temperament"
              label="Temperament"
              type="temperament"
              fullWidth={true}
            />
          </Grid>
          <Grid item md={6}>
            <PetInput
              name="medicalHistory"
              label="Medical History"
              type="medicalHistory"
              fullWidth={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} my={1}>
          <Grid item md={12}>
            <PetInput
              name="adoptionRequirements"
              label="Adoption Requirements"
              type="adoptionRequirements"
              fullWidth={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} my={1}>
          <Grid item md={12}>
            <PetFileUploader
              name="file"
              label="Upload Image"
              accept="image/*"
              multiple={false}
              sx={{ display: "none" }}
              required={true}
              fullWidth={true}
            />
          </Grid>
        </Grid>
        {/* <Box mt={2}>
          <PetFileUploader
            name="file"
            label="Upload Image"
            accept="image/*"
            multiple={false}
            sx={{ display: "none" }}
            required={true}
            fullWidth={true}
          />
        </Box> */}
        <Button
          sx={{
            margin: "10px 0px",
          }}
          type="submit"
        >
          Submit
        </Button>
      </PetForm>
    </Container>
  );
};

export default NewAdoptionPostPage;
