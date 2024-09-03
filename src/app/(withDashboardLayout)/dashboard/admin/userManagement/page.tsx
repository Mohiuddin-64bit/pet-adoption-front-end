"use client";

import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
  useUpdateUserRoleMutation,
} from "@/redux/api/userApi";
import LoadingBar from "@/components/LoadingBar/LoadingBar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { toast } from "sonner";

export const UserRoleCell = ({ row }: any) => {
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

const UserManagement = () => {
  const { data, isLoading, isError } = useGetAllUserQuery({});
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteUser(id);
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "role",
      headerName: "Role",
      width: 200,
      renderCell: ({ row }) => {
        return (
          <Typography
            textAlign="center"
            mt={1}
            sx={{
              fontWeight: "bold",
              backgroundColor: "lightgray",
              padding: "8px",
              width: "100px",
              fontSize: "12px",
              borderRadius: "20px",
            }}
          >
            {row.role}
          </Typography>
        );
      },
    },
    {
      field: "User Role",
      headerName: "Change Role",
      width: 200,
      renderCell: (params) => <UserRoleCell row={params.row} />,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Button
              onClick={() => handleDelete(row.id)}
              size="small"
              sx={{
                width: "50px",
                height: "30px",
                fontSize: "10px",
              }}
              color="primary"
            >
              Remove
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Typography textAlign="center" variant="h4" mb={3}>
        User Management
      </Typography>
      {isLoading && <LoadingBar />}
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Box>
  );
};

export default UserManagement;
