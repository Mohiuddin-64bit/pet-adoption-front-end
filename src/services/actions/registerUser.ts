"use server";

export const registerUser = async (formData: FormData) => {
  const res = await fetch("https://pet-addoption-backend-main.vercel.app/api/v1/user/create-user", {
    method: "POST",
    body: formData,
    cache: "no-cache",
  });
  const userInfo = await res.json();
  return userInfo;
};
