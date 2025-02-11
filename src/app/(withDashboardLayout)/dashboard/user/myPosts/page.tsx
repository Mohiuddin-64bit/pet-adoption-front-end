"use client";

import LoadingBar from "@/components/LoadingBar/LoadingBar";
import { useGetAllPetQuery } from "@/redux/api/petsApi";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

const MyPosts = () => {
  const { data, isLoading } = useGetAllPetQuery({});

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
        {isLoading && <LoadingBar />}
        {data?.length === 0 && (
          <Typography>
            You have not posted any pets
            <Link href="/dashboard/user/newAdoptionPost">Add from Here</Link>
          </Typography>
        )}
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
                image={item.petPhoto}
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyPosts;
