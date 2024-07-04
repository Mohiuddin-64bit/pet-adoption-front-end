import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import PetsIcon from "@mui/icons-material/Pets";
import React from "react";

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

const AboutUs = () => {
  return (
    <Container
      sx={{
        marginTop: 12,
        marginBottom: 12,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={4}
        spacing={4}
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
              <Typography color="secondary.main" fontWeight={700} fontSize={18}>
                {info.title}
              </Typography>
              <Typography color="gray">{info.description}</Typography>
            </Box>
          </Box>
        ))}
      </Stack>

      {/* About Us */}
      <Grid mt={12} alignItems="center" container spacing={2}>
        <Grid item xs={12} md={6} >
          <Image
            src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/dog-P228UWM.jpg"
            width={1200}
            height={1200}
            objectFit="cover"
            alt="pet"
          />
        </Grid>
        <Grid item xs={12} md={6} >
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
            Eam ad sale persius, id vis iudicabit cor rumpit. Usu ad modo illum
            assum.
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
  );
};

export default AboutUs;
