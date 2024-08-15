"use client";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";
import { useUpdatePetPostMutation } from "@/redux/api/petsApi";
import { useGetContactsQuery } from "@/redux/api/contactApi";

export default function ContactList() {
  const { data, isLoading, error } = useGetContactsQuery({});

  const [updatePetPost] = useUpdatePetPostMutation();

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 200,
    },
    {
      field: "message",
      headerName: "Message",
      width: 300,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Button
              size="small"
              sx={{
                width: "100px",
                height: "30px",
                fontSize: "10px",
                borderRadius: "20px",
              }}
            >
              View Message
            </Button>
          </Box>
        );
      },
    },
  ];

  if (isLoading) return <Box>Loading...</Box>;
  return (
    <Box>
      <Typography textAlign="center" variant="h4" mb={3}>
        Contact List
      </Typography>
      <DataGrid
        rows={data?.data}
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
}
