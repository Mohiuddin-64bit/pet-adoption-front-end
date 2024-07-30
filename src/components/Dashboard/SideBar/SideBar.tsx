

import {
  Box,
  List,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/services/auth.services";

const SideBar = () => {
  const [userRole, setUserRole] = useState(""); 
  const id = getUserInfo()
  useEffect(() => {
    setUserRole(getUserInfo().role) as any;
  }, []);
  

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        component={Link}
        href="/"
        gap={2}
        sx={{ py: 1, cursor: "pointer" }}
      >
        <Image src="/pet-logo.png" alt="logo" width={50} height={50} />
        <Typography variant="h6" component="h1">
          Pet Adoption
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
