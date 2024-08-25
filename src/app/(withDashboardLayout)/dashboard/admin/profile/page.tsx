"use client";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/myProfileApi";

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  width: "45%",
  padding: "8px 16px",
  "& p": {
    fontweight: 600,
  },
}));

const ProfilePage = () => {
  const { data, isLoading, isError } = useGetMyProfileQuery({});
  const [updateMyProfile] = useUpdateMyProfileMutation();

  const fileUploadHandler = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));
    updateMyProfile(formData);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} lg={4}>
          <Box
            sx={{
              height: 300,
              width: "100%",
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <Image
              height={300}
              width={300}
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
              alt="avatar"
            />
          </Box>
          <AutoFileUploader
            name="file"
            label="Choose Your Profile Photo"
            icon={<CloudUploadIcon />}
            onFileUpload={fileUploadHandler}
            variant="text"
          />
        </Grid>
        <Grid xs={12} lg={8}>
          <Typography fontWeight={700} variant="h6">
            Basic Information
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            gap={2}
            flexWrap={"wrap"}
          >
            <StyledInformationBox>
              <Typography variant="caption">Role</Typography>
              <Typography>
                {isLoading ? "Loading..." : isError ? "Error" : data?.role}
              </Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography variant="caption">Name</Typography>
              <Typography>
                {isLoading ? "Loading..." : isError ? "Error" : data?.name}
              </Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography variant="caption">Email</Typography>
              <Typography>
                {isLoading ? "Loading..." : isError ? "Error" : data?.email}
              </Typography>
            </StyledInformationBox>
          </Stack>
          {/* <Typography fontWeight={700} mt={5} variant="h6">
            Professional Information
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            gap={2}
            flexWrap={"wrap"}
          >
            <StyledInformationBox>
              <Typography variant="caption">Role</Typography>
              <Typography>Admin</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography variant="caption">Name</Typography>
              <Typography>Job Ibrahim</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography variant="caption">Email</Typography>
              <Typography>admin@gmail.com</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography variant="caption">Role</Typography>
              <Typography>Admin</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography variant="caption">Role</Typography>
              <Typography>Admin</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography variant="caption">Name</Typography>
              <Typography>Job Ibrahim</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography variant="caption">Email</Typography>
              <Typography>admin@gmail.com</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography variant="caption">Role</Typography>
              <Typography>Admin</Typography>
            </StyledInformationBox>
          </Stack> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
