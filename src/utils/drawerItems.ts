import { USER_ROLE } from "@/contants/roles";
import { DrawerItems, UserRole } from "@/types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Person3Icon from "@mui/icons-material/Person3";
import KeyIcon from "@mui/icons-material/Key";

export const drawerItems = (role: UserRole): DrawerItems[] => {
  const roleMenus: DrawerItems[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: Person3Icon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "User Management",
          path: `${role}/userManagement`,
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
          title: "User Management",
          path: `${role}/userManagement`,
          icon: GroupIcon,
        },
        {
          title: "Adoption Posts",
          path: `${role}/adoptionPost`,
          icon: GroupIcon,
        },
        {
          title: "Contact List",
          path: `${role}/contactList`,
          icon: ContactMailIcon,
        }
      );
      break;
    case USER_ROLE.USER:
      roleMenus.push(
        // {
        //   title: "Dashboard",
        //   path: `${role}`,
        //   icon: DashboardIcon,
        // },
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
        }
      );
      break;

    default:
      break;
  }
  return [...roleMenus, ...defaultMenus];
};
