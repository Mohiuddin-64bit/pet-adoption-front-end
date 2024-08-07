import PetForm from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import PetModal from "@/components/Shared/PetModal/PetModal";
import { Button } from "@mui/material";

import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const AdoptModal = ({ open, setOpen, id }: TProps) => {
  const handleFormSubmit = (values: FieldValues) => {};

  return (
    <PetModal open={open} setOpen={setOpen} title="Adoption Modal">
      <PetForm onSubmit={handleFormSubmit}>
        <PetInput name="petOwnershipExperience" label="Owner Experience" fullWidth />
        <Button sx={{
          mt: 2,
          width: "100%",
        }} type="submit" variant="contained">
          Submit
        </Button>
      </PetForm>
    </PetModal>
  );
};

export default AdoptModal;
