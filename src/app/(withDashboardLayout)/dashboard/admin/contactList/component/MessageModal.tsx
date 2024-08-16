import PetModal from "@/components/Shared/PetModal/PetModal";
import { Typography } from "@mui/material";
import React from "react";


type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  row: {
    id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    subject: string;
  };
};

const MessageModal = ({ open, setOpen, row, }: TProps) => {
  

  return (
    <PetModal open={open} setOpen={setOpen} title="Full Message">
      <Typography variant="h5" mb={2}>
        {row?.subject}
      </Typography>
      <Typography variant="body1" mb={2}>
        {row?.message}
      </Typography>
    </PetModal>
  );
};

export default MessageModal;
