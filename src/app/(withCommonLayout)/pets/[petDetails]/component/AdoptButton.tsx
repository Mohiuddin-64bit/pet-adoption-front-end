"use client";

import { Button } from "@mui/material";
import React, { useState } from "react";
import AdoptModal from "./AdoptModal";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";


type TProps = {
  id: string;
};

const AdoptButton = ({ id }: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  const router = useRouter();

  const handleButtonClick = () => {
    if (!isLoggedIn()) {
      router.push("/login");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Button variant="contained" onClick={handleButtonClick}>
        Adopt Me
      </Button>
      <AdoptModal id={id} open={isModalOpen} setOpen={setIsModalOpen} />
    </>
  );
};

export default AdoptButton;
