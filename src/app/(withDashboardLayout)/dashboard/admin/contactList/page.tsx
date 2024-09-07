"use client";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";
import { useUpdatePetPostMutation } from "@/redux/api/petsApi";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "@/redux/api/contactApi";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MessageModal from "./component/MessageModal";
import { toast } from "sonner";
import LoadingBar from "@/components/LoadingBar/LoadingBar";

export default function ContactList() {
  const { data, isLoading, error } = useGetContactsQuery({});
  const [deleteContact] = useDeleteContactMutation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [row, setRow] = useState<any>(null);

  const handleOpenModal = (row: any) => {
    setIsModalOpen(true);
    setRow(row);
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteContact(id);
      toast.success("Contact deleted successfully");
    } catch (error) {
      toast.error("Failed to delete contact");
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
      field: "phone",
      headerName: "Phone",
      width: 200,
    },
    {
      field: "message",
      headerName: "Message",
      width: 200,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Button
              onClick={() => handleOpenModal(row)}
              size="small"
              color="secondary"
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
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
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
                borderRadius: "20px",
              }}
            >
              <DeleteForeverIcon />
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Typography textAlign="center" variant="h4" mb={3}>
        Contact List
      </Typography>
      {isLoading && <LoadingBar />}
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
      <MessageModal row={row} open={isModalOpen} setOpen={setIsModalOpen} />
    </Box>
  );
}
