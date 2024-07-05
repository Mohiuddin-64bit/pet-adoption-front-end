"use server"
import { FormValues } from "@/app/login/page";


export const userLogin = async (values:FormValues) => {
  const res = await fetch("http://localhost:8000/api/v1/auth/login-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}