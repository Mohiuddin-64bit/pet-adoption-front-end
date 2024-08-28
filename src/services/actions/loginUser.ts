// "use server"
import { FieldValues } from "react-hook-form";
import setAccessToken from "./setAccessToken";


export const userLogin = async (values: FieldValues) => {
  const res = await fetch("http://127.0.0.1:8000/api/v1/auth/login-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    // credentials: "include"
  });
  const userInfo = await res.json();

  if (userInfo?.data.accessToken) {
    setAccessToken(userInfo?.data.accessToken, {
      redirect: "/dashboard",
    });
  }

  return userInfo;
};
