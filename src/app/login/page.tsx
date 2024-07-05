"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
// import assets from "@/assets";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
// import { userLogin } from "@/services/actions/userLogin";
// import { storeUserInfo } from "@/services/auth.services";
import { toast } from "sonner";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    console.log(values);
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
        backgroundImage:
          "url(https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
          >
            <Box>
              {/* <Image src={assets.svgs.logo} width={50} height={50} alt="logo" /> */}
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login
              </Typography>
            </Box>
          </Stack>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} my={1}>
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
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("password")}
                  />
                </Grid>
              </Grid>

              <Typography mb={1} textAlign="end" component="p" fontWeight={300}>
                Forgot Password?
              </Typography>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Link href="/register">Create an account</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default LoginPage;
