import { USER_ROLE } from "@/contants/roles";
import { DrawerItems, UserRole } from "@/types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";

export const drawerItems = (role: UserRole): DrawerItems[] => {
  const roleMenus: DrawerItems[] = [];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Adoption Requests",
          path: `${role}/adoptionRequest`,
          icon: GroupIcon,
        },
        {
          title: "Adoption Posts",
          path: `${role}/adoptionPost`,
          icon: GroupIcon,
        }
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Adoption Requests",
          path: `${role}/adoptionRequest`,
          icon: GroupIcon,
        },
        {
          title: "Adoption Posts",
          path: `${role}/adoptionPost`,
          icon: GroupIcon,
        }
      );
      break;
    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "New Adoption Post",
          path: `${role}/newAdoptionPost`,
          icon: GroupIcon,
        },
        {
          title: "My Adoption",
          path: `${role}/myAdoption`,
          icon: GroupIcon,
        },
        {
          title: "My Posts",
          path: `${role}/myPosts`,
          icon: GroupIcon,
        },
      );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
