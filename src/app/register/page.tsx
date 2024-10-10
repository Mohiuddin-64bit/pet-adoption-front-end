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
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerUser } from "@/services/actions/registerUser";
import { userLogin } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.services";
import PetForm from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Facebook } from "@mui/icons-material";

// export const validationSchema = z.object({
//   name: z.string().min(3, "Name must be at least 3 characters"),
//   email: z.string().email("Invalid email address"),
//   password: z
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .regex(
//       /(?=.*[A-Z])/,
//       "Password must contain at least one uppercase letter"
//     ),
// });

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await registerUser(data);

      if (res?.success === true) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values.password,
          email: values.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          // router.push("/dashboard");
        }
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1579510592535-71db9a6031de?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
            backgroundColor: "whitesmoke",
            boxShadow: 1,
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
                Register
              </Typography>
            </Box>
          </Stack>

          <Box>
            <PetForm
              onSubmit={handleRegister}
              // resolver={zodResolver(validationSchema)}
              defaultValues={{
                name: "",
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <PetInput
                    name="name"
                    label="Name"
                    type="name"
                    fullWidth={true}
                  />{" "}
                </Grid>
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
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Button
                  sx={{ margin: "10px 0px" }}
                  variant="outlined"
                  fullWidth
                  type="submit"
                >
                  Google
                </Button>
                <Button
                  sx={{ margin: "10px 0px" }}
                  fullWidth
                  variant="outlined"
                  type="submit"
                >
                  <Facebook />
                  Facebook
                </Button>
              </Box>
              <Typography component="p" fontWeight={300}>
                Do you already have an account?{" "}
                <Link href="/login" className="text-blue-500">
                  Login
                </Link>
              </Typography>
            </PetForm>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default RegisterPage;
