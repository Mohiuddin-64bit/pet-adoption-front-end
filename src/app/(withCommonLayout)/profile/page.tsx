"use client";

import PetsCard from "@/components/UI/PetsCard";
import { authKey } from "@/contants/authKey";
import { useGetMyProfileQuery } from "@/redux/api/myProfileApi";
import { useGetMyPetPostsQuery } from "@/redux/api/petsApi";
import { getFromLocalStorage } from "@/utils/local-storage";
import { Container, Box, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";

const MyProfilePage = () => {
  const {
    data: profile,
    isLoading: profileLoading,
    isError: profileError,
  } = useGetMyProfileQuery({});
  const { data: myAdoption, isLoading, isError } = useGetMyPetPostsQuery({});

  console.log(myAdoption);

  return (
    <Container
      sx={{
        py: 12,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { xs: 200, sm: 250, md: 300 },
          position: "relative",
          borderRadius: 1,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1441441247730-d09529166668?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-lg"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: 1,
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 40, sm: 10 },
            left: { xs: 10, sm: 200, md: 250 },
            p: 4,
          }}
        >
          <Typography variant="h5" fontWeight={700} color="white">
            {profile?.name}
          </Typography>
          <Typography variant="body1" color="white">
            {profile?.email}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: -80, sm: -100, md: -120 },
            left: { xs: 10, sm: 20 },
            p: 4,
          }}
        >
          <Box
            sx={{
              width: { xs: 100, sm: 150, md: 200 },
              height: { xs: 100, sm: 150, md: 200 },
              borderRadius: "50%",
              overflow: "hidden",
              border: "5px solid white",
              boxShadow: 1,
              position: "relative",
            }}
          >
            <Image
              src={
                profile?.profileImage ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              }
              alt="profile"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        </Box>
      </Box>
      {/* About me */}
      <Box
        sx={{
          mt: 20,
        }}
      >
        <Typography variant="h4" fontWeight={700} mb={2}>
          About Me
        </Typography>
        <Typography variant="body1" color="gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Box>
      {/* My Adopted Pets */}
      <Box
        sx={{
          mt: 5,
        }}
      >
        <Typography variant="h4" my={2} textAlign="center" fontWeight={700}>
          My Adopted Pets
        </Typography>
        {isLoading && <Typography textAlign="center">Loading...</Typography>}
        {myAdoption?.length === 0 && (
          <Typography textAlign="center">No pets found!!</Typography>
        )}
        <PetsCard pets={myAdoption} />
      </Box>
    </Container>
  );
};

export default MyProfilePage;
