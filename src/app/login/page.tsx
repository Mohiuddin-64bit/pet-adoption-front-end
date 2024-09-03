"use client";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { userLogin } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.services";
import PetInput from "@/components/Forms/PetInput";
import PetForm from "@/components/Forms/PetForm";
import { useState } from "react";

// export const validationSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .regex(
//       /(?=.*[A-Z])/,
//       "Password must contain at least one uppercase letter"
//     ),
// });

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values: FieldValues) => {
    try {
      setLoading(true);
      const res = await userLogin(values);
      if (res?.success === false) {
        toast.error(res?.message);
      }
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
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
              <Typography variant="h6" fontWeight={600}>
                Login
              </Typography>
            </Box>
          </Stack>
          <Box>
            <PetForm
              onSubmit={handleLogin}
              // resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <PetInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PetInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Typography mb={1} textAlign="end" component="p">
                <Link
                  href={`/forgot-password`}
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                >
                  Forgot Password?
                </Link>
              </Typography>
              <Button
                sx={{ margin: "10px 0px" }}
                fullWidth
                disabled={loading}
                type="submit"
              >
                {loading ? "Loading..." : "Login"}
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Link className="text-blue-500" href="/register">
                  Create an account
                </Link>
              </Typography>
            </PetForm>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default LoginPage;
