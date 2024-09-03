import { USER_ROLE } from "@/contants/roles";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type ResponseSuccessType = {
  data: any;
  meta: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  errorMessages: string;
};

export type TPet = {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  location: string;
  temperament: string;
  medicalHistory: string;
  status: string;
  adoptionRequirements: string;
  description: string;
  petPhoto: string[];
};

export type UserRole = keyof typeof USER_ROLE;

export interface DrawerItems {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItems[];
}
