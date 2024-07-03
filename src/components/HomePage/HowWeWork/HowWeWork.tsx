import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const HowWeWork = () => {
  return (
    <Container sx={{ marginTop: 12 }}>
      <Box textAlign="center">
        <Typography color="secondary.main" fontSize={20}>
          How We Work
        </Typography>
        <Typography fontSize={45} fontWeight={700}>
          Pet Adoption Process
        </Typography>
      </Box>
      <Grid container spacing={4} mt={5}>
        <Grid item xs={12} md={4}>
          <Box textAlign="center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                py: 2,
                height: "200px",
                width: "200px",
                margin: " auto",
                borderRadius: "50%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src="https://tailwag.progressionstudios.com/wp-content/uploads/elementor/thumbs/handsome-guy-playing-with-dog-outdoors-7V8NKPZ-1-ot598ayjrm1idxrh8ljdvm6kp37hfz6beyr3lskmxs-pn2wza5z72gq7a3ptxs4hm6idg0wu8v6jooyna6dr4.jpg"
                alt="step1"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
            <Typography
              sx={{
                margin: "20px 0",
              }}
              fontWeight={700}
              fontSize={22}
            >
              Find your pet
            </Typography>
            <Typography color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box textAlign="center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                py: 2,
                height: "200px",
                width: "200px",
                margin: " auto",
                borderRadius: "50%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src="https://tailwag.progressionstudios.com/wp-content/uploads/elementor/thumbs/handsome-guy-playing-with-dog-outdoors-K6EMULQ-1-ot5g3foymicgv4sh5x77xr4f934m759qe5huxs5d0g-pn2wzc1nkqjaui0ziyldmlpfk7rn9n2n7xzxlu3leo.jpg"
                alt="step1"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
            <Typography
              sx={{
                margin: "20px 0",
              }}
              fontWeight={700}
              fontSize={22}
            >
              Know your pet
            </Typography>
            <Typography color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box textAlign="center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                py: 2,
                height: "200px",
                width: "200px",
                margin: " auto",
                borderRadius: "50%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src="https://tailwag.progressionstudios.com/wp-content/uploads/elementor/thumbs/joyful-man-sitting-on-grass-with-dogs-546DYTN-1-ot5g5safplk9w1dlfxrn65rwprjnfwlkps7k4onxgg-pn2wzdxbyelvhpy97zemrl8cqzidp1a3w7awke0t28.jpg"
                alt="step1"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
            <Typography
              sx={{
                margin: "20px 0",
              }}
              fontWeight={700}
              fontSize={22}
            >
              Take your pet home
            </Typography>
            <Typography color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <hr className="my-12"/>
      <Grid spacing={5} container>
        <Grid item xs={6} md={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Image
              src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/icon-1.png"
              alt="icon1"
              width={86}
              height={86}
            />
            <Typography fontWeight={700} color="primary.main" fontSize={44}>
              1,765
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "lightgray",
              marginTop: 2,
              width: "100%",
              borderRadius: "20px",
            }}
          >
            <Typography textAlign="center">Happy Dogs</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Image
              src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/icon-2.png"
              alt="icon1"
              width={86}
              height={86}
            />
            <Typography fontWeight={700} color="primary.main" fontSize={44}>
              387
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "lightgray",
              marginTop: 2,
              width: "100%",
              borderRadius: "20px",
            }}
          >
            <Typography textAlign="center">Happy Dogs</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Image
              src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/icon-3.png"
              alt="icon1"
              width={86}
              height={86}
            />
            <Typography fontWeight={700} color="primary.main" fontSize={44}>
              567
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "lightgray",
              marginTop: 2,
              width: "100%",
              borderRadius: "20px",
            }}
          >
            <Typography textAlign="center">Happy Dogs</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Image
              src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/icon-4.png"
              alt="icon1"
              width={86}
              height={86}
            />
            <Typography fontWeight={700} color="primary.main" fontSize={44}>
              1,670
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "lightgray",
              marginTop: 2,
              width: "100%",
              borderRadius: "20px",
            }}
          >
            <Typography textAlign="center">Happy Dogs</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HowWeWork;
