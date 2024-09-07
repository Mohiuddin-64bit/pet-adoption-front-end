"use client";

import { getUserInfo, isLoggedIn, removeUser } from "@/services/auth.services";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { toast } from "sonner"; 
import { logoutUser } from "@/services/actions/logoutUser";
import { useRouter } from "next/navigation";


const AuthMenus = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const {role} = getUserInfo() || {};

  console.log(role)


  const settings = [
    {
      title: "Profile",
      link: "/profile",
    },
    {
      title: "Dashboard",
      link: `/dashboard/${role}`,
    },
    {
      title: "Logout",
      link: "/",
    },
  ];



  const router = useRouter();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    if (isLoggedIn()) {
      logoutUser(router);
      toast.success("User Logged out successfully");
    }
    setAnchorElUser(null);
    handleCloseUserMenu();
  };
  return (
    <>
      {isLoggedIn() ? (
        <>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/broken-image.jpg" />{" "}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.title}
                  component={Link}
                  href={setting.link}
                  onClick={
                    setting.title === "Logout"
                      ? handleLogout
                      : handleCloseUserMenu
                  }
                >
                  <Typography textAlign="center">{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </>
      ) : (
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 1,
            color: "primary.main",
          }}
        >
          <Box>
            <PersonIcon
              sx={{
                fontSize: 35,
                color: "secondary.main",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                ":hover": {
                  color: "primary.main",
                  cursor: "pointer",
                },
              }}
              component={Link}
              href="/login"
              color="gray"
              fontSize={13}
            >
              Login
            </Typography>
            <Typography
              sx={{
                ":hover": {
                  color: "primary.main",
                  cursor: "pointer",
                },
              }}
              component={Link}
              href="/register"
              color="gray"
              fontSize={13}
            >
              Register
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default AuthMenus;
