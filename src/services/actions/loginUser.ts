// "use server"
import { FieldValues } from "react-hook-form";

export const userLogin = async (values:FieldValues) => {
  const res = await fetch("https://pet-addoption-backend-main.vercel.app/api/v1/auth/login-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    credentials: "include",
  });
  const data = await res.json();
  return data;
}