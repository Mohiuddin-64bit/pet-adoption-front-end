"use client";

import PetModal from "@/components/Shared/PetModal/PetModal";
import { Button } from "@mui/material";
import React, { useState } from "react";
import AdoptModal from "./AdoptModal";

type TProps = {
  id: string;
};

const AdoptButton = ({ id }: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Button variant="contained" onClick={() => setIsModalOpen(true)}>
        Adopt Me
      </Button>
      <AdoptModal id={id} open={isModalOpen} setOpen={setIsModalOpen} />
    </>
  );
};

export default AdoptButton;
