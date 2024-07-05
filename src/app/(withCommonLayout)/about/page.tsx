import PetsCard from "@/components/UI/PetsCard";
import { Container, Box, Typography, Grid, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import PetsIcon from "@mui/icons-material/Pets";

const cardInfo = [
  {
    title: "Grooming Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/icon1.png",
  },
  {
    title: "Veterinary 24/7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/icon2.png",
  },
  {
    title: "Fun Activities",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/icon3.png",
  },
];

const AboutPage = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: { xs: 200, sm: 250, md: 300 },
          position: "relative",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1441441247730-d09529166668?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            p: 4,
          }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            fontWeight={700}
            color="white"
          >
            About Us
          </Typography>
          <Typography variant="body1" textAlign="center" color="white">
            Dog Training & Breeding Professionals
          </Typography>
        </Box>
      </Box>

      <Container>
        {/* About me */}
        <Box
          sx={{
            mt: 10,
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <Box>
            <Typography variant="h4" mb={3} fontWeight={700}>
              Pet Adoption
            </Typography>
            <Typography variant="body1" color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
        </Box>
        {/* My Adopted Pets */}

        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={4}
          spacing={4}
          mt={12}
          justifyContent="center"
          alignItems="center"
          // flexWrap="wrap"
        >
          {cardInfo.map((info) => (
            <Box
              boxShadow={1}
              borderRadius={2}
              p={2}
              gap={2}
              key={info.title}
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              alignItems="center"
              justifyContent="center"
              textAlign={{ xs: "center", md: "left" }}
              width={{ xs: "100%", sm: "auto" }}
              maxWidth={345}
            >
              <Box
                component="img"
                src={info.icon}
                alt={info.title}
                width={63}
                height={63}
              />
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  mt: { xs: 2, md: 0 },
                }}
              >
                <Typography
                  color="secondary.main"
                  fontWeight={700}
                  fontSize={18}
                >
                  {info.title}
                </Typography>
                <Typography color="gray">{info.description}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        {/* About Us */}
        <Grid mt={12} alignItems="center" container spacing={2}>
          <Grid item xs={12} md={6}>
            <Image
              src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/dog-P228UWM.jpg"
              width={1200}
              height={1200}
              objectFit="cover"
              alt="pet"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="secondary.main" fontWeight={700}>
              <span className=""></span> About us
            </Typography>
            <Typography fontSize={30} fontWeight={700}>
              The Best for Your Pet!
            </Typography>
            <Typography py={5} color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <Typography color="gray">
              Eam ad sale persius, id vis iudicabit cor rumpit. Usu ad modo
              illum assum.
            </Typography>
            <ul className="my-5 flex flex-col gap-3">
              <li className="flex gap-3 items-center">
                <PetsIcon
                  sx={{
                    color: "primary.main",
                    fontSize: "sm",
                  }}
                />
                <Typography color="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </li>
              <li className="flex gap-3 items-center">
                <PetsIcon
                  sx={{
                    color: "primary.main",
                    fontSize: "sm",
                  }}
                />
                <Typography color="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </li>
              <li className="flex gap-3 items-center">
                <PetsIcon
                  sx={{
                    color: "primary.main",
                    fontSize: "sm",
                  }}
                />
                <Typography color="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
