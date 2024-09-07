"use client";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";
import { useGetAllAdoptionRequestsQuery } from "@/redux/api/adoptionApi";
import {
  useGetAllPetQuery,
  useUpdatePetPostMutation,
} from "@/redux/api/petsApi";
import LoadingBar from "@/components/LoadingBar/LoadingBar";

export default function AdoptionPost() {
  const { data, isLoading, error } = useGetAllPetQuery({});
  const [updatePetPost] = useUpdatePetPostMutation();

  const handleAccept = async (id: string) => {
    try {
      const res = await updatePetPost({ id, status: "APPROVED" });
    } catch (error) {}
  };

  const handleReject = async (id: string) => {
    try {
      const res = await updatePetPost({ id, status: "REJECTED" });
    } catch (error) {}
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "details",
      headerName: "Details",
      width: 200,
      renderCell: ({ row }) => {
        return (
          <Button
            size="small"
            sx={{
              width: "100px",
              height: "30px",
              fontSize: "10px",
              color: "white",
              borderRadius: "20px",
            }}
          >
            View Details
          </Button>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
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
            {row.status}
          </Typography>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Button
              onClick={() => handleAccept(row.id)}
              size="small"
              sx={{
                width: "50px",
                height: "30px",
                fontSize: "10px",
                marginRight: "10px",
              }}
              color="secondary"
            >
              Accept
            </Button>
            <Button
              onClick={() => handleReject(row.id)}
              size="small"
              sx={{
                width: "50px",
                height: "30px",
                fontSize: "10px",
              }}
              color="primary"
            >
              Reject
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Typography textAlign="center" variant="h4" mb={3}>
        Adoption Post
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
}
