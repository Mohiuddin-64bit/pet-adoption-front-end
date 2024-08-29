import { isLoggedIn, removeUser } from "@/services/auth.services";
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
import { toast } from "sonner";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { logoutUser } from "@/services/actions/logoutUser";
import { useRouter } from "next/navigation";

const AccountMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
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

  const settings = [
    {
      title: "Profile",
      link: "/profile",
    },
    {
      title: "Logout",
      link: "/",
    },
  ];

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <KeyboardArrowDownIcon
            sx={{
              fontSize: "2.5rem",
              padding: "5px",
              background: "#BDBDBD",
              borderRadius: "50%",
            }}
          />
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
              setting.title === "Logout" ? handleLogout : handleCloseUserMenu
            }
          >
            <Typography textAlign="center">{setting.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AccountMenu;
