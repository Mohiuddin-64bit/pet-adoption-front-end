import { authKey } from "@/contants/authKey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  console.log(authToken);
  if (authToken) {
    const deCodedData: any = decodedToken(authToken);
    return {
      ...deCodedData,
      role: deCodedData?.role.toLowerCase(),
    };
  }
  return authToken;
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

export const logout = () => {
  return removeFromLocalStorage(authKey);
};