import ContactForm from "@/components/Forms/ContactForm";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
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
            fontSize={{ xs: 30, sm: 40, md: 50 }}
            textAlign="center"
            fontWeight={700}
            color="white"
          >
            Contact Us
          </Typography>
          <Typography
            fontSize={{ xs: 12, sm: 18, md: 20 }}
            textAlign="center"
            color="white"
          >
            Dog Training & Breeding Professionals
          </Typography>
        </Box>
      </Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} my={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography
                variant="h4"
                fontWeight={700}
                fontSize={20}
                gutterBottom
              >
                Send us a Message
                <Divider />
              </Typography>
              <Typography variant="body1" color="gray" py={3}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Image
                  src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/footer-icon-3.png"
                  alt="icon1"
                  width={46}
                  height={46}
                />
                <Box>
                  <Typography fontSize={12} mb={0} gutterBottom>
                    Call us for any queries
                  </Typography>
                  <Typography variant="h6" mt={0} fontWeight={700} gutterBottom>
                    123-456-7890
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Image
                  src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/footer-icon-3.png"
                  alt="icon1"
                  width={46}
                  height={46}
                />
                <Box>
                  <Typography fontSize={12} mb={0} gutterBottom>
                    Write Email
                  </Typography>
                  <Typography variant="h6" mt={0} fontWeight={700} gutterBottom>
                    help@yourcompany.com
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Image
                  src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/footer-icon-3.png"
                  alt="icon1"
                  width={46}
                  height={46}
                />
                <Box>
                  <Typography fontSize={12} mb={0} gutterBottom>
                    Visit Office
                  </Typography>
                  <Typography variant="h6" mt={0} fontWeight={700} gutterBottom>
                    214 Golden Street Round Road New York, USA
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 2,
                backgroundImage:
                  "url(https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/dog-bone-bg.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Contact Form
              </Typography>
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          mt: 2,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14608.202842455468!2d90.4666232!3d23.745571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7cf6cfeb315%3A0x34206751f953a2a8!2zR2FuZyBTaGFsaWsgKOCml-CmvuCmgiDgprbgpr7gprLgpr_gppUp!5e0!3m2!1sen!2sbd!4v1718304132438!5m2!1sen!2sbd"
          width="100%"
          height="600"
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};

export default ContactPage;
