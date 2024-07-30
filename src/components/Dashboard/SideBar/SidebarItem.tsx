import { DrawerItems } from "@/types";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type IProps = {
  item: DrawerItems;
};

const SidebarItem = ({ item }: IProps) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathName = usePathname();

  return (
    <Link href={linkPath}>
      <List>
        <ListItem
          disablePadding
          sx={{
          ...(pathName === linkPath ? {
            borderRight: "4px solid #3f51b5",
            backgroundColor: "#f4f7fe",
            "& svg": {
              color: "#3f51b5",
            }
          } : {}),
          }}
        >
          <ListItemButton>
            <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      </List>
    </Link>
  );
};

export default SidebarItem;
