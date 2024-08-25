"use server";

export const registerUser = async (formData: FormData) => {
  const res = await fetch("http://127.0.0.1:8000/api/v1/user/create-user", {
    method: "POST",
    body: formData,
    cache: "no-cache",
  });
  const userInfo = await res.json();
  return userInfo;
};
