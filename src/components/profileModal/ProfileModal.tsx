import React from "react";
import PetModal from "../Shared/PetModal/PetModal";
import PetForm from "../Forms/PetForm";
import PetInput from "../Forms/PetInput";
import { Button } from "@mui/material";
import { useUpdateMyProfileMutation } from "@/redux/api/myProfileApi";
import { FieldValues } from "react-hook-form";

const ProfileModal = ({ open, setOpen }: any) => {
  const [updateMyProfile] = useUpdateMyProfileMutation();
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
    updateMyProfile(values);
  };

  return (
    <PetModal open={open} setOpen={setOpen} title="Full Message">
      <PetForm onSubmit={handleSubmit}>
        <PetInput name="name" label="Name" type="text" fullWidth={true} />
        <PetInput
          sx={{
            marginTop: 2,
          }}
          name="email"
          label="Email"
          type="text"
          fullWidth={true}
        />

        <Button
          sx={{
            marginTop: 2,

          }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </PetForm>
    </PetModal>
  );
};

export default ProfileModal;
