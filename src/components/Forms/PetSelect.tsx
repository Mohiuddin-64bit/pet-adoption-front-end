import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  menu?: { value: string; label: string }[];
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
};

const PetSelect = ({
  name,
  label,
  menu = [],
  size = "small",
  fullWidth,
  sx,
  required,
}: TInputProps) => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{name}</InputLabel>
          <Select
            {...field}
            sx={{ ...sx }}
            required={required}
            error={!!error?.message}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            size={size}
            label="Age"
            onChange={handleChange}
          >
            {menu.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    ></Controller>
  );
};

export default PetSelect;
