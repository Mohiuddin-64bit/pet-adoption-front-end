"use client"

import { useGetAllPetPostsQuery } from "@/redux/api/petsApi";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const data = [
  {
    name: "Bella",
    age: 6,
    breed: "Labrador",
    location: "New York",
    description:
      "Bella is a sweet and loving dog who is looking for a forever home.",
  },
  {
    name: "Charlie",
    age: 3,
    breed: "Poodle",
    location: "New York",
    description:
      "Charlie is a sweet and loving dog who is looking for a forever home.",
  },
  {
    name: "Lucy",
    age: 2,
    breed: "Golden Retriever",
    location: "New York",
    description:
      "Lucy is a sweet and loving dog who is looking for a forever home.",
  },
];

const MyPosts = () => {

  const {data, isLoading} = useGetAllPetPostsQuery({});
  console.log(data);


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
      <Typography variant="h4" mb={5} align="center" gutterBottom>
        My Posts
      </Typography>
      <Grid container spacing={2}>
        {data?.map((item: any) => (
          <Grid item xs={12} sm={6} md={4} key={item.name}>
            <Card
              sx={{
                position: "relative",
              }}
            >
              <CardMedia
                sx={{
                  height: 250,
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                image="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/twenty20_11401931-f092-4214-861c-c8ea63b45e67-800x600.jpg"
                title={item.name}
              />
              <Box
                sx={{
                  top: 10,
                  right: 10,
                  width: "60px",
                  height: "60px",
                  color: "white",
                  padding: "10px",
                  borderRadius: "50%",
                  textAlign: "center",
                  fontSize: "12px",
                  position: "absolute",
                  backgroundColor: "primary.main",
                }}
              >
                <Typography color="white" fontSize={13} mt={1.5}>
                  {item.age} mo
                </Typography>
              </Box>
              <CardContent sx={{ padding: "20px" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontWeight={700}
                >
                  {item.name}
                </Typography>
                <Typography
                  lineHeight={2}
                  variant="body2"
                  color="textSecondary"
                >
                  {item.description}
                </Typography>
                <Typography
                  lineHeight={2}
                  variant="body2"
                  color="textSecondary"
                >
                  Breed: {item.breed}
                </Typography>
                <Typography
                  lineHeight={2}
                  variant="body2"
                  color="textSecondary"
                >
                  Location: {item.location}
                </Typography>
              </CardContent>
              <CardActions sx={{ padding: "0 20px", marginBottom: "20px" }}>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyPosts;
