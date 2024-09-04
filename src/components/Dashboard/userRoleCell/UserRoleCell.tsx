import { useUpdateUserRoleMutation } from "@/redux/api/userApi";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { toast } from "sonner";

const UserRoleCell = ({ row }: any) => {
  const [role, setRole] = useState(row.role);
  const [updateUserRole] = useUpdateUserRoleMutation();

  const handleChange = (event: SelectChangeEvent) => {
    const newRole = event.target.value as string;
    setRole(newRole);
    try {
      updateUserRole({ userId: row.id, role: newRole });
      toast.success("User role updated successfully");
    } catch (error) {
      toast.error("Failed to update user role");
    }
  };

  const roleItems = [{ role: "BLOCKED" }, { role: "ADMIN" }, { role: "USER" }];

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Role</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={role}
        label="Role"
        onChange={handleChange}
      >
        {roleItems.map((item, index) => (
          <MenuItem key={index} value={item.role}>
            {item.role}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UserRoleCell;