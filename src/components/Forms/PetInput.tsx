import { SxProps, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
};

const PetInput = ({ name, label, type, size = "small", fullWidth, sx, required }: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{...sx}}
          placeholder={label}
          label={name}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          required={required}
        />
      )}
    ></Controller>
  );
};

export default PetInput;
