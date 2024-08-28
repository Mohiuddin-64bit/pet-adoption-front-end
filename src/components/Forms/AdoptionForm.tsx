"use client";

import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

export type FormValues = {
  name: string;
  email: string;
  additionalInfo: string;
};

const AdoptionForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    // try {
    //   const res = await userLogin(values);
    //   if (res?.data?.accessToken) {
    //     toast.success(res?.message);
    //     storeUserInfo({ accessToken: res?.data?.accessToken });
    //     router.push("/");
    //   }
    // } catch (err: any) {
    //   console.error(err.message);
    // }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        width: "100%",
        boxShadow: 1,
        backgroundColor: "whitesmoke",
        borderRadius: 1,
        p: 4,
        textAlign: "center",
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Stack>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextField
                label="User Name"
                type="text"
                variant="outlined"
                size="small"
                fullWidth={true}
                {...register("name")}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                size="small"
                fullWidth={true}
                {...register("email")}
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                label="Additional Information"
                type="text"
                variant="outlined"
                size="medium"
                fullWidth={true}
                {...register("additionalInfo")}
              />
            </Grid>
          </Grid>

          <Button
            sx={{
              margin: "10px 0px",
            }}
            fullWidth={true}
            type="submit"
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AdoptionForm;
