// "use server"
import { FieldValues } from "react-hook-form";
import setAccessToken from "./setAccessToken";


export const userLogin = async (values: FieldValues) => {
  const res = await fetch("https://pet-addoption-backend-main.vercel.app/api/v1/auth/login-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    // credentials: "include"
  });
  const userInfo = await res.json();
  
  if(userInfo?.success === false) {
    return userInfo;
  }

  if (userInfo?.data.accessToken) {
    setAccessToken(userInfo?.data.accessToken, {
      redirect: "/dashboard",
    });
  }

  return userInfo;
};
