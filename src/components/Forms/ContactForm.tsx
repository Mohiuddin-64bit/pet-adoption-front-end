"use client";

import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/router";
import { useCreateContactMutation } from "@/redux/api/contactApi";

export type FormValues = {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [createContact] = useCreateContactMutation();

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    try {
      await createContact(values);
      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("Failed to send message");
    }
    // try {
    //   const res = await userLogin(values)
    //   if (res?.data?.accessToken) {
    //     toast.success(res?.message)
    //     storeUserInfo({ accessToken: res?.data?.accessToken })
    //     router.push('/')
    //   }
    // } catch (err: any) {
    //   console.error(err.message)
    // }
  };

  return (
    <Box
      sx={{
        px: 5,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} my={1}>
          <Grid item md={6}>
            <TextField
              label="Your Name"
              type="text"
              variant="outlined"
              size="small"
              fullWidth={true}
              {...register("name")}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              label="Your Email"
              type="email"
              variant="outlined"
              size="small"
              fullWidth={true}
              {...register("email")}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              label="Your Subject"
              type="text"
              variant="outlined"
              size="small"
              fullWidth={true}
              {...register("subject")}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              label="Your Phone Number"
              type="number"
              variant="outlined"
              size="small"
              fullWidth={true}
              {...register("phone")}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              label="Your Message"
              type="text"
              variant="outlined"
              size="medium"
              fullWidth={true}
              {...register("message")}
            />
          </Grid>
        </Grid>
        <Button
          sx={{
            margin: "10px 0px",
          }}
          type="submit"
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
