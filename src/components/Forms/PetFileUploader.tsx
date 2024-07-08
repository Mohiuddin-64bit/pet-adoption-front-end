import * as React from "react";
import { styled, SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@mui/material";

type TProps = {
  name: string;
  label?: string;
  sx?: SxProps;
  accept: string;
  multiple: boolean;
  required?: boolean;
  fullWidth?: boolean;
};

export default function PetFileUploader({
  sx,
  name,
  label,
  accept,
  multiple,
  required,
  fullWidth,
  ...rest
}: TProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <Button
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            {label || "Upload File"}
            <Input
              {...field}
              type={name}
              value={value?.fileName}
              style={{ display: "none" }}
              onChange={(e) => {
                onChange((e?.target as HTMLInputElement).files?.[0]);
              }}
            />
          </Button>
        );
      }}
    />
  );
}
